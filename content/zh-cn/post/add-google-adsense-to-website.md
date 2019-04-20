---
title: "将Google Adsense添加到网站中"
slug: "Add-Google-Adsense-to-Website"
date: 2019-04-20T13:46:44+08:00
author: allen
categories:
- Google Adsense
tags:
- google adsense
- hugo
keywords:
- hugo
- website
- google adsense
disqusIdentifier: 1555739204
#thumbnailImage: //example.com/image.jpg
---

<!-- toc -->

一般情况下，网站是要挂上广告的，如果没有广告商主动来投，那我们也可以尝试介入其他广告联盟。

Google Adsense就是一个不错的选择，这几天折腾了下终于把Google Adsense接入到这个网站中了，下面说一下步骤和遇到的问题。

<!--more-->
{{< gad-in-article >}}
# 在Google Adsense注册你的网站

第一步就是注册你的网站，官网地址是：https://www.google.com/adsense/start/#/?modal_active=none，点击右上角的Sign up就可以了，

注册需要填写你的网站地址、邮箱、以及一些选项。

注册之后，Google Adsense会对你的网站进行验证，需要你在网站index.html中添加一段代码，添加完成后，如果验证通过，则慢慢等待审核通过就好了。

我这次注册时被拒绝了两次，总结下需要注意的地方：

- 网站内容要有“价值”：对于博客类网站可以理解为量要达到要求，所以在上述**添加验证代码的时候要在你的所有网页都添加代码**

- 主页要符合规范：当时情况比较特殊，可以发现，我的静态文件实际是放在/blog路径下的，根目录的index.html跟网站没有实际关联，所以我以为只要在index.html通过`refresh`指到/blog下就行了，但是很遗憾，这不符合要求，没办法，只有对根路径下的index.html做些修改了。

经历上述两次被拒后，终于通过了:tada:

# 网站摆放Google Adsense的广告
![这里写图片描述](/images/2019/4/adsense.png)

广告大概分为自动广告和广告单元

如果图个省事直接选择自动广告就可以了，但是如果想自定义广告位置可以选择广告单元。

广告单元又分为三种：文字广告、信息流广告、文章内嵌广告

我选择了第三种：文章内嵌广告

新建广告单元成功后，会生成一段代码，只要把这段代码添加到要显示的位置就可以了。

都是同样的代码可以使用Hugo的shortcodes功能实现：


{{< codeblock "gad-in-article" "html" >}}
<script
  async
  src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
>
</script>
<ins
  class="adsbygoogle"
  style="display:block; text-align:center;"
  data-ad-layout="in-article"
  data-ad-format="fluid"
  data-ad-client="ca-pub-xxxxxx"
  data-ad-slot="xxxxx"
>
</ins>
<script>
  ;(adsbygoogle = window.adsbygoogle || []).push({})
</script>
{{< /codeblock >}}

现在我们插入一个广告:point_down:(本地开发的时候看不到，只有传到服务器才可以看到)

{{< gad-in-article >}}

# 注意事项
- **广告是会被AdBlock这类的插件屏蔽掉的。**现在可以稍微理解为啥有的网站会让你关闭AdBlock了:sweat_smile:
- 如果想靠这个创收的话，主要还是网站流量和内容，所以初期不要幻想太高。
- Google是可以选择关闭你的账户的，要遵循用户规范，**Google is watching you**

# 一些优化方案
- 可以尝试添加检测当前时候开启AdBlock插件的功能，并给出关闭请求:grimacing:
- 其他工具，[Google Analytics](https://analytics.google.com/analytics/web/)、[Google Search Console](https://search.google.com/search-console/about),这些都可以帮助你监测当前流量，更好的提高流量（我上车了，你呢？）。


{{< reward >}}
