---
title: "获取浏览器Window对象的相关属性值"
slug: "Browser-Info-Page"
date: 2019-05-08T23:02:39+08:00
author: allen
categories:
- Front-End
tags:
- js
- browser
keywords:
- browser info
- browser detail
disqusIdentifier: 1557327759
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

检测浏览器的网站有很多，常用的比如：https://www.whatsmybrowser.org/

如果想检查自定义属性的值就比较麻烦了

<!--more-->

所以，编写了一个检测window相关属性的网页：http://justforuse.github.io/browser-info/

功能相对单一，但还算实用。

截图：
![demo](/images/2019/5/browser-info.png)

{{< gad-in-article >}}

对于嵌套属性使用数组的`reduce`方法：

```js
const currentProp = document.querySelector('input').value
const commandStr = `window.${currentProp}`
const propArr = currentProp.split('.')
const res = propArr.reduce((prop, index) => {
  return prop[index]
}, window)
document.querySelector('.result').textContent = res
```



{{< reward >}}
