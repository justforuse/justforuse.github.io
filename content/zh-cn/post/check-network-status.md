---
title: "js检测当前网络状态"
slug: "Check-Network-Status"
date: 2020-01-04T16:19:49+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
- network status
- online
- offline
disqusIdentifier: 1578125989
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

如何检测当前设备网络情况？浏览器提供了`navigator.onLine`的属性来检测。

<!--more-->

这里说的网络情况指的是是否联网，而不关心使用的是移动网络还是wifi，如果想检测这个类型的话可以关注`navigator.connection`方法的进展。

我们也可以监听联网状态改变的时间：

```js
window.addEventListener("offline", function(e) {alert("offline");})

window.addEventListener("online", function(e) {alert("online");})
```

{{< gad-in-article >}}

示例：（你可以打开或关闭网络查看变化）👇

{{< network-status >}}

兼容性可以说非常好了：

{{< embed-caniuse online-status >}}

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
