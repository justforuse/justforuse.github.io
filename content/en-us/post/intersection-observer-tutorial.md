---
title: "Intersection Observer Tutorial"
slug: "Intersection-Observer-Tutorial"
date: 2019-08-07T23:40:42+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- IntersectionObserver
disqusIdentifier: 1565192442
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

IntersectionObserver? What is this?

<!--more-->

Imagine these situations: scroll bottom to load new data, image lazy load, emphasize new content when appears on the viewport.

These situations are similar, they all detect whether some specific is shown on the viewport.

We already know that we can use `getBoundingClientRect()` or other methods to get element's current position, but with `IntersectionObserver`, we can do it more elegantly.

{{< gad-in-article >}}

Usage:

Apparently, we need elements to be detected.

What I do is when element appears on the viewport, add a animation to it.


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

Online demo:

{{< codepen pen="QeQRRR" user="justforuse" theme="dark">}}


Compatibility is not bad except IE

{{< embed-caniuse intersectionobserver >}}

Docs:
https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API

{{< youtube _5Bu3JY-ZHc >}}

{{< reward >}}
