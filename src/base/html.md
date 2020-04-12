---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# html 常见面试题

## 1.说说 HTML5 在标签、属性、存储、API 的新特性

- 标签：新增语义化标签（aside、figure、section、header、footer、nav），增加多媒体标签 video 和 audio,使得样式和结构更加分离。
- 属性：增强表单，主要是增强了 input 的 type 属性；meta 增加 charse 以设置字符集；script 增加 async 以异步加载脚本。
- 存储：增加 locationStorage、sessionStorage 和 indexedDB,引入了 application cache 对 web 和应用进行缓存
- API：增加 拖放 API，地理定位、SVG 绘图、canvas 绘图、Web Worker、WebSocket

## 2.doctype 的作用是什么？

声明文档类型，告知浏览器用什么文档标准解析这个文档：

- 怪异模式：浏览器使用自己的模式解析文档，不加 doctype 时默认为怪异模式
- 标准模式：浏览器以 W3C 的标准解析文档

## 3.几种前端存储以及它们之间的区别

- cookie：HTML5 之前的主要存储方式，大小只有 4k，HTTP 请求头会自动带上 cookie 吗，兼容性好
- locationStorage：HTML5 新特性，持久性存储，即使页面关闭也不会被清除，以键值对的方式存储，大小为 5M
  -sessionStorage:HTML5 新特性，操作及大小同 localStorage,和 localStorage 的区别在于 sessionStorage 在选项卡（页面）被关闭既清除，且不同页面的 sessionStorage 不互通
- indexedDB：NoSQL 数据库，类比 MongoDB,使用键值对进行存储，异步操作数据库，支持事务，存储空间可以在 250M 以上，但是 indexedDB 受同源策略限制
- Web SQL：是在浏览器上模拟的关系型数据库，开发者可以通过 SQL 语句来操作 Web SQL,是 HTML5 以外的一套独立的规范，兼容性差

## 4.href 和 src 有什么区别

href 即超文本引用：当浏览器遇到 href 时，会并行的下载资源，不会阻塞页面解析，例如我们使用`link`引入 css，浏览器会并行的下载 css 而不阻塞页面解析，因此我们在引入 css 时建议使用`link`而不是`@import`

src 即资源，当浏览器遇到 src 时，会暂停页面解析，直到该资源下载或执行完毕，这也是 script 标签之所以放底部的原因

## 5.meta 有哪些属性，作用是什么

meta 标签用于描述网页的元信息，如网站的作者、描述、关键词，meta 通过 name=xxx 和 content=xxx 的形式来定义信息，常用的设置如下：

- charset:定义 HTML 文档的字符集

```html
<meta charset="UTF-8" />
```

- http-equiv:可用于模拟 http 请求头，可设置过期时间、缓存、刷新

```html
<meta http-equiv="expires" content="Web, 20 Jun 2019 22:33:00 GMT" />
```

- viewport:视口，用于控制页面宽高及缩放比例

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1;maximum-scale=1"
/>
```

## 6.viewport 有哪些参数，作用是什么

- width/height,宽高，默认宽度 980px
- initial-scale,初始缩放比例，1~10
- maximum-scale/minimum-scale,允许用户缩放的最大/小比例
- user-scalable，用户是否可以缩放（yes/no）

## 7.http-equive 属性的作用和参数

- expires,指定过期时间
- progma,设置 no-cache 可以禁止缓存
- refresh，定时刷新
- set-cookie，可以设置 cookie
- X-UA-Compatible，使用浏览器版本
- apple-mobile-web-app-status-bar-style,针对 WebApp 全屏模式，隐藏状态栏/设置状态栏颜色
