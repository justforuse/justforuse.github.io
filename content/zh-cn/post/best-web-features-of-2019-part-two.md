---
title: "2019年Web开发中值得关注的新特性(2/4)"
slug: "Best-Web-Features-of-2019-Part-Two"
date: 2019-12-25T23:03:23+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- js
- 图片纵横比
- Blob reading
- 图片剪贴版
- Sharing
disqusIdentifier: 1577286203
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

上期分享了4个2019值得关注的新特性，今天继续分享4个：图片纵横比、Blob reading、图片剪贴版、Sharing

<!--more-->

## 图片纵横比

这个现象可能比较常见，在图片加载的时候，页面没有为图片预留空间，所以在图片加载完成时，页面结构发生了变化，体验不是很友好。

其实这种情况可以通过增加包裹容器，并设置相关属性来避免。

示例：（可以尝试在Edge和Chrome浏览器下查看差异，建议设置弱网环境）

{{< codepen pen="abzwLEM" user="justforuse" theme="dark">}}

## Blob reading

读取文件内容也有新方法了，其实算是比较低频的交互，目前通用的写法是使用FileReader方法，个人感觉有点啰嗦。。

```js
const blob = input.files[0]

const reader = new FileReader()
reader.readAsText(blob)
reader.onload = () => {
  console.log(reader.result)
}
```

现在可以借助`Response`提供的方法来实现：

```js
const blob = input.files[0]

const result = await new Response(blob).text();
// 或者更干脆点
const result = await blob.text()

```

{{< gad-in-article >}}

## 复制图片

这个特性比较新，没有看出啥效果。。先贴着代码吧

```js
async function handleClick() {
  try {
    const imgUrl = `https://user-images.githubusercontent.com/11868477/
    71448279-e501a000-2774-11ea-8456-ddc4d2ced50f.png`

    const response = await fetch(imgUrl, {
      mode: 'no-cors'
    })
    const blob = await response.blob()
    await navigator.clipboard.write([
      new ClipboardItem({ [blob.type]: blob })
    ])
    console.log('image copied!')
  } catch (err) {
    console.log('Failed!', err)
  }
}
```

`write`方法支持性很差，有几个其他剪贴版的方法可以使用了，比如读写文本。更多使用方式可以参考这篇文章： https://alligator.io/js/async-clipboard-api/

## Sharing

Share API推出有一段时间了，这里的Sharing指的是分享文件，可以在PWA和Native应用互相分享文件。比如分享一张图片到美图APP中。

既然是和PWA相关，那么就需要在manifest.json文件中做一些配置，（先放个图吧，这个功能咱也没实际使用过）

![image](https://user-images.githubusercontent.com/11868477/71448611-2f851b80-2779-11ea-9365-f1c4b98ea0c5.png)


关于之前的Share API使用方式可以参考这篇： https://alligator.io/js/web-share-api/

{{< gad-in-article >}}

毫无疑问，Sharing获得本期最佳头衔，与上期Intl相比，也进入到了最终的决赛。

这期的四个新特性有两个开始和系统或者其他应用直接有交互了。在网页技术更新换代的过程中，浏览器本身的功能也应该被关注，而不仅仅作为网页的载体，与操作系统，与其他系统应用的交互，也可以为广大用户代码更好的使用体验。

期待在2020年，这些技术可以有更多的应用场景👊

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
