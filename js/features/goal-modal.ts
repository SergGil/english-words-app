// English Words App — js/features/goal-modal.ts
// Daily goal modal listeners
import { getGameData, saveGameData } from './game.ts';

document.getElementById('goal-set-btn')!.addEventListener('click', function(e) {
  e.stopPropagation();
  const d   = getGameData();
  const inp = document.getElementById('goal-input') as HTMLInputElement;
  inp.value = String(d.goalMax || 20);
  document.getElementById('goal-modal')!.style.display = 'flex';
  setTimeout(() => { inp.focus(); inp.select(); }, 50);
});

document.getElementById('goal-modal-cancel')!.addEventListener('click', function() {
  document.getElementById('goal-modal')!.style.display = 'none';
});

document.getElementById('goal-modal-ok')!.addEventListener('click', function() {
  const inp = document.getElementById('goal-input') as HTMLInputElement;
  const val = parseInt(inp.value);
  if (val >= 1 && val <= 500) {
    const d = getGameData();
    d.goalMax = val;
    saveGameData(d);
    (window as any).renderGameBar?.();
    document.getElementById('goal-modal')!.style.display = 'none';
  } else {
    inp.focus();
    inp.classList.add('shake');
    setTimeout(() => inp.classList.remove('shake'), 400);
  }
});

document.getElementById('goal-input')!.addEventListener('keydown', function(e) {
  if (e.key === 'Enter')  document.getElementById('goal-modal-ok')!.click();
  if (e.key === 'Escape') document.getElementById('goal-modal')!.style.display = 'none';
});

document.getElementById('goal-modal')!.addEventListener('click', function(e) {
  if (e.target === this) (this as HTMLElement).style.display = 'none';
});
