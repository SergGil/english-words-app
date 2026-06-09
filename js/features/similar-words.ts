// English Words App — js/features/similar-words.ts
// Similar word suggestions: translation-token matching + prefix similarity
import { W } from '../../data/words.js';
import { W_ES } from '../../data/words_es.js';
import { state } from '../../src/state.ts';
import type { WordEntry } from '../../src/types.js';
import { ES_MODES, getMode as _getMode, esEntry as _esEntry } from './mode-utils.ts';

function _getActiveKnown(): Set<string> {
  return ES_MODES.has(_getMode())
    ? ((window as any).knownEs as Set<string>) ?? state.known
    : state.known;
}

const STOP = new Set(['бути','мати','стати','який','яка','яке','свій','своя','цей','ця','той','та','такий','одна','також','дуже','більш','менш','людина','великий','малий','новий','старий','добрий','поганий','перший','другий','інший','різний','можна','треба','або','чи','але','його','її','їх','він','вона','вони','цього','того','собою']);
const STOP_ES = new Set(['ser','estar','tener','hacer','poder','para','como','pero','más','muy','bien','todo','cada','otro','esta','este','también','cuando','entre','sobre','hasta','desde','porque','aunque','donde','algo','alguien','mismo','parte','gran']);

function _tok(s: string): string[] {
  return s.toLowerCase().replace(/\([^)]*\)/g, '').split(/[\s,;\/]+/)
    .map(t => t.replace(/[^а-яіїєёґ]/gi, '').trim())
    .filter(t => t.length >= 4 && !STOP.has(t));
}

function _tokEs(s: string): string[] {
  return s.toLowerCase().replace(/\([^)]*\)/g, '').split(/[\s,;\/]+/)
    .map(t => t.replace(/[^a-záéíóúüñ]/gi, '').trim())
    .filter(t => t.length >= 4 && !STOP_ES.has(t));
}

let _synIdx: Record<string, number[]> | null = null;
let _synIdxEs: Record<string, number[]> | null = null;

function _buildSynIdx(): void {
  _synIdx = {};
  for (let i = 0; i < W.length; i++) {
    _tok((W[i] as unknown as WordEntry)[1]).forEach(t => {
      if (!(_synIdx as Record<string, number[]>)[t]) (_synIdx as Record<string, number[]>)[t] = [];
      (_synIdx as Record<string, number[]>)[t].push(i);
    });
  }
}

function _buildSynIdxEs(): void {
  _synIdxEs = {};
  const esMap = W_ES as unknown as Record<string, [string, string]>;
  for (let i = 0; i < W.length; i++) {
    const esEntry = esMap[(W[i] as unknown as WordEntry)[0]];
    if (!esEntry) continue;
    _tokEs(esEntry[0]).forEach(t => {
      if (!(_synIdxEs as Record<string, number[]>)[t]) (_synIdxEs as Record<string, number[]>)[t] = [];
      (_synIdxEs as Record<string, number[]>)[t].push(i);
    });
  }
}

let _cache: Record<string, WordEntry[]> = {};

export function invalidateSimilarCache(): void {
  _cache = {};
  _synIdx = null;
  _synIdxEs = null;
}

export function getSimilarWords(word: string, transl: string, maxCount = 5): WordEntry[] {
  if (_cache[word]) return _cache[word];
  if (!_synIdx) _buildSynIdx();

  const counts: Record<string, number> = {};
  // 1. Translation token matching
  _tok(transl).forEach(t => {
    ((_synIdx as Record<string, number[]>)[t] ?? []).forEach(i => {
      if ((W[i] as unknown as WordEntry)[0].toLowerCase() !== word.toLowerCase())
        counts[i] = (counts[i] ?? 0) + t.length * 2;
    });
  });
  // 2. English spelling similarity
  const wl = word.toLowerCase();
  for (let i = 0; i < W.length; i++) {
    const wl2 = (W[i] as unknown as WordEntry)[0].toLowerCase();
    if (wl2 === wl) continue;
    let pLen = 0;
    while (pLen < wl.length && pLen < wl2.length && wl[pLen] === wl2[pLen]) pLen++;
    if (pLen >= 4)             counts[i] = (counts[i] ?? 0) + pLen * 3;
    if (wl.length >= 5  && wl2.includes(wl.substring(0, 4)))  counts[i] = (counts[i] ?? 0) + 8;
    if (wl2.length >= 5 && wl.includes(wl2.substring(0, 4))) counts[i] = (counts[i] ?? 0) + 8;
  }

  const out = Object.entries(counts)
    .filter(([, s]) => s >= 8)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxCount)
    .map(([i]) => W[Number(i)] as unknown as WordEntry);

  _cache[word] = out;
  return out;
}

export function getSimilarWordsEs(word: string, esTransl: string, maxCount = 5): WordEntry[] {
  const cacheKey = 'es:' + word;
  if (_cache[cacheKey]) return _cache[cacheKey];
  if (!_synIdxEs) _buildSynIdxEs();

  const counts: Record<string, number> = {};
  // 1. Spanish translation token matching
  _tokEs(esTransl).forEach(t => {
    ((_synIdxEs as Record<string, number[]>)[t] ?? []).forEach(i => {
      if ((W[i] as unknown as WordEntry)[0].toLowerCase() !== word.toLowerCase())
        counts[i] = (counts[i] ?? 0) + t.length * 2;
    });
  });
  // 2. English spelling similarity (prefix)
  const wl = word.toLowerCase();
  for (let i = 0; i < W.length; i++) {
    const wl2 = (W[i] as unknown as WordEntry)[0].toLowerCase();
    if (wl2 === wl) continue;
    let pLen = 0;
    while (pLen < wl.length && pLen < wl2.length && wl[pLen] === wl2[pLen]) pLen++;
    if (pLen >= 4)             counts[i] = (counts[i] ?? 0) + pLen * 3;
    if (wl.length >= 5  && wl2.includes(wl.substring(0, 4)))  counts[i] = (counts[i] ?? 0) + 8;
    if (wl2.length >= 5 && wl.includes(wl2.substring(0, 4))) counts[i] = (counts[i] ?? 0) + 8;
  }

  const out = Object.entries(counts)
    .filter(([, s]) => s >= 8)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxCount)
    .map(([i]) => W[Number(i)] as unknown as WordEntry);

  _cache[cacheKey] = out;
  return out;
}

export function updateSimilarWords(): void {
  const cw = state.cw as WordEntry | null;
  if (!cw) return;
  const section = document.getElementById('cb-similar');
  const chips   = document.getElementById('cb-chips');
  if (!section || !chips) return;

  const mode    = _getMode();
  const isEsMode = ES_MODES.has(mode);
  const esEntry  = isEsMode ? _esEntry(cw[0]) : null;

  let similar = (isEsMode && esEntry)
    ? getSimilarWordsEs(cw[0], esEntry[0], 10).filter(w => !!_esEntry(w[0]))
    : getSimilarWords(cw[0], cw[1], 5);
  if (isEsMode) similar = similar.slice(0, 5);
  if (!similar.length) { section.style.display = 'none'; return; }

  section.style.display = 'block';
  chips.innerHTML = similar.map(function(w) {
    const isKnown   = _getActiveKnown().has(w[0]);
    const wEsEntry  = isEsMode ? _esEntry(w[0]) : null;
    const displayWord   = wEsEntry ? wEsEntry[0] : w[0];
    const displayTransl = w[1];
    return '<div class="sim-chip' + (isKnown ? ' known-chip' : '') + '" data-word="' + w[0] + '">' +
      '<span class="sc-word">' + displayWord + '</span>' +
      '<span class="sc-transl">' + displayTransl + '</span>' +
    '</div>';
  }).join('');

  const wordIdx = (window as any)._wordIdx as Map<string, number> | undefined;
  chips.querySelectorAll('.sim-chip').forEach(function(chip) {
    chip.addEventListener('click', function(this: HTMLElement, e: Event) {
      e.stopPropagation();
      const targetWord = this.dataset.word ?? '';
      const wi = wordIdx?.has(targetWord) ? wordIdx.get(targetWord) : -1;
      if (wi === undefined || wi === -1) return;
      (window as any).openWordDetail?.(W[wi as number] as unknown as WordEntry);
    });
  });
}

window.updateSimilarWords = updateSimilarWords;
