// English Words App — js/features/idioms.ts
// Idioms reference page: English, Ukrainian, and Spanish idioms
import { ENGLISH_IDIOMS, UKRAINIAN_IDIOMS, SPANISH_IDIOMS } from '../../data/idioms.ts';
import type { Idiom } from '../../data/idioms.ts';
import { t } from './i18n.ts';
import { getSelectedEnVoice, getSelectedUkVoice, getSelectedEsVoice } from './voice.ts';

const overlay  = document.getElementById('idioms-overlay')! as HTMLElement;
const listEl   = document.getElementById('idioms-list')!    as HTMLElement;
const searchEl = document.getElementById('idioms-search')!  as HTMLInputElement;
const tabEn    = document.getElementById('idioms-tab-en')!  as HTMLButtonElement;
const tabUa    = document.getElementById('idioms-tab-ua')!  as HTMLButtonElement;
const tabEs    = document.getElementById('idioms-tab-es')!  as HTMLButtonElement;
const playBtn  = document.getElementById('idioms-play-btn') as HTMLButtonElement | null;

let _tab: 'en' | 'ua' | 'es' = 'en';
let _query = '';

// ── Player state ──────────────────────────────────────────────
let _playing = false;
let _playQueue: { text: string; lang: string }[] = [];
let _playIdx = 0;

function _voiceForLang(lang: string): SpeechSynthesisVoice | null {
  if (lang.startsWith('uk')) return getSelectedUkVoice();
  if (lang.startsWith('es')) return getSelectedEsVoice();
  return getSelectedEnVoice();
}

function _highlightCard(idx: number): void {
  listEl.querySelectorAll<HTMLElement>('.idiom-card').forEach((el, i) => {
    const on = i === idx;
    el.classList.toggle('idiom-card-playing', on);
    if (on) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

function _speakNext(): void {
  if (!_playing || _playIdx >= _playQueue.length) { _stopPlay(); return; }
  _highlightCard(_playIdx);
  const { text, lang } = _playQueue[_playIdx];
  const u = new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g, '').trim());
  u.lang = lang;
  u.rate = 0.82;
  const voice = _voiceForLang(lang);
  if (voice) u.voice = voice;
  u.onend   = () => { _playIdx++; if (_playing) setTimeout(_speakNext, 400); };
  u.onerror = () => { _playIdx++; if (_playing) setTimeout(_speakNext, 100); };
  window.speechSynthesis?.cancel();
  window.speechSynthesis?.speak(u);
}

function _startPlay(): void {
  const source = _tab === 'en' ? ENGLISH_IDIOMS : _tab === 'ua' ? UKRAINIAN_IDIOMS : SPANISH_IDIOMS;
  const q = _query.trim().toLowerCase();
  const filtered = q
    ? source.filter(i =>
        i.phrase.toLowerCase().includes(q) ||
        i.meaning.toLowerCase().includes(q) ||
        (i.meaningEn?.toLowerCase().includes(q) ?? false))
    : source;
  const lang = _tab === 'ua' ? 'uk-UA' : _tab === 'es' ? 'es-ES' : 'en-US';
  _playQueue = filtered.map(i => ({ text: i.phrase, lang }));
  _playIdx = 0;
  _playing = true;
  if (playBtn) { playBtn.textContent = t('idioms.stopPlay'); playBtn.classList.add('playing'); }
  _speakNext();
}

function _stopPlay(): void {
  _playing = false;
  window.speechSynthesis?.cancel();
  listEl.querySelectorAll('.idiom-card-playing').forEach(el => el.classList.remove('idiom-card-playing'));
  if (playBtn) { playBtn.textContent = t('idioms.playAll'); playBtn.classList.remove('playing'); }
}

// ── Render ────────────────────────────────────────────────────
function _renderCard(idiom: Idiom): string {
  const meaningLine = idiom.meaningEn
    ? `<span class="idiom-meaning">— ${idiom.meaning}</span><span class="idiom-meaning-en"> / ${idiom.meaningEn}</span>`
    : `<span class="idiom-meaning">— ${idiom.meaning}</span>`;
  return `
    <div class="idiom-card">
      <div class="idiom-head">
        <span class="idiom-phrase">${idiom.emoji ?? ''} ${idiom.phrase}</span>
        ${meaningLine}
      </div>
      <div class="idiom-example">
        ${idiom.exampleSrc}<br>
        <span class="idiom-ex-tr">${idiom.exampleTr}</span>
      </div>
    </div>
  `;
}

function _render(): void {
  const source = _tab === 'en' ? ENGLISH_IDIOMS : _tab === 'ua' ? UKRAINIAN_IDIOMS : SPANISH_IDIOMS;
  const q = _query.trim().toLowerCase();
  const filtered = q
    ? source.filter(i =>
        i.phrase.toLowerCase().includes(q) ||
        i.meaning.toLowerCase().includes(q) ||
        (i.meaningEn?.toLowerCase().includes(q) ?? false))
    : source;

  if (!filtered.length) {
    listEl.innerHTML = `<div class="idioms-empty">${t('idioms.empty')}</div>`;
    return;
  }
  listEl.innerHTML = filtered.map(_renderCard).join('');
}

function _setTab(tab: 'en' | 'ua' | 'es'): void {
  _stopPlay();
  _tab = tab;
  tabEn.classList.toggle('idioms-tab-active', tab === 'en');
  tabUa.classList.toggle('idioms-tab-active', tab === 'ua');
  tabEs.classList.toggle('idioms-tab-active', tab === 'es');
  _render();
}

tabEn.addEventListener('click', () => _setTab('en'));
tabUa.addEventListener('click', () => _setTab('ua'));
tabEs.addEventListener('click', () => _setTab('es'));
searchEl.addEventListener('input', () => { _stopPlay(); _query = searchEl.value; _render(); });
playBtn?.addEventListener('click', () => { if (_playing) _stopPlay(); else _startPlay(); });

/** Called by sidebar openPage('idioms') to initialize content */
export function openIdiomsContent(): void {
  _render();
}
window.openIdiomsContent = openIdiomsContent;
window._refreshIdiomsUI = _render;

export function openIdioms(): void {
  (window.openPage as ((p: string) => void) | undefined)?.('idioms');
}

function closeIdioms(): void {
  _stopPlay();
  (window.closePage as (() => void) | undefined)?.();
}

document.getElementById('idioms-close')?.addEventListener('click', closeIdioms);
overlay.addEventListener('click', (e: MouseEvent) => {
  if (e.target === overlay) closeIdioms();
});
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) closeIdioms();
});
