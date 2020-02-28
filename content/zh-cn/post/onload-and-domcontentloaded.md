---
title: "网页的生命周期：window.onload，DOMContentLoaded，beforeunload/unload"
slug: "webpage-lifecycle-onload-DOMContentLoaded-beforeunload-unload"
date: 2020-02-28T11:10:57+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- onload
- DomContentLoaded
- beforeunload
- unload
- readyState
disqusIdentifier: 1582087173
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

组件有生命周期，网页本身也有“生命周期”。

比较重要的3个：`window.onload`,`DomContentLoaded`,`beforeunload/unload`。

<!--more-->

## DomContentLoaded
html作为载体，当浏览器加载完html内容，DOM构建完成后触发，但此时外部资源（比如图片）可能还未加载完成。

```html
<script>
  function ready() {
    alert('DOM is ready');
    // image is not yet loaded (unless was cached), so the size is 0x0
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  }

  document.addEventListener("DOMContentLoaded", ready);
</script>

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">
```

## window.onload
在`DomContentLoaded`之后，等待外部资源加载完成。

## beforeunload/unload
beforeunload： 关闭网页之前的事件，比如有的网页会有提示未提交的表单，或未保存的内容的对话框，这样就可以阻止网页关闭了

unload: 网页“真正”被关闭之前的事件，此时无法阻止网页关闭，但仍可以做一些其他操作，比如发送一些分析数据：[Navigator.sendBeacon()](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon)

{{< gad-in-article >}}

## readyState
`document`还提供了`readyState`属性来表示当前网页的状态：

- loading: 加载中
- interactive: document加载完成
- complete: document加载完成并且外部资源也加载完成

readyState与上述周期执行顺序基本类似：

{{< plnkr 9PpFSQLGLJL3BP0fePPP>}}

参考链接：https://javascript.info/onload-ondomcontentloaded
<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
