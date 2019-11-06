---
title: "安卓和IOS平台下字体的不同"
slug: "Font-Difference-Between-Ios-and-Android"
date: 2019-11-05T22:40:33+08:00
author: allen
categories:
- Front-End
tags:
- html
- css
keywords:
- font
- ios
- android
disqusIdentifier: 1572964833
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

不只是安卓和IOS平台，包括Windows在内的其他平台间的系统字体都是不一样的，如何保证在各平台下都尽量显示最优的字体呢？

<!--more-->

不知道是不是既定事实，还是行业规范，IOS平台下的`PingFang`字体默认是效果最优的字体，但是这个字体在IOS及Windows平台都不支持，通常`font-family`属性都会指定很多种类型的字体来满足不同平台的要求。

安卓及Windows存在的问题，对于中粗的字体支持度不够好，中文字体的支持度比较差。

{{< gad-in-article >}}

方便对比，选两个比较常见的`font-family`写法，展示安卓和IOS平台在不同`font-weight`值下的显示情况：

**安卓：**
![image](https://user-images.githubusercontent.com/11868477/68218786-d671f480-001f-11ea-9395-f94c680ecbdd.png)

**IOS：**
![image](https://user-images.githubusercontent.com/11868477/68218838-f1446900-001f-11ea-881f-450462c790f5.png)


可以发现IOS平台下无论是英文还是中午都有很好的展示效果，而安卓平台下由于字体的限制，对于“中粗”的中文字体支持度不够，不能完全实现想要的效果。

**通常情况，如果对文字效果没有极高的要求，我们不考虑再另加载字体文件。**

作为参考，粘贴几个的中文网站`font-family`的值：

- 知乎：font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;

- 头条：font-family: PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,Helvetica Neue,Arial,sans-serif;

- 微信：font-family: -apple-system,BlinkMacSystemFont,SF UI Text,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,Arial,sans-serif;

>已将本站字体统一改为微信的字体设置，看着效果是否是好些呢？😒

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
