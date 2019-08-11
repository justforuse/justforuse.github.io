---
title: "Ho to publish your own app to Google Play"
slug: "Publish-Your-Own-App-to-Google-Play"
date: 2019-08-11T16:29:43+08:00
author: allen
categories:
- Front-End
tags:
- android
- google play
keywords:
- android app
- google play
disqusIdentifier: 1565512183
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

Want to publish your own app to Google Play for more people to use? Here is a guide for you.

<!--more-->

### Preparation:

- Google account
- Credit card(need $25 when sign up account)


### Sign up Google Play account:
[link](https://play.google.com/apps/publish/signup)

There are four steps, just follow the tips.

![image](https://user-images.githubusercontent.com/11868477/62831692-3d1c8780-bc56-11e9-9590-8c489e0d6019.png)

When finished sign up, it will redirect to Google Play Console page:

![image](https://user-images.githubusercontent.com/11868477/62831734-794fe800-bc56-11e9-9558-eed1a3c4421c.png)

### Create Application
Click the create button, select language and fill app's name(Your app's name should match the language)

Then, it will redirect to application dashboard page:
![image](https://user-images.githubusercontent.com/11868477/62831775-bfa54700-bc56-11e9-9667-b1687ef5dc8e.png)

Just follow tips to fill all fields, notice these checkbox, you should fill all fields of it.

{{< gad-in-article >}}

### Bundle application

{{< alert warning >}}
Your application's package name should not be `com.example`, it is banned from Google Play.
{{< /alert >}}

In application version page, we can upload our bundled file
You should upload `.aab` file, not `.apk` file.

I will show you how to bundle `.aab` file in Android Studio:

![image](https://user-images.githubusercontent.com/11868477/62831883-6e965280-bc58-11e9-9375-38e93e5b3767.png)

Choose Android App Bundle
![image](https://user-images.githubusercontent.com/11868477/62832229-c3889780-bc5d-11e9-88ec-232e1fd3e868.png)


Select key:
![image](https://user-images.githubusercontent.com/11868477/62832239-ddc27580-bc5d-11e9-9d22-545fb60bb1c6.png)

Create key, password can be same to avoid confused:
![image](https://user-images.githubusercontent.com/11868477/62832257-16fae580-bc5e-11e9-9c24-a94bc58cf0c7.png)


Choose release：
![image](https://user-images.githubusercontent.com/11868477/62832275-401b7600-bc5e-11e9-964d-4f7a5d5f08f5.png)

Click finish, and `.aab` file will be generated:
![image](https://user-images.githubusercontent.com/11868477/62832285-63462580-bc5e-11e9-9cf9-e6bea939832c.png)

Upload your `.aab` file:
![image](https://user-images.githubusercontent.com/11868477/62831833-81f4ee00-bc57-11e9-9efb-509c803aa874.png)

And fulfill the information, and publish it:

![image](https://user-images.githubusercontent.com/11868477/62832329-fb440f00-bc5e-11e9-8c41-e4131a742dba.png)

For now, we succeed to publish an app to Google Play！🎉🎉🎉


Referrer: https://themanifest.com/app-development/how-publish-app-google-play-step-step-guide

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
{{< reward >}}
