---
title: "使用Github Actions构建Hexo博客系统并发布到阿里云ECS上"
slug: "Build-Hexo-Blog-With-Github-Actions-and-Deploy-to-Ali-Cloud"
date: 2020-04-25T21:26:23+08:00
author: allen
categories:
- others
tags:
- hexo
- github actions
keywords:
- hexo
- github actions
- 阿里云
- hugo
- gatsby
disqusIdentifier: 1587821183
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

有了Github Pages为什么还要自己再搞个服务器呢？一是访问速度不(zhong)知(suo)为(zhou)何(zhi)不够快速，再一个也是不想这个服务器就白白地做个接口工具人😂

<!--more-->

折腾了一下，最终效果：https://codog.com.cn/

为何选择Hexo，最开始在HexoG, GatsbHy, Hugo中犹豫，Hugo已经在使用了，想体验下别的使用体验；本想使用Gatsby的，但是安装依赖实在难受，下载速度让人崩溃，服务一直报错，而且如果在macOS上开发还需要安装XCode。。尝试几次无果后，转向Hexo的怀抱；最初觉得Hexo可扩展性不高（可能是我了解太少）并没有放在第一位。

不管怎样，先尝试一下。

## 使用Hexo
[Hexo官方地址](https://hexo.io/)

本地安装：

```shell
npm i hexo -g

# 在空文件夹下
hexo init
```

修改主题：（使用用户量较多的[next主题](https://github.com/theme-next/hexo-theme-next))

```shell
git clone https://github.com/theme-next/hexo-theme-next themes/next
```

再修改`_config.yml`中的theme字段为next就可以了，运行`hexo s`查看效果吧~

## 使用Github actions

Github Actions有点类似于TravisCI，但它提供了很多构建、测试方案，相比Travis更加容易上手。推荐阅读[阮一峰老师的文章](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)，了解相关概念及用法。

这里就不细说了，直接贴上我的workflow吧：

```yml
name: Hexo build and deploy

on:
  push:
    branches: [ dev ]

jobs:
  build:

    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v2 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
      with:
        persist-credentials: false
        # checkout到你的hexo代码分支
        ref: dev
        # hexo需要加载内部子模块
        submodules: true
    - name: Install and Build
      run: |
        npm install
        npm run build
    - name: Deploy to aliyun server
      uses: easingthemes/ssh-deploy@v2.0.7
      env:
        SSH_PRIVATE_KEY: ${{ secrets.ALIYUN_SERVER_ACCESS_TOKEN }}
        ARGS: "-avz --delete"
        SOURCE: "public"
        REMOTE_HOST: ${{ secrets.ALIYUN_SERVER_HOST }}
        REMOTE_USER: "root"
        TARGET: "/root/dist/"
```

关于workflow的配置我踩过的坑，我的hexo源文件放在dev分支而非master，所以即使我在master分支执行dev也无法触发actions，且在Actions标签下无有效action。个人认为workflow指向的分支应与文件所在分支保持一致。

关于部署阿里云的参数说明：

ALIYUN_SERVER_ACCESS_TOKEN：指的是阿里云.ssh下的私钥，还要记得把公钥复制一份到authorized_keys中。如果未生成过，可以执行如下命令：

```
ssh-keygen -m PEM -t rsa -b 4096
```

具体可以参考[action说明](https://github.com/easingthemes/ssh-deploy)

{{< gad-in-article >}}

大功告成，大家可以访问https://codog.com.cn/ 查看部署效果


## 最后

继github package之后，又推出了actions，github已经不满足单单代码托管及同性交友的平台了。加上微软的支持，github可以做的事情越来越多了。

啥时候可以畅游Github呢🙄
<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
