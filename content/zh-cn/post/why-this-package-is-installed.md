---
title: "如何查看依赖包为什么被安装"
slug: "Why-This-Package-Is-Installed"
date: 2019-06-07T12:03:52+08:00
author: allen
categories:
- Front-End
tags:
- npm
- yarn
keywords:
- why package installed
- npm
- yarn
disqusIdentifier: 1559880232
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

通常情况下`node_modules`会有大量依赖包，但实际的`package.json`只会有必要的依赖包，唯一的原因就是这些必要的依赖包引用了更多的依赖包。

在升级包版本的时候，梳理它们之间的依赖关系是有用的。

<!--more-->

如果你使用的`yarn`来安装依赖包，它提供了`why`命令来查看包依赖关系，使用方式为`yarn why [package]`。

输出示例：

![yarn-why](/images/2019/6/yarn-why.png)

{{< gad-in-article >}}

npm目前没有提供类似的命令，不过可以通过`npm-why`包来查看，使用方式`npx npm-why [package]`

输出示例：

![npm-why](/images/2019/6/npm-why.png)

通过上述两种方法，我们就可以查看包的依赖关系了。

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
{{< reward >}}
