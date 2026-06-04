// English Words App — js/features/learning-path.ts
// 🎯 Learning Path: structured CEFR-based curriculum with daily goals
import { state } from '../../src/state.ts';
import { getCefrLevel, CEFR_META } from '../../data/cefr.ts';
import type { CefrLevel } from '../../data/cefr.ts';
import { W } from '../../data/words.js';
import { getLevel } from '../features/game.ts';
import { openPage } from '../features/sidebar.ts';
import type { WordEntry } from '../../src/types.js';

// ── Plan definition ───────────────────────────────────────────
interface LevelPlan {
  level:     CefrLevel;
  wordsGoal: number;    // how many words of this level to learn
  daysEst:   number;    // estimated days at 20 words/day
  skills:    string[];  // what skills this level unlocks
}

const PLANS: LevelPlan[] = [
  { level:'A1', wordsGoal: 283,  daysEst: 15,  skills: ['Базове вітання', 'Числа і кольори', 'Сімя та тіло', 'Повсякденні дії'] },
  { level:'A2', wordsGoal: 883,  daysEst: 45,  skills: ['Опис людей/місць', 'Магазини і ціни', 'Подорожі', 'Минулі події'] },
  { level:'B1', wordsGoal: 1917, daysEst: 96,  skills: ['Розмова про роботу', 'Новини та медіа', 'Вирішення проблем', 'Плани на майбутнє'] },
  { level:'B2', wordsGoal: 1512, daysEst: 76,  skills: ['Академічні тексти', 'Бізнес комунікація', 'Складні аргументи', 'Філми без субтитрів'] },
  { level:'C1', wordsGoal: 817,  daysEst: 41,  skills: ['Наукові статті', 'Переговори', 'Нюанси та ідіоми', 'Публічні виступи'] },
  { level:'C2', wordsGoal: 230,  daysEst: 12,  skills: ['Художня проза', 'Академічний стиль', 'Повне розуміння', 'Рівень носія'] },
];

// ── Stats calculation ─────────────────────────────────────────
function _getCefrStats(): Record<CefrLevel, { total:number; known:number; pct:number }> {
  const result = {} as Record<CefrLevel, { total:number; known:number; pct:number }>;
  const levels: CefrLevel[] = ['A1','A2','B1','B2','C1','C2'];
  levels.forEach(l => result[l] = { total:0, known:0, pct:0 });

  (W as unknown as WordEntry[]).forEach(w => {
    const lvl = getCefrLevel(w[0]);
    result[lvl].total++;
    if (state.known.has(w[0])) result[lvl].known++;
  });

  levels.forEach(l => {
    result[l].pct = result[l].total > 0
      ? Math.round(result[l].known / result[l].total * 100) : 0;
  });
  return result;
}

function _getCurrentCefrLevel(): CefrLevel {
  const stats = _getCefrStats();
  // Find first level below 70% — that's where to focus
  const levels: CefrLevel[] = ['A1','A2','B1','B2','C1','C2'];
  for (const l of levels) {
    if (stats[l].pct < 70) return l;
  }
  return 'C2';
}

function _getDailyGoalWords(level: CefrLevel): WordEntry[] {
  const notKnown = (W as unknown as WordEntry[])
    .filter(w => getCefrLevel(w[0]) === level && !state.known.has(w[0]));
  return notKnown.slice(0, 20);
}

// ── Render ────────────────────────────────────────────────────
export function renderLearningPath(): void {
  const el = document.getElementById('lp-content') as HTMLElement | null;
  if (!el) return;

  const stats = _getCefrStats();
  const currentLevel = _getCurrentCefrLevel();
  const knownTotal   = state.known.size;
  const lv = getLevel(knownTotal);
  const todayWords   = _getDailyGoalWords(currentLevel);

  // Daily challenge words
  const dailyChallengeHtml = todayWords.length > 0 ? `
    <div class="lp-section">
      <div class="lp-section-title">📅 Сьогоднішній план — рівень ${currentLevel}</div>
      <div class="lp-day-words">
        ${todayWords.slice(0,10).map(w => `
          <div class="lp-word-chip" title="${w[1]}">
            <span class="lp-word">${w[0]}</span>
            <span class="lp-transl">${w[1]}</span>
          </div>
        `).join('')}
        ${todayWords.length > 10 ? `<div class="lp-word-chip lp-more">+${todayWords.length-10} більше</div>` : ''}
      </div>
      <button id="lp-start-btn" class="lp-start-btn">
        📚 Вчити слова ${currentLevel} зараз
      </button>
    </div>
  ` : `
    <div class="lp-section lp-complete">
      <div class="lp-section-title">🏆 Рівень ${currentLevel} завершено!</div>
      <p>Всі слова цього рівня вивчено. Переходь до наступного!</p>
    </div>
  `;

  // CEFR progress bars
  const progressHtml = PLANS.map(plan => {
    const s = stats[plan.level];
    const meta = CEFR_META[plan.level];
    const isCurrent = plan.level === currentLevel;
    const isComplete = s.pct >= 90;
    const isLocked = false; // no locking — all levels accessible

    return `
      <div class="lp-level-row${isCurrent?' lp-current':''}${isComplete?' lp-done':''}">
        <div class="lp-level-header">
          <span class="lp-level-badge" style="background:${meta.color}22;color:${meta.color};border:1.5px solid ${meta.color}44;">
            ${isComplete ? '✓' : plan.level}
          </span>
          <div class="lp-level-info">
            <div class="lp-level-name" style="color:${meta.color}">
              ${plan.level} — ${meta.desc}
              ${isCurrent ? '<span class="lp-current-badge">← зараз</span>' : ''}
            </div>
            <div class="lp-level-skills">${plan.skills.slice(0,2).join(' · ')}</div>
          </div>
          <div class="lp-level-stat">
            <div class="lp-stat-num" style="color:${meta.color}">${s.known}/${s.total}</div>
            <div class="lp-stat-pct">${s.pct}%</div>
          </div>
        </div>
        <div class="lp-progress-bar">
          <div class="lp-progress-fill" style="width:${s.pct}%;background:${meta.color};"></div>
        </div>
        <div class="lp-level-details">
          ${plan.skills.map(sk => `<span class="lp-skill-tag">✓ ${sk}</span>`).join('')}
          <span class="lp-days-est">~${plan.daysEst} днів (20 слів/день)</span>
        </div>
      </div>
    `;
  }).join('');

  // Overall stats
  const totalKnown = Object.values(stats).reduce((s, v) => s + v.known, 0);
  const totalWords  = Object.values(stats).reduce((s, v) => s + v.total, 0);
  const overallPct  = Math.round(totalKnown / totalWords * 100);

  el.innerHTML = `
    <!-- Header -->
    <div class="lp-hero">
      <div class="lp-hero-left">
        <div class="lp-hero-level">${lv.name}</div>
        <div class="lp-hero-stats">
          <span>📚 ${totalKnown} / ${totalWords} слів</span>
          <span>📊 ${overallPct}% завершено</span>
        </div>
        <div class="lp-hero-bar">
          <div class="lp-hero-fill" style="width:${overallPct}%"></div>
        </div>
      </div>
      <div class="lp-hero-focus">
        <div class="lp-focus-label">Поточний фокус</div>
        <div class="lp-focus-level" style="color:${CEFR_META[currentLevel].color}">${currentLevel}</div>
        <div class="lp-focus-desc">${CEFR_META[currentLevel].desc}</div>
      </div>
    </div>

    ${dailyChallengeHtml}

    <!-- CEFR Progress -->
    <div class="lp-section">
      <div class="lp-section-title">📊 Прогрес за рівнями CEFR</div>
      <div class="lp-levels-list">${progressHtml}</div>
    </div>
  `;

  // Start button — navigate to CEFR filter
  document.getElementById('lp-start-btn')?.addEventListener('click', () => {
    const sel = document.getElementById('sel-range') as HTMLSelectElement | null;
    if (sel) {
      sel.value = `cefr-${currentLevel}`;
      sel.dispatchEvent(new Event('change'));
    }
    openPage('cards' as any);
    (window.closePage as (() => void) | undefined)?.();
  });
}

// ── Page open/close ───────────────────────────────────────────
export function openLearningPath(): void {
  renderLearningPath();
}
window.openLearningPath = openLearningPath;
