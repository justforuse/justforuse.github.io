---
title: "@supports使用方法"
slug: "@supports-tutorial"
date: 2018-08-04T23:11:03+08:00
author: allen
categories:
- Front-End
tags:
- css
keywords:
- css
disqusIdentifier: 1533395463
#thumbnailImage: //example.com/image.jpg
---

{{< alert danger >}}
  This article was not translated to English, It will be done in few days. It would be nice if you can help me to translate.
{{< /alert >}}

@supports是CSS3新引入的规则之一，主要用于检测当前浏览器是否支持某个CSS属性并加载具体样式.

<!--more-->

{{< gad-in-article >}}

基本使用方式：
```css
@supports (display: grid) {
    .container {
        color: red;
    }
}
```

类似@media媒体查询，当浏览器支持`display:grid`这个CSS属性时才应用其中的样式

所以上述代码比如在IE9下就不会显示为红色字体。

主要用在防止旧浏览器不支持某些属性造成排版混乱的情况，使用@supports当做备选项。


此外，还支持逻辑运算符；not, and, or


例如
```css
@supports not(display: grid){...}
@supports (display: grid) and (position: sticky){...}
@supports (display: grid) or (display: flex){...}
```
括号内不一定都要是“关键字”，只要是CSS语法都可以，比如：
```css
@supports (border-radius: 4px) or (--btn-color: red){...}
```
上面就表示支持border-radius或者css variables就会加载其中的样式

js中也可以调用类似的方法：
```js
if(CSS.supports('display', 'grid')){
    alert('it support!')
}
```

代码：
{{< jsfiddle p1hjayrx >}}

当然，这个支持性IE下全跪
![PDVuyn.png](https://s1.ax1x.com/2018/08/04/PDVuyn.png)

个人觉得这其中有个很矛盾的地方，就是这个属性基本只有在“高级”浏览器下才会是生效，但“高级”浏览器的支持范围又支持大部分的CSS属性，所以觉得把他当做一个“低级”浏览器检测器倒是个不错的选择


参考链接：https://www.sitepoint.com/an-introduction-to-css-supports-rule-feature-queries/

{{< reward >}}
