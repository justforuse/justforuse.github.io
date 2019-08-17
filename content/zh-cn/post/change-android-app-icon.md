---
title: "自定义Android应用图标"
slug: "Change-Android-App-Icon"
date: 2019-08-16T23:07:24+08:00
author: allen
categories:
- Front-End
tags:
- android
- google play
keywords:
- android
- app icon
disqusIdentifier: 1565968044
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

上篇文章说到，我们成功发布了自己的应用到Google Play上。但实际下载发现图标是默认的安卓Logo，所以我们要修改它，与Play保持一致。

<!--more-->

如何修改应用图标？👉 https://stackoverflow.com/a/26615948/5760654

Android Studio 顶部菜单项：File -> New -> Image Asset
![image](https://user-images.githubusercontent.com/11868477/63177703-12c63200-c07b-11e9-8319-fa8f09c41e36.png)

选择前景图和背景图，可以是颜色或者文字之类的，然后选择缩放比例，调整至合适的大小。

![image](https://user-images.githubusercontent.com/11868477/63177661-fc1fdb00-c07a-11e9-8ad0-77efc982cf01.png)

{{< gad-in-article >}}

完成后会在res目录下自动生成一系列的图片：

![image](https://user-images.githubusercontent.com/11868477/63215031-09a89400-c153-11e9-8c3c-e20143a2a18f.png)


在本地测试通过后，准备发布更新。

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
{{< reward >}}
