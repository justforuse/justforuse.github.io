---
title: "初始化React Native开发环境"
slug: "Set-Up-React-Native"
date: 2018-10-21T19:45:20+08:00
author: allen
categories:
- Front-End
tags:
- react-native
keywords:
- react-native
disqusIdentifier: 1540122320
#thumbnailImage: //example.com/image.jpg
---
安装流程按照https://facebook.github.io/react-native/docs/getting-started 来就可以，期间遇到了几个问题，并记下解决方法。
<!--more-->

{{< gad-in-article >}}

1.安装时没有sdk和HAXM选项
![iBLmx1.png](https://s1.ax1x.com/2018/10/21/iBLmx1.png)
参考链接： https://www.cnblogs.com/xiadewang/p/7820377.html

> 安装时关掉腾讯管家等安全软件，关了之后就安装正常了，不排除这个软件有问题

2.Emulator: emulator: ERROR: x86 emulation currently requires hardware acceleration!

本机没有打开虚拟化设置，进入BIOS界面设置，打开虚拟化设置即可，如何进入BIOS不同电脑也有不同方法。

3.Failed to install the following Android SDK packages as some licences have not been accepted.
本地SDK版本不对应，本地是28版本，再下载27版本就好了。

剩下的就按照官网文档走就好了👌
{{< reward >}}
