---
title: "使用PM2管理Nodejs应用"
slug: "Manage-Nodejs-App-With-Pm2"
date: 2019-05-04T00:24:22+08:00
author: allen
categories:
- Front-End
tags:
- nodejs
- pm2
keywords:
- nodejs app
- management
- pm2
disqusIdentifier: 1556900662
# draft: true
thumbnailImagePosition: left
thumbnailImage: /blog/images/2019/5/pm2.png
---

除了在本地开发一个nodejs应用，有的时候我们更希望把它发不到服务器端，供更多的人来使用它。

这时，你可能会遇到这个问题：如何保持服务运行并退出终端呢？

<!--more-->

PM2 可能会是一个不错的选择

官网地址：https://pm2.io/runtime/

首先，全局安装pm2：

```
npm i pm2 -g
```

然后使用pm2来运行项目的根js文件：

```
pm2 start app.js
```

这样项目就在后台运行起来了，你也可以正常的退出终端或远程连接了:tada:

{{< gad-in-article >}}

当然，pm2还提供了其他管理方法：

- 查看当前运行的所有nodejs服务：
```
pm2 ls
```

- 查看服务日志：
```
pm2 logs [APP_NAME]
```

- 清空日志：
```
pm2 flush
```

- 停止服务：
```
pm2 stop [APP_NAME]
```

- 重启服务：
```
pm2 restart [APP_NAME]
```

- 自定义服务参数：
{{< codeblock "ecosystem.config.js" "js">}}

module.exports = {
  apps: [{
    name: "csdn-crawler",
    script: "./dist/index.js",
    env: {
      PORT: 5000
    }
  }]
}
{{< /codeblock >}}

比如之前写过的[CSDN博客统计平台](/zh-cn/2019/04/csdn-crawler/)的配置文件就是这样，定义了应用的名称、脚本的执行路径、脚本运行中的环境变量。

然后，以此配置文件启动服务：
```
pm2 start
```

以上就是pm2使用过程中常用的命令了，借助成熟的第三方工具可以帮助我们更好的管理应用。

{{< reward >}}
