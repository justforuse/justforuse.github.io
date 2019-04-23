---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
slug: "{{ lower .TranslationBaseName | title }}"
date: {{ .Date }}
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
disqusIdentifier: {{ now.Unix }}
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

<!--more-->

{{< reward >}}
