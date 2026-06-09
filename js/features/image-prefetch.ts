// English Words App — js/features/image-prefetch.ts
// Background image prefetch + Pixabay key management (Settings panel)
import { loadWikiImage, _imgCache, _getPixabayKey, resetImgCache } from '../core/images.ts';
import { W } from '../../data/words.js';
import { t, wordsLabel } from './i18n.ts';

// ── Background prefetch ───────────────────────────────────────
(function() {
  let _running = false;
  let _timer: ReturnType<typeof setInterval> | null = null;
  let _pos     = 0;

  const barEl    = document.getElementById('prefetch-bar');
  const statusEl = document.getElementById('prefetch-status');
  const btnStart = document.getElementById('prefetch-start');
  const btnStop  = document.getElementById('prefetch-stop');
  const btnClear = document.getElementById('prefetch-clear');

  function cachedCount()   { return Object.keys(_imgCache).length; }
  function withImageCount(){ return Object.keys(_imgCache).filter(function(k){ return _imgCache[k]; }).length; }

  function updateUI() {
    const cached  = cachedCount();
    const withImg = withImageCount();
    const total   = W.length;
    const pct     = Math.round(cached / total * 100);
    if (barEl) barEl.style.width = pct + '%';
    if (statusEl) {
      if (_running) {
        statusEl.textContent = t('settings.prefetchLoading') + ' ' + cached + '/' + total + ' (' + withImg + ' ' + t('settings.withPhotos') + ')';
        statusEl.style.color = 'var(--accent)';
      } else if (cached >= total) {
        statusEl.textContent = t('settings.prefetchDonePrefix') + ' ' + withImg + ' ' + t('settings.prefetchImagesOf') + ' ' + total + ' ' + wordsLabel(total);
        statusEl.style.color = '#27ae60';
      } else if (cached > 0) {
        statusEl.textContent = t('settings.prefetchPaused') + ' ' + cached + '/' + total + ' (' + withImg + ' ' + t('settings.withPhotos') + ')';
        statusEl.style.color = 'var(--text3)';
      } else {
        statusEl.textContent = t('settings.prefetchReady') + ' (' + total + ' ' + wordsLabel(total) + ')';
        statusEl.style.color = 'var(--text3)';
      }
    }
    if (btnStart) btnStart.style.display = (_running || cached >= total) ? 'none' : '';
    if (btnStop)  btnStop.style.display  = _running ? '' : 'none';
    if (btnStart && cached >= total) btnStart.style.display = 'none';
  }

  function findNext() {
    while (_pos < W.length && _imgCache.hasOwnProperty(W[_pos][0])) _pos++;
    return _pos < W.length ? W[_pos][0] : null;
  }

  function fetchNext() {
    if (!_running) return;
    const word = findNext();
    if (!word) {
      _running = false;
      updateUI();
      return;
    }
    _pos++;
    loadWikiImage(word, function() {
      updateUI();
      const delay = _getPixabayKey() ? 150 : 400;
      _timer = setTimeout(fetchNext, delay);
    });
  }

  function start() {
    if (_running) return;
    _running = true;
    _pos = 0;
    updateUI();
    fetchNext();
  }

  function stop() {
    _running = false;
    if (_timer) clearTimeout(_timer!);
    updateUI();
  }

  if (btnStart) btnStart.addEventListener('click', start);
  if (btnStop)  btnStop.addEventListener('click', stop);
  if (btnClear) btnClear.addEventListener('click', function() {
    ((window as any)._showImgClearConfirm as ((cb: () => void) => void))(function() {
      stop();
      resetImgCache();
      _pos = 0;
      updateUI();
    });
  });

  window._refreshPrefetchUI = updateUI;
})();

// ── Pixabay key ───────────────────────────────────────────────
(function() {
  const inp     = document.getElementById('pixabay-key-input') as HTMLInputElement | null;
  const saveBtn = document.getElementById('pixabay-key-save')!;
  const status  = document.getElementById('pixabay-key-status')!;

  function refreshStatus() {
    const k = _getPixabayKey();
    if (k) {
      status.textContent = t('settings.pixabayKeySaved');
      status.style.color = 'var(--accent)';
      inp!.value = k.slice(0, 6) + '••••••••••••••••••••••••••';
    } else {
      status.textContent = t('settings.pixabayNoKey');
      status.style.color = 'var(--text3)';
    }
  }
  refreshStatus();
  window._refreshPixabayStatus = refreshStatus;

  saveBtn.addEventListener('click', function() {
    const val = inp!.value.trim();
    if (val && !val.includes('•')) {
      localStorage.setItem('ew_pixabay_key', val);
      resetImgCache();
    }
    refreshStatus();
  });

  document.getElementById('stats-overlay')!.addEventListener('click', function() {
    refreshStatus();
  }, { once: false });
})();
