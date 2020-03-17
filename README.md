第一步  https://www.jianshu.com/p/91a4214b913b 创建 webpack4 react



打包后 文件介绍
utils.bundle  // 这是自己的公共文件 多个地方用到 抽离出来的
vendor.bundle // 这是npm的公共文件 多个地方用到 抽离出来的
bundle        // 这是 抽离出来的 业务代码  主要代码 主干
index.html    // 这个自然是模板文件啦

插件介绍

0.webpack-dev-server 一个小型的静态文件服务器。使用它，可以为webpack打包生成的资源文件提供Web服务。 起端口用 比如热更新服务  devServer 可配置

1.babel-plugin-transform-runtime    在转换 ES2015 语法为 ECMAScript 5 的语法时，babel 会需要一些辅助函数，例如 _extend。babel 默认会将这些辅助函数内联到每一个 js 文件里，这样文件多
                                    的时候，项目就会很大。所以 babel 提供了 transform-runtime 来将这些辅助函数“搬”到一个单独的模块 babel-runtime 中，这样做能减小项目文件的大小。
2.babel-preset-env babel-preset-es2015     转es6为es5

3.babel-preset-react   转译 react 代码 

4.babel-plugin-import  它会在编译过程中将 import 的写法自动转换为按需引入的方式

5.babel-register       通过 node 引入的带 .es6, .es, .jsx 和 .js 后缀的所有后续文件都将会被 Babel 转译。

6.babel-polyfill   babel 默认只会转换 es6的语法 不会转换那些对象 如果需要转换这些对象需要它

7.html-webpack-plugin  html模板 index.html

8.extract-text-webpack-plugin@next 抽离css到单独的css文件 不会出现在页面源码中

9.html-withimg-loader 页面中img标签src的图片加载

10.postcss-loader 和 autoprefixer  配合使用 给css添加浏览器前缀

11.clean-webpack-plugin  打包前先清空dist 

