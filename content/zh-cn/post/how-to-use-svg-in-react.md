---
title: "React如何引入SVG文件"
slug: "How-to-Use-Svg-in-React"
date: 2019-07-27T23:57:51+08:00
author: allen
categories:
- Front-End
tags:
- js
- react
keywords:
- js
- react
- svg
disqusIdentifier: 1564243072
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

应用中添加图片是很常见的需求，React应用中应该如何添加图片呢？

<!--more-->

文档地址：https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files

方法1：
```jsx
// svg png等类型图片
import logo from './logo.svg';
//...
<img src={logo} className="App-logo" alt="logo" />
//...
```
这种写法会由webpack转为url方式引入。

{{< gad-in-article >}}

方法2：

{{< alert warning >}}
注意：这个方法在react-scripts@2.0.0及react@16.3.0之后才被支持.
{{< /alert >}}

这种方式仅对SVG图片生效，将svg看作组件导入：
```jsx
// ...
import { ReactComponent as Logo } from './logo.svg'
// ...
<Logo />
```
这种方式最终将svg代码渲染到dom上

![](https://raw.githubusercontent.com/justforuse/file-cdn/master/0fd00c40-b100-11e9-98a7-9f9584c17b51.png)

想要更组件化的SVG使用方式？参考这篇文章：https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91?gi=b5829e4400ed

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
{{< reward >}}
