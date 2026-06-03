import { describe, it, expect } from 'vitest';
import { ACHIEVEMENTS } from '../../data/achievements.ts';
import type { GameData } from '../../src/types.js';

function g(o: Partial<GameData> = {}): GameData {
  return { streak:0, streakDate:null, shields:0, goalMax:20, goalCur:0, goalDate:'', goalDays:0, confettiShown:null, sessionWords:0, xp:0, maxCombo:0, ...o };
}

// ── Word count milestones — updated for 5598 words ────────────
describe('Achievement word milestones — updated word count', () => {
  it('words5542 achievement now targets 5598 words', () => {
    const a = ACHIEVEMENTS.find(x => x.id === 'words5542')!;
    expect(a).toBeDefined();
    expect(a.progress(5598, g()).max).toBe(5598);
    expect(a.check(5597, g())).toBe(false);
    expect(a.check(5598, g())).toBe(true);
  });

  it('words5542 progress bar caps at 5598', () => {
    const a = ACHIEVEMENTS.find(x => x.id === 'words5542')!;
    expect(a.progress(6000, g()).cur).toBe(5598);
  });

  it('hint text mentions 5598', () => {
    const a = ACHIEVEMENTS.find(x => x.id === 'words5542')!;
    expect(a.hint).toContain('5598');
  });
});

// ── All progress functions return valid ranges ─────────────────
describe('All achievements — progress cur ≤ max', () => {
  it('progress.cur never exceeds progress.max for any input', () => {
    const modeStats = { quiz: 100, tempo: 50, pairs: 30, write: 25, listen: 20, lesson: 15 };
    const gameData = g({ streak: 200, maxCombo: 50, sessionWords: 150, goalCur: 25, goalMax: 20, goalDays: 50 });
    for (const a of ACHIEVEMENTS) {
      const p = a.progress(9999, gameData, modeStats, 99);
      expect(p.cur, `${a.id}: cur(${p.cur}) > max(${p.max})`).toBeLessThanOrEqual(p.max);
      expect(p.cur, `${a.id}: cur negative`).toBeGreaterThanOrEqual(0);
      expect(p.max, `${a.id}: max must be > 0`).toBeGreaterThan(0);
    }
  });
});

// ── Check/progress consistency ────────────────────────────────
describe('Achievement check/progress consistency', () => {
  it('when check() returns true, progress.cur === progress.max', () => {
    const modeStats = { quiz: 100, write: 100, tempo: 100 };
    const cases = [
      { k: 1, g: g(), m: modeStats, c: 0, id: 'first1' },
      { k: 10, g: g(), m: modeStats, c: 0, id: 'words10' },
      { k: 0, g: g({ streak: 7 }), m: modeStats, c: 0, id: 'streak7' },
    ];
    for (const tc of cases) {
      const a = ACHIEVEMENTS.find(x => x.id === tc.id)!;
      if (a.check(tc.k, tc.g, tc.m, tc.c)) {
        const p = a.progress(tc.k, tc.g, tc.m, tc.c);
        expect(p.cur, `${tc.id}: check=true but progress incomplete`).toBe(p.max);
      }
    }
  });
});
