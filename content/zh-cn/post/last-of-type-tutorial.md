---
title: "first-of-type、last-of-type选择器"
slug: "Last-of-Type-Tutorial"
date: 2020-03-29T18:15:05+08:00
author: allen
categories:
- Front-End
tags:
- css
keywords:
- first-of-type
- last-of-type
disqusIdentifier: 1585476905
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

平时我们使用`first-child`和`last-child`比较多，用于对同级元素第一个或最后一个元素设置CSS样式。`first-of-type`和`last-of-type`有时也会非常有用。

<!--more-->

有个场景时容器内部有一个类似footer的角色在末端（不是始终可见，否则可以使用nth-last-child选择器），但实际不想将其计算在内。

我们的HTML结构：

```html
<div class="container">
  <div class="item">first item</div>
  <div class="item">second item</div>
  <div class="item">last item</div>
  <div>footer</div>
</div>
```

CSS:
```css
.item:last-of-type {
  color: red
}
```

第一感觉这样做就可以了，但其实这样做是不生效的。

![image](https://user-images.githubusercontent.com/11868477/77846951-1bbfda00-71ec-11ea-901c-58be4de3b275.png)


stackoverflow上也有类似的问题：[链接](https://stackoverflow.com/questions/7298057/css-last-child-selector-select-last-element-of-specific-class-not-last-child-i/60844084#60844084)

{{< gad-in-article >}}

题主使用的结构刚好最后一个元素的type和其他不同，所以`last-of-type`和元素的type是相关的。

于是，把我们的footer稍作修改就可以了：

```html
<div class="container">
  <div class="item">first item</div>
  <div class="item">second item</div>
  <div class="item">last item</div>
  <footer>footer</footer>
</div>
```

建议CSS也做如下修改：
```css
div:last-of-type {
  color: red;
}
```

![image](https://user-images.githubusercontent.com/11868477/77846969-34c88b00-71ec-11ea-98c2-15a598e07ab0.png)


不知道这个选择器当初设计时是否有何种考虑，但这确实是个需要注意的地方。

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
{{< codepen pen="mdJaNMG" user="justforuse" theme="dark">}}
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
