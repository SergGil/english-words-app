import { describe, it, expect } from 'vitest';
import { lev } from '../../js/core/distance.ts';

describe('lev() — Levenshtein distance', () => {
  it('identical strings → 0', () => {
    expect(lev('hello', 'hello')).toBe(0);
  });

  it('empty string vs non-empty → length of the other', () => {
    expect(lev('', 'abc')).toBe(3);
    expect(lev('abc', '')).toBe(3);
  });

  it('single substitution → 1', () => {
    expect(lev('cat', 'bat')).toBe(1);
    expect(lev('kitten', 'sitten')).toBe(1);
  });

  it('single insertion → 1', () => {
    expect(lev('work', 'works')).toBe(1);
    expect(lev('recieve', 'receive')).toBe(2); // 2 swaps
  });

  it('single deletion → 1', () => {
    expect(lev('works', 'work')).toBe(1);
  });

  it('typical typo tolerance (±1)', () => {
    expect(lev('teh', 'the')).toBeLessThanOrEqual(2);
    expect(lev('recieve', 'receive')).toBeLessThanOrEqual(2);
  });

  it('completely different strings', () => {
    expect(lev('abc', 'xyz')).toBe(3);
  });

  it('case sensitive', () => {
    expect(lev('Hello', 'hello')).toBe(1);
  });
});
