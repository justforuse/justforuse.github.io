---
title: "Prefers-Color-Scheme
tutorial"
slug: "Prefers-Color-Scheme-Tutorial"
date: 2019-08-04T10:41:51+08:00
author: allen
categories:
- Front-End
tags:
- css
keywords:
- js
- prefers-color-scheme
- dark mode
disqusIdentifier: 1564886511
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

Dark mode? Many apps supports this feature, now Chrome supports it too from version 76.

<!--more-->

Actually, not Chrome add dark mode. it just be responsive to your system.

Introduction to Chrome76: https://developers.google.com/web/updates/2019/07/nic76

{{< gad-in-article >}}

Broswer use media query to detect current mode of system:

```css
@media (prefers-color-scheme: dark) {
  ...
}
```

`prefer-color-scheme`supports: `dark`,`light`,`no-preference`。

Demo:

{{< codepen pen="voebow" user="justforuse" theme="dark">}}

Youtube Video tutorial:

{{< youtube kVKuH5H7nuA >}}

It is a cool stuff, give users better experience.

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
{{< reward >}}
