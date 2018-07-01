---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
slug: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
author: allen
categories:
- category
- subcategory
tags:
- tag1
- tag2
keywords:
- tech
disqusIdentifier: {{ now.Unix }}
#thumbnailImage: //example.com/image.jpg
---

<!--more-->