import { describe, it, expect, beforeEach } from 'vitest';
import { addDays, sm2Update } from '../../js/core/srs.ts';
import { state } from '../../src/state.ts';

// Reset state before each test
beforeEach(() => {
  state.srsData = {};
  state.TODAY = '2024-01-01';
});

describe('addDays()', () => {
  it('adds days correctly', () => {
    expect(addDays('2024-01-01', 1)).toBe('2024-01-02');
    expect(addDays('2024-01-31', 1)).toBe('2024-02-01');
    expect(addDays('2024-12-31', 1)).toBe('2025-01-01');
  });

  it('adds 0 days → same date', () => {
    expect(addDays('2024-06-15', 0)).toBe('2024-06-15');
  });

  it('handles month boundaries', () => {
    expect(addDays('2024-02-28', 1)).toBe('2024-02-29'); // 2024 is leap year
    expect(addDays('2023-02-28', 1)).toBe('2023-03-01');
  });
});

describe('sm2Update() — SM-2 algorithm', () => {
  it('first correct answer: interval = 1, reps = 1', () => {
    sm2Update('apple', 4);
    const entry = state.srsData['apple'];
    expect(entry.reps).toBe(1);
    expect(entry.interval).toBe(1);
    expect(entry.due).toBe('2024-01-02');
  });

  it('second correct answer: interval = 6, reps = 2', () => {
    sm2Update('apple', 4);
    sm2Update('apple', 4);
    const entry = state.srsData['apple'];
    expect(entry.reps).toBe(2);
    expect(entry.interval).toBe(6);
  });

  it('third correct answer: interval grows by EF', () => {
    sm2Update('apple', 4);
    sm2Update('apple', 4);
    sm2Update('apple', 4);
    const entry = state.srsData['apple'];
    expect(entry.reps).toBe(3);
    expect(entry.interval).toBeGreaterThan(6);
  });

  it('wrong answer resets reps to 0 and interval to 1', () => {
    sm2Update('apple', 4);
    sm2Update('apple', 4);
    sm2Update('apple', 1); // wrong
    const entry = state.srsData['apple'];
    expect(entry.reps).toBe(0);
    expect(entry.interval).toBe(1);
  });

  it('EF decreases after wrong answer, min 1.3', () => {
    // Multiple wrong answers — EF should floor at 1.3
    for (let i = 0; i < 20; i++) sm2Update('apple', 1);
    const entry = state.srsData['apple'];
    expect(entry.ef).toBeGreaterThanOrEqual(1.3);
  });

  it('new word starts with default EF 2.5', () => {
    sm2Update('apple', 4);
    const entry = state.srsData['apple'];
    // EF after one correct answer from 2.5 should be >= 2.5 (slight increase)
    expect(entry.ef).toBeGreaterThanOrEqual(2.5);
  });

  it('correct answer updates due date based on interval', () => {
    state.TODAY = '2024-03-01';
    sm2Update('test', 4); // interval=1
    expect(state.srsData['test'].due).toBe('2024-03-02');
  });

  it('creates new entry for unknown word', () => {
    expect(state.srsData['newword']).toBeUndefined();
    sm2Update('newword', 4);
    expect(state.srsData['newword']).toBeDefined();
  });
});
