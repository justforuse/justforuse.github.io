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
#thumbnailImage: //example.com/image.jpg
---

<!--more-->