---
title: "如何在左侧显示文本溢出省略号"
slug: "How-to-Show-Text-Ellipsis-on-Left"
date: 2019-08-25T18:05:07+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
disqusIdentifier: 1566727507
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---
大多数情况下，当文本过长时以省略号作为表示就可以了，但是某些情况下，重要信息在文本末端，如何让省略号显示在左侧，从而显示重要信息呢？
<!--more-->


{{< gad-in-article >}}

其实只要加一个CSS属性就可以了： `direction: rtl;`

效果： 
![image](https://user-images.githubusercontent.com/11868477/63649032-09b81d80-c76b-11e9-877e-44f8f96f5c5f.png)

关于此属性的介绍文档：https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction

>CSS属性 direction 用来设置文本、表列水平溢出的方向。  rtl 表示从右到左 (类似希伯来语或阿拉伯语)， ltr 表示从左到右 (类似英语等大部分语言).

多行文本显示一行，并左侧显示省略号：
{{< codepen pen="dybvpJM" user="justforuse" theme="dark">}}


<!-- {{< embed-caniuse css-placeholder-shown >}} -->

<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
