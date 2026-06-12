// English Words App — js/features/render-game-bar.ts
// Game bar (streak/goal).
// Level badge + progress (Block 3) live in game-bar-level.tsx (React).
// Levels roadmap lives in achievements-page.tsx (React).
import { getGameData } from './game.ts';
import { t } from './i18n.ts';
import { refreshGameBarLevel } from './game-bar-level.tsx';
import { refreshAchievementsPage } from './achievements-page.tsx';

export function renderGameBar(): void {
  const d   = getGameData();
  const pct = Math.min(d.goalCur / d.goalMax * 100, 100);
  document.getElementById('streak-num')!.textContent = String(d.streak || 0);
  const shieldsEl = document.getElementById('shields-row');
  if (shieldsEl) {
    const n       = d.shields ?? 0;
    const shLabel = t(n > 1 ? 'gamebar.shields' : 'gamebar.shield');
    shieldsEl.textContent = n > 0 ? '🛡️'.repeat(n) + ' ' + shLabel : '';
    shieldsEl.title = n > 0
      ? `${n} ${shLabel}: ${t('gamebar.shield.desc')}`
      : t('gamebar.shield.none');
  }
  document.getElementById('goal-cur')!.textContent = String(d.goalCur || 0);
  document.getElementById('goal-max')!.textContent = String(d.goalMax);
  const fill  = document.getElementById('goal-fill');
  fill!.style.width   = pct + '%';
  fill!.className     = 'goal-fill' + (d.goalCur >= d.goalMax ? ' done' : '');
  const bdg = document.getElementById('goal-done');
  bdg!.style.display  = d.goalCur >= d.goalMax ? 'inline' : 'none';
  try { refreshGameBarLevel(); } catch (_e) {}
}

window.renderGameBar       = renderGameBar;
window.renderLevelBadge    = refreshGameBarLevel;
window.renderLevelProgress = refreshGameBarLevel;
window.renderLevelsRoadmap = refreshAchievementsPage;
