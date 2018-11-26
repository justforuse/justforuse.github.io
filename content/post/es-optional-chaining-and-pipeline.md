---
title: "ES提案可选链和管道语法"
slug: "Es-Optional-Chaining-and-Pipeline"
date: 2018-11-26T22:50:40+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- optional-chaining
- pipeline
disqusIdentifier: 1543243840
#thumbnailImage: //example.com/image.jpg
---
两种处于提案状态的新语法：可选链(?.)和管道(|>)语法
<!--more-->

**1.可选链**

我们会遇到以下场景，要拿到一个层级比较深的对象的属性值，又要考虑到值的存在问题，所以我们的代码可能是这样：

```js
if(a && a.b && a.b.c){
  // balabala
}
```
这样代码虽然严谨，但是看着不舒服。

使用可选链后：

```js
if(a?.b?.c) {
  // balabala
}
```
他会层层判断当前层的值是否存在，不存在则直接返回👍

如果想在项目中使用此语法，需要babel7转译，插件选择`@babel/plugin-proposal-optional-chaining`


**2.管道运算符**

有时也会遇到这个场景，一个参数，不断经过函数处理，结果又被当作参数传给下个函数，代码可能是这样的：
```js
const result = foo(bar(baz('hello world')))
```

管道给人的感觉就是一条流水线，从上到下，参数输入，结果输出，所以语法也很简洁：👍

```js
const result = 'hello world' |> baz |> bar |>foo
```

想在项目中使用同样需要babel7，并使用`@babel/plugin-proposal-pipeline-operator`插件，

```js
"plugin": [
  [
    "@babel/plugin-proposal-pipeline-operator",
    {
      "proposal": "minimal"
    }
  ]
]
```
注意，在配置`.babelrc`时需要制定`proposal`参数，目前只支持`minimal`，可关注https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator 查看最新进展

如果函数还需要别的参数，那么可以这么写：
```js
const result = 'hello world' |> baz |> (str => baz(str, 'other args')) |> foo
```

但是如此就看着不简洁了，所以有个备选方案：使用`#`代表上个结果值，即：
```js
const result = 'hello world' |> baz |> baz(#, 'other args')) |> foo
```

注意此种方式还未获得babel支持😥。

{{< reward >}}
