---
title: "prefers-color-scheme介绍"
slug: "Prefers-Color-Scheme-Tutorial"
date: 2019-08-04T10:41:53+08:00
author: allen
categories:
- Front-End
tags:
- css
keywords:
- js
- prefers-color-scheme
- dark mode
disqusIdentifier: 1564886513
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

暗色模式？很多APP都具备这个功能，Chrome从76版本也开始增加对暗色模式的支持。

<!--more-->

准确来说，并不是chrome增加了暗色模式，而是在系统切换为暗色模式时，chrome增加对相应模式的响应；从浏览器外观来说，Chrome Store提供了很多种主题供用户选择。

关于Chrome76的更新介绍：https://developers.google.com/web/updates/2019/07/nic76

{{< gad-in-article >}}

系统如何开启暗色模式呢？

以Windows为例：

![image](https://user-images.githubusercontent.com/11868477/62418847-d7545c80-b6a5-11e9-945e-55999308a807.png)

浏览器借助媒介查询语法来检测当前系统的主题，语法：

```css
@media (prefers-color-scheme: dark) {
  ...
}
```

`prefer-color-scheme`支持三个值：`dark`,`light`,`no-preference`。

示例：

{{< codepen pen="voebow" user="justforuse" theme="dark">}}

视频教程(youtube)：

{{< youtube kVKuH5H7nuA >}}

这是个非常棒的特性，比起手动切换应用主题色，我们可以根据用户喜好自动切换，成本更低，体验上会更好。

更多参考：
https://web.dev/prefers-color-scheme

https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme
<!-- {{< embed-caniuse css-placeholder-shown >}} -->
{{< reward >}}
