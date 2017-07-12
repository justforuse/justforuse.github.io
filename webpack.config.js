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
        loaders: [
            {
                test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
                loader: "url-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'//添加对样式表的处理
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?jQuery'
            },
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]

}