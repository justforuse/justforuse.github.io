---
title: "排序算法——选择排序"
slug: "selection-sort-algorithm"
date: 2019-10-21T23:19:24+08:00
author: allen
categories:
- Front-End
tags:
- 算法
keywords:
- 选择排序
- 算法
disqusIdentifier: 1571671164
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

选择排序的思想是每次都从一个起始位置后面的数组里找到最小的，然后与起始位置的值交换

<!--more-->

动图示例：

![selection-sort](https://user-images.githubusercontent.com/11868477/67218915-c1ab3380-f459-11e9-8096-988cae068640.gif)


{{< gad-in-article >}}


js代码：

```js
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 外层循环设置最小值索引为当前索引
    let currentMin = i
    for (let j = i; j < arr.length; j++) {
      // 在后面的未排序的数组中找到最小值索引
      if (arr[j] < arr[currentMin]) {
        currentMin = j
      }
    }
    // 交换位置
    if (currentMin !== i) {
      let temp = arr[currentMin]
      arr[currentMin] = arr[i]
      arr[i] = temp
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
