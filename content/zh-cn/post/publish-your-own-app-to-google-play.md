---
title: "发布自己的APP到Google Play上"
slug: "Publish-Your-Own-App-to-Google-Play"
date: 2019-08-11T16:29:46+08:00
author: allen
categories:
- Front-End
tags:
- android
- google play
keywords:
- android app
- google play
disqusIdentifier: 1565512186
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

想把自己的APP发布到Google Play上供世界上更多的人下载吗？这篇文章展示了所有需要的步骤。

<!--more-->

### 准备工作：

- Google账号
- 信用卡（可以国际支付，注册时需要支付25美元）


### 注册Google Play账号：
[注册地址](https://play.google.com/apps/publish/signup)
注册共有4个步骤，按照提示填写就可以了，还需要支付25美元。。

![image](https://user-images.githubusercontent.com/11868477/62831692-3d1c8780-bc56-11e9-9590-8c489e0d6019.png)

完成注册后会跳转到Play控制台页面：

![image](https://user-images.githubusercontent.com/11868477/62831734-794fe800-bc56-11e9-9558-eed1a3c4421c.png)

### 新建应用
点击右上角的创建应用，新建一个应用，选择应用语言和填写应用名称（如果选择的语言时中文，应用名称也应该是中文，最后会做检查）

应用初始化后会跳转到应用的控制面板页：

![image](https://user-images.githubusercontent.com/11868477/62831775-bfa54700-bc56-11e9-9667-b1687ef5dc8e.png)


所有的信息都按照提示填写即可，注意左侧红框内的5个状态框，这同样需要我们按照说明填写，只有这5个框都验证通过变成绿色才能发布应用。

{{< gad-in-article >}}

### 打包应用

{{< alert warning >}}
注意项目的包名称不能是`com.example`默认名称，否则会检查不通过。
{{< /alert >}}

在应用版本页我们上传应用打包后的文件：

如何打包文件？上传文件需要是`.aab`文件，不是常见`.apk`文件。

以Android Studio为例展示如何打包`.aab`文件:

![image](https://user-images.githubusercontent.com/11868477/62831883-6e965280-bc58-11e9-9375-38e93e5b3767.png)

选择Android App Bundle
![image](https://user-images.githubusercontent.com/11868477/62832229-c3889780-bc5d-11e9-88ec-232e1fd3e868.png)


选择密钥:
![image](https://user-images.githubusercontent.com/11868477/62832239-ddc27580-bc5d-11e9-9d22-545fb60bb1c6.png)

新建密钥，密码填写一样的也可以，避免记混：
![image](https://user-images.githubusercontent.com/11868477/62832257-16fae580-bc5e-11e9-9c24-a94bc58cf0c7.png)


打包选择release：
![image](https://user-images.githubusercontent.com/11868477/62832275-401b7600-bc5e-11e9-964d-4f7a5d5f08f5.png)

然后点击完成，aab文件就生成了：
![image](https://user-images.githubusercontent.com/11868477/62832285-63462580-bc5e-11e9-9cf9-e6bea939832c.png)


上传aab文件
![image](https://user-images.githubusercontent.com/11868477/62831833-81f4ee00-bc57-11e9-9efb-509c803aa874.png)

再填写一些必要信息就可以发布了，剩下的就是等待审核了

![image](https://user-images.githubusercontent.com/11868477/62832329-fb440f00-bc5e-11e9-8c41-e4131a742dba.png)


到这里我们就成功发布了一个应用到Google Play上，至于后面的比如应用更新、添加广告之类的后面等审核通过后再添加吧😂

参考文章：https://themanifest.com/app-development/how-publish-app-google-play-step-step-guide

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
{{< reward >}}
