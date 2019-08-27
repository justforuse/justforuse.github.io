---
title: "Web Share API使用教程"
slug: "Web-Share-Api-Tutorial"
date: 2019-08-27T23:49:51+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
- web-share-api
disqusIdentifier: 1566920991
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---
浏览器也可以像原生APP一样，调用分享功能。Web Share API!

<!--more-->

提供的方法很简洁，使用`navigator.share`判断浏览器能力，调用方式为Promise方式：

```js
if (navigator.share) {
  navigator
    .share({
      title: "Share my blog",
      text: "Web development tutorial blogs",
      url: "https://justforuse.github.io/blog/en-us/"
    })
    <!-- 选择某个分享方式回调 -->
    .then(() => console.log("thanks for share"))
    <!-- 取消分享回调 -->
    .catch(error => console.log("error", error));
}
```

{{< gad-in-article >}}

在线示例，建议使用手机端Chrome浏览器访问：

{{< codepen pen="aboWyzR" user="justforuse" theme="dark">}}

但目前这个API的支持度很低（全球范围只有45%左右）：

{{< embed-caniuse web-share >}}

<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
