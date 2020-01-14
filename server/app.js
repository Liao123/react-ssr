import React from 'react';
import Koa from 'koa';
import { renderToString } from "react-dom/server";

const app = new Koa();
const App = () => <div>Hello Koa SSR</div>

app.use((ctx)=>{
    // renderToString把html标签 返回成字符串渲染到页面上
    ctx.body = renderToString(<App />);
});

// 监听 服务端渲染端口
app.listen(9000,()=>{
    console.log("node服务已经启动 请访问localhost:9000")
})
