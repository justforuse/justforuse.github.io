---
title: "新手如何开发一个VSCode插件"
slug: "Vscode-Extension-Tutorial"
date: 2019-01-12T17:09:17+08:00
author: allen
categories:
- Front-End
tags:
- vscode
- extension
keywords:
- vscode extension
disqusIdentifier: 1547284157
#thumbnailImage: //example.com/image.jpg
---
VSCode大部分人应该都用过？除了界面简洁、启动速度快，另一个亮点可能是它拥有丰富的插件供公户选择。更加提升了他的实用性。

大多数情况都可以在应用市场找到你需要的插件，特殊情况可能需要靠自己的力量。

<!--more-->

{{< gad-in-article >}}

我最近遇到的问题是，如何快速更改变量命名风格，比如Php代码的下划线风格要改成驼峰式命名，我并没有找到相应的插件，为了避免大量重复的工作，试着自己做了一款插件： [Var Style](https://marketplace.visualstudio.com/items?itemName=allen.VarStyle)

它的使用效果是这样的：
![](https://raw.githubusercontent.com/YiNanKai/vscode-var-style/master/demo.gif)

🎉🎉看着还行是吧。。

开发插件官网给的方式是使用yeoman的一个生成器：

```
npm install -g yo generator-code
```

具体使用方式可以参考官网：https://code.visualstudio.com/api/get-started/your-first-extension


不过不得不说官网API倒是详细，但是想使用某些功能还真的无从下手。想用什么还得去查一下

这次主要参考了这两个链接：

https://github.com/Microsoft/vscode/issues/32058

https://medium.com/@kevinpmcc/how-i-made-my-first-vs-code-extension-8e6a20dcad9d

核心代码其实就是这段：
```js
// 注册命令
let disposable1 = vscode.commands.registerCommand(
    'extension.camelStyle',
    function() {
      // 编辑器对象
      const editor = vscode.window.activeTextEditor
      // 获取所有选中文本
      const allSelections = editor.selections

      editor.edit(editBuilder => {
        // 遍历并替换文本
        allSelections.forEach(selection => {
          const text = editor.document.getText(selection)
          editBuilder.replace(selection, toCamelCase(text))
        })
      })
    }
  )

```

VSCode 还支持插件的调试，按下F5就会打开一个用于调试的编辑器，可以执行已经注册的命令了。

测试完毕正常后，就可以发布到应用市场了。

{{< gad-in-article >}}

首先需要打包我们的插件

全局安装vsce
```
npm i -g vsce
```

然后在目录执行`vsce package`打包，可能会提示缺少某些字段，按照提示填写就好了，主要是package.json的某些字段

可以按照官网的方式来发布，或者直接登陆https://marketplace.visualstudio.com/VSCode 注册账号，然后发布

发布成功后就会显示当前用户发布的插件列表了

比如我的： https://marketplace.visualstudio.com/items?itemName=allen.VarStyle

欢迎下载使用，给出建议😬

代码地址： https://github.com/YiNanKai/vscode-var-style

{{< reward >}}
