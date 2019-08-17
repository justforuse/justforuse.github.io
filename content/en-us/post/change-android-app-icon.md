---
title: "How to change my Android app icon"
slug: "Change-Android-App-Icon"
date: 2019-08-16T23:07:21+08:00
author: allen
categories:
- Front-End
tags:
- android
- google play
keywords:
- android
- app icon
disqusIdentifier: 1565968041
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

At last article, we succeed to publish my app to Google play, but I found I forgot to change the app icon, so today, let us change the app icon.

<!--more-->

It is pretty convenient to do it in Android Studio, just follow the steps:


Android Studio: Right click on your application module and click New -> Image Asset
![image](https://user-images.githubusercontent.com/11868477/63177703-12c63200-c07b-11e9-8319-fa8f09c41e36.png)

Choose foreground and background layer, image or color or text as you like, and fit the scaling.

![image](https://user-images.githubusercontent.com/11868477/63177661-fc1fdb00-c07a-11e9-8ad0-77efc982cf01.png)

{{< gad-in-article >}}

Click finish, and it will generate some files in the res directory.

![image](https://user-images.githubusercontent.com/11868477/63215031-09a89400-c153-11e9-8c3c-e20143a2a18f.png)

Check the result in Android emulator.

Reference: https://stackoverflow.com/questions/26615889/how-to-change-the-launcher-logo-of-an-app-in-android-studio

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
{{< reward >}}
