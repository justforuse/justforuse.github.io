---
title: "Webpack配置编译SCSS"
slug: "Webpack-Compile-Scss"
date: 2019-03-08T22:05:21+08:00
author: allen
categories:
- Front-End
tags:
- webpack
- scss
keywords:
- webpack
disqusIdentifier: 1552053921
#thumbnailImage: //example.com/image.jpg
---
现在框架都提供了一套完整的编译配置，比如Vue;

有时只是需要编译scss文件，在使用gulp的方式时遇到了无法识别SCSS的~语法的问题，其实也可以通过一些配置来解决，只是觉得既然webpack是主流，那不妨总结一套专门编译scss的配置
<!--more-->

{{< codeblock "webpack.config.js" "js">}}
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path")
module.exports = {
  entry: './packages/src/main.scss',
  output: {
    path: path.resolve(__dirname, 'lib')
  },
  module: {
    rules: [
      // Extracts the compiled CSS from the SASS files defined in the entry
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            // Interprets CSS
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader' // 将 Sass 编译成 CSS
          }
        ]
      }
    ],
  },
  plugins: [
    // Where the compiled SASS is saved to
    new MiniCssExtractPlugin({
      filename: 'index.css',
      allChunks: true,
    })
  ],
  optimization: {
    minimizer: [
      // 有时候webpack会默认优化z-index值，设置默认不优化
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    ]
  },
};
{{< /codeblock >}}
{{< codeblock "package.json" "json" >}}
{
  ...
  "devDependencies": {
    "css-loader": "^2.1.0",
    "mini-css-extract-plugin": "^0.5.0",
    "node-sass": "^4.11.0",
    "optimize-css-assets-webpack-plugin": "^5.0.1",
    "sass-loader": "^7.1.0",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.2.3",
    "webpack-dev-server": "^3.2.1"
  }
...
}

{{< /codeblock >}}

如果你想删除编译后的文件中的`main.js`, 可以使用这个包：[webpack-fix-style-only-entries](https://github.com/fqborges/webpack-fix-style-only-entries)

示例代码：

```
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries")
...

  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    ...
  ],
...
```


{{< reward >}}
