---
title: "ResizeObserver使用方法"
slug: "Resize-Observer-Tutorial"
date: 2020-01-04T20:20:55+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
- ResizeObserver
- 检测元素大小变化
disqusIdentifier: 1578140455
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

如何检测元素大小发生变化？

<!--more-->

没有元素会无缘无故的发生变化，可能是窗口大小发生变化，我们可以监听window的resize事件；但很多情况是由于页面元素的变化（添加，删除）引起的，这种情况处理起来就比较麻烦了，大多数情况也是通过自定义事件来处理。

{{< gad-in-article >}}

ResizeObserver提供了更直接的方法，直接监听元素的尺寸变化。

使用方式：

```js
// 定义ResizeObserver对象，并设置监听方法
const myObserver = new ResizeObserver(entries => {
  // handleResize(entries)
})

const contentEle = document.querySelector('.content')
const staticEle = document.querySelector('p')

// 添加要监听的元素
myObserver.observe(staticEle)
myObserver.observe(contentEle)
```

监听方法参数是一个数组，每个数组对象为大小发生变化的元素：

![image](https://user-images.githubusercontent.com/11868477/71765986-bc786380-2f35-11ea-8573-bde4e3b56a74.png)

由上图可以看到，每个对象都有`target`和`contentRect`属性，其中`contentRect`属性又包括`width`, `height`, `x`, `y`, `top`, `right`, `bottom`, `left`。这和`getBoundingClientRect`非常类似。

在线示例：

{{< codepen pen="MWYEdae" user="justforuse" theme="dark">}}

由于是比较新的方法，所以兼容性很差：

{{< embed-caniuse resizeobserver >}}
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
