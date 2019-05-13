---
title: "CSS伪类placeholder-shown"
slug: "placeholder-shown"
date: 2018-08-22T22:23:15+08:00
author: allen
categories:
- Front-End
tags:
- css
keywords:
- placeholder-shown
- :placeholder-shown
disqusIdentifier: 1534947795
#thumbnailImage: //example.com/image.jpg
---

The `:placeholder-shown` CSS pseudo-class represents any `<input>` or `<textarea>` element that is currently displaying placeholder text.

<!--more-->

You can also use it with `text-overflow: ellipse`

{{< gad-in-article >}}

Usage:
```css
input:placeholder-shown {
  border: 1px solid red;
  text-overflow: ellipsis;
}
```

Demo:
{{< jsfiddle 3sn09gat >}}

Browser support: 

{{< embed-caniuse css-placeholder-shown >}}
{{< reward >}}
