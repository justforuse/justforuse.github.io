---
title: "CSS伪类placeholder-shown"
slug: "placeholder-shown"
date: 2018-08-22T22:23:14+08:00
author: allen
categories:
- Front-End
tags:
- css
keywords:
- placeholder-shown
- :placeholder-shown
disqusIdentifier: 1534947794
#thumbnailImage: //example.com/image.jpg
---
CSS伪类`:placeholder-shown`在`input`或`textarea`元素显示placeholder文本时生效。

<!--more-->

也可以配合`text-overflow: ellipse`使用。

{{< gad-in-article >}}

使用方法：
```css
input:placeholder-shown {
  border: 1px solid red;
  text-overflow: ellipsis;
}
```

示例
{{< jsfiddle 3sn09gat >}}

浏览器兼容性，还不错：

{{< embed-caniuse css-placeholder-shown >}}
{{< reward >}}
