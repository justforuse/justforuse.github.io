---
title: "借用Github搭建自己的CDN服务"
slug: "Make-Github-as-Cdn"
date: 2019-07-25T22:52:02+08:00
author: allen
categories:
- Front-End
tags:
- js
- nodejs
keywords:
- js
- github
- cdn
- image
- file
disqusIdentifier: 1564066322
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

很多时候我们都希望把一些资源保存到远程服务器上，之前用过的图床就是一个免费的图片CDN服务。GitHub作为一个开源的代码管理平台，其实也具有这样的能力

<!--more-->

如果只是想把图片传到Github上，可以在仓库issue下上传图片：
相关操作：
![github issue](https://user-images.githubusercontent.com/499192/57450172-1a955f80-725e-11e9-9fed-267179bdab15.gif)

我们要做的不只是图片，包括各类型的文件。

Github提供了API接口，[octonode](https://github.com/pksunkara/octonode)是一个封装好的API库，我们可以快速搭建我们的服务。

其它使用到的库：express, express-fileupload, uuid。

这个服务功能比较简单，代码：

```js
const github = require('octonode');
// 生成的github Token
const client = github.client('xxxxxxxxxxxxxxxxxxxxxx');
// 仓库名称，比如file-cdn
const ghrepo = client.repo('justforuse/file-cdn');
const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')
const uuidv1 = require('uuid/v1');
const app = express()
const port = 3000
app.use(fileUpload())
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'))
})
app.post('/upload', (req, res) => {
  const file = req.files['user-file']
  const fileArr = file.name.split('.')
  const fileType = fileArr[fileArr.length -1]
  const md5Name = `${uuidv1()}.${fileType}`
  ghrepo.createContents(md5Name, 'Upload new file', file.data, function (err, status, body, headers) {
    res.send({
      // 上传后的文件url
      url: `https://raw.githubusercontent.com/justforuse/file-cdn/master/${md5Name}`
    })
  })
})

app.listen(port, () => console.log(`Github CDN app listening on port: ${port}!`))
```

{{< gad-in-article >}}

还要有可视化的上传界面，这里使用ElementUI搭建：

```html
<body>
  <div id="app">
    <el-upload :on-success="handleSuccess" :show-file-list="false" class="upload-demo" drag action="/upload" name="user-file">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <ul>
      <li v-for="(item, i) in fileList" :key="i">
        {{ item.url }}
      </li>
    </ul>
  </div>
  
  <script>
    new Vue({
      el: '#app',
      data: {
        fileList: []
      },
      methods: {
        handleSuccess (res) {
          console.log(res)
          this.fileList.push(res)
        },
      }
    })
  </script>
</body>
```

因为这个CDN服务只是我们个人使用的，所以演示地址就不放了😀，效果：

![](https://raw.githubusercontent.com/justforuse/file-cdn/master/3669f040-aeef-11e9-98a7-9f9584c17b51.gif)

有时候会觉得这样做是否与Github初衷相悖，但其实根本还是在于度的问题，而且作为CDN服务速度并不一定比其他正规的服务好。
<!-- {{< embed-caniuse css-placeholder-shown >}} -->
{{< reward >}}
