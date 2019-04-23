---
title: "color-adjust的简单用法"
slug: "Color-Adjust"
date: 2018-08-19T23:35:16+08:00
author: allen
categories:
- Front-End
tags:
- css
keywords:
- print
disqusIdentifier: 1534692916
#thumbnailImage: //example.com/image.jpg
---

{{< alert danger >}}
  This article was not translated to English, It will be done in few days. It would be nice if you can help me to translate.
{{< /alert >}}

一个用户打印时的css属性，一般情况下设置背景色的时候打印时会被忽略，如果想打印的时候也将背景色打印出来就可以使用这个属性，用法：

<!--more-->
```css
color-adjust: exact;
-webkit-print-color-adjust: exact;
```

示例（在代码地址 <kbd>Ctrl</kbd>+<kbd>P</kbd>查看效果）：
{{< jsfiddle jtr25hL0 >}}

{{< reward >}}
