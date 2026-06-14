// English Words App — js/features/stats.ts
// Forgetting-curve tooltip on the card (Phase 4 territory — depends on `cw`/card state).
// The stats overlay itself lives in stats-page.tsx (React).
import { state } from '../../src/state.ts';
import { t, getLang } from './i18n.ts';
import { openStats, closeStats } from './stats-page.tsx';

function renderForgettingCurve(): void {
  const el = document.getElementById('srs-next');
  const cw = (window as Window & { cw?: string[] | null }).cw;
  if (!el || !cw) return;
  const d = state.srsData[cw[0] as string] as { due?: string; ef?: number; interval?: number } | undefined;
  if (!d?.due || !d.ef) return;
  let ef = d.ef, interval = d.interval ?? 1;
  const future = [interval];
  for (let i = 0; i < 4; i++) { interval = Math.round(interval * ef); future.push(interval); }
  const dayUnit = getLang() === 'ua' ? 'д' : 'd';
  el.title = t('stats.intervals') + ': ' + future.map(v => v + dayUnit).join(' → ');
}

document.getElementById('card')?.addEventListener('click', () => {
  setTimeout(() => { try { renderForgettingCurve(); } catch (e) {} }, 100);
});

// ── Stats open/close buttons ──────────────────────────────────
document.getElementById('btn-stats')?.addEventListener('click', function(e) {
  e.stopPropagation();
  openStats();
  setTimeout(function() { try { (window as any).updateUI?.(); } catch (_e) {} }, 50);
});
document.getElementById('stats-overlay')?.addEventListener('click', function(e) {
  if (e.target === this) closeStats();
});

export {};
