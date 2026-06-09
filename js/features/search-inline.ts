// English Words App — js/features/search-inline.ts
// Inline search box with debounce + keyboard navigation
import { W } from '../../data/words.js';
import { state } from '../../src/state.ts';
import { shuffle } from '../core/srs.ts';
import { ES_MODES, getMode } from './mode-utils.ts';
import type { WordEntry } from '../../src/types.js';

function _activeKnown(): Set<string> {
  return ES_MODES.has(getMode())
    ? ((window as any).knownEs as Set<string>) ?? state.known
    : state.known;
}

(function() {
  const inp = document.getElementById('search-input') as HTMLInputElement | null;
  const box = document.getElementById('search-results')!;

  function goToWord(word: string): void {
    const deckNow = (window as any).deck as WordEntry[];
    let di = deckNow.findIndex(w => w[0].toLowerCase() === word.toLowerCase());
    if (di === -1) {
      const wLow = word.toLowerCase();
      let wi = -1;
      const wordIdx = (window as any)._wordIdx as Map<string, number>;
      wordIdx.forEach((i: number, k: string) => { if (k.toLowerCase() === wLow) wi = i; });
      if (wi === -1) return;
      const newDeck = W.slice() as unknown as WordEntry[];
      shuffle(newDeck);
      (window as any).setDeck(newDeck);
      di = (newDeck as WordEntry[]).findIndex(w => w[0].toLowerCase() === wLow);
      (document.getElementById('sel-range') as HTMLSelectElement)!.value = '0';
    }
    (window as any).setIdx(di);
    (window as any).stopAuto?.();
    (window as any).render?.();
    inp!.value = '';
    box.className = 'search-results';
    inp!.blur();
  }

  function _handleSearchSelect(e: Event): void {
    const item = (e.target as Element).closest<HTMLElement>('.search-result-item');
    if (item?.dataset.word) { e.preventDefault(); goToWord(item.dataset.word); }
  }
  box.addEventListener('click',    _handleSearchSelect);
  box.addEventListener('touchend', _handleSearchSelect);

  let _searchTimer: ReturnType<typeof setTimeout> | null = null;
  inp!.addEventListener('input', function() {
    const q = this.value.trim().toLowerCase();
    if (!q) { box.className = 'search-results'; if (_searchTimer) clearTimeout(_searchTimer); return; }
    if (_searchTimer) clearTimeout(_searchTimer);
    _searchTimer = setTimeout(function() {
      const hits = (W as unknown as WordEntry[]).filter(w =>
        w[0].toLowerCase().startsWith(q) || w[1].toLowerCase().includes(q)
      ).slice(0, 8);
      if (!hits.length) {
        box.innerHTML = '<div class="search-no-results">Нічого не знайдено</div>';
      } else {
        box.innerHTML = hits.map(w => {
          const _isKnown = _activeKnown().has(w[0]);
          return '<div class="search-result-item' + (_isKnown ? ' sr-known' : '') + '" data-word="' + w[0] + '">' +
            '<span class="sr-word">' + w[0] + '</span>' +
            '<span class="sr-transl">' + w[1] + '</span>' +
            (_isKnown ? '<span class="sr-known-badge">✓</span>' : '') +
          '</div>';
        }).join('');
      }
      box.className = 'search-results open';
    }, 180);
  });

  document.addEventListener('click', function(e) {
    if (!inp!.contains(e.target as Node) && !box.contains(e.target as Node)) {
      box.className = 'search-results';
    }
  });

  inp!.addEventListener('keydown', function(e) {
    const items  = box.querySelectorAll('.search-result-item');
    const active = box.querySelector('.search-result-item.active') as HTMLElement | null;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = active ? active.nextElementSibling as HTMLElement : items[0] as HTMLElement;
      active?.classList.remove('active');
      next?.classList.add('active');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = active ? active.previousElementSibling as HTMLElement : items[items.length - 1] as HTMLElement;
      active?.classList.remove('active');
      prev?.classList.add('active');
    } else if (e.key === 'Enter' && active) {
      e.preventDefault();
      goToWord(active.dataset.word ?? '');
    } else if (e.key === 'Escape') {
      box.className = 'search-results';
      this.blur();
    }
  });
})();
