框架搭建教程 https://blog.csdn.net/weixin_42958859/article/details/88801180
1.npm init   安装一个package.json
2.npm install --save-dev webpack webpack-cli  

项目目录 ： 
        |-- app
        |-- build
        |-- server
        |-- template
        |-- package.json
        |-- README.md
        |-- .gitignore

3.npm i -D @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin 安装babel 和模板插件
4.npm i --save react react-dom 安装 react 依赖 
5.npm i -D webpack-dev-server 安装webpack server 端口
6.在build下新建webpack.dev.config.js
7.npm i -D webpack-merge 安装下webpack-merge
8.npm i -D html-loader style-loader css-loader less-loader url-loader file-loader less  下载需要的loader以及less     这边可以换成sass https://www.jianshu.com/p/1f3ac99c0a29
9.npm i -S koa 安装koa
10.npm i -S @babel/register  使用@babel/register在node运行时候编译我们的jsx代码以及es6语法
11.npm i -S react-router-dom 安装react-路由
12.先下载 npm i -S koa-router 开始ssr 安装后端路由