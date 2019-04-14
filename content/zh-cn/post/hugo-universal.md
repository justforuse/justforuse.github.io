---
title: "Hugo Universal"
slug: "Hugo-Universal"
date: 2019-04-14T16:37:56+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
disqusIdentifier: 1555231076
#thumbnailImage: //example.com/image.jpg
---

作为网站生成工具，Hugo也支持国际化。
<!--more-->
国际化即支持多种语言，对于现在的网站，只需要添加不同语言下的文本展示即可。

所以需要做如下配置(config.toml文件中)：

### Hugo

设置默认语言

```
languageCode = "en-us"
defaultContentLanguage = "zh-cn"
defaultContentLanguageInSubdir = true
```

添加不同语言文件路径：
```
[languages]
  [languages.en-us]
    title = "Blog"
    contentDir = "content/en-us"
  [languages.zh-cn]
    contentDir = "content/zh-cn"
```

新建文档的命令也变了(使用--kind制定文档模板)：
```
hugo new --kind post en-us/post/my-article.md
hugo new --kind post zh-cn/post/my-article.md
```

最后生成的文件结构：
```
+---content
|   +---en-us
|   |   \---post
|   |           hugo-universal.md
|   |          
|   \---zh-cn
|       \---post
|               hugo-universal.md
```

### Hugo template
添加基础的国际化配置后我们可能需要在不同的语言下展示不同的内容，比如现在使用的`reward`组件，做如下修改：

使用`.Site.Language.Lang`获取当前页面语言。

```html
{{ if (eq .Site.Language.Lang "zh-cn") }}
  <div class="text-center" id="reward">
    // ...
  </div>
{{ else }}
  <hr>
  // 添加emoji支持
  <p class="text-center">{{ ":point_down:" | emojify }} Please leave your comment if you like this.{{ ":point_down:" | emojify }}</p>
{{ end }}
```
{{< reward >}}
