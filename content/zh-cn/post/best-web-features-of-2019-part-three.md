---
title: "2019年Web开发中值得关注的新特性(3/4)"
slug: "Best-Web-Features-of-2019-Part-Three"
date: 2019-12-28T16:05:15+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
disqusIdentifier: 1577520315
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

上期分享了4个2019值得关注的新特性，今天继续分享4个：backdrop-filter, allSettled, media keys, background fetch。

<!--more-->

## backdrop-filter

> backdrop-filter CSS 属性可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。 因为它适用于元素背后的所有元素，为了看到效果，必须使元素或其背景至少部分透明。

与filter不同，filter是应用在元素本身上的效果，而backdrop-filter则是相当于为元素增加一个背景。意味着如果此时元素本身已经有一个纯色背景，那么就看不出效果了，通常情况元素都是无背景，或背景透明度不是1。

demo: 
{{< codepen pen="ZEYJKmR" user="justforuse" theme="dark">}}

支持度方便自然是比较差的：
{{< embed-caniuse mdn-css_properties_backdrop-filter >}}

## allSettled

这是属于`Promise`对象的一个新方法。

想一下ES6中Promise的`all`方法，[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)：

> Promise.all(iterable) 方法返回一个 Promise 实例，此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果。

而allSettled方法则是会等待所有promise状态都改变（无论成功或者失败）时回调完成(resolve)。

二者比较：

![image](https://user-images.githubusercontent.com/11868477/71541232-a9dbb880-2990-11ea-8a47-9d649930880f.png)

需要注意的时，即便allSettled所有promise都失败，那么依旧会执行resolve方法：

![image](https://user-images.githubusercontent.com/11868477/71541424-9aaa3a00-2993-11ea-9110-0bdf5dd75bcb.png)

[allSettled文档参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
{{< gad-in-article >}}

## media keys

可以监听外接设备的多媒体控制行为，比如键盘通常会有播放、停止、上一曲、下一曲的按键。

一开始可能会想，用现有的按键事件处理不可以吗？但这仅是当前网页处于聚焦状态才可以，这个API提供了系统层面的控制，类似音乐播放软件可以全局响应播放事件。

![image](https://user-images.githubusercontent.com/11868477/71541594-83b91700-2996-11ea-812f-56efd2191a87.png)

想体验这个首先要开启浏览器相关设置：`chrome://flags/#hardware-media-key-handling`

其实现在Youtube就已经增加了这项功能，有条件的朋友可以试一下。或者访问https://googlechrome.github.io/samples/media-session/ 这个示例地址体验。

## background fetch

第一眼还以为是什么为CSS提供背景获取的功能。。其实翻译应该是后台下载，那为嘛不叫background download呢？🙄

这个功能为移动端网页提供了后台下载的功能，可以给出通知栏提示，这些都需要Service Worker来配合实现。要在PWA应用中才可以。

移动端浏览器下载和PWA下载的对比：

{{< youtube eLfgf2ZvFpo >}}

Google关于此功能的介绍：https://developers.google.com/web/updates/2018/12/background-fetch


{{< gad-in-article >}}

## 结束语

和上期一样，依旧是两个web端的新特性，两个和系统功能有交互的功能。本期胜出的是`background fetch`，确实，相比其他，这个功能普及开可以为现有的应用带来很大便利。

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< youtube eLfgf2ZvFpo >}} -->
<!-- {{< alert warning >}}

xxx
{{< /alert >}} -->
{{< reward >}}
