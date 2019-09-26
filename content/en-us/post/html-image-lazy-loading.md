---
title: "Native lazy-loading for the web"
slug: "Html-Image-Lazy-Loading"
date: 2019-09-26T22:40:11+08:00
author: allen
categories:
- Front-End
tags:
- html
keywords:
- image-lazy-loading
disqusIdentifier: 1569508811
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

Lazy loading is always a important part of web page optimization. Now, Chrome has support this feature.

<!--more-->

Its pretty simple to use this feature, juat add `loading="lazy"` to `img` tag, and browser will lazy load image automatically.

{{< gad-in-article >}}

Online demo:
{{< codepen pen="oNvOzmY" user="justforuse" theme="dark">}}

Open developer tools, you can when you scroll down, the image will be loaded.

Besides, you can also add this to `iframe` tag, it will lazy load iframe page.

Reference: https://web.dev/native-lazy-loading

Compatibility:
{{< embed-caniuse loading-lazy-attr >}}


<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
