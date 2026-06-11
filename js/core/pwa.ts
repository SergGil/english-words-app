// English Words App — js/core/pwa.ts
// PWA install banner (Chrome + iOS)
import { t } from '../features/i18n.ts';

(function() {
  let deferredPrompt: any = null;
  const banner = document.getElementById('pwa-banner')!;

  window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    deferredPrompt = e;
    if (!localStorage.getItem('ew_pwa_dismissed')) {
      setTimeout(function(){ banner.className = 'show'; }, 2000);
    }
  });

  document.getElementById('pwa-install')!.addEventListener('click', function() {
    banner.className = '';
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function(r: any) {
        if (r.outcome === 'accepted') localStorage.setItem('ew_pwa_dismissed', '1');
        deferredPrompt = null;
      });
    }
  });

  document.getElementById('pwa-close')!.addEventListener('click', function() {
    banner.className = '';
    localStorage.setItem('ew_pwa_dismissed', '1');
  });

  const isIOS          = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isInStandalone = (navigator as any).standalone === true;
  if (isIOS && !isInStandalone && !localStorage.getItem('ew_pwa_dismissed')) {
    setTimeout(function() {
      const _pwaText = banner.querySelector<HTMLElement>('.pwa-text');
      if (_pwaText) _pwaText.innerHTML = t('pwa.iosInstallHint');
      const installBtn = document.getElementById('pwa-install');
      if (installBtn) installBtn.style.display = 'none';
      banner.className = 'show';
    }, 2000);
  }
})();
