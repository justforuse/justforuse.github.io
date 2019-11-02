---
title: "IOS下多个webview间localStorage未同步的问题"
slug: "Ios-Localstorage-Seems-Not-Sync"
date: 2019-11-02T23:52:51+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
- ios
- localStorage
- webview
disqusIdentifier: 1572709971
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

使用hybrid方式开发APP时，发现IOS下的bug很多，仿佛回到了IE的时代，也可能是未遵循IOS开发规范造成的，最近遇到过localStorage在页面跳转时偶尔出现不同步的问题。

<!--more-->

APP内的网页都是套在webview内部的，某个项目采用了多页开发的方式，页面间的数据传递使用了localStorage方式，当从A页面跳到页面B后，B页面做了些修改然后跳回A页面，A页面取localStorage值的时候**偶尔**出现还是上个值的情况。

经过一系列的排查。。

开始以为是页面回调函数未生效？ ❌

B页面值写入未成功？❌

{{< gad-in-article >}}

最后发现A页面回调方法中取到的localStorage值和实际localStorage值不同步，加个setTimeout方法就可以了。。

这个问题奇怪在它不是必现的现象，即便加了setTimeout方法我们也不能保证100%正确，需要IOS关于localStorage的详细说明文档。

相关的问题讨论：

https://stackoverflow.com/questions/36332208/two-wkwebviews-share-local-storage-but-only-after-restart

https://www.jianshu.com/p/8570221c608d

如果有更多信息欢迎评论一起讨论👇

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
