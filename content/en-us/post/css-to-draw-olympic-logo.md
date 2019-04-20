---
title: "使用CSS绘制奥运五环标志"
slug: "Css-to-Draw-Olympic-Logo"
date: 2018-11-01T22:56:26+08:00
author: allen
categories:
- Front-End
tags:
- css
keywords:
- olympic-logo
- css
disqusIdentifier: 1541084186
#thumbnailImage: //example.com/image.jpg
---

{{< alert danger >}}
  This article was not translated to English, It will be done in few days. It would be nice if you can help me to translate.
{{< /alert >}}

一个偶然的对话，谈到知道如何使用CSS绘制奥运五环吗？

<!--more-->

第一反应是使用`border-radius: 50%`再加上`z-index`设置层叠关系不久可以了吗？

然而，怎么可能会说这么常见的问题呢？

稍加思考，原来他的层级不是叠加，而是有重叠的部分：

![ifLjMV.jpg](https://s1.ax1x.com/2018/11/01/ifLjMV.jpg)

所以单纯使用`z-index`并不能达到效果。

想到之前看到的一篇文章，如何实现元素穿插的效果：
https://css-tricks.com/1-element-css-rainbow-gradient-infinity/

其中的一个demo:

{{< codepen pen="MGqgyM" user="thebabydino" theme="dark">}}

此处实现元素穿插效果的方式为添加`transform:rotate`样式。

以此为基础，为每个圆环添加`transform: rotateY( -1deg | 1deg)`就可以写出五环效果：

{{< jsfiddle 35muv9ar >}}


{{< reward >}}
