---
title: "2019年Web开发中值得关注的新特性(1/4)"
slug: "Best-Web-Features-of-2019-Part-One"
date: 2019-12-22T23:34:16+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
disqusIdentifier: 1577028856
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

马上圣诞节了，想起去年的AntD发生的[圣诞彩蛋事件](https://github.com/ant-design/ant-design/issues/13848)，时间过得可真快啊。。

这一年Web开发领域有了进一步的发展，有哪些值得开发者关注的新特性呢？

<!--more-->

本系列内容均总结自[此Youtube频道](https://www.youtube.com/watch?v=Xtmp2HbSreQ)，有条件的可以观看原视频。

## 数值分隔符(Numeric separators)

第一眼我以为是类似100000可以写成100,000的方式，其实不然，它使用`_`作为分隔符，且可以以任意间距分隔数字

例如，12300，写成`123_00`可以代表123元整；`1_2300`表示1万2千3百元。

所以其实是更广泛的语义化分隔符，注意：并不支持两个分隔符连写，即`__`会报错：

![image](https://user-images.githubusercontent.com/11868477/71324097-a5894880-2515-11ea-978f-191f8cc1653f.png)


## Intl

> Intl 对象是 ECMAScript 国际化 API 的一个命名空间，它提供了精确的字符串对比、数字格式化，和日期时间格式化。

还记得[toLocaleString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)的一些骚操作吗？（[JS各语言货币文本显示](https://blog.csdn.net/u014291497/article/details/79382280)）它可以返回某个值在指定语言下的字符串，Intl提供了类似的方式。

示例：

```js
TimeFormatter = new Intl.RelativeTimeFormat('zh-CN')
TimeFormatter.format(-3, 'minute') // "3分钟前"
TimeFormatter.format(4, 'day') // "4天后"
```

{{< gad-in-article >}}

## matchAll

> matchAll() 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。

感觉对正则一直都不是了解太多，需要的时候找个正则就直接用了😂，感觉是对原有`match`方法的补充。

方式的返回值是一个Iterator（迭代器）对象，使用`for...of`方式遍历。

示例：

```js
let regexp = /t(e)(st(\d?))/g;
let str = 'test1test2';
console.log(str.match(regexp)) // ["test1", "test2"]
for(const a of str.matchAll(regexp)) {
  // ["test1", "e", "st1", "1", index: 0, input: "test1test2", groups: undefined]
  // ["test2", "e", "st2", "2", index: 5, input: "test1test2", groups: undefined]
  console.log(a)
	console.log(a[0]) // test1 0
  console.log(a.index) // test2 5
}
```


## Class私有属性

JavaScript的Class出了也就3年左右的功夫，有时候我们会拿它和其他语言比如Java中的类进行比较，都是面向对象的数据类型，但JS的相对简单，我们之前在实现Class的私有属性时，往往都是借助中间属性，比如：

```js
class Counter {
	constructor(initValue){
  	this._count = initValue
  }
  increment() {
  	this._count ++
  }
  get count() {
  	return this._count
  }
}

const a = new Counter(4)
a.increment()
console.log(a.count) // 5
console.log(a._count) //5
a._count ++
console.log(a.count) // 6
```

其实也基本满足我们的需求，只要我们不故意去修改内部属性，大部分情况都是可以的。

但这并不是完全的私有属性，存在安全性隐患，所以Class新增了私有属性，意味着实例无法直接修改它的属性了。

```js
class Counter {
	#count

	constructor(initValue){
  	this.#count = initValue
  }
  increment() {
  	this.#count ++
  }
  get count() {
  	return this.#count
  }
}

const a = new Counter(4)
a.increment()
console.log(a.count)
console.log(a.#count) // Error!
```

{{< gad-in-article >}}

这个系列总共分4期，每期4个特性，每期都会总结出一个“胜者”，最后会给出一个“年度特性”，第一期的“胜者”是`Intl`，可能从开发者角度觉得私有属性会胜出，但作者从一些其他角度做出比较，认为国际化可能对用户来说更有价值，相当于原生支持了一些类似`Moment`的一些功能。

你的观点呢？
<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
