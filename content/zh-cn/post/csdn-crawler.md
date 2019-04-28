---
title: "CSDN博客统计平台"
slug: "Csdn-Crawler"
date: 2019-04-28T22:48:49+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
disqusIdentifier: 1556462930
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

CSDN自带的后台管理平台功能相对单一，比如统计阅读量排行就没有，所以可以自己试着做一下。

<!--more-->

这算是网页爬虫的领域吧

核心代码：
```js
//...
async function processArray(array) {
  for (const item of array) {
    await getInfo(item)
  }
  console.log('Done!')
  res.set({
    "Access-Control-Allow-Origin" : "*"
  })
  res.json({
    code: 200,
    total: result.length,
    data: result
  })
}
const pages = [...new Array(pageLength).keys()].map(i => i + 1)
processArray(pages)
})

//...
```

即在for循环中执行异步方法，使用async/await可以像写同步方法一样编写异步操作。


{{< gad-in-article >}}

效果：

![csdn](/images/2019/4/csdn-crawler.png)

平台地址：http://justforuse.github.io/csdn-crawler/

Github：https://github.com/justforuse/csdn-crawler
{{< reward >}}
