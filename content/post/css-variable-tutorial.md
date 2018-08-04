---
title: "Css Variable使用入门"
slug: "css-variable-tutorial"
date: 2018-08-05T00:02:17+08:00
author: allen
categories:
- Front-End
tags:
- css
keywords:
- css
disqusIdentifier: 1533398537
#thumbnailImage: //example.com/image.jpg
---

CSS变得更像一个编程语言了，除了此次的css variables，还有很多提案，感兴趣可以去查一下。

css variables让我们可以在CSS中使用变量了，使用和SCSS语法中的`$my-color: red;`类似
<!--more-->

使用方法：
```css
:root {
  --my-color: red;
}

.container {
  /* --my-color: blue; */
  color: var(--my-color);
}

.child {
  color: var(--my-color);
}
```

在顶级自定义了变量，变量名前一定要有两个-，否则不生效；然后使用var()方式来获取变量值。

变量可以被覆盖，如果在低层级重新赋值则会覆盖样式。

还可以设置默认值，比如`var(--invalid-color, red)`，如果变量不存在，则会使用第二个参数

还可以通过js获取和设置css varible的值
```js
const child = document.querySelector('.child')

console.log(getComputedStyle(child).getPropertyValue('--my-color'))

child.style.setProperty('--my-color', 'purple')
```

支持性方面，IE依旧全挂
![PDVv7V.png](https://s1.ax1x.com/2018/08/05/PDVv7V.png)

代码：
{{< jsfiddle u7hrovac>}}

参考链接：https://www.sitepoint.com/practical-guide-css-variables-custom-properties/