// English Words App — js/core/swipe.ts
// Touch swipe gestures on the flashcard

(function() {
  const card   = document.getElementById('card')!;
  const shRight = document.getElementById('sh-right')!;
  const shLeft  = document.getElementById('sh-left')!;
  const shUp    = document.getElementById('sh-up')!;

  let startX = 0, startY = 0, startTime = 0;
  let isDragging = false;

  const THRESHOLD = 60;
  const MAX_TIME  = 400;

  card.addEventListener('touchstart', function(e) {
    const t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
    startTime = Date.now();
    isDragging = true;
  }, { passive: true });

  card.addEventListener('touchmove', function(e) {
    if (!isDragging) return;
    const t   = e.touches[0];
    const dx  = t.clientX - startX;
    const dy  = t.clientY - startY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (absDx > 20 && absDx > absDy) {
      shRight.className = 'swipe-hint-right' + (dx > 0 ? ' show' : '');
      shLeft.className  = 'swipe-hint-left'  + (dx < 0 ? ' show' : '');
      shUp.className    = 'swipe-hint-up';
      card.style.transition = 'none';
      card.style.transform  = 'translateX(' + (dx * 0.25) + 'px) rotate(' + (dx * 0.02) + 'deg)';
    } else if (absDy > 20 && absDy > absDx && dy < 0) {
      shUp.className    = 'swipe-hint-up show';
      shRight.className = 'swipe-hint-right';
      shLeft.className  = 'swipe-hint-left';
      card.style.transition = 'none';
      card.style.transform  = 'translateY(' + (dy * 0.2) + 'px)';
    }
  }, { passive: true });

  card.addEventListener('touchend', function(e) {
    if (!isDragging) return;
    isDragging = false;

    shRight.className = 'swipe-hint-right';
    shLeft.className  = 'swipe-hint-left';
    shUp.className    = 'swipe-hint-up';

    const t  = e.changedTouches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;
    const dt = Date.now() - startTime;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    card.style.transition = '';
    card.style.transform  = '';

    if (dt > MAX_TIME) return;

    if (absDx > THRESHOLD && absDx > absDy * 1.5) {
      if (dx > 0) {
        card.classList.add('swipe-right');
        setTimeout(function() {
          card.classList.remove('swipe-right');
          document.getElementById('btn-know')!.click();
        }, 220);
      } else {
        card.classList.add('swipe-left');
        setTimeout(function() {
          card.classList.remove('swipe-left');
          document.getElementById('btn-next')!.click();
        }, 220);
      }
    } else if (absDy > 40 && dy < 0 && absDy > absDx * 1.2) {
      if (!(window as any).flipped) {
        card.classList.add('swipe-up');
        setTimeout(function() {
          card.classList.remove('swipe-up');
          (window as any).flipped = true;
          document.getElementById('wtransl')!.className = 'transl show';
          document.getElementById('exua')!.className    = 'ex-ua show';
        }, 200);
      }
    }
  }, { passive: true });
})();
