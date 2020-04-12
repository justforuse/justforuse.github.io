---
title: "排序算法——快速排序(二)"
slug: "Quick-Sort-II"
date: 2020-04-11T23:55:11+08:00
author: allen
categories:
- Front-End
tags:
- js
keywords:
- 快速排序
- quick sort
- 原地快排
disqusIdentifier: 1586620511
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

大多数情况所说的快排指的是递归解法，但这样存在的问题是占用大量内存空间，如何减少空间复杂度？第一想法就是对数组本身进行操作，而不需要另开辟空间。

<!--more-->

回想下普通快排写法：[快速排序算法介绍](https://justforuse.github.io/blog/zh-cn/2019/10/quick-sort-algorithm/)

```js
// ...
return [...arguments.callee(leftArr), flag, ...arguments.callee(rightArr)];
```

每一次递归的最后异步，我们其实可以知道用作比较的值在排序后应处于的位置了（此时leftArr已确定）

知道了这点我们就可以对左边的数组和右边的数组进行递归排序了。

如何找到元素应该处于的位置？

```js

function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function getPos(arr, start, end) {
  // 作为参照值最后应处于的位置
  let pos = start - 1;
  // 去最后一个值作为参照值
  let pivot = arr[end];
  let i = start;
  while (i < end) {
    // 每有一个小于参照值，pos加1，并将其与交换到左端
    // i与pos之间的值均大于参照值
    if (arr[i] < pivot) {
      pos++;
      swap(arr, i, pos);
    }
    i++;
  }
  // 将参照值放到它应在的位置
  swap(arr, pos + 1, end);
  return pos + 1;
}

```

然后在对左右数组分别进行此操作就可以了，注意递归边界，当起点索引大于等于终点索引时结束

```js
function sort(arr, start, e) {
  let end = typeof e === 'undefined' ? arr.length - 1 : e

  if (start >= end) {
    return;
  }
  let pos = getPos(arr, start, end);
  sort(arr, start, pos - 1);
  sort(arr, pos + 1, end);
  return arr
}

const res = sort([15, 12, 1, 2, 7, 9, 3, 8, 20], 0);
console.log(res)
```

{{< gad-in-article >}}

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
