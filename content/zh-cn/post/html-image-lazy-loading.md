---
title: "浏览器增加图片懒加载的原生支持"
slug: "Html-Image-Lazy-Loading"
date: 2019-09-26T22:40:13+08:00
author: allen
categories:
- Front-End
tags:
- html
keywords:
- image-lazy-loading
disqusIdentifier: 1569508813
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

图片的懒加载一直都是网页性能优化的重要一环，减少不必要的图片请求，可以有效提升网页加载速度，现在，Chrome浏览器增加了这项功能的原生支持。

<!--more-->

使用方式很直观，就是在`img`标签上增加了`loading="lazy"`属性，浏览器会自动判断是否需要懒加载图片。

{{< gad-in-article >}}

在线示例：
{{< codepen pen="oNvOzmY" user="justforuse" theme="dark">}}

打开控制台会发现，随着网页滚动，位于较下方的图片才开始加载。

除了支持图片的懒加载，在iframe上应用也可以懒加载内嵌网页。

参考链接：https://web.dev/native-lazy-loading

由于属性比较新，目前兼容性较差，需要做兼容处理
{{< embed-caniuse loading-lazy-attr >}}


<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
