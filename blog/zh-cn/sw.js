const cacheName = 'github-blog'
const staticAssets = [
  './index.html',
  '../css/style-zeiwctigkogtvpvj0egasslli0f0ds0fgqxfmddzssy3wjlw6oz5buiywhrb.min.css',
  '../js/script-jolqrkyg17dxydltbpg3rnxckzpon1cph80fa4u74kx2pv6cgo6wwkgyuqqo.min.js'
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
