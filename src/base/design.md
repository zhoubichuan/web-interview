---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 设计模式

## 1.介绍一下单一职责原则和开放封闭原则

- 单一职责原则：一个类只负责一个功能领域中的相应职责，或者可以定义为：就一个类而言，应该只有一个引起它变化的原因
- 开放封闭原则：核心的思想是软件实体（类、模块、函数等）是可扩展的、但不可修改的。也就是说，对扩展是开放的，而对修改时封闭的

## 2.单例模式

单例模式即一个类只能构造除唯一的实例，单例模式的意义在于`共享、唯一，Redux、Vuex`中的 store、JQ 的\$或者业务场景中的购物车、登录框都是单例模式的应用

```js
class SingletonLongin{
  constructor(name,password){
    this.name=name
    this.password=password
  }
  static.getInstance(name,password){
    if(!this.instance)this.instance = new SingletonLogin(name,password)
    return this.instance
  }
}
let obj1=SingletonLogin.getInstance('sss','111')
let obj2=SingletonLogin.getInstance('qqq','1111')
```

## 3.工厂模式

工厂模式即对创建对象逻辑的封装，或者可以理解为对 new 的封装，这种封装就像创建对象的工厂，故名工厂模式。工厂模式常见于大型项目，比如 JQ 的$对象，我们创建选择器对象时之所以没有new selector就是因为$()已经是一个工厂方法，其他例子如`React.createElement()`、`Vue.component()`都是工厂模式的实现。工厂模式有多种：`简单工厂模式，工厂方法模式，抽象工厂模式`，这里只以简单工厂模式为例

```js
class User {
  constructor(name, auth) {
    this.name = name
    this.auth = auth
  }
}
class UserFactory {
  static createUser(name, auth) {
    if (auth === 'admin') new User(name, 1)
    if (auth === 'user') new User(name, 2)
  }
}
const admin = UserFactory.createUser('asdf', '1212')
const user = UserFactory.createUser('asdfas', '23423')
```

## 4.观察者模式

观察者模式概念很简单：观察者监听被观察者的变化，被观察者发生改变时，通知所有的观察者。观察者模式被广泛用于监听事件的实现

```js
class Observer {
  constructor(fn) {
    this.update = fn
  }
}
class Subject {
  constructor() {
    this.observers = []
  }
  addObserver(observer) {
    this.observers.push(observer)
  }
  notify() {
    this.observers.forEach(observer => observer.update())
  }
}
var subject = new Subject()
cosnt update = ()=>{console.log('通知')}
var obj1 = new Observer(update)
var obj2 = new Observer(update)
subject.addObserver(obj1)
subject.addObserver(obj2)
subject.notify()
```

## 5.装饰器模式

装饰器模式，可以理解为对类的一个包装，动态的拓展类的功能，ES7`装饰器`语法以及 React 中的`高阶组件`(HoC)都是这一模式的实现。react-redux 的 connect（）也运用了装饰器模式，这里以 ES7 装饰器为例：

```js
function info(target){
  target.prototype.name='展示'
  target.prototype.age =10
}
@inifo
class Man()
let man = new Man()
man.name
```

## 6.适配器模式

适配器模式，将一个接口转换成客户希望的另一个接口，使接口不兼容的那些类可以一起工作

```js
class Adaptee {
  test() {
    return '旧接口'
  }
}
class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }
  test() {
    let info = this.adaptee.test()
    return `适配${info}`
  }
}
let target = new Target()
console.log(target.test())
```

## 7.代理模式

代理模式，为一个对象找一个替代对象，以便对原对象进行访问。

```js
const idol = {
  name: '1212',
  phone: 1000,
  price: 100000
}
const agent = new Proxy(idol, {
  get: function(target) {
    return '经纪人电话1000'
  },
  set: function(target, key, value) {
    if (key === 'price') {
      if (value < target.price) throw new Error('报价过低')
      target.price = value
    }
  }
})
```
