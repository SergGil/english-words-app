import { describe, it, expect } from 'vitest';
import { _getDuelScreen } from '../../js/features/duel.ts';
import { state } from '../../src/state.ts';

describe('duel screen state (Фаза 7.4-B / 9, state.duelScreen)', () => {
  it('_getDuelScreen() reflects state.duelScreen default', () => {
    expect(_getDuelScreen()).toBe(state.duelScreen);
    expect(_getDuelScreen()).toBe('lobby');
  });
});
