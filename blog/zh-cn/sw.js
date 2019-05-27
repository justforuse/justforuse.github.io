const cacheName = 'github-blog'
const staticAssets = [
  './index.html',
  '../css/style-pjjgx7hrb8vv9pbskfof6viaui7zjvehwpy2o5nyefvuqo2ndj41zgqa0s2l.min.css',
  '../js/script-j13y8kxuakdr6f9htwrtc8jglq2lwuyofwkjepswsfswklgtbamt4qwawx6w.min.js'
]

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName)
  await cache.addAll(staticAssets)
  return self.skipWaiting()
})

self.addEventListener('activate', e => {
  self.clients.claim()
})

self.addEventListener('fetch', async e => {
  const req = e.request
  const url = new URL(req.url)
  e.respondWith(networkAndCache(req))
  // if (url.origin === location.origin) {
  //   e.respondWith(cacheFirst(req))
  // } else {
  //   e.respondWith(networkAndCache(req))
  // }
})

async function cacheFirst(req) {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(req)
  return cached || fetch(req)
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName)
  try {
    const fresh = await fetch(req)
    await cache.put(req, fresh.clone())
    return fresh
  } catch (e) {
    const cached = await cache.match(req)
    return cached
  }
}
