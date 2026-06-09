// English Words App — js/features/deck-mode.ts
// ES mode deck management: sel-mode listener + _rebuildEsDeck
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { W_ES } from '../../data/words_es.js';
import { ES_MODES, getMode } from './mode-utils.ts';
import type { WordEntry } from '../../src/types.js';

let _esWords: WordEntry[] | null = null;

function _getEsDeck(): WordEntry[] {
  if (!_esWords) {
    _esWords = (W as unknown as WordEntry[]).filter(
      w => Object.prototype.hasOwnProperty.call(W_ES, w[0])
    );
  }
  return _esWords;
}

let _preEsDeck: WordEntry[] | null = null;
let _preEsIdx = 0;

window._rebuildEsDeck = function(): void {
  if (!ES_MODES.has(getMode())) return;
  const esDeck = _getEsDeck();
  const ats    = state._activeTagSet as Set<string> | null;
  let deck     = ats ? esDeck.filter(w => (ats as Set<string>).has(w[0])) : esDeck.slice();
  if (!deck.length) deck = esDeck.slice();
  (window as any).setDeck(deck);
  (window as any).setIdx(0);
  (window as any).render?.();
};

document.getElementById('sel-mode')!.addEventListener('change', function() {
  (window as any).stopAuto?.();
  const m          = (this as HTMLSelectElement).value;
  const isEs       = ES_MODES.has(m);
  const selRangeEl = document.getElementById('sel-range') as HTMLSelectElement | null;
  const selTagEl   = document.getElementById('sel-tag')   as HTMLSelectElement | null;

  if (isEs && !_preEsDeck) {
    const esDeck = _getEsDeck();
    if (!esDeck.length) {
      const _mt = document.getElementById('milestone-toast');
      if (_mt) {
        _mt.textContent = 'Іспанських перекладів ще немає для цих слів';
        _mt.className = 'milestone-toast'; void _mt.offsetWidth;
        _mt.className = 'milestone-toast show';
        setTimeout(() => { _mt.className = 'milestone-toast'; }, 3500);
      }
      (this as HTMLSelectElement).value = 'en';
      (window as any).render?.();
      return;
    }
    _preEsDeck = (window as any).deck as WordEntry[];
    _preEsIdx  = (window as any).idx as number;
    const _atsEs = state._activeTagSet as Set<string> | null;
    let deck = _atsEs ? esDeck.filter(w => (_atsEs as Set<string>).has(w[0])) : esDeck.slice();
    if (!deck.length) deck = esDeck.slice();
    (window as any).setDeck(deck);
    (window as any).setIdx(0);
    if (selRangeEl) selRangeEl.disabled = true;
  } else if (!isEs && _preEsDeck) {
    (window as any).setDeck(_preEsDeck);
    const deckLen = ((window as any).deck as WordEntry[]).length;
    (window as any).setIdx(deckLen ? _preEsIdx % deckLen : 0);
    _preEsDeck = null;
    if (selRangeEl) selRangeEl.disabled = false;
    if (selTagEl)   selTagEl.disabled   = false;
  }
  (window as any).render?.();
});
