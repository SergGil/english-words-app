// English Words App — js/features/mode-utils.ts
// Shared ES mode detection + helpers used by app.ts and similar-words.ts
import { W_ES } from '../../data/words_es.js';
import { W_FR } from '../../data/words_fr.js';

export const ES_MODES = new Set(['en-es', 'es-en', 'es-ua', 'ua-es']);
export const FR_MODES = new Set(['en-fr', 'fr-en', 'fr-ua', 'ua-fr']);

export function getMode(): string {
  const m = (document.getElementById('sel-mode') as HTMLSelectElement | null)?.value ?? 'en';
  if (m === 'mix') return Math.random() > 0.5 ? 'en' : 'ua';
  return m || 'en';
}

export function esEntry(word: string): readonly [string, string] | null {
  return (W_ES as unknown as Record<string, readonly [string, string]>)[word] ?? null;
}

export function frEntry(word: string): readonly [string, string] | null {
  return (W_FR as unknown as Record<string, readonly [string, string]>)[word] ?? null;
}
