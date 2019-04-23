---
title: "Compile SCSS with Webpack"
slug: "Webpack-Compile-Scss"
date: 2019-03-08T22:05:22+08:00
author: allen
categories:
- Front-End
tags:
- webpack
- scss
keywords:
- webpack
- scss
- sass
- compile
disqusIdentifier: 1552053922
thumbnailImagePosition: left
thumbnailImage: /blog/images/2019/3/webpack-compile-scss.png
---

Nowdays, the frameworks supply a whole configs to compile our project.

If you just want to compile `.scss` file, `gulp` may help us to do that. But I faced that it can not recognize `~` grammar, so I turn to webpack.

<!--more-->

{{< gad-in-article >}}

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

You may want to delete the `main.js` in output path, you can try this package:[webpack-fix-style-only-entries](https://github.com/fqborges/webpack-fix-style-only-entries)

Demo：

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
