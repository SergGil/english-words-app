// English Words App — js/app.ts
import type { WordEntry, SRSData, GameData, ModeStats, Achievement, Level } from '../src/types.js';
import { _lzLoad, _lzSave, saveKnown, saveSRS, saveKnownEs, loadKnownEs } from './core/storage.ts';
import { W }                                       from '../data/words.js';
import { W_ES }                                    from '../data/words_es.js';
import { SVG, getIllus }                           from '../data/illustrations.js';
import { WORD_CATEGORIES, getCategoriesForWord }    from '../data/categories.js';
import { loadWikiImage, _imgCache, _idb,
         _saveImgCache, _getPixabayKey,
         resetImgCache }                           from './core/images.ts';
import { state }                                   from '../src/state.ts';
import { shuffle, _shuf, addDays, sm2Update,
         buildSRSDeck, buildUnlearnedDeck,
         updateSrsUI, synth, hasSpeech }           from './core/srs.ts';
import { addCombo, breakCombo, flashCard, getComboMult } from './features/combo.ts';
import {
  getGameData, saveGameData, getDailyStats, saveDailyStats, recordDailyWord,
  getModeStats, saveModeStats, updateStreak,
  LEVELS, getLevel, getNextLevel, recordModeComplete, recordCustomWordAdded, _idle,
  getHardWords,
} from './features/game.ts';
import { isBookmarked, getBookmarks, toggleBookmark }    from './features/bookmarks.ts';
import { getNoteForWord, hasNote, openNoteModal }        from './features/notes.ts';
import { isPronuncSupported, showPronuncResult,
         startPronunciationCheck, stopPronunciationCheck } from './features/pronunciation.ts';
import { getSelectedUkVoice, getSelectedEsVoice }        from './features/voice.ts';
import { decodeIpa }                                    from './core/ui-helpers.ts';
import { getCefrLevel }                                 from '../data/cefr.ts';
import { ACHIEVEMENTS }                                 from '../data/achievements.ts';
import { t, getLang, levelName, wordsLabel, categoryName } from './features/i18n.ts';
import { renderGameBar, renderLevelBadge, renderLevelProgress, renderLevelsRoadmap } from './features/render-game-bar.ts';
import { checkAchievements, renderAchievements, showToast } from './features/render-achievements.ts';
import { renderStats, openStats, closeStats, renderSRSForecast } from './features/stats.ts';
import { renderLeaderboard, maybeSubmitScore }         from './features/leaderboard.ts';
import { playSound }                                    from './core/audio.ts';
import { launchConfetti }                               from './core/confetti.ts';
import { updateRing }                                   from './features/ring.ts';
import { invalidateSimilarCache, updateSimilarWords } from './features/similar-words.ts';
import { openWordDetail }                               from './features/word-detail.ts';
import { updateCollocations, updateWordFamilies }       from './features/word-context.ts';
import './features/image-prefetch.ts';
import { ES_MODES, getMode, esEntry as _esEntry }      from './features/mode-utils.ts';
import './features/progress-io.ts';
import './core/swipe.ts';
import './core/pwa.ts';

// Runs fn and warns on error instead of silently swallowing it
function _safe(fn: () => void): void {
  try { fn(); } catch (e) { console.warn('[safe]', (e as Error).message ?? e); }
}

// Завантажуємо збережені слова з localStorage
const savedKnown = _lzLoad('ew_known', []);

let srsData: Record<string, any> = _lzLoad('ew_srs', {});
// Міграція: старий формат (числа) → видаляємо
Object.keys(srsData).forEach(function(k: string){ if(typeof srsData[k]==='number') delete srsData[k]; });

let deck: WordEntry[] = W.slice() as unknown as WordEntry[];
let idx = 0, known = new Set<string>(savedKnown as string[]), flipped = false;
let knownEs = loadKnownEs();
function _activeKnown(): Set<string> { return ES_MODES.has(getMode()) ? knownEs : known; }
let cw: WordEntry | null = null, autoTimer: ReturnType<typeof setTimeout> | null = null;

// ── Sync reference-type locals into state (mutations propagate both ways) ──
state.known   = known;    // Set — mutations propagate
state.srsData = srsData;  // Object — mutations propagate

let _baseWords = W.slice();
let _activeTagSet = null; // тег-фільтр: null = вимкнений, Set = активний

// ── Single-source helpers — replace triple-sync boilerplate ────────────────
// Call _setDeck / _setIdx / _setCw instead of writing to all 3 stores manually.
function _setDeck(d: WordEntry[]): void {
  deck = d;
  state.deck = d as unknown as WordEntry[];
  window.deck = d;
}
function _setIdx(i: number): void {
  idx = i;
  state.idx = i;
}
function _setCw(w: WordEntry | null): void {
  cw = w;
  state.cw = w;
}

// ── window live-getters for deck / idx / flipped (always reflect module vars) ──
window.W = W;  // static — never reassigned
window.known   = known;   // Set mutations propagate without reassignment
window.srsData = srsData; // Object mutations propagate without reassignment
Object.defineProperty(window, 'deck',    { configurable: true, get: () => deck,    set: (v) => _setDeck(v) });
Object.defineProperty(window, 'idx',     { configurable: true, get: () => idx,     set: (v) => _setIdx(v) });
Object.defineProperty(window, 'flipped', { configurable: true, get: () => flipped, set: (v) => { flipped = v; state.flipped = v; } });
Object.defineProperty(window, 'cw',      { configurable: true, get: () => cw });
// window.TODAY is set further below when TODAY is defined

// buildStaleDeck: слова що не переглядались довше N днів
function buildStaleDeck(days: number): WordEntry[] {
  let cutoff = (function(){ var d=new Date(); d.setDate(d.getDate()-days); return d.toISOString().slice(0,10); })();
  let result = W.filter(function(w) {
    let d = srsData[w[0]];
    if (!d || !d.due) return true;
    let lastDate = (function(){ var dt=new Date(d.due); dt.setDate(dt.getDate()-(d.interval||1)); return dt.toISOString().slice(0,10); })();
    return lastDate <= cutoff;
  });
  shuffle(result);
  return (result.length ? result : _shuf(W as unknown as WordEntry[]).slice(0, 50)) as WordEntry[];
}

// Helper: get cached element with null safety
function $e(id: string): HTMLElement { return $el[id] as HTMLElement; }

// Кеш DOM-елементів: уникаємо getElementById на кожен render()
let $el: Record<string, HTMLElement | null> = {};
['wnum','wlang','wword','wtrans','wtransl','exen','exua','cidx','cknown',
 'pbar','illus','card','srs-next','streak-num','goal-cur','goal-max','goal-fill',
 'goal-done','ring-fill','ring-center','level-badge','cb-similar',
 'cb-families','cb-collocations'].forEach(function(id: string) {
  $el[id] = document.getElementById(id);
});

// O(1) індекс: word → позиція у W (замість W.findIndex на кожній картці)
let _wordIdx = new Map();
W.forEach(function(w, i) { _wordIdx.set(w[0], i); });

// Категорії слів для Category Matching
// ── Власні слова: завантажуємо і додаємо в W ──
let _customWords: Array<{en:string;ua:string;ex_en?:string;ex_ua?:string}> = [];
try { _customWords = JSON.parse(localStorage.getItem('ew_custom') || '[]'); } catch(e){ console.warn('[custom] Load failed:', (e as Error).message); }
_customWords.forEach(function(c) {
  if (c.en && c.ua && !_wordIdx.has(c.en)) {
    W.push([c.en, c.ua, c.ex_en || c.en + '.', c.ex_ua || c.ua + '.', '']);
    _wordIdx.set(c.en, W.length - 1);
  }
});

// ── Кеш зображень {word: url | null} ──
// ── IndexedDB для image cache (необмежений розмір) + localStorage fallback ──
function getVoice() {
  let v = synth.getVoices();
  return v.find(function(x){return x.lang.startsWith('en-US')&&x.name.includes('Google');})||
         v.find(function(x){return x.lang.startsWith('en-US');})||
         v.find(function(x){return x.lang.startsWith('en');})||null;
}
function speak(text: string, btn: HTMLElement | null): void {
  const _speakFakeYou = (window as Window & { speakFakeYou?: (t: string, b: HTMLElement | null) => boolean }).speakFakeYou;
  if (_speakFakeYou?.(text, btn)) return;
  _speakWeb(text, btn);
}

// Web Speech — викликається напряму або як fallback з ElevenLabs
function _speakWeb(text: string, btn: HTMLElement | null): void {
  _speakWithLang(text, 'en-US', btn);
}
window.speakWebFallback = _speakWeb;

function _speakWithLang(text: string, lang: string, btn: HTMLElement | null): void {
  if (!hasSpeech) return;
  synth.cancel();
  let clean = text.replace(/<[^>]+>/g,'').replace(/\s*\([^)]*\)/g,'').trim();
  if (!clean) return;
  let u = new SpeechSynthesisUtterance(clean);
  u.lang  = lang || 'en-US';
  u.rate  = 0.88;
  u.pitch = 1;
  let voices = synth.getVoices();
  let langLow = u.lang.toLowerCase();
  let match = null;

  if (langLow.startsWith('uk')) {
    match = getSelectedUkVoice();
    if (!match) match = voices.find(function(v){ return v.lang && v.lang.toLowerCase().startsWith('uk'); });
  } else if (langLow.startsWith('es')) {
    match = getSelectedEsVoice();
    if (!match) match = voices.find(function(v){ return v.lang && v.lang.toLowerCase().startsWith('es'); });
  } else if (langLow.startsWith('en')) {
    match = getVoice();
    if (!match) match = voices.find(function(v){ return v.lang && v.lang.toLowerCase().startsWith('en'); });
  } else {
    match = voices.find(function(v){ return v.lang && v.lang.toLowerCase() === langLow; })
         || voices.find(function(v){ return v.lang && v.lang.toLowerCase().startsWith(langLow.slice(0,2)); });
  }
  if (match) u.voice = match;
  if (btn) {
    btn.classList.add('on');
    u.onend   = function(){ btn.classList.remove('on'); };
    u.onerror = function(){ btn.classList.remove('on'); };
  }
  synth.speak(u);
}

function stopAuto(): void {
  if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
  const btnAuto = document.getElementById('btn-auto');
  if (btnAuto) btnAuto.textContent = t('cards.auto');
}

// ── Card animation ────────────────────────────────────────────
function _animCard(dir: 'next' | 'prev' | 'fade'): void {
  const face = document.querySelector<HTMLElement>('.card-face');
  if (!face || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cls = dir === 'next' ? 'anim-next' : dir === 'prev' ? 'anim-prev' : 'anim-fade';
  face.classList.remove('anim-next', 'anim-prev', 'anim-fade');
  void face.offsetWidth; // force reflow
  face.classList.add(cls);
  setTimeout(() => face.classList.remove(cls), 250);
}

function render() {
  try {
    if (!deck || !deck.length) { console.error('render: deck empty'); return; }
    if (synth) { _safe(() => synth.cancel()); }
    _setCw(deck[idx % deck.length]);
    if (!cw) { console.error('render: cw is null'); return; }
    flipped = false;
    let mode = getMode();
    // ── ES pair modes: look up the Spanish layer by the English headword ──
    let esEntry = ES_MODES.has(mode) ? _esEntry(cw[0]) : null;
    let _esWord = esEntry ? esEntry[0] : '';
    let _esEx   = esEntry ? esEntry[1] : '';
    let FRONT_LANG: 'EN' | 'UA' | 'ES';
    let frontWord: string, backWord: string;
    switch (mode) {
      case 'ua':    FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = cw[0];   break;
      case 'en-es': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _esWord; break;
      case 'es-en': FRONT_LANG = 'ES'; frontWord = _esWord; backWord = cw[0];   break;
      case 'es-ua': FRONT_LANG = 'ES'; frontWord = _esWord; backWord = cw[1];   break;
      case 'ua-es': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _esWord; break;
      default:      FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = cw[1];
    }
    let _realIdx = _wordIdx.has(cw[0]) ? _wordIdx.get(cw[0]) : -1;
    $e('wnum').textContent = '#' + (_realIdx >= 0 ? _realIdx + 1 : idx % deck.length + 1);
    $e('wlang').textContent = FRONT_LANG;
    $e('wword').textContent = frontWord;
    // ── CEFR badge ────────────────────────────────────────────
    let cefrEl = document.getElementById('wcefr') as HTMLElement | null;
    if (cefrEl) {
      const level = getCefrLevel(cw[0]);
      cefrEl.textContent = level;
      cefrEl.className = 'cefr-badge cefr-' + level;
      cefrEl.style.display = '';
    }
    // ── Category badge ────────────────────────────────────────
    let catEl = document.getElementById('wcategory') as HTMLElement | null;
    if (catEl) {
      const cats = getCategoriesForWord(cw[0]);
      catEl.textContent = cats[0] ? categoryName(cats[0]) : '';
      catEl.title = cats.map(categoryName).join(', ');
      catEl.style.display = cats[0] ? '' : 'none';
    }
    let tr = $e('wtrans');
    // [en, ua, en_example, ua_example, ipa]
    let _enEx  = cw[2] || '';
    let _uaEx  = cw[3] || '';
    let trans = decodeIpa(cw[4] || '');
    tr.textContent = (FRONT_LANG === 'EN') ? trans : '';
    tr.style.display = (FRONT_LANG === 'EN' && trans) ? 'block' : 'none';
    let t = $e('wtransl');
    t.textContent = backWord;
    t.className = 'transl';
    // Приклад: EN→UA показуємо English (підсвічене слово), UA→EN — Ukrainian (не розкриває відповідь)
    function _boldEn(src: string): string {
      if (!src) return '';
      if (src.indexOf('<b>') !== -1) return src;
      let _bw = cw![0].replace(/\s*\([^)]*\)/g,'').trim();
      let _bp = _bw.split(/\s+/).filter(Boolean).map(function(p){ return p.replace(/[.*+?^${}()|\[\]\\]/g,'\\$&')+'\\w*'; });
      return src.replace(new RegExp('('+_bp.join('\\s+')+')', 'i'), '<b>$1</b>');
    }
    function _boldUa(src: string): string {
      if (!src) return src;
      let _uw = cw![1].split(/[;,\/]/)[0].trim().replace(/[.*+?^${}()|\[\]\\]/g,'\\$&');
      return src.replace(new RegExp('('+_uw+'\\w*)', 'i'), '<b>$1</b>');
    }
    function _boldHead(src: string, word: string): string {
      if (!src) return '';
      if (!word || src.indexOf('<b>') !== -1) return src;
      let _hw = word.replace(/\s*\([^)]*\)/g,'').split(/[;,\/]/)[0].trim().replace(/[.*+?^${}()|\[\]\\]/g,'\\$&');
      if (!_hw) return src;
      return src.replace(new RegExp('('+_hw+'\\w*)', 'i'), '<b>$1</b>');
    }
    if (mode === 'en') {
      // EN→UA: первинний приклад — англійський з bold словом
      $e('exen').innerHTML = _boldEn(_enEx);
      $e('exua').textContent = _uaEx;  // після flip
    } else if (mode === 'ua') {
      // UA→EN: первинний приклад — UKRAINIAN (не розкриває англійської відповіді)
      $e('exen').innerHTML = _boldUa(_uaEx) || _uaEx;
      $e('exua').innerHTML = _boldEn(_enEx);  // англійський після flip
    } else if (ES_MODES.has(mode)) {
      // ES-пари: первинний приклад мовою фронту з виділеним словом, відповідь — після flip
      let _frontEx = '', _backEx = '';
      switch (mode) {
        case 'en-es': _frontEx = _enEx; _backEx = _esEx; break;
        case 'es-en': _frontEx = _esEx; _backEx = _enEx; break;
        case 'es-ua': _frontEx = _esEx; _backEx = _uaEx; break;
        case 'ua-es': _frontEx = _uaEx; _backEx = _esEx; break;
      }
      $e('exen').innerHTML = _boldHead(_frontEx, frontWord) || _frontEx;
      $e('exua').innerHTML = _boldHead(_backEx, backWord) || _backEx;
    }
    $e('exua').className = 'ex-ua';
    if ($e('cb-similar'))     $e('cb-similar').style.display     = 'none';
    if ($e('cb-families'))   $e('cb-families').style.display   = 'none';
    if ($e('cb-collocations')) $e('cb-collocations').style.display = 'none';
    $e('cidx').textContent = (idx%deck.length+1)+'/'+deck.length;
    $e('cknown').textContent = String(_activeKnown().size);
    $e('pbar').style.width = (_activeKnown().size/W.length*100)+'%';
    // Note + Bookmark indicators
    _safe(() => {
      let _noteBtn = document.getElementById('btn-note');
      let _bmBtn   = document.getElementById('btn-bookmark');
      let _noteDisp= document.getElementById('card-note-display');
      let _word0   = cw![0];
      if (_bmBtn) {
        let _isBm = isBookmarked(_word0);
        _bmBtn.textContent = _isBm ? '★' : '☆';
        _bmBtn.style.color = _isBm ? '#f1c40f' : '';
      }
      if (_noteDisp) {
        let _note = getNoteForWord(_word0);
        if (_note) { _noteDisp.textContent = '📝 ' + _note; _noteDisp.style.display = ''; }
        else        { _noteDisp.style.display = 'none'; }
      }
      if (_noteBtn) {
        _noteBtn.style.opacity = (hasNote(_word0)) ? '1' : '0.5';
      }
    });
    try {
      let illusEl = $e('illus');
      let _w = cw[0];
      let IMG_S = 'width:100%;height:100%;object-fit:cover;border-radius:8px;';
      // Пріоритет: Pixabay/Wiki (кеш) → Emoji/SVG → нічого
      if (_imgCache.hasOwnProperty(_w) && _imgCache[_w]) {
        // Є закешоване фото → показати одразу, з onerror якщо URL протух
        (function(w, el) {
          let img = document.createElement('img');
          img.alt = ''; img.loading = 'lazy'; img.style.cssText = IMG_S;
          let _clearAndRefetch = function() {
            delete _imgCache[w];
            if (typeof _idb !== 'undefined' && _idb) {
              try { _idb.transaction('imgs','readwrite').objectStore('imgs').delete(w); } catch(e2){}
            }
            let fb = getIllus(w);
            if (fb) { el.innerHTML = fb; el.style.display = ''; }
            else    { el.innerHTML = ''; el.style.display = 'none'; }
            loadWikiImage(w, function(wd, newUrl) {
              if (!cw || cw[0] !== wd) return;
              if (newUrl) {
                let _ni = document.createElement('img');
                _ni.alt = ''; _ni.loading = 'lazy'; _ni.style.cssText = IMG_S;
                _ni.onload  = function(){ if (_ni.naturalWidth < 10) el.style.display='none'; };
                _ni.onerror = function(){ el.style.display='none'; };
                _ni.src = newUrl;
                el.innerHTML = ''; el.appendChild(_ni); el.style.display = '';
              }
            });
          };
          img.onerror = _clearAndRefetch;
          // Pixabay повертає HTTP 200 з темним placeholder коли URL закінчився —
          // перевіряємо розмір: реальне фото завжди > 10px
          img.onload = function() {
            if (img.naturalWidth < 10 || img.naturalHeight < 10) _clearAndRefetch();
          };
          img.src = (_imgCache as Record<string, string>)[w];
          el.innerHTML = '';
          el.appendChild(img);
          el.style.display = '';
        })(_w, illusEl);
      } else {
        // Поки фото не завантажилось — показати emoji/SVG як заглушку
        let _localIllus = getIllus(_w);
        if (_localIllus) { illusEl.innerHTML = _localIllus; illusEl.style.display = ''; }
        else              { illusEl.innerHTML = ''; illusEl.style.display = 'none'; }
        // Якщо ще не кешовано — завантажити (Pixabay → Wikipedia)
        if (!_imgCache.hasOwnProperty(_w)) {
          // Офлайн: показуємо красивий градієнтний placeholder замість нічого
          const _isOnlineCheck = (window as Window & { _isOnlineCheck?: () => boolean })._isOnlineCheck;
          const _offlineSvg   = (window as Window & { _offlineSvg?: (w: string) => string })._offlineSvg;
          if (_isOnlineCheck && !_isOnlineCheck() && !_localIllus) {
            illusEl.innerHTML = _offlineSvg ? _offlineSvg(_w) : '';
            if (illusEl.innerHTML) illusEl.style.display = '';
          } else {
            (function(w) {
              loadWikiImage(w, function(wd, imgUrl) {
                if (!cw || cw[0] !== wd) return;
                if (imgUrl) {
                  illusEl.innerHTML = '<img src="' + imgUrl + '" alt="" loading="lazy" style="' + IMG_S + '">';
                  illusEl.style.display = '';
                }
              });
            })(_w);
          }
        }
      }
    } catch(e) { try { document.getElementById('illus')!.style.display='none'; }catch(e2){} }
    let cardEl = document.getElementById('card');
    if(_activeKnown().has(cw[0])){ cardEl!.classList.add('is-known'); } else { cardEl!.classList.remove('is-known'); }
    // SRS бейдж — показуємо завжди коли є дані
    _safe(() => {
      let srsEl = document.getElementById('srs-next');
      if (srsEl) {
        let sd = (srsData as Record<string, {ef?: number; reps?: number; due?: string; interval?: number}>)[cw![0]];
        let rangeVal = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
        if (!sd || !sd.due) {
          if (rangeVal === 'srs' || rangeVal === 'weak') {
            srsEl.textContent = '🆕 Нове';
            srsEl.className = 'srs-next new';
            srsEl.style.display = '';
          } else {
            srsEl.style.display = 'none';
          }
        } else {
          let diffDays = Math.round((new Date(sd.due).getTime() - new Date(TODAY).getTime()) / 86400000);
          if (diffDays < 0) {
            let overDays = Math.abs(diffDays);
            srsEl.textContent = '🔴 Прострочено ' + overDays + ' ' + (overDays === 1 ? 'день' : overDays < 5 ? 'дні' : 'днів');
            srsEl.className = 'srs-next over';
          } else if (diffDays === 0) {
            srsEl.textContent = '🟡 Повторити сьогодні';
            srsEl.className = 'srs-next today';
          } else if (diffDays <= 3) {
            srsEl.textContent = '⏰ Через ' + diffDays + ' ' + (diffDays === 1 ? 'день' : 'дні');
            srsEl.className = 'srs-next soon';
          } else {
            srsEl.textContent = '✅ Через ' + diffDays + ' ' + (diffDays < 5 ? 'дні' : 'днів');
            srsEl.className = 'srs-next ok';
          }
          srsEl.style.display = '';
        }
      }
    });
    // Оновити кільце
    _safe(() => { const gd = getGameData(); updateRing(gd.goalCur || 0, gd.goalMax || 20); });
  } catch(e) {
    console.error('render FAILED:', (e as Error).message);
  }
  // Predictive prefetch: наступні картки (без дублів для малих дек)
  _idle(function() {
    let _seen: Record<string, number> = {}, _limit = Math.min(4, deck.length - 1);
    for (let _pi =1; _pi <= _limit; _pi++) {
      let _nw = deck[(idx + _pi) % deck.length];
      if (_nw && !_seen[_nw[0]] && !_imgCache.hasOwnProperty(_nw[0])) {
        _seen[_nw[0]] = 1;
        loadWikiImage(_nw[0], function(){});
      }
    }
  });
}

document.getElementById('card')!.addEventListener('click', function(){
  if(!flipped){
    flipped=true;
    document.getElementById('wtransl')!.className='transl show';
    document.getElementById('exua')!.className='ex-ua show';
    _safe(() => updateSimilarWords());
    _safe(() => updateWordFamilies());
    _safe(() => updateCollocations());
  }
});
document.getElementById('speak-word')!.addEventListener('click', function(e){
  e.stopPropagation();
  if (!cw) return;
  let modeVal = (document.getElementById('sel-mode') as HTMLSelectElement)!.value;
  if (modeVal === 'es-en' || modeVal === 'es-ua') {
    let esEntry = _esEntry(cw[0]);
    if (esEntry && getSelectedEsVoice()) { _speakWithLang(esEntry[0], 'es-ES', this); return; }
  }
  speak(cw[0],this);
});
document.getElementById('speak-ex')!.addEventListener('click', function(e){
  e.stopPropagation();
  if (!cw) return;
  let exEn = cw[2] || '';
  let exUa = cw[3] || '';
  let modeVal = (document.getElementById('sel-mode') as HTMLSelectElement)!.value;
  if (ES_MODES.has(modeVal)) {
    let esEntry = _esEntry(cw[0]);
    let exEs = esEntry ? esEntry[1] : '';
    let hasEsVoice = !!getSelectedEsVoice();
    if (modeVal === 'es-en' || modeVal === 'es-ua') {
      if (hasEsVoice && exEs) _speakWithLang(exEs, 'es-ES', this);
      else speak(exEn, this); // fallback: читаємо англійський еквівалент
    } else if (modeVal === 'ua-es') {
      let hasUkVoice = !!getSelectedUkVoice();
      if (hasUkVoice && exUa) _speakWithLang(exUa, 'uk-UA', this);
      else speak(exEn, this);
    } else { // en-es: фронт — англійський приклад
      speak(exEn, this);
    }
    return;
  }
  // UA→EN mode: спробувати UA голос, якщо немає — читати EN приклад
  if (modeVal === 'ua') {
    let hasUkVoice = !!getSelectedUkVoice();
    if (hasUkVoice && exUa) {
      _speakWithLang(exUa, 'uk-UA', this);
    } else {
      speak(exEn, this); // fallback: читаємо англійський еквівалент
    }
  } else {
    speak(exEn, this);
  }
});
// ── Card action buttons ───────────────────────────────────────
document.getElementById('btn-note')!.addEventListener('click', function(e){
  e.stopPropagation();
  if (cw && true) openNoteModal(cw[0]);
});
document.getElementById('btn-bookmark')!.addEventListener('click', function(e){
  e.stopPropagation();
  if (!cw) return;
  let isNow = toggleBookmark(cw[0]);
  this.textContent = isNow ? '★' : '☆';
  this.style.color  = isNow ? '#f1c40f' : '';
});
document.getElementById('btn-mic')!.addEventListener('click', function(e){
  e.stopPropagation();
  if (!cw || false) return;
  let btn = this;
  startPronunciationCheck(cw[0], btn, function(status, score, spoken, target){
    showPronuncResult(status, score, spoken ?? '', target ?? '');
  });
});
// Show mic button only if Speech Recognition is supported
if (isPronuncSupported()) {
  document.getElementById('btn-mic')!.style.display = '';
}

document.getElementById('btn-prev')!.addEventListener('click', function(e){e.stopPropagation();stopAuto();idx=(idx-1+deck.length)%deck.length;_animCard('prev');render();});
document.getElementById('btn-know')!.addEventListener('click', function(e){
  e.stopPropagation();
  if(cw){
    let _ak = _activeKnown();
    let isNewlyKnown = !_ak.has(cw[0]);
    _ak.add(cw[0]);
    if ((document.getElementById('sel-range') as HTMLSelectElement)!.value === 'srs') { sm2Update(cw[0], 4); } else { delete srsData[cw[0]]; }
    if (ES_MODES.has(getMode())) { saveKnownEs(knownEs); } else { saveKnown(known); }
    saveSRS(srsData);
    _safe(() => playSound('know'));
    _safe(() => { addCombo(); flashCard(true); });
    if(isNewlyKnown) {
      onWordLearned();
      // Конфеті — тільки при першому досягненні цілі за день
      _safe(() => {
        const gd = getGameData();
        if (gd.goalCur >= gd.goalMax && !gd.confettiShown) {
          gd.confettiShown = TODAY;
          saveGameData(gd);
          launchConfetti();
          _safe(() => playSound('goal'));
        }
      });
    }
    let v = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
    if (v === 'srs') { _setDeck(buildSRSDeck(_baseWords as unknown as WordEntry[])); idx = 0; render(); return; }
    if (v === 'unlearned') {
      _setDeck(buildUnlearnedDeck(_baseWords as unknown as WordEntry[])); if (!deck.length) { render(); return; }
      idx = idx % deck.length; _animCard('fade'); render(); return;
    }
  }
  _animCard('next'); idx=(idx+1)%deck.length; render();
});
document.getElementById('btn-next')!.addEventListener('click', function(e){
  e.stopPropagation();
  _safe(() => playSound('next'));
  _safe(() => breakCombo());
  if(cw){
    let v = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
    if (v === 'srs') {
      sm2Update(cw[0], 1);
      saveSRS(srsData);
    }
  }
  idx=(idx+1)%deck.length; render();
});
document.getElementById('btn-auto')!.addEventListener('click', function(e){
  e.stopPropagation();
  if(autoTimer){stopAuto();}
  else{this.textContent=t('cards.stop');autoTimer=setInterval(function(){_animCard('next');idx=(idx+1)%deck.length;render();},4500);}
});
document.getElementById('btn-shuf')!.addEventListener('click', function(e){e.stopPropagation();stopAuto();shuffle(deck);idx=0;render();});
document.getElementById('btn-reset')!.addEventListener('click', function(e){
  e.stopPropagation();
  let modesOverlay = document.getElementById('modes-overlay');
  if (modesOverlay) modesOverlay.classList.remove('open');
  let overlayEl = document.getElementById('modal-overlay')!;
  overlayEl.style.display = 'flex';
});
document.getElementById('modal-cancel')!.addEventListener('click', function(){
  document.getElementById('modal-overlay')!.style.display = 'none';
});
document.getElementById('modal-confirm')!.addEventListener('click', function(){
  // Скидаємо все повністю
  known.clear(); knownEs.clear(); srsData = {};
  state.known = known; state.srsData = srsData; window.srsData = srsData;
  state._srsStatsDirty = true;
  saveKnown(known); saveKnownEs(knownEs); saveSRS(srsData);
  _safe(() => localStorage.removeItem('ew_game'));
  _safe(() => localStorage.removeItem('ew_daily'));
  _safe(() => localStorage.removeItem('ew_ach'));
  state._gameCache  = null; // скидаємо in-memory кеш щоб getGameData() перечитав з localStorage
  state._dailyCache = null;
  // Скинути візуальний стан картки
  let cardEl = document.getElementById('card');
  if (cardEl) {
    cardEl!.classList.remove('is-known');
  }
  // Деку
  let v = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
  if(v==='srs'){ deck=buildSRSDeck(_baseWords as unknown as WordEntry[]); }
  else if(v==='unlearned'){ deck=buildUnlearnedDeck(_baseWords as unknown as WordEntry[]); }
  // Оновити UI
  _safe(() => renderGameBar());
  _safe(() => renderLevelBadge());
  _safe(() => updateRing(0, getGameData().goalMax || 20));
  _safe(() => render());
  document.getElementById('modal-overlay')!.style.display = 'none';
});
// ── ES pair modes: тимчасово звужуємо колоду до слів з іспанським перекладом ──
let _esWords: WordEntry[] | null = null;
function _getEsDeck(): WordEntry[] {
  if (!_esWords) _esWords = (W as unknown as WordEntry[]).filter(function(w){ return Object.prototype.hasOwnProperty.call(W_ES, w[0]); });
  return _esWords;
}
// Called by tag-filter.ts when a category is selected while in ES mode
window._rebuildEsDeck = function(): void {
  if (!ES_MODES.has(getMode())) return;
  let esDeck = _getEsDeck();
  let ats = state._activeTagSet as Set<string> | null;
  deck = ats ? esDeck.filter(function(w){ return (ats as Set<string>).has(w[0]); }) : esDeck.slice();
  if (!deck.length) _setDeck(esDeck.slice()); idx = 0; render();
};
let _preEsDeck: WordEntry[] | null = null;
let _preEsIdx = 0;
document.getElementById('sel-mode')!.addEventListener('change', function(){
  stopAuto();
  let m = (this as HTMLSelectElement).value;
  let isEs = ES_MODES.has(m);
  let selRangeEl = document.getElementById('sel-range') as HTMLSelectElement | null;
  let selTagEl   = document.getElementById('sel-tag')   as HTMLSelectElement | null;
  if (isEs && !_preEsDeck) {
    // Входимо в ES-режим — запам'ятовуємо поточну колоду й звужуємо до перекладених слів
    let esDeck = _getEsDeck();
    if (!esDeck.length) {
      let _mtEs = document.getElementById('milestone-toast');
      if (_mtEs) { _mtEs.textContent = 'Іспанських перекладів ще немає для цих слів'; _mtEs.className = 'milestone-toast'; void _mtEs.offsetWidth; _mtEs.className = 'milestone-toast show'; setTimeout(function(){ _mtEs!.className = 'milestone-toast'; }, 3500); }
      (this as HTMLSelectElement).value = 'en';
      render();
      return;
    }
    _preEsDeck = deck; _preEsIdx = idx;
    // Apply active tag filter to ES deck if one is already set
    let _atsEs = state._activeTagSet as Set<string> | null;
    deck = _atsEs ? esDeck.filter(function(w){ return (_atsEs as Set<string>).has(w[0]); }) : esDeck.slice();
    if (!deck.length) _setDeck(esDeck.slice()); idx = 0;
    if (selRangeEl) selRangeEl.disabled = true;
    // sel-tag stays enabled — user can filter ES words by category
  } else if (!isEs && _preEsDeck) {
    // Виходимо з ES-режиму — повертаємо попередню колоду
    _setDeck(_preEsDeck);
    idx = deck.length ? _preEsIdx % deck.length : 0;
    _preEsDeck = null;
    if (selRangeEl) selRangeEl.disabled = false;
    if (selTagEl)   selTagEl.disabled   = false;
  }
  render();
});

// ══ Динамічне оновлення опцій фільтра "Всі слова" / блоків по 500 ══
function _refreshRangeOptions(): void {
  let sel = document.getElementById('sel-range') as HTMLSelectElement | null;
  if (!sel) return;
  let total = W.length;
  let allOpt = sel.querySelector('option[value="0"]') as HTMLOptionElement | null;
  if (allOpt) allOpt.textContent = t('cards.allWords') + ' (' + total + ')';
  Array.prototype.slice.call(sel.querySelectorAll('option')).forEach(function(opt: HTMLOptionElement){
    if (opt.value !== '0' && /^\d+$/.test(opt.value)) sel!.removeChild(opt);
  });
  const blocks = Math.ceil(total / 500);
  for (let i = 1; i <= blocks; i++) {
    const start = (i - 1) * 500 + 1;
    const end   = i === blocks ? total : i * 500;
    const opt = document.createElement('option');
    opt.value = String(i);
    opt.textContent = start + '–' + end;
    sel.appendChild(opt);
  }
}
window._refreshRangeOptions = _refreshRangeOptions;
_safe(() => _refreshRangeOptions());

// ══ Єдиний sel-range обробник — замість 3 окремих ══
document.getElementById('sel-range')!.addEventListener('change', function(){
  stopAuto();
  let v = (this as HTMLSelectElement).value;
  let selTagEl = document.getElementById('sel-tag') as HTMLSelectElement | null;

  // Для спеціальних режимів скидаємо тег-фільтр (він не застосовується)
  if (v === 'srs' || v === 'unlearned' || v.startsWith('stale')) {
    _activeTagSet = null;
    state._activeTagSet = null;
    if (selTagEl) selTagEl.value = '';
  }

  if (v === 'weak') {
    _baseWords = W.slice();
    let _srsAll = srsData as Record<string, {ef?: number; reps?: number}>;
    // Priority 1: words with SRS data sorted by EF asc (lowest = hardest)
    let _srsWeak = Object.entries(_srsAll)
      .filter(function([, d]) { return d && typeof d.ef === 'number'; })
      .sort(function([, a], [, b]) { return (a.ef ?? 2.5) - (b.ef ?? 2.5); })
      .slice(0, 50);
    if (_srsWeak.length >= 5) {
      let _weakSet = new Set(_srsWeak.map(function([k]) { return k; }));
      deck = (W as unknown as WordEntry[]).filter(function(w) { return _weakSet.has(w[0]); });
    } else if (known.size > 0) {
      // Fallback: known words in reversed order (most recently learned first) for review
      let _knownArr = Array.from(known);
      deck = _knownArr.slice().reverse()
        .map(function(k) { return (W as unknown as WordEntry[]).find(function(w) { return w[0] === k; }); })
        .filter(Boolean) as WordEntry[];
      if (!deck.length) deck = buildUnlearnedDeck(_baseWords as unknown as WordEntry[]);
      let _mtWeak = document.getElementById('milestone-toast');
      if (_mtWeak) { _mtWeak.textContent = t('range.weakFallbackKnown'); _mtWeak.className = 'milestone-toast'; void _mtWeak.offsetWidth; _mtWeak.className = 'milestone-toast show'; setTimeout(function(){ _mtWeak!.className = 'milestone-toast'; }, 3500); }
    } else {
      deck = buildUnlearnedDeck(_baseWords as unknown as WordEntry[]);
      let _mtWeak2 = document.getElementById('milestone-toast');
      if (_mtWeak2) { _mtWeak2.textContent = t('range.weakFallbackNew'); _mtWeak2.className = 'milestone-toast'; void _mtWeak2.offsetWidth; _mtWeak2.className = 'milestone-toast show'; setTimeout(function(){ _mtWeak2!.className = 'milestone-toast'; }, 3500); }
    }
    state._activeTagSet = null;
    if (selTagEl) selTagEl.value = '';
    _setDeck(deck);
    idx = 0; render(); return;
  } else if (v === 'hard') {
    _baseWords = W.slice();
    let _hardWords = getHardWords(50);
    let _hardSet = new Set(_hardWords);
    deck = (W as unknown as WordEntry[]).filter(function(w) { return _hardSet.has(w[0]); });
    if (!deck.length) {
      let _mt = document.getElementById('milestone-toast');
      if (_mt) { _mt.textContent = 'Важких слів ще немає — грай у режимах!'; _mt.className = 'milestone-toast'; void _mt.offsetWidth; _mt.className = 'milestone-toast show'; setTimeout(function(){ _mt!.className = 'milestone-toast'; }, 3500); }
      deck = buildUnlearnedDeck(_baseWords as unknown as WordEntry[]);
    }
    else { deck.sort(function(a, b) { return (_hardWords.indexOf(b[0]) < _hardWords.indexOf(a[0]) ? 1 : -1); }); }
    state._activeTagSet = null;
    if (selTagEl) selTagEl.value = '';
    _setDeck(deck);
    idx = 0; render(); return;
  } else if (v === 'bookmarks') {
    _baseWords = W.slice();
    let _bms = getBookmarks();
    deck = (W as unknown as WordEntry[]).filter(function(w){ return _bms.has(w[0]); });
    if (!deck.length) { deck = W.slice(0, 10) as unknown as WordEntry[]; alert('Закладок немає — додай ⭐ на картках'); }
    shuffle(deck);
  } else if (v === 'unlearned') {
    _baseWords = W.slice();
    deck = buildUnlearnedDeck(_baseWords as unknown as WordEntry[]); // патчений buildUnlearnedDeck враховує _activeTagSet
  } else if (v === 'srs') {
    _baseWords = W.slice();
    deck = buildSRSDeck(_baseWords as unknown as WordEntry[]);       // патчений buildSRSDeck враховує _activeTagSet
  } else if (v.startsWith('cefr-')) {
    const cefrTarget = v.replace('cefr-', '') as import('../data/cefr.ts').CefrLevel;
    _baseWords = W.slice();
    deck = (W as unknown as WordEntry[]).filter(w => getCefrLevel(w[0]) === cefrTarget);
    shuffle(deck);
    if (!deck.length) {
      let _mt2 = document.getElementById('milestone-toast');
      if (_mt2) { _mt2.textContent = `Немає слів рівня ${cefrTarget} — додай більше слів!`; _mt2.className='milestone-toast';void _mt2.offsetWidth;_mt2.className='milestone-toast show';setTimeout(()=>{_mt2!.className='milestone-toast';},3500); }
      deck = _baseWords as unknown as WordEntry[]; shuffle(deck);
    }
    state._activeTagSet = null;
    if (selTagEl) selTagEl.value = '';
    _setDeck(deck);
    idx = 0; render(); return;
  } else if (v.startsWith('stale')) {
    _baseWords = W.slice();
    deck = buildStaleDeck(v === 'stale7' ? 7 : 30);
  } else {
    let n = parseInt(v);
    let _lastBlk = Math.ceil(W.length / 500);
    _baseWords = n===0 ? W.slice() : W.slice((n-1)*500, n===_lastBlk ? W.length : n*500);
    deck = (_baseWords as unknown as WordEntry[]).slice();
    shuffle(deck);
    // Для звичайних режимів застосовуємо тег-фільтр
    let _ats = state._activeTagSet;
    if (_ats) {
      deck = deck.filter(function(w){ return (_ats as Set<string>).has(w[0]); });
      if (!deck.length) deck = (_baseWords as unknown as WordEntry[]).filter(function(w){ return (_ats as Set<string>).has(w[0]); });
      shuffle(deck);
    }
  }
  _setDeck(deck); idx=0; render();
});


// ── Геймфікація: streak + денна ціль ──
const TODAY = new Date().toISOString().slice(0,10);
window.TODAY = TODAY; // legacy files (catpairs.js, srs.js, etc.) use this globally



// Запуск під час простою браузера (не блокує UI)
function onWordLearned() {
  let d = getGameData();
  // Денна ціль
  d.goalCur = (d.goalCur || 0) + 1;
  // Лічильник виконаних цілей
  if (d.goalCur === d.goalMax) { d.goalDays = (d.goalDays || 0) + 1; }
  // Стрік
  d = updateStreak(d);
  saveGameData(d);
  renderGameBar();
  // Щоденна статистика
  recordDailyWord();
  _safe(() => maybeSubmitScore());
  // Лічильник сесії + XP за слово
  let gd2 = getGameData();
  gd2.sessionWords = (gd2.sessionWords || 0) + 1;
  let xpGain = 10 * getComboMult(); // ×2/×3 з комбо
  gd2.xp = (gd2.xp || 0) + xpGain;
  saveGameData(gd2);
  // Рівень і досягнення — в idle щоб не блокувати UI
  _idle(function() {
    _safe(() => renderLevelBadge());
    _safe(() => checkAchievements());
  });
}

// getDailyStats — imported from ./features/game.ts

// ── Рендер статистики ──




// ── Кнопки відкрити/закрити статистику ──

document.getElementById('goal-set-btn')!.addEventListener('click', function(e) {
  e.stopPropagation();
  let d = getGameData();
  let inp = document.getElementById('goal-input') as HTMLInputElement;
  inp!.value = String(d.goalMax || 20);
  let modal = document.getElementById('goal-modal')!;
  modal.style.display = 'flex';
  setTimeout(function(){ inp!.focus(); inp!.select(); }, 50);
});
document.getElementById('goal-modal-cancel')!.addEventListener('click', function(){
  document.getElementById('goal-modal')!.style.display = 'none';
});
document.getElementById('goal-modal-ok')!.addEventListener('click', function(){
  let val = parseInt((document.getElementById('goal-input') as HTMLInputElement)!.value);
  if (val >= 1 && val <= 500) {
    let d = getGameData();
    d.goalMax = val;
    saveGameData(d);
    renderGameBar();
  }
  document.getElementById('goal-modal')!.style.display = 'none';
});
document.getElementById('goal-input')!.addEventListener('keydown', function(e){
  if(e.key === 'Enter') document.getElementById('goal-modal-ok')!.click();
  if(e.key === 'Escape') document.getElementById('goal-modal')!.style.display = 'none';
});
document.getElementById('goal-modal')!.addEventListener('click', function(e){
  if(e.target === this) this.style.display = 'none';
});


// ── Безпечна ініціалізація ──

try { renderGameBar(); } catch(e){ console.error((e as Error).message); }


// ── Темна тема ──
(function(){
  let saved = localStorage.getItem('ew_theme');
  if(saved === 'dark') { document.body.classList.add('dark'); document.getElementById('btn-theme')!.textContent = '☀️'; }
})();
document.getElementById('btn-theme')!.addEventListener('click', function(){
  let isDark = document.body.classList.toggle('dark');
  this.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('ew_theme', isDark ? 'dark' : 'light');
});

// ── Пошук ──
(function(){
  let inp = document.getElementById('search-input') as HTMLInputElement | null;
  let box = document.getElementById('search-results')!;

  function goToWord(word: string): void {
    // Знайти у поточній деці
    let di = deck.findIndex(function(w){ return w[0].toLowerCase() === word.toLowerCase(); });
    if(di === -1) {
      // Якщо не в деці — знайти в W і перейти
      let wLow = word.toLowerCase();
      let wi = -1;
      _wordIdx.forEach(function(i, k){ if(k.toLowerCase() === wLow) wi = i; });
      if(wi === -1) return;
      deck = W.slice() as unknown as WordEntry[]; shuffle(deck);
      _setDeck(deck); di = deck.findIndex(function(w){ return w[0].toLowerCase() === wLow; });
      (document.getElementById('sel-range') as HTMLSelectElement)!.value = '0';
    }
    idx = di; stopAuto(); render();
    inp!.value = ''; box.className = 'search-results'; inp!.blur();
  }

  // Event delegation: click + touchend for iOS Safari compatibility
  function _handleSearchSelect(e: Event): void {
    let item = (e.target as Element).closest<HTMLElement>('.search-result-item');
    if (item?.dataset.word) { e.preventDefault(); goToWord(item.dataset.word); }
  }
  box.addEventListener('click',    _handleSearchSelect);
  box.addEventListener('touchend', _handleSearchSelect);

  let _searchTimer: ReturnType<typeof setTimeout> | null = null;
  inp!.addEventListener('input', function(){
    let q = this.value.trim().toLowerCase();
    if (!q) { box.className = 'search-results'; if (_searchTimer) clearTimeout(_searchTimer); return; }
    if (_searchTimer) clearTimeout(_searchTimer);
    _searchTimer = setTimeout(function() {
      let hits = W.filter(function(w){
        return w[0].toLowerCase().startsWith(q) || w[1].toLowerCase().includes(q);
      }).slice(0, 8);
      if (!hits.length) {
        box.innerHTML = '<div class="search-no-results">Нічого не знайдено</div>';
      } else {
        box.innerHTML = hits.map(function(w){
          let _isKnown = _activeKnown().has(w[0]);
          return '<div class="search-result-item' + (_isKnown ? ' sr-known' : '') + '" data-word="'+w[0]+'">' +
            '<span class="sr-word">'+w[0]+'</span>' +
            '<span class="sr-transl">'+w[1]+'</span>' +
            (_isKnown ? '<span class="sr-known-badge">✓</span>' : '') +
          '</div>';
        }).join('');
      }
      box.className = 'search-results open';
    }, 180); // debounce 180ms
  });

  // Закрити при кліку поза
  document.addEventListener('click', function(e){
    if(!inp!.contains(e.target as Node) && !box.contains(e.target as Node)){
      box.className = 'search-results';
    }
  });

  // Навігація стрілками у результатах
  inp!.addEventListener('keydown', function(e){
    let items = box.querySelectorAll('.search-result-item');
    let active = box.querySelector('.search-result-item.active');
    if(e.key === 'ArrowDown'){
      e.preventDefault();
      let next = active ? (active as HTMLElement).nextElementSibling : items[0];
      if(active) (active as HTMLElement).classList.remove('active');
      if(next) (next as HTMLElement).classList.add('active');
    } else if(e.key === 'ArrowUp'){
      e.preventDefault();
      let prev = active ? (active as HTMLElement).previousElementSibling : items[items.length-1];
      if(active) (active as HTMLElement).classList.remove('active');
      if(prev) (prev as HTMLElement).classList.add('active');
    } else if(e.key === 'Enter' && active){
      e.preventDefault(); goToWord((active as HTMLElement).dataset.word ?? '');
    } else if(e.key === 'Escape'){
      box.className = 'search-results'; this.blur();
    }
  });
})();

// ── Клавіатурні скорочення ──
document.addEventListener('keydown', function(e){
  // Не реагувати якщо фокус у полі вводу
  if((document.activeElement as HTMLElement).tagName === 'INPUT' || (document.activeElement as HTMLElement).tagName === 'SELECT' || (document.activeElement as HTMLElement).tagName === 'TEXTAREA') return;
  if((e.target as Element).closest('#modal-overlay')) return;

  if(e.code === 'Space'){
    e.preventDefault();
    if(!flipped){ flipped=true; document.getElementById('wtransl')!.className='transl show'; document.getElementById('exua')!.className='ex-ua show'; }
    else { document.getElementById('btn-next')!.click(); }
  } else if(e.code === 'Enter'){
    e.preventDefault();
    document.getElementById('btn-know')!.click();
  } else if(e.code === 'ArrowRight'){
    e.preventDefault();
    document.getElementById('btn-next')!.click();
  } else if(e.code === 'ArrowLeft'){
    e.preventDefault();
    document.getElementById('btn-prev')!.click();
  } else if(e.code === 'KeyF'){
    e.preventDefault();
    if(!flipped){ flipped=true; document.getElementById('wtransl')!.className='transl show'; document.getElementById('exua')!.className='ex-ua show'; }
  }
});


// LEVELS, getLevel, getNextLevel — imported from ./features/game.ts

// ── Режими: трекер завершень / власні слова — делеговано в game.ts ───────────

// ════════════════════════════════════════
// ДОСЯГНЕННЯ
// ════════════════════════════════════════
// ACHIEVEMENTS imported from data/achievements.ts










// renderLevelBadge/checkAchievements вбудовано в основну onWordLearned нижче

// ── Перевіряємо досягнення і рівень при старті ──
renderLevelBadge();
checkAchievements();

// ── Phase 2: expose all functions/vars needed by legacy mode/feature files ──
window.speak             = speak;
window.render            = render;
window.stopAuto          = stopAuto;
window.getVoice          = getVoice;
window.getGameData       = getGameData;
window.saveGameData      = saveGameData;
window.onWordLearned     = onWordLearned;
// window.checkAchievements/renderAchievements/showToast — set by render-achievements.ts
// window.renderGameBar/renderLevelBadge/renderLevelsRoadmap/renderLevelProgress — set by render-game-bar.ts
// window.renderStats/openStats/closeStats/renderSRSForecast — set by stats.ts
window.ACHIEVEMENTS        = ACHIEVEMENTS;
window.openWordDetail      = openWordDetail;
window.buildStaleDeck      = buildStaleDeck;
// _srsStatsDirty, _gameCache, _dailyCache live in state — not duplicated on window
// window.deck / window.idx / window.flipped / window.cw are live getters defined at top of file
// ── Setters for module-scope primitives used by legacy files ──
window.setIdx     = (i: number)              => _setIdx(i);
window.setDeck    = (d: WordEntry[])         => _setDeck(d);
window.setFlipped = (v: boolean)             => { flipped = v; state.flipped = v; };
window.setCw      = (v: WordEntry | null)    => _setCw(v);
window._wordIdx              = _wordIdx;
window._customWords          = _customWords;
window.invalidateSimilarCache = invalidateSimilarCache;
window.knownEs                = knownEs;
window.setKnown    = (s: Set<string>)          => { known = s; state.known = s; window.known = s; };
window.setSrsData  = (d: Record<string, any>)  => { srsData = d; state.srsData = d; window.srsData = d; };
window.updateRing            = updateRing;
window.playSound             = playSound;
window.recordModeComplete    = recordModeComplete;
window.recordCustomWordAdded = recordCustomWordAdded;
// window.renderLevelProgress — set by render-game-bar.ts
// window.renderSRSForecast   — set by stats.ts
window._speakWeb             = _speakWeb;
window.speakWebFallback      = (window as Window & {speakWebFallback?: (t: string, b: HTMLElement | null) => void}).speakWebFallback;
window._speakWithLang        = _speakWithLang;



// ════════════════════════════════════════
// ЕКСПОРТ / ІМПОРТ ПРОГРЕСУ
// (exportProgress, importProgress + modal listeners moved to ./features/progress-io.ts)

// ════════════════════════════════════════
// ПРОГРЕС-КІЛЬЦЕ
// ════════════════════════════════════════
// updateRing imported from ./features/ring.ts

// ════════════════════════════════════════
// КОНФЕТІ
// ════════════════════════════════════════
// launchConfetti imported from ./core/confetti.ts

// ════════════════════════════════════════
// playSound imported from ./core/audio.ts

// ════════════════════════════════════════
// 3D FLIP КАРТКИ
// ════════════════════════════════════════


// ════════════════════════════════════════
// СХОЖІ СЛОВА / КОЛОКАЦІЇ / СІМЕЙСТВА
// (updateCollocations, updateWordFamilies imported from ./features/word-context.ts)
// (updateSimilarWords imported from ./features/similar-words.ts)

// ════════════════════════════════════════
// СВАЙПИ (moved to ./core/swipe.ts)
// ════════════════════════════════════════

// ════════════════════════════════════════
// PWA (moved to ./core/pwa.ts)
// ════════════════════════════════════════

// ════════════════════════════════════════
