import Koa from 'koa'
import React from 'react'
import { renderToString } from 'react-dom/server'
import views from 'koa-views'
import path from 'path'
import App from './src/views/App'

const app = new Koa();

// dist 设置位静态文件
app.use(require('koa-static')(__dirname+'/dist'));

// ejs设置位静态模板
app.use(views(path.resolve(__dirname+'/dist'),{map:{html:'ejs'}}))


app.use(async ctx=>{
    let str = renderToString(<App></App>)
    await ctx.render('index',{
        root:str
    })
})

const port = '5200';

app.listen(port,()=>{
    console.log('listen on:' + port );
})