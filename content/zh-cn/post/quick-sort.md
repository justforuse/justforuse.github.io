---
title: "排序算法——快速排序"
slug: "quick-sort-algorithm"
date: 2019-10-31T23:22:30+08:00
author: allen
categories:
- Front-End
tags:
- 算法
keywords:
- 快速排序
- 算法
disqusIdentifier: 1572535350
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

快排是一个递归算法，思想是从数组中选一个参照，剩余数组中小于参照的添加到一个新数组，大于的添加到另一个新数组，然后再对这两个新数组进行上面的步骤。

<!--more-->

感觉之前文章的博主对快排的解释有点复杂，所以就不用它的动图了，这里图里面的参照就是中间那条横线，应该是所在数组的平均值。


![image](https://user-images.githubusercontent.com/11868477/67962183-b74a2000-fc37-11e9-8a87-7fd4ed35385d.png)


其实参照不唯一，可以取平均值，也可以是数组中任意一个数值，这里我们就取第一个数值作为参照：

{{< gad-in-article >}}

js代码：

```js
function quickSort(data) {
  // 递归出口，当数组个数为0或者1
  if (data.length <= 1) {
    return data;
  }
  const flag = data[0];
  const leftArr = [];
  const rightArr = [];
  for (let i = 1; i < data.length; i++) {
    if (data[i] < flag) {
      leftArr.push(data[i])
    } else {
      rightArr.push(data[i])
    }
  }
  // 数组的concat方法也一样
  return [...arguments.callee(leftArr), flag, ...arguments.callee(rightArr)];
}
```

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
