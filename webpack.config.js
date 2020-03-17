const path = require('path');
// 插件都是一个类，所以我们命名的时候尽量用大写开头
let HtmlWebpackPlugin = require('html-webpack-plugin');
// css 抽离为文件
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
let webpack = require('webpack');

module.exports = {
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'bundle.js', // 打包后的文件名称
        path: path.resolve('dist') // 打包后的目录，必须是绝对路径
    },
    module: {
         rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: /src/, // 只转化src目录下的js
                exclude: /node_modules/ // 排除掉node_modules，优化打包速度
            },
            {
             test: /\.css$/, // 解析css
             use: ['style-loader', 'postcss-loader', 'css-loader'] // 从右向左解析
            },
            {
                test: /\.less$/, // 解析less
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader', 'less-loader'] // 从右向左解析
                })
            },
            {
                test: /\.scss$/, // 解析scss
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader', 'sass-loader'] // 从右向左解析
                })
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192, // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                        outputPath: 'images/' // 图片打包后存放的目录
                    }
                }]
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-withimg-loader' //页面中经常会用到img标签，img引用的图片地址也需要一个loader来帮我们处理好
            },
             {
                 test: /\.(eot|ttf|woff|svg)$/,
                 use: 'file-loader' //字体图标和svg图片都可以通过file-loader来解析
             }
        ]
    }, // 处理对应模块
    plugins: [
        // 打包前先清空 dist文件夹
        new CleanWebpackPlugin(),
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
        // 拆分后会把css文件放到dist目录下的css/style.css
        new ExtractTextWebpackPlugin('css/style.css'),
        // 通过new一下这个类来使用插件
        new HtmlWebpackPlugin({
            // 用哪个html作为模板
            // 在src目录下创建一个index.html页面当做模板来用
            template: './src/index.html',
            hash: true, // 会在打包好的bundle.js后面加上hash串
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true // 压缩内联css
            },
            chunks: ['vendor', 'index', 'utils'] //  引入需要的chunk 这个模板 需要引入哪些公共抽离文件
        })
    ],
    devServer: { // 开发服务器配置
        port: 3000, // 端口
            open: true, // 自动打开浏览器
            hot: true, // 开启热更新
            overlay: true, // 浏览器页面上显示错误
            historyApiFallback: true
    }, 
    resolve: {
        // 别名
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
         modules: ['node_modules'], // 主要是优先查找什么地址
        // 省略后缀
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
    },
    optimization: { // 提取公共文件
        splitChunks: {
            cacheGroups: {
                vendor: { // 抽离第三方插件
                    test: /node_modules/, // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor', // 打包后的文件名，任意命名    
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10
                },
                utils: {
                    // 抽离自己写的公共代码，utils里面是一个公共类库
                    chunks: 'initial',
                    name: 'utils', //  任意命名
                    minSize: 0 // 只要超出0字节就生成一个新包
                }
            }
        }
    },
    mode: 'development', // 模式配置
    devtool: 'inline-source-map', // 报错 浏览器报错只报在build.js第几行。这让我们排查错误无从下手  这个给出源码
}