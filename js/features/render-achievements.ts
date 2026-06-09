// English Words App — js/features/render-achievements.ts
// Achievement toast, checkAchievements, renderAchievements popup
import { state } from '../../src/state.ts';
import { ACHIEVEMENTS } from '../../data/achievements.ts';
import {
  getGameData, getModeStats, loadUnlocked, saveUnlocked,
  registerCheckAchievements,
} from './game.ts';
import { t, getLang } from './i18n.ts';
import { ACH_EN, ACH_CAT_EN, ACH_ES, ACH_CAT_ES } from '../../data/achievements-i18n.ts';
import type { Achievement } from '../../src/types.js';

// ── i18n helpers ──────────────────────────────────────────────
function _achName(a: Achievement): string {
  const l = getLang();
  if (l === 'en') return ACH_EN[a.id]?.name ?? a.name;
  if (l === 'es') return ACH_ES[a.id]?.name ?? a.name;
  return a.name;
}
function _achHint(a: Achievement): string {
  const l = getLang();
  if (l === 'en') return ACH_EN[a.id]?.hint ?? a.hint;
  if (l === 'es') return ACH_ES[a.id]?.hint ?? a.hint;
  return a.hint;
}
function _achCat(cat: string): string {
  const l = getLang();
  if (l === 'en') return ACH_CAT_EN[cat] ?? cat;
  if (l === 'es') return ACH_CAT_ES[cat] ?? cat;
  return cat;
}

// ── Toast ─────────────────────────────────────────────────────
let _toastTimer: ReturnType<typeof setTimeout> | null = null;

export function showToast(ach: Achievement): void {
  const toast = document.getElementById('achievement-toast')!;
  document.getElementById('toast-icon')!.textContent = ach.icon;
  document.getElementById('toast-name')!.textContent = _achName(ach);
  document.getElementById('toast-desc')!.textContent = _achHint(ach);
  if (_toastTimer) clearTimeout(_toastTimer);
  toast.style.display = 'none';
  toast.classList.remove('show');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.display = 'block';
      requestAnimationFrame(() => toast.classList.add('show'));
    });
  });
  _toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => { toast.style.display = 'none'; }, 350);
  }, 3500);
}

// ── checkAchievements ────────────────────────────────────────
export function checkAchievements(): void {
  const unlocked = loadUnlocked();
  if (unlocked.length >= ACHIEVEMENTS.length) return;
  const unlockedSet = new Set(unlocked);
  const k = state.known.size;
  const g = getGameData();
  const m = getModeStats();
  const c = ((window as any)._customWords?.length ?? 0) as number;
  const newOnes: Achievement[] = [];
  ACHIEVEMENTS.forEach(function(a) {
    if (!unlockedSet.has(a.id) && a.check(k, g, m, c)) {
      newOnes.push(a);
      unlocked.push(a.id);
    }
  });
  if (newOnes.length) {
    saveUnlocked(unlocked);
    let i = 0;
    function showNext() {
      if (i < newOnes.length) {
        showToast(newOnes[i]);
        i++;
        if (i < newOnes.length) setTimeout(showNext, 4000);
      }
    }
    showNext();
  }
}

// Register so game.ts can call checkAchievements without importing app.ts
registerCheckAchievements(checkAchievements);

// ── renderAchievements ───────────────────────────────────────
export function renderAchievements(): void {
  const unlocked = new Set(loadUnlocked());
  const grid = document.getElementById('achievements-grid');
  const k = state.known.size;
  const g = getGameData();
  const m = getModeStats();
  const c = ((window as any)._customWords?.length ?? 0) as number;

  const cats: Record<string, Achievement[]> = {};
  ACHIEVEMENTS.forEach(function(a) {
    if (!cats[a.cat]) cats[a.cat] = [];
    cats[a.cat].push(a);
  });

  let html = '';
  Object.keys(cats).forEach(function(cat) {
    html += '<div class="ach-category">';
    html += '<div class="ach-cat-title">' + _achCat(cat) + '</div>';
    html += '<div class="ach-grid-inner">';
    cats[cat].forEach(function(a: Achievement) {
      const isUnlocked = unlocked.has(a.id);
      const prog = a.progress(k, g, m, c);
      const pct  = Math.round(prog.cur / prog.max * 100);
      html += '<div class="ach-card ' + (isUnlocked ? 'unlocked' : 'locked') + '" data-id="' + a.id + '">' +
        '<span class="ach-icon">' + a.icon + '</span>' +
        '<div class="ach-name">' + _achName(a) + '</div>' +
        '<div class="ach-progress-track"><div class="ach-progress-fill" style="width:' + pct + '%' + (isUnlocked ? ';background:#27ae60' : '') + '"></div></div>' +
        '<div class="ach-progress-label">' + (isUnlocked ? t('ach.done') : prog.cur + ' / ' + prog.max) + '</div>' +
      '</div>';
    });
    html += '</div></div>';
  });
  grid!.innerHTML = html;

  grid!.querySelectorAll('.ach-card').forEach(function(card) {
    card.addEventListener('click', function(this: HTMLElement, e: Event) {
      e.stopPropagation();
      const id = (this as HTMLElement).dataset.id;
      const a  = ACHIEVEMENTS.find(x => x.id === id);
      if (!a) return;
      const isUnlocked = unlocked.has(id ?? '');
      const prog = a.progress(k, g, m, c);
      const pct  = Math.min(Math.round(prog.cur / prog.max * 100), 100);
      document.getElementById('ap-icon')!.textContent  = a.icon;
      document.getElementById('ap-name')!.textContent  = _achName(a);
      document.getElementById('ap-cat')!.textContent   = _achCat(a.cat);
      document.getElementById('ap-hint')!.textContent  = _achHint(a);
      document.getElementById('ap-prog-label')!.textContent = prog.cur + ' / ' + prog.max;
      document.getElementById('ap-prog-fill')!.style.width  = pct + '%';
      document.getElementById('ap-prog-fill')!.style.background = isUnlocked ? '#27ae60' : '';
      const statusEl = document.getElementById('ap-status')!;
      statusEl.textContent = isUnlocked ? t('ach.unlocked') : t('ach.notYet');
      statusEl.className   = 'ach-popup-status ' + (isUnlocked ? 'done' : 'todo');
      document.getElementById('ach-popup-overlay')!.className = 'open';
    });
  });
}

// ── Achievement popup close ──────────────────────────────────
document.getElementById('ap-close')?.addEventListener('click', () => {
  document.getElementById('ach-popup-overlay')!.className = '';
});
document.getElementById('ach-popup-overlay')?.addEventListener('click', function(e) {
  if (e.target === this) (this as HTMLElement).className = '';
});

window.checkAchievements  = checkAchievements;
window.renderAchievements = renderAchievements;
window.showToast          = showToast;
