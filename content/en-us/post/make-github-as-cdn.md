---
title: "Build CDN server with github"
slug: "Make-Github-as-Cdn"
date: 2019-07-25T22:52:04+08:00
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
disqusIdentifier: 1564066324
# draft: true
# thumbnailImagePosition: left
# thumbnailImage: /blog/images/2019
---

CDN is useful in work or life, but many cdn service is not free. So, let's build a cdn server with github.
<!--more-->

If you just want to upload image, you can use github issue to achieve it.

Like:
![github issue](https://user-images.githubusercontent.com/499192/57450172-1a955f80-725e-11e9-9fed-267179bdab15.gif)


But we want to upload any type of file, not just image.

Github has lots of open api, and [octonode](https://github.com/pksunkara/octonode) is a library for it, we can build our service with it quickly.

Other libraries: express, express-fileupload, uuid.

server code:
```js
const github = require('octonode');
// github Token
const client = github.client('xxxxxxxxxxxxxxxxxxxxxx');
// repo name, such as file-cdn
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
      // file cdn url
      url: `https://raw.githubusercontent.com/justforuse/file-cdn/master/${md5Name}`
    })
  })
})

app.listen(port, () => console.log(`Github CDN app listening on port: ${port}!`))
```

{{< gad-in-article >}}

We want a web page for that, and build it with ElementUI

Page code:
```html
<body>
  <div id="app">
    <el-upload :on-success="handleSuccess" :show-file-list="false" class="upload-demo" drag action="/upload" name="user-file">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Drop file，or<em>click to upload</em></div>
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
          this.fileList.push(res)
        },
      }
    })
  </script>
</body>
```

Cause this cdn serice is private, so I just put a demo here:

![](https://raw.githubusercontent.com/justforuse/file-cdn/master/3669f040-aeef-11e9-98a7-9f9584c17b51.gif)

Maybe you think it is not good to use github as cdn, but I think github is free to anyone, and it is not banned from github, and as a cdn service, github is not the best.
<!-- {{< embed-caniuse css-placeholder-shown >}} -->
{{< reward >}}
