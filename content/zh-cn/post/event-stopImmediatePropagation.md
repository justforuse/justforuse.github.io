---
title: "Event对象的stopImmediatePropagation方法"
slug: "Event-Stopimmediatepropagation"
date: 2020-03-29T18:04:15+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- stopImmediatePropagation
- stopPropagation
disqusIdentifier: 1585476255
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---
Event对象的`stopImmediatePropagation`方法相对`stopPropagation`来说使用场景较少。它主要处理的场景是同一个元素绑定多个事件处理函数时，阻止事件在此元素上同级的冒泡。

<!--more-->

示例：
{{< codepen pen="BaNvXjG" user="justforuse" theme="dark">}}

可以发现当第二个弹窗出现后，第三个不再出现了；可以尝试将`stopImmediatePropagation`改为`stopPropagation`看看区别。

当然，它们都可以阻止事件向上级传递。

{{< gad-in-article >}}

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
