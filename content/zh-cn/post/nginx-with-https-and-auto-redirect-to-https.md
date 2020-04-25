---
title: "Nginx配置支持HTTPS并自动跳转HTTPS协议"
slug: "Nginx-With-Https-and-Auto-Redirect-to-Https"
date: 2020-04-25T22:20:12+08:00
author: allen
categories:
- Nginx
tags:
- nginx
keywords:
- nginx
- https
- ssl
- redirect
disqusIdentifier: 1587824412
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

相信大家对nginx和https都很熟悉，但是nginx配置https是怎么一回事呢？接下来，就让小Y带着大着一起看看吧~

<!--more-->

上文提到准备部署自己的网站，那么只买了阿里云服务器和域名，该如何访问呢？这就需要服务器上安装。。服务器，nginx近几年使用的较多，安装方式就不细说了。

众所周知，要支持HTTPS访问的话首先需要网站证书，可以购买付费的，阿里云也提供了免费证书。申请通过后下载证书到服务器上。

![image](https://user-images.githubusercontent.com/11868477/80282802-0932b500-8746-11ea-955b-496a702c5291.png)

找到你的nginx.conf文件并添加如下代码：

```
server {
    listen       443 ssl;
    server_name  www.codog.com.cn;

    ssl_certificate      [下载证书中.pem文件路径];
    ssl_certificate_key  [下载证书中.key文件路径];
    ssl_session_cache    shared:SSL:1m;
    ssl_session_timeout  5m;

    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers  on;

    location / {
        root [资源文件地址];
        index  index.html index.htm;
    }
}
```

这样就基本完成HTTPS访问了？如果遇到什么报错就google好了😒，遇到挺多奇怪的问题~

几个nginx常用命令：

```shell
# 重启nginx
nginx -s reload

# 查看.conf文件是否正确
nginx -t
```

{{< gad-in-article >}}

然后HTTP强制转为HTTPS访问：

```
server {
    listen       80;
    server_name  codog.com.cn;
    return 301 https://www.codog.com.cn;
}
```

注意这种方式会将所有http请求都重定向到https域名，例如：

http://www.codog.com.cn/2020/04/25/hello-world/  ==》 https://www.codog.com.cn

可以发现后面的路径丢失了，这个可以按实际需要配置，除非你知道所有路径都支持https访问。


<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
