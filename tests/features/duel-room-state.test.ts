import { describe, it, expect } from 'vitest';
import { _getGameHeaderData, _getPowerupsData, _getQuestionData } from '../../js/features/duel.ts';
import { state } from '../../src/state.ts';

describe('duel room/game core state (Фаза 7.4-B / 7, state.duelRoom)', () => {
  it('_getGameHeaderData() reflects state.duelRoom defaults', () => {
    const data = _getGameHeaderData();
    expect(data.myScore).toBe(state.duelRoom.myScore);
    expect(data.myIdx).toBe(state.duelRoom.quizIdx);
    expect(data.myTotal).toBe(state.duelRoom.quizDeck.length);
    expect(data.myFlags).toBe(state.duelRoom.myFlags);
    expect(data.oppScore).toBe(state.duelRoom.oppScore);
    expect(data.oppIdx).toBe(state.duelRoom.oppIdx);
    expect(data.oppFlags).toBe(state.duelRoom.oppFlags);
    expect(data.mode).toBe(state.duelRoom.mode);
    expect(data.bestOf).toBe(state.duelRoom.bestOf);
    expect(data.progressText).toBe(`${state.duelRoom.quizIdx + 1} / ${state.duelRoom.quizDeck.length}`);
  });

  it('_getPowerupsData() reflects state.duelRoom power-up fields', () => {
    const data = _getPowerupsData();
    expect(data.enabled).toBe(state.duelRoom.powerupsEnabled);
    expect(data.mode).toBe(state.duelRoom.mode);
    expect(data.myPowerups).toEqual(state.duelRoom.myPowerups);
    expect(data.answered).toBe(state.duelRoom.answered);
  });

  it('_getQuestionData() hint button reflects state.duelRoom.hintsLeft', () => {
    const data = _getQuestionData();
    expect(data.hintBtnDisabled).toBe(state.duelRoom.hintsLeft <= 0);
    expect(data.showHintBtn).toBe(state.duelRoom.mode === 'write');
  });
});
