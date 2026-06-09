// English Words App — js/features/voice.ts
// Web Speech API voice picker: EN + UA
import { synth } from '../core/srs.ts';
import { t } from './i18n.ts';

let _enURI = localStorage.getItem('ew_ws_voice')    ?? '';
let _ukURI = localStorage.getItem('ew_ws_uk_voice') ?? '';
let _esURI = localStorage.getItem('ew_ws_es_voice') ?? '';

type VoiceMapEntry = { match: string; label: string; gender: string; accent: string };

const VOICE_MAP: VoiceMapEntry[] = [
  { match: 'Google US English',         label: 'Google Samantha',    gender: '👩', accent: 'US' },
  { match: 'Google UK English Female',  label: 'Google Emma',        gender: '👩', accent: 'GB' },
  { match: 'Google UK English Male',    label: 'Google James',       gender: '👨', accent: 'GB' },
  { match: 'Google Australian English', label: 'Google Olivia',      gender: '👩', accent: 'AU' },
  { match: 'Microsoft David',   label: 'Microsoft David',   gender: '👨', accent: 'US' },
  { match: 'Microsoft Mark',    label: 'Microsoft Mark',    gender: '👨', accent: 'US' },
  { match: 'Microsoft Zira',    label: 'Microsoft Zira',    gender: '👩', accent: 'US' },
  { match: 'Microsoft Jenny',   label: 'Microsoft Jenny',   gender: '👩', accent: 'US' },
  { match: 'Microsoft Guy',     label: 'Microsoft Guy',     gender: '👨', accent: 'US' },
  { match: 'Microsoft Aria',    label: 'Microsoft Aria',    gender: '👩', accent: 'US' },
  { match: 'Microsoft Davis',   label: 'Microsoft Davis',   gender: '👨', accent: 'US' },
  { match: 'Microsoft Ana',     label: 'Microsoft Ana',     gender: '👩', accent: 'US' },
  { match: 'Microsoft Eric',    label: 'Microsoft Eric',    gender: '👨', accent: 'US' },
  { match: 'Microsoft Ryan',    label: 'Microsoft Ryan',    gender: '👨', accent: 'GB' },
  { match: 'Microsoft Sonia',   label: 'Microsoft Sonia',   gender: '👩', accent: 'GB' },
  { match: 'Microsoft Libby',   label: 'Microsoft Libby',   gender: '👩', accent: 'GB' },
  { match: 'Microsoft Maisie',  label: 'Microsoft Maisie',  gender: '👩', accent: 'GB' },
  { match: 'Microsoft Natasha', label: 'Microsoft Natasha', gender: '👩', accent: 'AU' },
  { match: 'Microsoft William', label: 'Microsoft William', gender: '👨', accent: 'AU' },
  { match: 'Alex',      label: 'Apple Alex',      gender: '👨', accent: 'US' },
  { match: 'Samantha',  label: 'Apple Samantha',  gender: '👩', accent: 'US' },
  { match: 'Victoria',  label: 'Apple Victoria',  gender: '👩', accent: 'US' },
  { match: 'Daniel',    label: 'Apple Daniel',    gender: '👨', accent: 'GB' },
  { match: 'Kate',      label: 'Apple Kate',      gender: '👩', accent: 'GB' },
  { match: 'Karen',     label: 'Apple Karen',     gender: '👩', accent: 'AU' },
  { match: 'Lee',       label: 'Apple Lee',       gender: '👨', accent: 'AU' },
  { match: 'Moira',     label: 'Apple Moira',     gender: '👩', accent: 'IE' },
  { match: 'Google українська',  label: 'Google Українська', gender: '👩', accent: 'UA' },
  { match: 'Google Ukrainian',   label: 'Google Ukrainian',  gender: '👩', accent: 'UA' },
  { match: 'Microsoft Ostap',    label: 'Microsoft Остап',   gender: '👨', accent: 'UA' },
  { match: 'Microsoft Polina',   label: 'Microsoft Поліна',  gender: '👩', accent: 'UA' },
  { match: 'Ukrainian',          label: 'Українська',        gender: '👩', accent: 'UA' },
  { match: 'Google español',           label: 'Google Español',     gender: '👩', accent: 'ES' },
  { match: 'Google Spanish',           label: 'Google Spanish',     gender: '👩', accent: 'ES' },
  { match: 'Microsoft Helena',         label: 'Microsoft Helena',   gender: '👩', accent: 'ES' },
  { match: 'Microsoft Pablo',          label: 'Microsoft Pablo',    gender: '👨', accent: 'ES' },
  { match: 'Microsoft Sabina',         label: 'Microsoft Sabina',   gender: '👩', accent: 'MX' },
  { match: 'Microsoft Dalia',          label: 'Microsoft Dalia',    gender: '👩', accent: 'MX' },
  { match: 'Microsoft Raul',           label: 'Microsoft Raul',     gender: '👨', accent: 'MX' },
  { match: 'Microsoft Jorge',          label: 'Microsoft Jorge',    gender: '👨', accent: 'MX' },
  { match: 'Microsoft Alvaro',         label: 'Microsoft Álvaro',   gender: '👨', accent: 'ES' },
  { match: 'Microsoft Elvira',         label: 'Microsoft Elvira',   gender: '👩', accent: 'ES' },
  { match: 'Monica',                   label: 'Apple Mónica',       gender: '👩', accent: 'ES' },
  { match: 'Paulina',                  label: 'Apple Paulina',      gender: '👩', accent: 'MX' },
  { match: 'Diego',                    label: 'Apple Diego',        gender: '👨', accent: 'AR' },
  { match: 'Juan',                     label: 'Apple Juan',         gender: '👨', accent: 'MX' },
  { match: 'Marisol',                  label: 'Apple Marisol',      gender: '👩', accent: 'ES' },
  { match: 'Jorge',                    label: 'Apple Jorge',        gender: '👨', accent: 'ES' },
  { match: 'Spanish',                  label: 'Español',            gender: '👩', accent: 'ES' },
  { match: 'español',                  label: 'Español',            gender: '👩', accent: 'ES' },
];

function _getLabel(voice: SpeechSynthesisVoice): VoiceMapEntry {
  const name = voice.name;
  for (const entry of VOICE_MAP) { if (name.toLowerCase().includes(entry.match.toLowerCase())) return entry; }
  const femaleWords = ['female','woman','girl','zira','jenny','aria','ana','sonia','libby','maisie','natasha','samantha','victoria','kate','karen','moira','emma','joanna','amy','polina','поліна'];
  const isFemale = femaleWords.some(w => name.toLowerCase().includes(w));
  return { match: '', label: name, gender: isFemale ? '👩' : '👨', accent: _langFlag(voice.lang) };
}

function _langFlag(lang: string): string {
  if (!lang) return '🌐'; const l = lang.toLowerCase();
  if (l.startsWith('uk')) return 'UA';
  if (l === 'en-gb' || l === 'en-ie') return 'GB';
  if (l === 'en-au') return 'AU'; if (l === 'en-in') return 'IN';
  if (l.startsWith('en-us') || l.startsWith('en-ca')) return 'US';
  if (l.startsWith('en')) return '🌍';
  if (l === 'es-mx') return 'MX'; if (l === 'es-ar') return 'AR'; if (l === 'es-us') return 'US';
  if (l.startsWith('es')) return 'ES';
  return '🌐';
}

function _allVoices(): SpeechSynthesisVoice[] { return window.speechSynthesis?.getVoices() ?? []; }
function _enVoices(): SpeechSynthesisVoice[] { return _allVoices().filter(v => v.lang?.toLowerCase().startsWith('en')); }
function _ukVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter(v => {
    const l = (v.lang ?? '').toLowerCase(), n = (v.name ?? '').toLowerCase();
    return l.startsWith('uk') || l === 'uk-ua' || l === 'uk_ua' || n.includes('ukrainian') || n.includes('укра');
  });
}
function _esVoices(): SpeechSynthesisVoice[] {
  return _allVoices().filter(v => {
    const l = (v.lang ?? '').toLowerCase(), n = (v.name ?? '').toLowerCase();
    return l.startsWith('es') || n.includes('spanish') || n.includes('español') || n.includes('espanol');
  });
}
function _findByURI(uri: string, voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  return voices.find(v => v.voiceURI === uri) ?? null;
}

export function getSelectedEnVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_enURI, _enVoices()) ?? _enVoices()[0] ?? null;
}
export function getSelectedUkVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_ukURI, _ukVoices()) ?? _ukVoices()[0] ?? null;
}
export function getSelectedEsVoice(): SpeechSynthesisVoice | null {
  return _findByURI(_esURI, _esVoices()) ?? _esVoices()[0] ?? null;
}

window.speakFakeYou = (text: string, btn: HTMLElement | null): boolean => {
  const enVoices = _enVoices();
  if (!enVoices.length) return false;
  const clean = text.replace(/<[^>]+>/g, '').replace(/\s*\([^)]*\)/g, '').trim();
  if (!clean || /[Ѐ-ӿ]/.test(clean)) return false;
  synth?.cancel();
  const u = new SpeechSynthesisUtterance(clean);
  const voice = _findByURI(_enURI, enVoices) ?? enVoices[0];
  u.voice = voice; u.lang = voice.lang; u.rate = 0.88; u.pitch = 1;
  if (btn) { btn.classList.add('on'); u.onend = u.onerror = () => btn.classList.remove('on'); }
  synth?.speak(u);
  return true;
};

function _sortVoices(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
  return voices.slice().sort((a, b) => {
    const rank = (n: string) => n.toLowerCase().includes('google') ? 0 : n.toLowerCase().includes('microsoft') ? 1 : 2;
    return rank(a.name) - rank(b.name) || a.name.localeCompare(b.name);
  });
}

function _makeCard(v: SpeechSynthesisVoice, activeURI: string, onSelect: (uri: string) => void): HTMLButtonElement {
  const info = _getLabel(v);
  const btn = document.createElement('button');
  btn.className = 'voice-card' + (v.voiceURI === activeURI ? ' voice-card-active' : '');
  const top = document.createElement('div');
  top.style.cssText = 'display:flex;align-items:center;gap:6px;margin-bottom:3px;';
  (['gender', 'accent', 'label'] as const).forEach((k, i) => {
    if (k === 'accent') {
      const code = info.accent.toLowerCase();
      const img = document.createElement('img');
      img.src = `https://flagcdn.com/20x15/${code}.png`;
      img.alt = info.accent;
      img.width = 20; img.height = 15;
      img.style.cssText = 'border-radius:2px;box-shadow:0 0 0 1px var(--border);vertical-align:middle;';
      img.onerror = () => { img.replaceWith(document.createTextNode(info.accent)); };
      top.appendChild(img);
      return;
    }
    const s = document.createElement('span');
    if (i === 0) { s.textContent = info.gender; s.style.fontSize = '1rem'; }
    else { s.textContent = info.label; s.style.cssText = 'font-size:.82rem;font-weight:600;color:var(--text);'; }
    top.appendChild(s);
  });
  const sub = document.createElement('div');
  sub.style.cssText = 'font-size:.65rem;color:var(--text3);';
  sub.textContent = v.lang + ' · ' + (v.localService ? t('settings.voiceOffline') : t('settings.voiceOnline'));
  btn.append(top, sub);
  btn.addEventListener('click', () => onSelect(v.voiceURI));
  return btn;
}

function _renderVoices(): void {
  const container = document.getElementById('fy-voices-list');
  if (!container) return;
  container.innerHTML = '';
  const enVoices = _sortVoices(_enVoices()), ukVoices = _sortVoices(_ukVoices()), esVoices = _sortVoices(_esVoices());
  if (!enVoices.length && !ukVoices.length && !esVoices.length) {
    container.innerHTML = '<span style="font-size:.78rem;color:var(--text3);">' + t('settings.voicesNotFound') + '</span>'; return;
  }
  const addSection = (title: string, voices: SpeechSynthesisVoice[], activeURI: string, storageKey: string, testText: string): void => {
    if (!voices.length) return;
    const hdr = document.createElement('div');
    hdr.style.cssText = 'font-size:.7rem;font-weight:700;color:var(--text3);letter-spacing:.05em;text-transform:uppercase;margin:10px 0 6px;width:100%;';
    hdr.textContent = title; container.appendChild(hdr);
    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:6px;width:100%;';
    voices.forEach(v => grid.appendChild(_makeCard(v, activeURI, uri => {
      if (storageKey === 'ew_ws_voice') _enURI = uri;
      else if (storageKey === 'ew_ws_es_voice') _esURI = uri;
      else _ukURI = uri;
      localStorage.setItem(storageKey, uri); _renderVoices();
      synth?.cancel(); const u = new SpeechSynthesisUtterance(testText);
      u.voice = v; u.lang = v.lang; u.rate = 0.88; synth?.speak(u);
    })));
    container.appendChild(grid);
  };
  const addMissing = (titleKey: string, descKey: string): void => {
    const noVoice = document.createElement('div');
    noVoice.style.cssText = 'margin-top:12px;padding:12px 14px;border:1.5px dashed rgba(255,255,255,.12);border-radius:12px;font-size:.78rem;color:var(--text2);line-height:1.6;';
    noVoice.innerHTML = `<b style="color:var(--text)">${t(titleKey)}</b><br>${t(descKey)}`;
    container.appendChild(noVoice);
  };
  addSection(t('settings.enVoicesTitle'), enVoices, _enURI, 'ew_ws_voice', 'Hello there, general Kenobi');
  if (ukVoices.length) addSection(t('settings.ukVoicesTitle'), ukVoices, _ukURI, 'ew_ws_uk_voice', 'Привіт, як справи');
  else addMissing('settings.noUkVoicesTitle', 'settings.noUkVoicesDesc');
  if (esVoices.length) addSection(t('settings.esVoicesTitle'), esVoices, _esURI, 'ew_ws_es_voice', 'Hola, ¿cómo estás?');
  else addMissing('settings.noEsVoicesTitle', 'settings.noEsVoicesDesc');
  if (!_enURI && enVoices.length) { _enURI = (enVoices.find(v => v.name.toLowerCase().includes('google')) ?? enVoices[0]).voiceURI; localStorage.setItem('ew_ws_voice', _enURI); }
  if (!_ukURI && ukVoices.length) { _ukURI = ukVoices[0].voiceURI; localStorage.setItem('ew_ws_uk_voice', _ukURI); }
  if (!_esURI && esVoices.length) { _esURI = (esVoices.find(v => v.name.toLowerCase().includes('google')) ?? esVoices[0]).voiceURI; localStorage.setItem('ew_ws_es_voice', _esURI); }
}
window._renderVoices = _renderVoices;

let _loaded = false;
function _tryLoad(): void {
  if (_loaded) return;
  const v = window.speechSynthesis?.getVoices() ?? [];
  if (v.length) { _loaded = true; _renderVoices(); }
}
function _forceReload(): void {
  _loaded = false;
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const v = window.speechSynthesis.getVoices();
  if (v.length) { _loaded = true; _renderVoices(); }
  else {
    const handler = (): void => { window.speechSynthesis.removeEventListener('voiceschanged', handler); _loaded = false; _tryLoad(); };
    window.speechSynthesis.addEventListener('voiceschanged', handler);
  }
}

if (window.speechSynthesis) {
  _tryLoad();
  window.speechSynthesis.addEventListener('voiceschanged', () => { _loaded = false; _tryLoad(); });
}

document.getElementById('settings-overlay')?.addEventListener('click', _renderVoices);
document.getElementById('voices-reload-btn')?.addEventListener('click', () => {
  const all = _allVoices();
  console.group(`[Voice debug] Всі доступні голоси (${all.length})`);
  all.forEach(v => console.log(`${v.lang} | ${v.name} | local:${v.localService}`));
  console.groupEnd();
  const dbg = document.getElementById('fy-voices-list');
  if (dbg && !_ukVoices().length) {
    const msg = document.createElement('div');
    msg.className = 'voice-debug-msg'; msg.style.cssText = 'font-size:.72rem;color:var(--text3);margin-top:8px;padding:8px;background:rgba(255,255,255,.05);border-radius:8px;word-break:break-all;';
    const ukFound = all.filter(v => (v.lang ?? '').toLowerCase().includes('uk') || (v.name ?? '').toLowerCase().includes('ukra'));
    msg.textContent = `${t('settings.voicesFoundLabel')} ${all.length} ${t('settings.voicesLabel')} ${ukFound.map(v => `${v.name} (${v.lang})`).join(', ') || t('settings.notFound')}`;
    dbg.querySelector('.voice-debug-msg')?.remove(); dbg.appendChild(msg);
  }
  _forceReload();
});
