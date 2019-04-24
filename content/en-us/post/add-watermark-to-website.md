---
title: "Add Watermark to Website"
slug: "Add-Watermark-to-Website"
date: 2019-04-24T23:01:45+08:00
author: allen
categories:
- Front-End
tags:
- html
- css
- watermark
keywords:
- watermark
- website
- security
disqusIdentifier: 1556118105
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

How to add watermark image to your website? It's pretty simple!

<!--more-->

{{< gad-in-article >}}

First, you should make a image as your watermark image apparently.

Then, add this code to your css file.

```css
body::after {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url('./watermark.png');
  opacity: 0.3;
  pointer-events: none;
}
```

The point is the `pointer-events` property.

As MDN saying:

>It sets under what circumstances (if any) a particular graphic element can become the target of pointer events.

>The value none instructs the pointer event to go "through" the element and target whatever is "underneath" that element instead.

Result:

![](/images/2019/4/watermark-demo.png)

Live demo:

{{< jsfiddle j897hmkL >}}




{{< reward >}}
