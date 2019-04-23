---
title: "制作Supreme风格图片"
slug: "Supreme-Image"
date: 2018-12-08T16:05:42+08:00
author: allen
categories:
- Front-End
tags:
- css
keywords:
- css
- filter
- supreme
disqusIdentifier: 1544256342
#thumbnailImage: //example.com/image.jpg
---

{{< alert danger >}}
  This article was not translated to English, It will be done in few days. It would be nice if you can help me to translate.
{{< /alert >}}

最近被本山大叔鬼畜洗脑了😂：https://www.bilibili.com/video/av19390801?from=search&seid=2488280777914879673 

supreme风格图片也是土潮土潮的，所以就来做一个sp风格图片生成器吧~

<!--more-->

{{< gad-in-article >}}

sp风格图片需要使用些CSS filter属性，https://developer.mozilla.org/en-US/docs/Web/CSS/filter 这里使用grayscale 和blur属性，即灰度和模糊度。

还需要制作supreme图片，使用PhotoShop，不要用PS😄

另外还要有设置logo位置、大小、透明度的功能，这些都是用input type为range的控件实现 https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range

- 使用Vue做数据绑定
- 使用[html2canvas库](https://github.com/niklasvh/html2canvas)保存图片（但是无法保存图片的灰度和模糊，需要手动截图。。）

github地址： https://github.com/justforuse/supreme-image

在线生成网址： https://justforuse.github.io/supreme-image/

一些示例图片

![在这里插入图片描述](https://raw.githubusercontent.com/justforuse/supreme-image/master/demo2.png)

![在这里插入图片描述](https://raw.githubusercontent.com/justforuse/supreme-image/master/demo1.png)

{{< reward >}}
