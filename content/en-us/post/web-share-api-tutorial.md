---
title: "Web Share API Tutorial"
slug: "Web-Share-Api-Tutorial"
date: 2019-08-27T23:49:49+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
- web-share-api
disqusIdentifier: 1566920989
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

Now, broswer can share items as APP, using Web Share API
<!--more-->

API is pretty simple, use `navigator.share` to detect browser ability, use the same way as Promise.

```js
if (navigator.share) {
  navigator
    .share({
      title: "Share my blog",
      text: "Web development tutorial blogs",
      url: "https://justforuse.github.io/blog/en-us/"
    })
    <!-- select item callback -->
    .then(() => console.log("thanks for share"))
    <!-- cancel share callback -->
    .catch(error => console.log("error", error));
}
```

{{< gad-in-article >}}

Online demo, access with Chrome with mobile:

{{< codepen pen="aboWyzR" user="justforuse" theme="dark">}}

But its compatibility is bad now, just about 45% around the world.

{{< embed-caniuse web-share >}}

{{< reward >}}
