---
title: 'IntersectionObserver简介'
slug: 'Intersection-Observer-Tutorial'
date: 2019-08-07T23:40:44+08:00
author: allen
categories:
  - Front-End
tags:
  - js
keywords:
  - IntersectionObserver
disqusIdentifier: 1565192444
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

IntersectionObserver? 这是干什么的？

<!--more-->

想象一下这个场景：页面滚动到底部需要加载新数据、图片懒加载、新内容显示在窗口时添加动画突出显示。。。

这些常见的需求都有一个共同点，就是监测浏览器当前滚动位置，或者说某个特定元素出现在屏幕上。

以往我们可能会根据元素定位来监测，比如`getBoundingClientRect()`这类的方法获取，那么有了`IntersectionObserver`，我们就可以更优雅的实现：

{{< gad-in-article >}}

使用方法：

最基本的，需要指定要被检测的元素和回调方法，并添加监测。

我们这里做的是当元素出现在可以区域内时，添加动画。

```js
const sections = document.querySelectorAll('span')
const options = {
  // thresholds: [1]
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = 'anim .4s forwards'
    } else {
      entry.target.style.animation = 'none'
    }
  })
}, options)

sections.forEach(section => observer.observe(section))
```

示例：

{{< codepen pen="QeQRRR" user="justforuse" theme="dark">}}

看过这个示例有没有兴趣使用这个方法实现一遍之前提过的常见场景呢？😝

兼容性除了IE下，兼容下都不错。

{{< embed-caniuse intersectionobserver >}}

相关文档：
https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API

{{< youtube _5Bu3JY-ZHc >}}

{{< reward >}}
