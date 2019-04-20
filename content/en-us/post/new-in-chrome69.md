---
title: "Chrome69更新介绍"
slug: "new-in-chrome69"
date: 2018-09-08T17:26:35+08:00
author: allen
categories:
- Front-End
tags:
- Chrome
keywords:
- chrome69
- browser
disqusIdentifier: 1536398795
#thumbnailImage: //example.com/image.jpg
---

{{< alert danger >}}
  This article was not translated to English, It will be done in few days. It would be nice if you can help me to translate.
{{< /alert >}}

Chrome已经发布10周年了！🎉🎉

Chrome69版本也是做了很大的更新，最直观的就是整体风格全面拥抱Material Design

更新文档：https://developers.google.com/web/updates/2018/09/nic69
<!--more-->
视频：
{{< youtube WF2IjH35w8o >}}

个人觉得实用的简短介绍下：

1 CSS Sroll Snap

这个属性帮助我们在滚动的时候使元素完整的显示在视口，意味在滚动完成后，浏览器会自动校正滚动位置，使内部元素完整的显示在设置的位置：

水平方向和竖直方向都支持

示例

{{< jsfiddle 2Lfdpez1 >}}

{{< jsfiddle j6r23dxo >}}
2 Array flat，flatMap方法

flat这个方法就是将数组内部元素展开，默认展开一层，可以设置展开层数，`Infinity`可以完全展开

```js
// Flatten one level:
const array = [1, [2, [3]]];
array.flat();
// → [1, 2, [3]]

// Flatten recursively until the array contains no more nested arrays:
array.flat(Infinity);
// → [1, 2, 3]
```
flatMap与map方法类似，如果方法的返回值是数组，那么会自动对返回值调用flat方法，默认层级1级

3 toggleAttribute方法, CSS背景支持`conic-gradient`(锥形渐变)

`toggleAttribute`用于翻转DOM元素属性，比如`disbled`、`readonly`

`conic-gradient`可以设置圆锥形渐变

示例地址：

{{< jsfiddle m90sygch>}}

{{< reward >}}
