---
title: "Check why a package is installed"
slug: "Why-This-Package-Is-Installed"
date: 2019-06-07T12:03:50+08:00
author: allen
categories:
- Front-End
tags:
- npm
- yarn
keywords:
- why package installed
- npm
- yarn
disqusIdentifier: 1559880230
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---


In general, there are lots of packages in `node_modules`, but only few is wrote to `package.json` file. Cause these dependencies required other dependencies.

It is necessary to make clear these dependencies' relation when you want to upgrade package version.

<!--more-->

If you use `yarn` to install your dependencies, you can use `yarn why [package]` to get their relation.

e.g.

![yarn-why](/images/2019/6/yarn-why.png)

{{< gad-in-article >}}

While for `npm`, there is no command like `yarn why`, you can use the package `npm-why` to do this, Usage: `npx npm-why [package]`.

e.g.

![npm-why](/images/2019/6/npm-why.png)

Now, you can get the relation between dependencies by these two ways.

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
{{< reward >}}
