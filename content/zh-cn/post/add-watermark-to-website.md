---
title: "为网站添加水印图片"
slug: "Add-Watermark-to-Website"
date: 2019-04-24T23:01:47+08:00
author: allen
categories:
- Front-End
tags:
- html
- css
- watermark
keywords:
- watermark
- website
- security
disqusIdentifier: 1556118107
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

有时为了避免网站信息随意被别人使用，可以在网站整体背景添加水印，当然这主要是针对截图类的信息，如何快速为网站添加水印呢？

<!--more-->

{{< gad-in-article >}}

首先我们要准备一张图片作为水印背景图`watermark.png`。

要让这样图片完全覆盖视口区域只需要添加如下CSS代码：

```css
body::after {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url('./watermark.png');
  opacity: 0.3;
  pointer-events: none;
}
```

关键点在于`pointer-events`这个属性。

>它的作用指定在什么情况下 (如果有) 某个特定的图形元素可以成为鼠标事件的 target。

> none表示鼠标事件“穿透”该元素并且指定该元素“下面”的任何东西

示例截图：

![](/images/2019/4/watermark-demo.png)

在线示例:

{{< jsfiddle j897hmkL >}}



{{< reward >}}
