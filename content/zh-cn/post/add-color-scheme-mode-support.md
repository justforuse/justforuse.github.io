---
title: "为网页增加深色模式支持"
slug: "Add-Color-Scheme-Mode-Support"
date: 2020-03-08T22:16:42+08:00
author: allen
categories:
- Front-End
tags:
- js
- css
keywords:
- css
- dark mode
- 深色主题
disqusIdentifier: 1583677002
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

之前提过很多次`prefers-color-scheme`特性了，它为浏览者提供了更好的使用体验。网站增加深色主题将成为越来越普遍的需求。

<!--more-->

我们要做什么？获取当前系统主题偏好、响应主题变化。

如何获取当前偏好主题？

```js
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-theme')
}
```

如何检测变化？

```js
const toggleTheme = (e) => {    
  const darkModeOn = e.detail.colorScheme === 'dark';
  if(darkModeOn) {
    document.body.classList.add('dark-theme')
  } else {
    document.body.classList.remove('dark-theme')
  }
};

document.addEventListener('colorschemechange', toggleTheme);
```

{{< gad-in-article >}}

如果没有专业的UI知识，如何设计一款美观的暗色主题？

使用chrome插件：[Dark Reader](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh)，它可以自动将当前网页转为暗色模式，通过查看CSS样式可以将它应用到我们的主题中。


接下来就是编写我们的CSS样式了：

比如：
```scss
@media (prefers-color-scheme: dark) {
  body.dark-theme {
    border-color: #686662;
    color: #fff8ec;
    #bottom-bar, #header, #main {
      background-color: rgb(53, 54, 53);
    }
  }
  // ....
}
```

关于这里也可以通过控制全局CSS变量来实现。

```css
:root {
  --color: blue;
  --bg-color: #eee;
}
body {
  background: var(--bg-color);
  color: var(--color);
}
@media (prefers-color-scheme: dark) {
  :root {
    --color: white;
    --bg-color: #333;
  }
}
```

参考链接：https://web.dev/prefers-color-scheme/

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
