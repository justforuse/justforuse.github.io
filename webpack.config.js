var webpack = require("webpack");
var path = require("path")
module.exports = {
    entry: {
        main: "./javascript/main.js"
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'bundle')
    },
    module: {
        // For webpack2 use rules -> loaders, use -> loader
        rules: [
            {
                test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
                use: "url-loader"
            },
            {
                test: /\.css$/,
                use: 'style-loader!css-loader'//添加对样式表的处理
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]

}