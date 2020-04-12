---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 浏览器缓存策略

## 1.介绍一下浏览器缓存位置和优先级

- Service Worker
- Memory Cache(内存缓存)
- Disk Cache(硬盘缓存)
- Push Cache(推送缓存)
- 以上缓存都没有命中就会进行网络请求

## 2.说说不同缓存间的差别

> Service Worker

和 Web Worker 类似，是独立的线程，我们可以在这个线程中缓存文件，在主线程需要的时候读取这里的文件，Service Wroker 使我们可以自由选择缓存哪些文件以及文件的匹配、读取规则，并且缓存是持续性的

> Memroy Cache

即内存缓存，内存缓存不是持续性的，缓存会随着进程释放而释放

> Disk Cache

即硬盘缓存，相较于内存缓存，硬盘缓存的持续性和容量更优，它会根据 HTTP header 的字段判断哪些资源需要缓存

> Push Cache

即推送缓存，是 HTTP/2 的内容，目前应用较少

## 3.介绍一下浏览器缓存策略

> 强缓存（不向服务器询问的缓存）

- 设置 Expires
  - 即过期时间，例如`Expires:Thu,26 Dec 2019 10:30:42 GMT`表示缓存会在这个时间后失效，这个过期日期是绝对日期，如果修改了本地日期，或者本地日期与服务器日期不一致，那么将导致缓存过期时间错误。
- 设置 Cache-Control

  - HTTP/1.1 新增字段，Cache-Control 可以通过`max-age`字段来设置过期时间，例如`Cache-Control:max-age=3600`除此之外 Cache-Control 还能设置`private/no-cache`等多种字段
    > 协商缓存（需要向服务器询问缓存释放已经过期）

- Last-Modified
  - 即最后修改时间，浏览器第一次请求资源时，服务器会在响应头上加上`Last-Modified`,当浏览器再次请求该资源时，浏览器会在请求头中带上`If-Modified-Since`字段，字段的值就是之前服务器返回的最后修改时间，服务器对比这两个时间，若相同则返回 304，否则返回新资源，并更新`Last-Modified`
- ETag

  - HTTP/1.1 新增字段，表示文件唯一标识，只要文件内容改动，ETag 就会重新计算。缓存流程和 Last-Modified 一样：服务器发送 ETag 字段-->浏览器再次请求时发送 If-None-Match-->如果 ETag 值不匹配，说明文件已经改变，返回新资源并更新 ETag，若匹配则返回 304
    > 两者对比

- ETag 比 Last-Modified 更准确：如果我们打开文件但并没有修改，Last-Modified 也会改变，并且 Last-Modified 的单位时间为一秒，如果一秒内修改完了文件，那么还是会命中缓存
- 如果什么缓存策略都没有设置，那么浏览器会取响应头中的 Date 减去 Last-Modified 值得 10%作为缓存时间
