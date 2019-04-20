---
title: "Add Google Adsense to your website"
slug: "Add-Google-Adsense-to-Website"
date: 2019-04-20T13:46:42+08:00
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
disqusIdentifier: 1555739202
#thumbnailImage: //example.com/image.jpg
---

Want to add Google Adsense to your website? I'll tell you how I add it to my website.

<!--more-->

Here is a ad:point_down:

{{< gad-in-article >}}

Cool.. right?

# Sign up Google Adsense

Go to google adsense website, and input your website url, like `example.com`.

After that, Google will give you a code block to verify.

Your should insert it to your `index.html`, between the `<head></head>` tag.

And then, Google will tell you to wait a few hours to start your account.

I failed two times at this step, and here is why I failed:

- Not enough content. For blog, you should add at least 10 posts to your website. and content must be valuable.

- Not follow the rules. Your `index.html` should be your homepage, `refresh` and `redirect` is not allowed.

# Put ad to your website

Here is two kinds of ads. Auto Ad and Ad Unit

Auto ad, obviously, Google will ad ads to your website automatically, but it may not what you want, So you can choose Ad Unit.

There are three kinds of Ad Unit, I choose the third one `in article ad`.

Here is a shortcode, you can use it to insert ad to your post quickly.

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

Demo? here is a ad test:point_down:

{{< gad-in-article >}}

Now, here is all the steps to add Google Adsense to your website.

Here is some tips:

- Some extension like `AdBlock` will block your ad
- [Google Analytics](https://analytics.google.com/analytics/web/) and [Google Search Console](https://search.google.com/search-console/about) are useful tools to monitor the traffic of your website.

{{< reward >}}
