---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 阿里面试题

## 1.使用过的 koa2 中间件

- koa-router
- koa-session
- koa-logger
- koa-json

## 2.koa-body 原理

## 3.介绍自己写过的中间件

## 4.有没有涉及到 Cluster

## 5.介绍 pm2

pm2 是 node 进程管理工具，可以利用它来简化很多 node 应用管理的繁琐任务，如性能监控、自动重启、负载均衡。

## 6.master 挂了的话 pm2 怎么处理

## 7.如何和 MySQL 进行通信

## 8.React 声明周期及自己的理解

## 9.如何配置 React-Router

## 10.路由的动态加载模块

## 11.服务端渲染 SSR

## 12.介绍路由的 history

hash 路由有#
history 路由需要后端支持，不然刷新会出现 404

## 13.介绍 Redux 数据流的流程

## 14.Redux 如何实现多个组件之间的通信，多个组件使用相同状态如何进行管理

## 15.多个组件之间如何拆分各自的 state，每块小的组件有自己的状态，它们之间还有一些公共的状态需要维护，如何思考这块

## 16.使用过的 Redux 中间件

- redux-thunk 中间件 改造 store.dispatch,解决异步操作
- redux-promise 中间件 使得 store.dispatch 方法可以接受 Promise 对象作为参数
- redux-logger 中间件 日志中间件

## 17.如何解决跨域的问题

- 修改浏览器设置
  - 降级浏览器:只对修改后的浏览器有效
- 使其请求类型不是 XMLHttpRequest
  - jsonp:只有 get 类型，容错性低
- 修改调用方
  - 代理
    - webpack 代理本地跨域
    - nginx 代理
- 修改被调用方
  - cors:修改请求头
  - nginx

## 18.常见 Http 请求头

- Accept：浏览器可接受 MIME 类型
- Accept-Charset:浏览器可接受的字符集
- Accept-Encoding:浏览器能够进行解码的数据编码方式。
- Accept-Language:浏览器所希望的语言种类，当服务器能够提供一种以上的语言版本时要用到。
- Authorization:授权信息，通常出现在对服务器发送的 WWW-Authenticate 头的应答中。
- Connection:表示是否需要持久连接。
- Content-Length:表示请求消息正文的长度。
- Cookie：这是最重要的请求头信息之一。
- From:请求发送者的 email 地址，由一些特殊的 web 客户程序使用，浏览器不会用到它。
- Host:初始 URL 中的主机和端口。
- if-Modified-Since：只有当所有的内容在指定的日期之后又经过修改才返回，否则返回 304"Not Modified"应答。
- Pragma:指定"no-cache"值表示服务器必须返回一个刷新后的文档，即使它是代理服务器而且已经有了页面的本地拷贝页面。
- Referer：包含一个 URL，用户从该 URL 代表的页面出发访问当前请求的页面。

## 19.移动端适配 1px 的问题

## 20.介绍 flex 布局

## 21.其他 css 方式设置垂直居中

- 1.flex

```html
<div class="parent">
  <div class="children">123</div>
</div>
```

```css
.parent {
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
```

- 2.absolute+transform

```html
<div class="parent">
  <div class="children"></div>
</div>
```

```css
.parent {
  width: 200px;
  height: 200px;
  position: relative;
}
.chidlren {
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: transform(-50%, -50%);
}
```

- 3.absolute+margin auto

```html
<div class="parent">
  <div class="children">123</div>
</div>
```

```css
.parent {
  width: 200px;
  height: 200px;
  position: relative;
}
.children {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
```

- 4.absolute + 负 margin

```html
<div class="parent">
  <div class="children">123</div>
</div>
```

```css
.parent {
  width: 200px;
  height: 200px;
  position: relative;
}
.children {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 50%;
  margin-left: -10px;
  margin-top: -10px;
}
```

- 5.absolute + calc

```html
<div class="parent">
  <div class="children">123</div>
</div>
```

```css
.parent {
  width: 200px;
  height: 200px;
  position: relative;
}
.children {
  width: 20px;
  height: 20px;
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
}
```

- 6.writing-mode

```html
<div class="box">
  <div class="parent">
    <div class="children">123</div>
  </div>
</div>
```

```css
.box {
  width: 200px;
  height: 200px;
  writing-mode: vertical-lr;
  text-align: center;
}
.father {
  writing-mode: horizontal-tb;
  display: inline-block;
  text-align: center;
  width: 100%;
}
.children {
  display: inline-block;
  margin: auto;
  text-align: left;
}
```

- 7.table

```html
<table>
  <tbody>
    <tr>
      <td class="parent">
        <div class="children">123</div>
      </td>
    </tr>
  </tbody>
</table>
```

```css
.parent {
  width: 200px;
  height: 200px;
  text-align: center;
}
.children {
  display: inline-block;
}
```

- table-cell

```html
<div class="parent">
  <div class="children">123</div>
</div>
```

```css
.parent {
  width: 200px;
  height: 200px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.children {
  display: inline-block;
}
```

- grid

```html
<div class="parent">
  <div class="children">123</div>
</div>
```

```css
.parent {
  width: 200px;
  height: 200px;
  display: grid;
}
.children {
  align-self: center;
  justify-self: center;
}
```

- 10 lineHeight

```html
<div class="parent">
  <div class="children">123</div>
</div>
```

```css
.parent {
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 0;
}
.children {
  font-size: 16px;
  display: inline-block;
  vertical-align: middle;
  line-height: initial;
  text-align: left;
}
```

## 22.居中为什么要使用 transform（为什么不使用 marginLeft/Top）

transform 会开启 gpu 加速渲染；marginLeft/Top 会引起页面 layout 回流和 repaint 重绘;因此从浏览器性能考虑，transform 会比 marign 更节省时间

## 23.使用过 webpack 里面哪些 plugin 和 loader

- loader
  - style-loader
  - css-loader
  - less-loader
  - sass-loader
  - postcss-loader
  - autoprefixer-loader
  - file-loader
  - url-loader
  - html-minify-loader
  - babel-loader
- plugins
  - providePlugin
  - commonsChunkPlugin
  - ExtractTextPlugin
  - NoErrorsPlugin
  - UglifyJsPlugin
  - HotModuleReplacementPlugin
  - HtmlWebpackPlugin

## 24.webpack 里面的插件是怎么实现的

## 25.dev-server 是怎么跑起来

## 26.项目优化

- 压缩代码
- 减少入口文件大小
- 按需加载
- 动态加载
- 懒加载
- 精灵图

## 27.抽取公共文件是怎么配置的

## 28.项目中如何处理安全问题

- 转义字符
- 使用验证码
- 使用 token

## 29.怎么实现 this 对象的深拷贝
