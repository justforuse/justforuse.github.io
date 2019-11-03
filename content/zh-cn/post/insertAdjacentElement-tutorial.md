---
title: "insertAdjacentElement方法介绍"
slug: "Insertadjacentelement-Tutorial"
date: 2019-11-03T23:45:17+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
- insertAdjacentElement
- insertAdjacentText
disqusIdentifier: 1572795917
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

一个原生方法，用于将元素插入到指定元素的给定位置。

<!--more-->

语法：
`element.insertAdjacentElement(position, element);`

```
position:
'beforebegin': 在该元素本身的前面.
'afterbegin':只在该元素当中, 在该元素第一个子孩子前面.
'beforeend':只在该元素当中, 在该元素最后一个子孩子后面.
'afterend': 在该元素本身的后面.
```

![image](https://user-images.githubusercontent.com/11868477/68087930-32f4d880-fe95-11e9-8766-2256c6dca682.png)


这个方法可以很快速的在节点的前后或者节点内部首尾，对比insertBefore来说更方便。

和insertBefore一样，插入的节点如果原本出于文档中，那么就会被移动到指定的位置。

{{< gad-in-article >}}


如果只是想插入一段文本的话，可以使用类似的方法：insertAdjacentText， 语法都是一样的。

兼容性：
{{< embed-caniuse insert-adjacent >}}

<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
