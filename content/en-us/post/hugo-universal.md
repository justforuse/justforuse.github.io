---
title: "Hugo with i18n"
slug: "Hugo-Universal"
date: 2019-04-14T16:37:43+08:00
author: allen
categories:
- Hugo
tags:
- hugo
keywords:
- hugo
- universal
- multilingual
disqusIdentifier: 1555231063
#thumbnailImage: //example.com/image.jpg
---

As a site generator, hugo also support i18n.

<!--more-->

Universal means multilingual, for now, we can just add different text display under differene language.

Here is what I do(in config.toml)

{{< gad-in-article >}}

### Hugo

Set default language and set `defaultContentLanguageInSubdir` to `true`

```
languageCode = "en-us"
defaultContentLanguage = "zh-cn"
defaultContentLanguageInSubdir = true
```

Add different file path under different language:
```
[languages]
  [languages.en-us]
    title = "Blog"
    contentDir = "content/en-us"
  [languages.zh-cn]
    contentDir = "content/zh-cn"
```

And here is the new command to create new post.
```
hugo new --kind post en-us/post/my-article.md
hugo new --kind post zh-cn/post/my-article.md
```

The file tree looks like this:
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
{{< gad-in-article >}}

### Hugo template
We can display different content under different language. For example, the `reward` shortcodes:

Use `.Site.Language.Lang` to get current page's language.

```html
{{ if (eq .Site.Language.Lang "zh-cn") }}
  <div class="text-center" id="reward">
    // ...
  </div>
{{ else }}
  <hr>
  <p class="text-center">{{ ":point_down:" | emojify }} Please leave your comment if you like this.{{ ":point_down:" | emojify }}</p>
{{ end }}
```
{{< reward >}}
