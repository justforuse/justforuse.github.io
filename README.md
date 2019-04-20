### Static blog website

#### Dev

- Add post
```
hugo new --kind post en-us/post/my-article.md
hugo new --kind post zh-cn/post/my-article.md
```

- Get the latest submodule
```
git pull --recurse-submodules
git submodule update --remote --recursive
```

- Run
```
hugo server -D
```

- Publish
Use [Travis CI](https://travis-ci.org/) to deployment automatically 

- Useful code
```
table of content
<!-- toc -->

code block
{{< codeblock "style.css" "css" >}}
a {
  color: red
}
{{< /codeblock >}}
```
