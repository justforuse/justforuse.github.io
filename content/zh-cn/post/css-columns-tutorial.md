---
title: "CSS Columns使用教程"
slug: "Css-Columns-Tutorial"
date: 2019-09-29T23:41:51+08:00
author: allen
categories:
- Front-End
tags:
- css
keywords:
- css columns
disqusIdentifier: 1569771711
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

页面布局通常来说指的是元素间或者说模块间的布局，但某些场景下我们需要考虑文字的布局？过长的文本段落不适合阅读，因为它意味着我们的眼球需要转动更长的距离；报纸的排版就可以解决这个问题，在CSS中也有对应的属性——columns。

<!--more-->

报纸排版示例：
![image](https://user-images.githubusercontent.com/11868477/65834997-8a20ef80-e2d0-11e9-8629-0e3da07ddf2f.png)

相关属性：
`columns`: 设置列宽度或者列个数，比如`columns: 2, columns: 200px, columns: 2 auto...`。

`column-rule`: 设置分割线样式，默认无，类似`border`属性,我们可以设置一条1px的黑线：`1px solid black`。 

`column-gap`: 设置列之间的间隔宽度。

`column-span`: 设置某列横跨所有列，比如在文章中插入醒目的大标题。

{{< gad-in-article >}}

完整示例：

{{< codepen pen="VwZOBME" user="justforuse" theme="dark">}}

兼容性：

![image](https://user-images.githubusercontent.com/11868477/65894911-26381d00-e3dd-11e9-962c-eadc10e11de4.png)


{{< embed-caniuse mdn-css_properties_columns >}}


<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
