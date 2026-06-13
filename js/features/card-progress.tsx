// English Words App — js/features/card-progress.tsx
// #cidx/#cknown (підзаголовок) і #pbar (progress bar) — частина item 28e (Фаза 4).
import { createRoot } from 'react-dom/client';
import { useAppState } from '../../src/store.ts';
import { W } from '../../data/words.js';
import { getActiveKnown } from './mode-utils.ts';
import type { WordEntry } from '../../src/types.js';

function CardIdx() {
  const { deck, idx } = useAppState();
  if (!deck.length) return <span id="cidx">0/0</span>;
  return <span id="cidx">{(idx % deck.length) + 1}/{deck.length}</span>;
}

function CardKnownCount() {
  const { known } = useAppState();
  return <span id="cknown">{getActiveKnown(known).size}</span>;
}

function ProgressBar() {
  const { known } = useAppState();
  const pct = (getActiveKnown(known).size / (W as unknown as WordEntry[]).length) * 100;
  return <div className="progress-fill" id="pbar" style={{ width: pct + '%' }} />;
}

export function mountCardProgress(): void {
  const cidxEl = document.getElementById('cidx-mount');
  if (cidxEl) createRoot(cidxEl).render(<CardIdx />);
  const cknownEl = document.getElementById('cknown-mount');
  if (cknownEl) createRoot(cknownEl).render(<CardKnownCount />);
  const pbarEl = document.getElementById('pbar-mount');
  if (pbarEl) createRoot(pbarEl).render(<ProgressBar />);
}
