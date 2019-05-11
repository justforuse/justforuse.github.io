---
title: "开发自定义Vue组件——Functional Button"
slug: "Create-Vue-Plugin"
date: 2019-05-11T21:39:35+08:00
author: allen
categories:
- Front-End
tags:
- js
- vue
keywords:
- create vue plugin
- js
disqusIdentifier: 1557581975
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

业务开发过程中遇到的常见的组件，我们可以把它们抽离出来作为单独的组件库，那么要如何做呢？

<!--more-->

比如我打算做一个Functional-Button这个组件库，顾名思义，就是把给按钮赋予多种功能，并组合成组件库，其中Button使用了ElementUI的样式。

项目地址：https://github.com/justforuse/functional-button

示例地址：https://codesandbox.io/s/24jx3zz2ny

目前只添加了2个功能按钮：DeferBtn，ContinuousBtn；一个是延时执行方法按钮，一个是鼠标按住持续执行方法的按钮。感觉有时候还是挺有用的。

如果你有什么常见的功能按钮的建议，欢迎提issue或PR。

接下来，具体步骤是什么？

首先，建议找一个现成的脚手架作为组件库的其实模板，比如我使用了的脚手架：https://github.com/justforuse/vue-share-components 从别的项目fork出来，并修改一些配置，如果感兴趣，可以把它作为你的项目的起始模板。

{{< gad-in-article >}}

新建组件库项目：
```
vue init justforuse/vue-share-components plugin-name
```

开发：
```
npm run dev
```

注意修改`src/index.js`中的相关组件引用。

并链接到全局，作为本地测试用：
```
npm link

cd YOUR_TEST_PROJECT

npm link plugin-name
```

接下来就是发布到npm上了，这需要登陆你的NPM账号，以及设置包版本
```
npm publish
```

发布成功就可以像其他组件库一样，使用自己的组件库了。

{{< reward >}}
