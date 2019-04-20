---
title: "使用Travis-CI自动发布Hugo到GitHub上"
slug: "travisci-deploy-hugo"
date: 2018-07-01T23:20:46+08:00
categories:
- Front-End
tags:
- travis-ci
- hugo
keywords:
- travis
- hugo
disqusIdentifier: travisci-deploy-hugo
#thumbnailImage: //example.com/image.jpg
---

{{< alert danger >}}
  This article was not translated to English, It will be done in few days. It would be nice if you can help me to translate.
{{< /alert >}}

每次增加新文章时，还需手动更新到github上，重复劳动可以交由工具完成。

[Travis CI](https://travis-ci.org/)就是一个帮助我们完成自动构建的工具
<!--more-->

我想做的不仅是将编译后的`public`文件夹发布到Github Pages上，这样会覆盖掉很多其他文件，所以我只是想将它发布到`blog`文件夹下，所以我的`.travis.yml`长这样：

{{< codeblock ".travis.yml" "yml" >}}
# https://docs.travis-ci.com/user/deployment/pages/
# https://docs.travis-ci.com/user/languages/python/
language: python

python:
    - "3.6"

install:
    - uname -a
    - wget https://github.com/gohugoio/hugo/releases/download/v0.42.2/hugo_0.42.2_Linux-64bit.deb
    - sudo dpkg -i hugo*.deb
    - hugo version
    - rm -rf blog
    - ls
    - pwd

script:
    - hugo -d blog
    - echo 'Hugo build done!'
after_success:
    - git config --global user.email "allenforuse@gmail.com"
    - git config --global user.name "justforuse"
    - git clone https://$GITHUB_TOKEN@github.com/justforuse/justforuse.github.io.git container
    - rm -rf container/blog
    - cp -r blog container 
    - cd container
    - ls
    - git add .
    - git commit -m 'Travis upate blog'
    - git push -u origin master

{{< /codeblock >}}

这样每次更新code分支代码，travis会自动检测并执行上述脚本，发布编译后结果到master分支的blog文件夹下

Github地址： https://github.com/justforuse/justforuse.github.io

{{< reward >}}
