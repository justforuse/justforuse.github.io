---
title: "制作自己的字体图标库"
slug: "personal-font-icon-tutorial"
date: 2018-09-20T22:15:57+08:00
author: allen
categories:
- Front-End
tags:
- svg
- font
keywords:
- font-icon
disqusIdentifier: 1537452957
#thumbnailImage: //example.com/image.jpg
---

{{< alert danger >}}
  This article was not translated to English, It will be done in few days. It would be nice if you can help me to translate.
{{< /alert >}}

你可能使用过或听说过各种字体图标库，比如fontawesome, glyphicon等，想过制作一个属于自己的字体图标库吗？今天就试着做一个。
<!--more-->


首先是我们会用到的网站：[IcoMoon](https://icomoon.io/app/#/select)  它是一个可以在线生成图标库的网站。

然后是制作svg的软件，当然如果你足够🐮🍺，可以自己写svg文件；我用的是[inkscape](https://inkscape.org/da/download/)生成svg图标。

比如我画了一个@符号：
![inEMa6.png](https://s1.ax1x.com/2018/09/20/inEMa6.png)

然后把它传到上面提到的icoMoon上

[![inE1PO.md.png](https://s1.ax1x.com/2018/09/20/inE1PO.md.png)](https://imgchr.com/i/inE1PO)

可以选几个自己喜欢的图标，点击生成字体。

可以自定义类名，及设置一些属性，这个自己探索吧~

然后点击下载将文件下载下来。

解压后的文件夹会包含一个style.css文件，这个就是我们的字体图标库。

还有一个演示文件，可以对照着来~

所以，最后我们的图标库使用效果如下：
```html
...
<link rel="stylesheet" href="./style.css">
...
<i class="icon-compass"></i>
<i class="icon-my-at" style="color: red; font-size: 2em;"></i>
```
![inEszQ.png](https://s1.ax1x.com/2018/09/20/inEszQ.png)

至此就大功告成了，可以按照上述步骤建立更多的字体图标。

我们在回头看一下字体图标到底是怎么回事？

查看解压后的fonts文件夹中的文件。

svg文件部分内容如下：
```html
<glyph unicode="&#xe949;" glyph-name="compass" d="M544.010-64.004c-2.296 0-4.622 0.25-6.94 0.764-14.648 3.25-25.070 16.238-25.070 31.24v480h-480c-15.002 0-27.992 10.422-31.24 25.070-3.25 14.646 4.114 29.584 17.708 35.928l960 448c12.196 5.688 26.644 3.144 36.16-6.372 9.516-9.514 12.060-23.966 6.372-36.16l-448-960c-5.342-11.44-16.772-18.47-28.99-18.47zM176.242 512h367.758c17.674 0 32-14.328 32-32v-367.758l349.79 749.546-749.548-349.788z" />
<glyph unicode="&#xe94a;" glyph-name="compass2" d="M512 960c-282.77 0-512-229.23-512-512s229.23-512 512-512 512 229.23 512 512-229.23 512-512 512zM96 448c0 229.75 186.25 416 416 416 109.574 0 209.232-42.386 283.534-111.628l-411.534-176.372-176.372-411.534c-69.242 74.302-111.628 173.96-111.628 283.534zM585.166 374.834l-256.082-109.75 109.75 256.082 146.332-146.332zM512 32c-109.574 0-209.234 42.386-283.532 111.628l411.532 176.372 176.372 411.532c69.242-74.298 111.628-173.958 111.628-283.532 0-229.75-186.25-416-416-416z" />
```

style.css文件部分内容如下：
```css
.icon-my-at:before {
  content: "\e900";
}
.icon-compass:before {
  content: "\e949";
}
.icon-compass2:before {
  content: "\e94a";
}
```

所以可以理解为是`glyph`和unicode结合使用，然后样式直接引用unicode编码，就会输出对应的字体路径了。

{{< reward >}}
