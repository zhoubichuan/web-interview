---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# js 基础

## 1.如何在 es5 环境下实现 let

babel 在 let 定义的变量前加了道下划线，避免在块级作用域外访问到该变量，除了了对变量名的转换，我们也可以通过只执行函数来模拟块级作用域

```js
;(function() {
  for (var i = 0; i < 5; i++) {
    console.log(i)
  }
})()
console.log(i)
```

## 2.如何在 ES5 环境下实现 const

实现 const 的关键在于 Object.defineProperty()这个 API，这个 API 用于在一个对象上增加或修改属性，通过配置属性描述符，可以精确的控制属性的行为。Object.defienProperty()接受三个参数：

```js
Object.defineProperty(obj, prop, desc)
```

| 参数       | 说明                       |
| ---------- | -------------------------- |
| obj        | 其定义属性的对象           |
| prop       | 要定义或修改的属性的名称   |
| descriptor | 将被定义或修改的属性描述符 |

| 属性描述符   | 说明                                                                                                   | 默认值    |
| ------------ | ------------------------------------------------------------------------------------------------------ | --------- |
| value        | 该属性对应的值，可以是任何有效的 JavaScript 值(数值、对象、函数等)。                                   | undefined |
| get          | 一个给属性提供 getter 的方法，如果没有 getter 则为 undefined                                           | undefined |
| set          | 一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法           | undefined |
| writable     | 当且仅当该属性的 writable 为 true 时，value 才能被赋值运算符改变，默认为 false                         | false     |
| enumerable   | enumerable 定义了对象的属性是否可以在 for...in 循环和 Object.keys()中被枚举                            | false     |
| Configurable | configurable 特性表示对象的属性是否可以被删除，以及除 value 和 writable 特性外的其他特性是否可以被修改 | false     |

对于 const 不可修改的特性，我们通过设置 writable 属性来实现

```js
function _const(key,value){
  const desc={
    value,
    writable:false
  }
  Object.defineProperty(window,key,desc)
}
_const('obj',{a,1})
obj.b = 2
obj = {}
```

## 3.手写 call

## 4.手写 apply

## 5.手写 bind

## 6.手写防抖

```js
function debounce(fn, wait) {
  var timer
  return function() {
    var context = this
    var args = arguments
    if (itemr) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}
```

## 7.手写节流

```js
function throttle(fn, wait) {
  var timer
  return function() {
    var context = this
    var args = arguments
    if (!timer) {
      tiemr = setTimeout(() => {
        timer = null
        fn.apply(context, args)
      }, wait)
    }
  }
}
```

## 8.数组扁平化

## 9.手写 promise
