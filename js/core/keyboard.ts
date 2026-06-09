// English Words App — js/core/keyboard.ts
// Keyboard shortcuts for flashcard navigation

document.addEventListener('keydown', function(e) {
  const tag = (document.activeElement as HTMLElement).tagName;
  if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
  if ((e.target as Element).closest('#modal-overlay')) return;

  const showTransl = () => {
    (window as any).flipped = true;
    document.getElementById('wtransl')!.className = 'transl show';
    document.getElementById('exua')!.className    = 'ex-ua show';
  };

  if (e.code === 'Space') {
    e.preventDefault();
    if (!(window as any).flipped) showTransl();
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
    if (!(window as any).flipped) showTransl();
  }
});
