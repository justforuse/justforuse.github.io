---
title: "嵌入Caniuse信息的Shortcode"
slug: "Embed-Caniuse-Shortcode"
date: 2019-05-11T22:31:22+08:00
author: allen
categories:
- Front-End
tags:
- js
- shortcode
keywords:
- js
- caniuse
- embed
disqusIdentifier: 1557585082
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

偶然间发现了一个可以嵌入caniuse.com信息的网站：https://caniuse.bitsofco.de/ 而且支持响应式布局，caniuse算是比较高频的网站了，所以想着做一个shortcode来集成它。

<!--more-->

Shortcode代码：
```html
<p
  class="ciu_embed"
  data-feature="{{ .Get 0 }}"
  data-periods="future_1,current,past_1,past_2"
  data-accessible-colours="false"
>
  <a href="http://caniuse.com/#feat={{ .Get 0 }}">
    Can I Use {{ .Get 0 }}?
  </a>
  Data on support for the {{ .Get 0 }} feature across the major browsers
  from caniuse.com.
</p>

```

使用`{{ .Get 0 }}`来获取具体属性字段。

{{< gad-in-article >}}

如何使用？

在`.md`文件中添加`{{</* embed-caniuse PARAM */>}}` 就可以了。

`PARAM`具体应该使用哪个字符串，上述网站提供了查询方式。

第二种方式就是点击caniuse网站左边`#`号，url上`feat`对应的字段就是了。

举例：显示CSS Flex相关兼容性(flexbox)：

{{< embed-caniuse flexbox >}}

{{< reward >}}
