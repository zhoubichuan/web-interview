---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 今日头条

## 1.对 async、await 的理解，内部原理

## 2.介绍下 Promise，内部实现

```js
class Promise{
    constructor(resolve,reject){
        this.resolve=
    }
}

```

## 3.清除浮动

## 4.定位问题（绝对定位、相对定位等）

## 5.从输入 URL 到页面加载全过程

## 6.tcp3 次握手

## 7.tcp 属于哪一层（1 物理层 -> 2 数据链路层 -> 3 网络层(ip)-> 4 传输层(tcp) -> 5 应用层(http)）

## 8.redux 的设计思想

## 9.接入 redux 的过程

## 10.绑定 connect 的过程

## 11.connect 原理

## 12.webpack 介绍

## 13.== 和 ===的区别，什么情况下用相等==

== 在比较时只比较大小，===会比较数据类型

## 14.bind、call、apply 的区别

bind 函数不会立即执行，第一个参数是修改的 this 对象，后面的都是参数
call 和 apply 函数会立即执行，第一参数是修改的 this 对象，第二个参数 call 后面是 arg1,arg2,arg3...的形式，apply 是数组形式

## 15.动画的了解

## 16.介绍下原型链（解决的是继承问题吗）

## 17.对跨域的了解

- 由于浏览器同源策略的存在，所以有跨域的问题，跨域只存在浏览器中，后端请求是没有跨域的，请求的结果到达浏览器，浏览器发现请求地址非同源就把它屏蔽掉了。
