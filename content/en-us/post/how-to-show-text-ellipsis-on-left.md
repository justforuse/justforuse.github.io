---
title: "How to Show Text Ellipsis on Left"
slug: "How-to-Show-Text-Ellipsis-On-Left"
date: 2019-08-25T18:05:04+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
disqusIdentifier: 1566727504
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

In general, when text string is out of limit, we can use `text-overflow: ellipsis` to show ellipsis, but what is we want set ellipsis on left?
<!--more-->


{{< gad-in-article >}}

Only one css attribute: `direction: rtl;`

Demo:
![image](https://user-images.githubusercontent.com/11868477/63649032-09b81d80-c76b-11e9-877e-44f8f96f5c5f.png)

Docs: https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction

>The direction CSS property sets the direction of text, table columns, and horizontal overflow. Use rtl for languages written from right to left (like Hebrew or Arabic), and ltr for those written from left to right (like English and most other languages).

Codepen demo:
{{< codepen pen="dybvpJM" user="justforuse" theme="dark">}}



<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
