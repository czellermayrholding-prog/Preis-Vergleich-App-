// Offline-Unterstützung: immer zuerst das Netz, bei fehlender Verbindung der Cache.
const CACHE = 'smart-pricing-v4';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-180.png', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (u.origin === 'https://cdnjs.cloudflare.com') { // PDF-Leser: einmal laden, dann offline
    e.respondWith(caches.match(e.request).then(c => c || fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(ca => ca.put(e.request, copy)); return r; })));
    return;
  }
  if (u.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: true })));
});
