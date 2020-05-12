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

## 1.什么是标签的语义化

意义：根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好的解析

优点：

1，去掉或者丢失样式的时候能够让页面呈现出清晰的结构
2，有利于 SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
3，方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
4，便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循 W3C 标准的团队都遵循这个标准，可以减少差异化

注意：

- 尽可能少的使用无语义的标签 div 和 sapn
- 在语义不明显时，既可以使用 div 或者 p 时，尽量用 p,因为 p 在默认情况下有上下间距，对兼容特殊终端有利
- 不要使用纯样式标签，如 b、font、u 等，改用 css 设置
- 需要强调的文本，可以包含在 strong 或者 em 标签中（浏览器预设样式，能用 css 指定就不用他们），strong 默认样式是加粗（不要用 b）,em 是斜体（不用 i）
- 使用表格是，标题要用 caption,表头用 thead,主体部分用 tbody 包围，尾部用 tfoot 包围，表头和一般单元格要区分开，表头用 th，单元格用 td
- 表单域用 fieldset 标签包起来，并用 legend 标签说明表单的用途
- 每个 input 标签对应的说明文本都需要使用 label 标签，并且通过为 input 设置 id 属性，在 label 标签中色值 for=someld 来说明文本和相对应的 input 关联起来

## 2.说一说 HTML5 新标签

| 新标签     | 说明                                           |
| ---------- | ---------------------------------------------- |
| article    | 定义文档内的文章                               |
| aside      | 定义页面内容之外的内容                         |
| bdi        | 定义与其他文本不同的文本方向                   |
| details    | 定义用户可查看或隐藏的额外细节                 |
| dialog     | 定义对话框或窗口                               |
| figcaption | 定义 figure 元素的标题                         |
| figure     | 定义自包含内容，比如图示、图表、照片、代码清单 |
| footer     | 定义文档成节的页脚                             |
| header     | 定义文档成节的也眉                             |
| main       | 定义文档的主内容                               |
| mark       | 定义重要或强调的内容                           |
| menuitem   | 定义用户能够从弹出的菜单盗用的命令/菜单项目    |
| meter      | 定义已知范围（尺度）内的标量测量               |
| nav        | 定义文档内的导航链接                           |
| progress   | 定义任务进度                                   |
| rp         | 定义不支持，ruby 注释的浏览器显示什么          |
| rt         | 定义关于字符的解释/发音（用于东亚字体）        |
| ruby       | 定义 ruby 注释（用于东亚字体）                 |
| section    | 定义文档中的节                                 |
| summary    | 定义 details 元素的可见标题                    |
| time       | 定义日期/时间                                  |
| wbr        | 定义可能的折行（line-break）                   |

## 3.html5 的新特性 html5 有哪些新特性、移除了那些元素？如何处理 HTML5 新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

1、标签语义化，比如 header，footer，nav，aside，article，section 等，新增了很多表单元素，入 email，url 等，除去了 center 等样式标签，还有除去了有性能问题的 frame，frameset 等标签

2、音视频元素，video，audio 的增加使得我们不需要在依赖外部的插件就可以往网页中加入音视频元素。

3、新增很多 api，比如获取用户地理位置的 window.navigator.geoloaction，

4、websocket 是一种协议，可以让我们建立客户端到服务器端的全双工通信，这就意味着服务器端可以主动推送数据到客户端，

- 拖拽释放(Drag and drop) API
  语义化更好的内容标签（header,nav,footer,aside,article,section）
  音频、视频 API(audio,video)
  画布(Canvas) API
  地理(Geolocation) API
  本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
  sessionStorage 的数据在浏览器关闭后自动删除

  表单控件，calendar、date、time、email、url、search  
  新的技术 webworker, websocket, Geolocation

  ## 4. 简单介绍下 meta 元素

可提供有关页面的元信息，比如针对搜索引擎和更新频度的描述和关键词

- meta name="keyword" 告诉搜索引擎网页的关键词

* meta name ="description" 告诉搜索引擎站点的内容
* meta name="author" content="meta"站点制作者
* meta name="viewort" content= "width=device-width,initial-scale=1.0"

## 5. 块元素和行内元素

### 块元素

- 总是在新行上开始；
- 高度，行高以及外边距和内边距都可控制；
- 宽度缺省是它的容器的 100%，除非设定一个宽度。
- 它可以容纳内联元素和其他块元素

#### 常见的块元素：div、dl、ul、form、h1

### 行内元素

- 和其他元素都在一行上；
- 高，行高及外边距和内边距不可改变；
- 宽度就是它的文字或图片的宽度，不可改变
- 内联元素只能容纳文本或者其他内联元素

#### 常见的行内元素：a、span、img、b、br
