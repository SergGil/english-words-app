// English Words App — js/features/render-game-bar.ts
// Game bar (streak/goal). All 3 blocks live in React:
// Block 1 (streak/shields/combo) + Block 2 (goal) — game-bar-streak.tsx,
// Block 3 (level XP) — game-bar-level.tsx. Levels roadmap — achievements-page.tsx.
import { refreshGameBarLevel } from './game-bar-level.tsx';
import { refreshAchievementsPage } from './achievements-page.tsx';
import { refreshGameBarStreak, refreshGameBarGoal } from './game-bar-streak.tsx';

export function renderGameBar(): void {
  try { refreshGameBarStreak(); } catch (_e) {}
  try { refreshGameBarGoal(); } catch (_e) {}
  try { refreshGameBarLevel(); } catch (_e) {}
}

// window.renderLevelBadge/renderGameBar are read by i18n.ts's applyI18n();
// kept as a window bridge there to avoid a circular import (i18n.ts is
// itself imported by game-bar-level.tsx/achievements-page.tsx for t()).
window.renderGameBar       = renderGameBar;
window.renderLevelBadge    = refreshGameBarLevel;
window.renderLevelProgress = refreshGameBarLevel;
window.renderLevelsRoadmap = refreshAchievementsPage;
