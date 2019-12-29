---
title: "2019年Web开发中值得关注的新特性(4/4)"
slug: "Best-Web-Features-of-2019-Part-Four"
date: 2019-12-29T17:44:38+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
- Prefers styles
- Native lazy loading
- Form elements
- fromEntries
disqusIdentifier: 1577612678
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

上期分享了4个2019值得关注的新特性，今天继续分享4个：Prefers styles, Native lazy loading, Form elements, fromEntries。

<!--more-->


##  Prefers styles

一种媒体查询的方式，检测当前系统主题色，Windows和Mac现在都支持了暗色模式，那么就可以使用这个属性来查询。

```css
@media (prefers-color-scheme: dark) {
  ...
}
```

使用方式可以参考之前写过的：[prefers-color-scheme介绍](https://justforuse.github.io/blog/zh-cn/2019/08/prefers-color-scheme-tutorial/)

还可以在js中匹配规则：

```js
if (window.matchMedia('(prefers-color-scheme: dark)').matches){
  // 当前系统主题为暗色
}
```

![image](https://user-images.githubusercontent.com/11868477/71555714-2b534980-2a6a-11ea-94d5-608dfbc7d647.png)

Mac系统还支持减弱动画效果的设置，我们也可以添加媒体查询：

```css
@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
  }
}
```

## Native lazy loading

个人认为很实用的一个属性，图片懒加载一直都是网页优化的重要一环。

语法：`<img loading='lazy' src='...' width='400' height='400' alt=''>`

之前也写过关于这方面的：[浏览器增加图片懒加载的原生支持](https://justforuse.github.io/blog/zh-cn/2019/09/html-image-lazy-loading/)

实现图片懒加载的方式还有很多，有相关jQuery插件和js库，也有[IntersectionObserver](https://justforuse.github.io/blog/zh-cn/2019/08/intersection-observer-tutorial/)，都可以做到。

{{< gad-in-article >}}

## Form elements

有了Web Components，我们可以使用原生JS来实现自定义组件，但某些场景下，我们需要自定义表单组件，意味着表单可以自动获取元素的值。

有两种方式：

第一种：可以监听表单的`formData`事件，这是在表单提交前的一个方法，在这个方法中，可以添加我们自定义组件的值。

第二种：Form elements, 就是使我们的自定义组件可以像其他表单组件一样设置表单的值。

示例链接： https://codesandbox.io/s/form-element-demo-mkkdb

更多细节可以参考：https://web.dev/more-capable-form-controls/


## fromEntries

`Object`的一个属性，之前ES6中有提到过，不知道为什么在这个时间点提出，可能是入规范了吧。。

`fromEntries`和`entries`算是两个相对的方法，前者可以把数组转成对象，后者则是把对象转正数组。

![image](https://user-images.githubusercontent.com/11868477/71557471-b12ebf00-2a81-11ea-9053-7b9100c33dad.png)

{{< gad-in-article >}}


## 结束语

本期胜出的是`Native lazy loading`，也最终进入到了决赛中，另一个是上半区的`Sharing`。经过一番比较后，最终由`Native lazy loading`获得2019年度最佳特性称号。从应用场景来说确实占了很大优势，而且从浏览器层面提供了图片懒加载的解决方案，避免应用还要再额外引入资源来达到目的，有理有据，令人信服。

到这里一共介绍了16个新特性，你记住了几个呢？有的可能已经投入使用了，有的还需要更多的支持。

最后，再来简单回顾下吧，并用粗体标出本人认为值得关注的特性：

- Numeric separators
- matchAll
- **Intl stuff**
- **Class fields**
- 图片纵横比
- Blob reading
- 图片剪贴版
- **Sharing**
- **backdrop-filter**
- **allSettled**
- media keys
- background fetch
- **Prefers styles**
- **Native lazy loading**
- Form elements
- fromEntries

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
