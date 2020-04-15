---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# js 面向对象

## 1.模拟实现 new

```js
function _new(fn, args) {
  var obj = Object.create(fn.prototype)
  var result = obj.apply(fn, args)
  return typeof result === 'object' && result !== null ? result : object
}
```

## 2.es5 如何实现继承

- 原型链继承
- 构造函数继承
- 组合式继承
- 寄生组合继承
