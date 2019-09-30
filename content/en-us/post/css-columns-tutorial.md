---
title: "CSS Columns Tutorial"
slug: "Css-Columns-Tutorial"
date: 2019-09-29T23:41:49+08:00
author: allen
categories:
- Front-End
tags:
- css
keywords:
- css columns
disqusIdentifier: 1569771709
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

Generally, when we said layout, it means element's layout, but we may need change the layout of paragraphs, CSS Columns can help us.

<!--more-->

Newspaper:
![image](https://user-images.githubusercontent.com/11868477/65834997-8a20ef80-e2d0-11e9-8629-0e3da07ddf2f.png)

Related attributes:
`columns`: column count or column width，such as`columns: 2, columns: 200px, columns: 2 auto...`.

`column-rule`: divider line style，like `border` attribute, 1px black line：`1px solid black`.

`column-gap`: gap width between columns。

`column-span`: makes it possible for an element to span across all columns when its value is set to all, like header in paragraph.

{{< gad-in-article >}}

Full demo:

{{< codepen pen="VwZOBME" user="justforuse" theme="dark">}}

Compatibility：

![image](https://user-images.githubusercontent.com/11868477/65894911-26381d00-e3dd-11e9-962c-eadc10e11de4.png)


{{< embed-caniuse mdn-css_properties_columns >}}

<!-- {{< embed-caniuse css-placeholder-shown >}} -->
<!-- {{< codepen pen="PKdOpB" user="justforuse" theme="dark">}} -->
<!-- {{< alert warning >}}
xxx
{{< /alert >}} -->
{{< reward >}}
