const expectedCaches = 'github-blog2'
const staticAssets = [
  '../css/style-ekwoxhjnfam8gciuujsfom5ofhradhfjdms8iv9cjkibudczw65mawlvatoi.min.css',
  '../js/script-xjhpv6yi5aflls7obwi3czkeoscfvzkpbir4txyubxjpdqlzwinzfz6ue38c.min.js'
]

self.addEventListener('install', async e => {
  const cache = await caches.open(expectedCaches)
  await cache.addAll(staticAssets)
  return self.skipWaiting()
})

self.addEventListener('activate', e => {
  self.clients.claim()
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!expectedCaches.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log(`${expectedCaches} now ready to handle fetches!`);
    })
  );
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
  const cache = await caches.open(expectedCaches)
  const cached = await cache.match(req)
  return cached || fetch(req)
}

async function networkAndCache(req) {
  const cache = await caches.open(expectedCaches)
  try {
    const fresh = await fetch(req)
    await cache.put(req, fresh.clone())
    return fresh
  } catch (e) {
    const cached = await cache.match(req)
    return cached
  }
}
