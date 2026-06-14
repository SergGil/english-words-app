import { describe, it, expect } from 'vitest';
import { _getLobbyUIData, _cancelRoom } from '../../js/features/duel.ts';
import { state } from '../../src/state.ts';

describe('duel lobby UI state (Фаза 9/6, state.duelLobbyUI)', () => {
  it('_getLobbyUIData() reflects state.duelLobbyUI default', () => {
    expect(_getLobbyUIData()).toBe(state.duelLobbyUI);
    expect(_getLobbyUIData().msg.visible).toBe(false);
    expect(_getLobbyUIData().waiting.visible).toBe(false);
    expect(_getLobbyUIData().joinRowVisible).toBe(true);
    expect(_getLobbyUIData().createBtn.disabled).toBe(false);
    expect(_getLobbyUIData().tournBtn4.errorLabel).toBeNull();
    expect(_getLobbyUIData().tournBtn8.errorLabel).toBeNull();
  });

  it('_cancelRoom() resets waiting banner, join row and button disabled-states', () => {
    state.duelLobbyUI.waiting = { visible: true, roomCode: 'ABC-123', modeLabel: 'Quiz' };
    state.duelLobbyUI.joinRowVisible = false;
    state.duelLobbyUI.createBtn.disabled = true;
    state.duelLobbyUI.asyncBtn.disabled = true;
    state.duelLobbyUI.msg = { visible: true, text: 'oops', challenge: null };

    _cancelRoom();

    expect(state.duelLobbyUI.waiting.visible).toBe(false);
    expect(state.duelLobbyUI.joinRowVisible).toBe(true);
    expect(state.duelLobbyUI.createBtn.disabled).toBe(false);
    expect(state.duelLobbyUI.asyncBtn.disabled).toBe(false);
    expect(state.duelLobbyUI.msg.visible).toBe(false);
  });
});
