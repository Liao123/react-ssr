const path = require("path");
const HtmlwebpackPlugin = require('html-webpack-plugin');
const externalPlugins = require('webpack-node-externals'); 

const clientConfig = { // web 环境打包
    target:'web',
    // mode: 'development',
    entry:{
        main:path.resolve(__dirname,'../src/main.js'), //react
        // server:path.resolve(__dirname,'../index.js') // koa 
    },
    output:{
        path:path.resolve(__dirname,'../dist'), // 打包后产出的地址
        filename:"[name].js"
    },
    module:{
        rules:[
            // {
            //     test:/\.css$/,
            //     use:['style-loader','css-loader']
            // },
            // {
            //     test:'/\.js$/',
            //     exclude:/node_modules/,
            //     loader:"babel-loader"
            // }
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins:[
        new HtmlwebpackPlugin({
            title:'',// 页面title
            template:'ejs-compiled-loader!' + path.resolve(__dirname,'../src/index.html') ,
            filename:'index.html',
            chunks:['main'],// 页面中需要的出口js
            minify:{
                collapseWhitespace:true,
            }
        })
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'../dist'),
        host:'localhost', // 服务器ip地址
        compress:true, // 服务端开启压缩
        port:5200,// 端口号
        open:true,//自动打开浏览器
        historyApiFallback: true
    }
}

const serverConfig = {
    target:"node",
    entry:{
        index:path.resolve(__dirname,'../index.js')
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].js'
    },
    externals:[externalPlugins()],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader',
            }
        ]
    }
}
module.exports = {clientConfig,serverConfig}