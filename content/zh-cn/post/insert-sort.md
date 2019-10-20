---
title: "排序算法——插入排序"
slug: "insert-sort-algorithm"
date: 2019-10-20T21:24:26+08:00
author: allen
categories:
- Front-End
tags:
- 算法
keywords:
- 插入排序
- 算法
disqusIdentifier: 1571577866
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

有必要重新整理一下排序算法，重新理解一下吧

<!--more-->

>原博主Youtube首页 https://www.youtube.com/user/mikeysambol/

插入排序的方式可以想象成整理扑克牌的方式，想象下，当你手里有一副牌时，每次都会从右边拿出一张然后挨个和前面的比对，找到位置后就放进去，插入排序的就是这样做的。

动图示例：

![GIF](https://user-images.githubusercontent.com/11868477/67160194-c5b75280-f380-11e9-9bce-8e22f4b032ab.gif)

看这图我们会发现，这种算法会频繁的交换元素的位置：


{{< gad-in-article >}}

js代码:

```js
function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i
    while (j > 0) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      }
      j--
    }
  }
  return arr
}
```



<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
