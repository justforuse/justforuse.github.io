---
title: "如何检测数据类型"
slug: "How-to-Detect-Data-Type"
date: 2020-04-16T22:50:40+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- typeof
- 数据类型
- data type
disqusIdentifier: 1587048640
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

检测数据类型不仅在面试中，日常业务代码也是高频出现的场景。在这里总结一下

<!--more-->

首先，要知道总共有几种数据类型，截至今日，共分7中基本数据类型：string, number, bigint, boolean, null, undefined, symbol和object类型，总共8种。

常见的方式是使用`typeof`方法，基本数据类型都可以返回，还可以判断方法，其余统一返回"object"，**注意，其中typeof null === 'object'**

|  数据       | 输出值     |
| ---------- | ---------- |
| Undefined	 |"undefined" |
| Null       |	"object" |
| Boolean	   | "boolean"  |
| Number     |	"number" |
| BigInt	   | "bigint" |
| String     |	"string" |
| Symbol     | "symbol" |
| 宿主对象	   | 取决于具体实现 |
| Function 对象 |	"function"|
| 其他任何对象	| "object" |

这种方式很便捷，但不能检测出数组类型。

> ES6中数组新增isArray方法也可以用来检测

那有没有更普适的方法呢？答案是有的，使用`Object.prototype.toString()`方法:

示例：

![image](https://user-images.githubusercontent.com/11868477/79476317-69857080-803b-11ea-9cb3-3a962fe5a2f8.png)


此方法会返回形如`[object XXX]`格式的字符串，其中XXX可以用来判断我们的数据类型

{{< gad-in-article >}}

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
