---
title: "检测文本是否应用了text-ellipsis省略样式"
slug: "Detect-Text-Ellipsis"
date: 2018-10-23T21:03:27+08:00
author: allen
categories:
- Front-End
tags:
- js
- css
keywords:
- text-ellipsis
disqusIdentifier: 1540299807
#thumbnailImage: //example.com/image.jpg
---

{{< alert danger >}}
  This article was not translated to English, It will be done in few days. It would be nice if you can help me to translate.
{{< /alert >}}

css提供了可以省略过长文字的样式：`text-ellipsis: hidden`，那么如何检测文本是否被省略呢？

<!--more-->

如果有一个伪类，类似`:placeholder-shown`，比如：`:ellipsis-shown`，但是很现实并没有这个伪类，所以要想检测就必须使用js了。

所以只要比对文本实际长度和显示长度是否一致就可以知道是否被省略了，DOM提供了两个属性分别对应了两个长度：`scrollWidth`和`offsetWidth`。

示例地址（盗用别人的🙈）

{{< codepen wadKQB>}}


{{< reward >}}
