---
title: "How to Use Svg in React"
slug: "How-to-Use-Svg-in-React"
date: 2019-07-27T23:57:49+08:00
author: allen
categories:
- Front-End
tags:
- js
- react
keywords:
- js
- react
- svg
disqusIdentifier: 1564243069
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

It's common to add image to your application, so how to use it in React?

<!--more-->

Official docs: https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files

Method one:
```jsx
// svg png and other types of image
import logo from './logo.svg';
//...
<img src={logo} className="App-logo" alt="logo" />
//...
```

Webpack will convert it to image url automatically.

{{< gad-in-article >}}

Method two:

{{< alert warning >}}
Note: this feature is available with react-scripts@2.0.0 and higher, and react@16.3.0 and higher.
{{< /alert >}}

And it only works for svg, it consider svg as a component:
```jsx
// ...
import { ReactComponent as Logo } from './logo.svg'
// ...
<Logo />
```

It will render svg code to DOM finally.

![](https://raw.githubusercontent.com/justforuse/file-cdn/master/0fd00c40-b100-11e9-98a7-9f9584c17b51.png)

Want more component methods to use SVG? check this blog: https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91?gi=b5829e4400ed

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
{{< reward >}}
