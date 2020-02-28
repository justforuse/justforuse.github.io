---
title: "CDN和HTTP2简介"
slug: "Should-Know-About-Cdn-and-Http2"
date: 2020-02-28T11:09:44+08:00
author: allen
categories:
- Front-End
tags:
- other
keywords:
- CDN
- http2
disqusIdentifier: 1582108049
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

CDN和http2是平时工作中经常听到的名词，关于它们，我们需要知道什么呢？

<!--more-->

## CDN

> CDN的全称是Content Delivery Network，即内容分发网络。CDN是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。

CDN的好处我们大概都知道，还有两个概念：

- 缓存
就是说我们把资源 copy 一份到 CDN 服务器上这个过程；

- 回源
就是说 CDN 发现自己没有这个资源（一般是缓存的数据过期了），转头向根服务器（或者它的上层服务器）去要这个资源的过程。

参考链接： https://www.cnblogs.com/Ronaldo-HD/p/11858926.html

{{< gad-in-article >}}

## http2

个人认为比较重要的特性：

- 头部压缩

- 服务推送

- 多路复用

- ...

参考链接： https://www.cnblogs.com/confach/p/10141273.html
<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
