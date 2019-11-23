---
title: "为你的网站增加PWA支持"
slug: "Add-Pwa-Support-to-Website"
date: 2019-11-16T23:07:04+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- pwa
- js
disqusIdentifier: 1573916824
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

> Progressive Web App, 简称 PWA，是提升 Web App 的体验的一种新方法，能给用户原生应用的体验。

可以发现，现在各大应用都不满足存在于手机浏览器中，或者选择开发安卓和IOS端应用，或者选择寄生在微信小程序这一类平台上；

PWA可以帮助我们的web应用安装在用户应用首页，而不仅是一个浏览器书签。

一个实例：为你的Github Pages应用增加PWA支持

<!--more-->

PWA技术借助Service Worker（简称SW）实现，什么是SW，可以理解为浏览器和网络之间的一个中间层，意味着我们可以对请求进行拦截返回自定义结果，也可以缓存网路返回存储本地。添加`service-worker.js`，我们的PWA应用才真正有了离线能力。

除了SW，还需要增加`manifest.json`文件，我们应用的配置项就在这里，比如应用标题，应用图标，应用主题色等。。

首先，我们先来完成我们的`manifest.json`：

在线生成模板：https://app-manifest.firebaseapp.com/

manifest各字段解释参考文档： https://lavas.baidu.com/pwa/engage-retain-users/add-to-home-screen/introduction

{{< gad-in-article >}}

分享一下我的配置：

```json
{
  "name": "J Blog",
  "short_name": "justforuse's github blog",
  "theme_color": "#010411",
  "background_color": "#0a1b2f",
  "display": "standalone",
  "start_url": "./index.html",
  "icons": [
    {
      "src": "../res/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "../res/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "../res/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "../res/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "../res/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "../res/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "../res/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "../res/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "splash_pages": null
}
```

都是比较随意的配置😂。。

接下来是SW的配置：

```js
if('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw-v2.js')
    .then((registration) => {
      console.log('Service Worker Registered')
      registration.update()
      console.log('Service Worker Updated')
    })
}
```

首先是浏览器能力检测，注册SW成功后再执行一遍更新操作。

下面是SW的配置，主要在于SW缓存策略。

```js
const expectedCaches = 'github-blog2'
const staticAssets = [
  '../css/style-zeiwctigkogtvpvj0egasslli0f0ds0fgqxfmddzssy3wjlw6oz5buiywhrb.min.css',
  '../js/script-jolqrkyg17dxydltbpg3rnxckzpon1cph80fa4u74kx2pv6cgo6wwkgyuqqo.min.js'
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
```

{{< gad-in-article >}}

缓存策略有很多种，对于博客类文字类网站，我们这里就粗暴的全部缓存下来，如此，只要我们访问过一篇文章，或一个页面，那么下次即使处于断网状态，我们依旧可以正常阅读，而不是一个断网提示，大大提升了用户体验。

感兴趣可以在本站体验PWA技术，如果你正在使用PC浏览，那么可以手机扫码访问我的主页，注意使用手机Chrome浏览器打开才能看到：

![image](https://user-images.githubusercontent.com/11868477/69481686-4ec51c00-0e4e-11ea-9aae-ff4d887b167e.png)

如果你正在移动端阅读，不妨使用手机Chrome访问此页面。

在右上角菜单内选择添加到主屏幕即可体验！

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
