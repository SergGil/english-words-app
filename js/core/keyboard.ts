// English Words App — js/core/keyboard.ts
// Keyboard shortcuts for flashcard navigation
import { state } from '../../src/state.ts';
import { setFlipped } from './card-engine.ts';

document.addEventListener('keydown', function(e) {
  const tag = (document.activeElement as HTMLElement).tagName;
  if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
  if ((e.target as Element).closest('#modal-overlay')) return;

  const showTransl = () => {
    setFlipped(true);
    document.getElementById('wtransl')!.className = 'transl show';
    document.getElementById('exua')!.className    = 'ex-ua show';
  };

  if (e.code === 'Space') {
    e.preventDefault();
    if (!state.flipped) showTransl();
    else document.getElementById('btn-next')!.click();
  } else if (e.code === 'Enter') {
    e.preventDefault();
    document.getElementById('btn-know')!.click();
  } else if (e.code === 'ArrowRight') {
    e.preventDefault();
    document.getElementById('btn-next')!.click();
  } else if (e.code === 'ArrowLeft') {
    e.preventDefault();
    document.getElementById('btn-prev')!.click();
  } else if (e.code === 'KeyF') {
    e.preventDefault();
    if (!state.flipped) showTransl();
  }
});
