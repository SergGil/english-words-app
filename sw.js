var CACHE = 'ew-v16';
var STATIC = [
  './css/styles.css',
  './lib/lzstring.js',
  './lib/jszip.min.js',
  './js/config.js',
  './data/words.js',
  './data/words_es.js',
  './data/illustrations.js',
  './data/categories.js',
];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(STATIC); }).catch(function(){}));
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }));
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith('http')) return;

  var url = e.request.url;

  // Зовнішні API (Pixabay, Wikipedia, ElevenLabs тощо) — не кешуємо
  var EXTERNAL = ['pixabay.com', 'wikipedia.org', 'wikimedia.org', 'api.fakeyou.com',
                  'streamelements.com', 'elevenlabs.io', 'storage.googleapis.com/vocodes'];
  if (EXTERNAL.some(function(d){ return url.includes(d); })) return;

  // HTML — завжди мережа (свіжий контент), fallback на кеш якщо офлайн
  if (e.request.mode === 'navigate' || url.includes('.html')) {
    e.respondWith(
      fetch(e.request).then(function(res) {
        if (res && res.status === 200) {
          var clone = res.clone(); // клонуємо ДО повернення
          caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
        }
        return res;
      }).catch(function() {
        return caches.match(e.request);
      })
    );
    return;
  }

  // JS/CSS/Data — cache-first, оновлення у фоні
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var fresh = fetch(e.request).then(function(res) {
        if (res && res.status === 200 && res.type !== 'opaque') {
          var clone = res.clone(); // клонуємо ДО повернення
          caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
        }
        return res;
      }).catch(function() { return cached; });
      return cached || fresh;
    })
  );
});
