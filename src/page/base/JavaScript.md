---
lang: zh-CN
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-配置
  - name: keywords
    content: vuepress,最新技术文档,vuepress配置文件
---

# 三、JavaScript相关面试题

## 1.this 指向的几种情况

- 函数作为对象的方法被调用时：this 指向该对象
```js
var obj={
    fn:function(){
        console.log(this)
    }
}
obj.fn()
```

- 函数作为普通函数被调用时：this 指向 window
```js
function fn(){
    console.log(this)
}
fn()
```

- 函数作为构造器被调用时：this 指向返回的这个对象
```js
function Fn(){
    this._fn=function(){
        console.log(this)
    }
}
var fn = new Fn()
fn._fn()
```
- this 的隐式丢失：this 指向 window
```js
var obj={
    fn:function(){
        console.log(this)
    }
}
var fn=obj.fn
fn()
```
- 自执行函数执行的时候：this指向window
```js
(function(){
    console.log(this)
})()
```
- 箭头函数:
箭头函数的 this 绑定看的是 this 所在函数定义在哪个对象下，就绑定哪个对象；如果有嵌套的情况，则 this 绑定到最近的一层对象上，this 的指向固定化，并不是因为箭头函数内部有绑定 this 的机制，实际原因是箭头函数根本没有自己的 this,导致内部的 this 就是外层代码块的 this。正是因为它没有 this，所以也就不能用作构造函数


## 2.改变 this 指向的几种方式
* 1.使用箭头函数
* 2.在函数内部使用 that = this
* 3.使用 apply,call,bind
* 4.new 实例化一个对象

## 3.documen.write 和 innerHTML 的区别
- document.write只能重绘整个页面
- innerHTML可以重绘页面的一部分

## 4. 什么是闭包

- 内部函数可以访问定义在他们外部函数的参数和变量。
- 作用域链向上查找，把外围的作用域中的变量值存储在内存中而不是在函数调用执行完毕后销毁，设计私用的方法和变量，避免全局变量的污染
- 嵌套函数的本质是将函数内部和外部连接起来，有点事可以读取函数内部的变量，让这些变量的值始终保持在内存中，不会再函数被调用之后自动清除

## 5. 闭包的缺陷
- 常驻内存会增大内存的使用量
- 使用不当会造成内存泄漏
- 如果不是因为某些特殊的任务而需要使用闭包，在没有必要的情况下，在其他函数总创建函数是不明智的，因为闭包对脚本性能具有负面影响，包括处理速度和内存消耗。

## 4. 什么是内存溢出和内存泄漏
给的不够用，用了不归还
### 内存溢出：
在程序申请内存是，没有足够的内存空间供其使用，出现out of memoryp;比如申请了一个integer，但是给他存了long才能存下的数据，那就是内存溢出。
### 内存泄漏：
在程序申请内存后，无法释放已申请的内存空间，一次内存泄漏的危害可以忽略，但是内存泄漏堆积的后果很严重，无论多少内存，迟早会被占光
内存泄漏会导致一系列问题，比如：运行缓慢，崩溃，高延迟
### 哪些操作会造成内存泄漏
- 闭包中的this，对象函数
- 匿名函数返回函数
- setTimeout的第一个参数使用字符串而非函数的话，会引发内存泄漏

### 5.作用域：
- 一套管理引擎如何在当前作用域以及嵌套的子作用域中根据标识符名称（标识符就是变量或者函数名）查找变量的规则；
- 只有全局作用域和局部作用域（es6中加入块级作用域），作用域在他创建的时候就存在了
## 5. 什么是作用域链
- 由当前环境与上一层环境的一系列变量对象组成，保证当前执行环境里有权访问的变量和函数是有序的，作用域变量只能被向上访问
- 变量访问到window对象即被终止，作用域链向下访问是不被允许的
### 改变作用方式有
变量访问到window对象即被终止，作用域链向下访问时不允许的 1.改变作用域由with try...中catch 2.所有格未定义的直接赋值的变量自动声明为全局作用域。
### 代码执行分为两个阶段：
- 代码编译阶段：
    - 由编译器完成，将代码翻译成可执行的代码，这个阶段会被确定
- 代码执行阶段：
    - 由js引擎完成，主要执行科执行的代码，这个阶段执行上下文被创建（对象被创建）
- 执行上下文：
    - 一个看不见的对象，存在若干个属性和变量，它被调用的时候创建的。函数被调用查看this指向object,object就是上下文（只有被调用的时候创建）

## 作用域链
当代码在一个环境中执行时，会创建变量对象的一个作用域链
```
var name = "Tom"
function say(){
    alert('hi,'+name)
}
say() //hi, Tom
```

函数 say()的执行环境为全局环境，所以他的变量对象为 window。当函数执行到 name 时，先查找局部环境，找到则返回局部环境的 name，否则顺着作用域查找，在全局环境中找到 name 返回，这一查找变量的有序过程的依据就是作用域。

作用域链是保证执行环境有权访问的所有变量和函数的有序访问

当代码在一个环境中执行是，会创建变量对象的一个作用域链

## 6.js 自定义事件实现
- createEvent,设置事件类型，是html事件还是鼠标事件
- initEvent事件初始化，事件名称，是否允许冒泡，是否阻止自定义事件
- dispatchEvent触发事件
## 7. 什么是原型链
- 对于object来说，可以通过__proto__找到一个原型对象，在该对象中定义了很多函数让我们来使用
- 原型链是一种机制，指的是javascript每个对象包括原型对象都有一个内置__proto__属性指向创建它的函数对象的原型对象，即prototype属性
- 函数的原型链对象constructor默认指向函数本身，原型对象除了有原型属性外，为了实现继承，还有一个原型链指针__proto__；该指针是指向上一层的原型对象，而上一层的原型对象的结构依然类似；因此可以利用__proto__一直指向object的原型对象上，而object原型对象用object.prototype=null表示原型链顶端。如此形成了js的原型链继承。同时所有的js对象都有object的基本方法。

## 8. 类的创建和继承
- 1.原型链继承
- 2.构造函数继承
- 3.组合继承
- 4.原型式继承
- 5.寄生式继承
- 6.寄生组合继承
- 7.混合继承
- 8.es6继承

### 1·原型链继承
```js
function Parent(){
    this.parentName='parent'
}
Parent.portotype.getParentName=function(){
    return this.parentName+1
}
function Child(){
    this.name='child'
}
Child.prototype=new Parent()
Child.prototype.getChildName=function(){
    return this.name+1
}
var child=new Child()
console.log(child.getParentName())
```
### 2.构造函数继承
```js
function Parent(){
    this.parentName='parent'
}
Parent.prototype.getParentName=function(){
    return this.parentName+1
}
function Child(){
    this.name='child'
    Parent.call(this)
}
Child.prototype.getChildName=function(){
    return this.name+1
}
var child= new Child()
console.log(child.parentName)
```
### 3.组合继承
```js
function Parent(){
    this.parentName='parent'
}
Parent.prototype.getParentName=function(){
    return this.parentName+1
}
function Child(){
    this.name='child'
    Parent.call(this)
}
Child.prototype=new Parent()
Child.prototype.getChildName=function(){
    return this.name+1
}
var child= new Child()
console.log(child.getParentName())
console.log(child.parentName)
```
### 4.原型式继承
```js
function Parent(){
    this.parentName='parent'
}
Parent.prototype.getParentName=function(){
    return this.parentName+1
}
function object(obj){
    function F(){}
    F.prototype=obj
    return new F()
}
var child=object(new Parent())
child.childName="child"
child.getChildName=function(){
    this.childName+1
}
console.log(child.getChildName())
```
### 5.寄生式继承
```js
function Parent(){
    this.parentName='parent'
}
Parent.portotype.getParentName=function(){
    return this.parentName+1
}
function createAnother(original){
    var clone=Object(original)
    clone.childName='child'
    clone.getChildName=function(){
        return this.childName+1
    }
    return clone
}
var child =createAnother(new Parent())
child.prototype=new Parent()
console.log(child.parentName)
```
### 6.寄生组合继承
```js
function inheritPrototype(c,p){
    var prototype=Object.create(p.ptototype)
    prototype.constructor=c
    c.prototype=prototype
}
function Parent(){
    this.parentName='parent'
}
Parent.prototype.getParentName=function(){
    return this.parentName+1
}
function Child(){
    this.childName='child'
    Parent.call(this)
}
inheritPrototype(Child,Parent)
Child.prototype.getChildName=function(){
    return this.childName+1
}
var child=new Child()
console.log(child.parentName)
console.log(child.getParentName())
```
### 7.混合式继承
```js
function Parent(){
    this.parentName='parent'
}
Parent.portotype.getParentName=function(){
    return this.parentName+1
}
function Child(){
    this.name='child'
}
Child.prototype.getChildName=function(){
    return this.name+1
}
function MyClass(){
    Parent.call(this)
    Child.call(this)
}
MyClass.prototype=Object.create(Parent.prototype)
Object.assign(MyClass.prototype,Child.prototype)
MyClass.prototype.constructor=MyClass
var child=new MyClass()
console.log(child.getParentName())
```
### 8.es6中继承
```js
class Parent{
    constructor(){
        this.parentName='parent'
    }
    getParentName(){
        return this.parentName+1
    }
}
class Child extends Parent{
    constructor(){
        super()
        this.childName='child'
    }
    getChildName(){
        return this.childName+1
    }
}
var child= new Child()
console.log(child.getChildName())
```
## JavaScript的数据类型
- 基本数据类型： Number、String、Boolean、Undefine、null、Symbol
- 引用数据类型： Object、Function

## 9.数据类型的判断
- 1.typeof
- 2.instanceof
- 3.toString
- 4.hasOwnProperty
- 5.isProperty
- 6.constructor
### typeof
- 只能判断基本数据类型：Number String undefined ,null,symbol Boolean;
- null 返回 object
- 对于引用数据类型除了 function 都返回 object

### instaceOf

- 用来判断 A 是否是 B 的实列，返回值为 true 或 false,instanceof 检查的是原型

### toString

- 是 Obejct 的原型方法，对 Object 对象，直接调用 toString()就能返回[Object Object].而其他对象，则需要通过 call/apply 来调用才能返回正确的类型信息

### hasOwnProperty

- 方法返回一个布尔值，指示对象自身属性中是否具有指定的属性，该方法会忽略掉那些从原型上继承到的属性。

### isProperty

- 方法测试一个对象是否存在另一个对象的原型链上。

### constructor

- 返回创建该对象的函数，也就是我们常说的构造函数
### js 数组去重

以下是数组去重的三种方法：

```js
Array.prototype.unique1 = function() {
  var n = []; //一个新的临时数组
  for (
    var i = 0;
    i < this.length;
    i++ //遍历当前数组
  ) {
    //如果当前数组的第 i 已经保存进了临时数组，那么跳过，
    //否则把当前项 push 到临时数组里面
    if (n.indexOf(this[i]) == -1) n.push(this[i]);
  }
  return n;
};
```

```js
Array.prototype.unique2 = function() {
  var n = {},
    r = []; //n 为 hash 表，r 为临时数组
  for (
    var i = 0;
    i < this.length;
    i++ //遍历当前数组
  ) {
    if (!n[this[i]]) {
      //如果 hash 表中没有当前项
      n[this[i]] = true; //存入 hash 表
      r.push(this[i]); //把当前数组的当前项 push 到临时数组里面
    }
  }
  return r;
};
```

```js
Array.prototype.unique3 = function() {
  var n = [this[0]]; //结果数组
  for (
    var i = 1;
    i < this.length;
    i++ //从第二项开始遍历
  ) {
    //如果当前数组的第 i 项在当前数组中第一次出现的位置不是 i，
    //那么表示第 i 项是重复的，忽略掉。否则存入结果数组
    if (this.indexOf(this[i]) == i) n.push(this[i]);
  }
  return n;
};
```
## 30. 同步和异步

### 同步：

由于 js 单线程，同步任务都在主线程上排队执行，前面任务没有执行完成，后面的任务会一直等待

### 异步：

不进入主线程，进入任务队列，等待主线程任务执行完成，才开始执行。最基本的异步操作 setTimeout 和 setInterval，等待主线程任务执行完，在开始执行里面的函数。
## 11.异步回调（如何解决回调地狱）

promise、generator、async/await

### promise

* 1.是一个对象，用来传递异步操作的信息。代表着某个未才会知道结果的时间，并为这个事件提供统一的 api,供其进行异步处理
* 2.有了这个对象，就可以让异步操作以同步的操作的流程来表达处理，避免层层嵌套的回调地狱
* 3.promise 代表一个异步状态，有三个状态 pending(进行中)，Resolve（已完成），reject(失败)
* 4.一旦状态改变，就不会再变。任何时候都可以得到结果。从进行中变为已完成或失败
* promise.all()里面的状态都改变，那就会输出，得到一个数组
* promise.race()里面只有一个状态变为 rejected 或者 fulfilled 即输出
* promise.finally()不管指定 pormise 对象最后的状态如何，都会执行的操作（本质上还是 then 方法的特例）

### generator

### async/await
## 12.前端事件流

事件流描述的是从页面中接受事件的顺序，事件捕获阶段处于目标阶段；事件冒泡阶段 addevenListener 最后这个布尔值参数如果是 true,表示在捕获阶段调用事件处理程序；如果是 false，表示在冒泡阶段调用事件处理程序。

### 捕获阶段：

实际目标 div 在捕获阶段不会接受事件，也就是在捕获阶段，事件从 document 到 html 再到 body 就停止了

### 目标阶段：

事件在 div 发生并处理，但是事件处理会被看成是冒泡阶段的一部分。

### 冒泡阶段：

事件又传播回文档

阻止冒泡事件：event.stopPropagation()

```
function stopBubble(e){
    if(e && e.stopPropagation){
        e.stopPropagation()
    }else{
        //ie
        window.event.cancelBubble=true
    }
}
```

阻止默认行为：event.preventDefault()

```
function stopDefault(e){
    if(e && e.preventDefault){
        e.preventDefault()
    }else{
        //ie
        window.event.returnValue = false
    }
}
```

### 事件如何先冒泡后捕获？

在 dom 标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后在执行捕获事件。

那些事件不支持冒泡事件：

* 鼠标事件：mouserleave mouseenter
* 焦点事件：blur focus
* UI 事件：scroll resize
## 13.事件委托（提高性能）

不在事件的（直接在 dom）上设置监听函数，而是在其父元素上设置监听函数。通过事件冒泡，父元素可以监听到子元素上事件的触发。

### 目的

通过动态绑定事件，新添加的子元素也会监听函数，减少内存消耗，提高性能

### 写法

- 通过判断事件发生元素 dom 的类型，来做出不同的响应。
- 举例：最经典的就是 ul 和 li 标签的事件监听，比如我们在添加事件的时候，采用事件委托机制，不会在 li 标签上直接添加，而是在 ul 父元素上添加
## 14. js 的 new 操作符做了什么

1、新建一个对象

2、将新建对象的原型（`__proto__`）指向构造函数的 prototype

3、将构造函数中的 this 指向新建对象

如果不要父类属性和方法，在函数的 prototype 上去 new 这个父类。

```js
function A() {}
var a = new A();
//实现
var o = new Object();
o.__proto__ = A.prototype;
A.call(o);
```
## js 异步加载的方式

- 渲染引擎遇到 script 标签会停下来，等到执行完脚本，继续向下渲染
- defer 是“渲染完再执行”，async 是“下载完就执行”，defer 如果有多个脚本，会按照在页面中出现的顺序加载，多个 async 脚本不能保证加载顺序
- 加载 es6 模块的时候设置 type=module，异步加载不会造成阻塞浏览器，页面渲染完再执行，可以同时加上 async 属性，异步执行脚本（利用顶层的 this 等于 undefined 这个语法点，可以侦测当前代码是否在 ES6 模块之中）

## 16.深拷贝和浅拷贝

- 基本类型：undefined,null,Boolean,String,Number,Symbol 在内存中占据固定大小，保存在栈内存中

* 引用数据类型：Object,Array,Date,Function,RegExp 等；引用数据类型的值是对象，保存在堆内存中，栈内存存储的是对象的变量标识符以及对象在堆内存中的存储地址。
* 基本数据类型的复制：其实就是创建一个新的副本给这个值赋值新的变量，改变旧值对象不会改变
* 引用数据类型：其实就是复制了指针，这个最终都将指向同一个对象，改变其新对象旧的值也会改变
* 基本类型的比较 == 会进行类型转换

### 浅拷贝：仅仅只是复制了引用，彼此操作不影响，slice concat object.assign ...

### 深拷贝：在堆中重新分配内存，不同的地址，相同的值，互不影响

#### 1.JSON.parse()将一个 js 对象序列化一个 json 字符串 JSON.stringify()将 json 字符串反序列化一个 js 对象

```
var obj={key:{key:1}}
var obj2 = JSON.parse(JSON.stringify(obj))
```

#### 但是该方法有局限性

- 会忽略 undefined
- 会忽略 symbol
- 不能序列化函数
- 不能解决循环引用的对象

### 深拷贝和浅拷贝的主要区别是：

在内存中的存储类型不同：

- 浅拷贝：重新在堆栈中创建内存，拷贝前后对象的基本类型互不影响。只拷贝一层，不能对对象的子对象进行拷贝
- 深拷贝：对对象中的子对象进行递归拷贝，拷贝前后两个对象互不影响

深拷贝和浅拷贝是只针对 Object 和 Array 这样的复杂类型的
也就是说 a 和 b 指向了同一块内存，所以修改其中任意的值，另一个值都会随之变化，这就是浅拷贝
浅拷贝， ”Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象
深拷贝，JSON.parse()和 JSON.stringify()给了我们一个基本的解决办法。但是函数不能被正确处理
## 17. 跨域

### 什么是跨域

- 同源策略：协议，端口，域名要相同
- 由于浏览器同源策略，凡是发送请求 url 的协议、域名、端口三者之间任意一种与当前页面地址不同即为跨域。

协议不同：
http 与 https

端口不同：
localhost:8080 与 localhost:3000

域名不同：
huawei.com 与 consumenr.huawei.com

### 跨域的十种方式

- 1.降级浏览器（跨域是浏览器把请求的信息屏蔽了）
- 2.jsonp：只能发送 get 请求，利用 script 标签可以跨域的特性，前端动态创建 script 元素，里面放上请求的内容和自定义函数，后台拿到对应的地址，将参数和函数解析出来，拼装结果，返回给前端页面，前端通过函数名执行回调函数拿到后端传回的结果。
- 3.cors:后端通过设置请求头允许跨域访问
- 4.node 中间件：proxy-middlewire 做代理服务器（与前端同源），将后端的结果拿回来，返回给前端
- 5.nginx：配置代理服务将后端请转发给前端
- 6.websockit:是 HTML5 一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是 server push 技术的一种很好的实现。
- 7.postmessage:h5 跨域方法 frame.contentWindow.postMessage,e.data;e.data,e.source.postMesage
- 8.localhost.hash:c 页面动态创建 b 页面，请求里面有参数，b 页面 window.parent.parent.location.hash=location.hash,a 通过 location.hash 拿到参数
- 9.document.name：proxy 一个空的代理页面，被访问的页面动态切换 iframe 页面域名，name 没有消失，frame.contentWindow.name,window.name
- 10.document.domain:主域名相同，docuemnt.domain 强制设置主域，freame.contentWindow,window.parent
## 18. 图片的懒加载和预加载

### 预加载：

提前加载图片，当用户需要查看时可以直接从本地缓存中渲染

为什么要使用预加载：在网页加载之前，对一些主要内容进行加载，减少等待时间，给用户提供更好的体验；否则，如歌一个页面的内容过于庞大，会出现留白。

* 解决留白的方法：
  * 1.  预加载
  * 2.  使用 svg 占位图片，将一些结构快速搭建起来，等请求的数据来了之后，替换当前的占位符
* 实现预加载的方法：
  * 1.  使用 html 标签
  * 2.  使用 Image 标签
  * 3.  使用 XMLHTTPRequest 对象，但会精细控制预加载过程；

### 懒加载：

客户端优化，减少 http 请求和延迟请求数量

* 提升用户体验
* 减少无效资源的加载
* 防止并发加载资源过多会阻塞 js 的加载，影响网站的正常使用
* 原理：首先将页面上的图片的 src 属性设置为空字符串，而图片的真路径则设置带 data-original 属性中；当页面滚动的时候去监听 scroll 事件，在 scroll 事件的回调中，判断我们的懒加载的图片是否进入可视区域；如果图片在可视区域将图片的 src 属性设置为 data-original 的值，这样就可以实现延迟加载。
## 19. 函数的节流和防抖
- 函数的节流：节流是连续触发事件的过程以一定的时间间隔执行函数。节流会稀释你的执行频率，比如每间隔 1 秒钟，只会执行一次函数，无论这 1s 内触发了多少次事件
- 函数的防抖：短时间内多次触发同一事件，只执行最后一次，或者在开始时执行，中间不执行。

都为解决高频率事件而来，scroll mosewheel
mosemover touchmove onesize
## 20. 类数组转换为数组的方法

* Array.apply(null,arguments)
- [...arguments]
- Array.prototype.slice.apply(argumemts)
- Array.form(arguements)
## 21. 高阶函数

* 函数作为参数传递，抽离出一部分容易变化的业务逻辑，把这部分业务逻辑放在函数参数中。这样一来可以分离业务代码中变化与不变的部分
- 函数作为返回值传递

## 重排和重绘
- 部分渲染树（或者整个渲染树）需要重新分析并且节点尺寸需要重新计算。这被称为重排。注意这里至少会有一次重排-初始化页面布局。
- 由于节点的几何属性发生改变或者由于样式发生改变，例如改变元素背景色时，屏幕上的部分内容需要更新。这样的更新被称为重绘。
### 什么情况会触发重排和重绘
添加、删除、更新 DOM 节点

通过 display: none 隐藏一个 DOM 节点-触发重排和重绘

通过 visibility: hidden 隐藏一个 DOM 节点-只触发重绘，因为没有几何变化

移动或者给页面中的 DOM 节点添加动画

添加一个样式表，调整样式属性

用户行为，例如调整窗口大小，改变字号，或者滚动。
## 23. setTimeout 和 setInterval 机制

因为 js 是单线程的。浏览器遇到 setTimeout 和 setInterval 会先执行完当前的代码块，在之前会把定时器推入浏览器的待执行事件队列里，等到浏览器执行完当前代码之后会看下事件队列有没有任务，有的话才执行定时器里的代码。
## 24. var let const

### const:

定义的变量不可修改，必须初始化

### var:

定义的变量可以修改，如果不初始化输出 undefined,不会报错

### let ：

块级作用域，函数内部使用 let 定义后，不会影响函数外部

- let const 不会造成变量提升
## 25. js 垃圾回收机制

- 垃圾回收机制，执行环境负责管理代码执行过程中使用的内存。
- 垃圾收集器会定期（周期性）找出那些不再继续使用的变量，然后释放其内存。但是这个过程不是实时的，因为其开销比较大，所以垃圾回收器会按照固定的时间间隔周期性的执行。

### 标记清除：

定义和用法：当变量进入环境是，将变量标记"进入环境"，当变量离开环境是，标记为："离开环境"。某一个时刻，垃圾回收器会过滤环境中的变量，以及被环境变量引用的变量，剩下的即使被视为准备回收的变量。

### 引用计数

定义和用法：引用计数是跟踪记录每个值被引用的计数为 0 时，被视为准备回收的对象。

基本原理：就是变量的引用次数，被引用一次则加 1，当这个引用

### js 的内存生命周期（变量的生命）

1.  分配你所需要的空间 var a = 20
2.  使用分配带的内存（读写）alert(a + 10)
    r
    js 的垃圾收集器每隔固定的时间就执行一次释放操作，通用的是通过标记清除的算法

在局部作用域中，垃圾回收器很容易做出判断并回收，全局比较难，因此应避免全局变量
## 26. 渐进增强和优雅降级

### 渐进增强：

就是针对低版本浏览器进行构建页面，保证最基本的功能，然后对高版本浏览器进行效果、交互、等改进和最佳功能达到更好要求的用户体验

### 优雅降级：

一开始构建完整的功能，然后对低版本进行兼容
## 27. undefined 和 null NaN

undefined 类型只要一个，即 undefined,当声明变量还未被初始化时就是 undefined

unll 类型也只有一个值，即 null null 用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象

NaN 与任何值都是比较结果都是 false

undefined是一个表示"无"的原始值，转为数值时为 当声明的变量还未被初始化时，变量的默认值为null用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。

（1）变量被声明了，但没有赋值时，就等于undefined。 （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。 （3）对象没有赋值的属性，该属性的值为undefined。 （4）函数没有返回值时，默认返回undefined。

（1） 作为函数的参数，表示该函数的参数不是对象。 （2） 作为对象原型链的终点。
## 28. valueof 和 tostring

- toString( ):返回对象的字符串表示。
```js
//先看看toString()方法的结果
var a = 3;
var b = "3";
var c = true;
var d = { test: "123", example: 123 };
var e = function() {
  console.log("example");
};
var f = ["test", "example"];

a.toString(); // "3"
b.toString(); // "3"
c.toString(); // "true"
d.toString(); // "[object Object]"
e.toString(); // "function (){console.log('example');}"
f.toString(); // "test,example"
```
- valueOf( ):返回对象的字符串、数值或布尔值表示。

所有对象都有 valueof，如果存在任意原始值，他就默认将对象转化为表示它的原始值。如果对象是复合值，而却大部分对象无法真正表示一个原始值，因此默认的 valueof()方法简单的返回对象本身，而不是返回原始值。数组、函数、正则表达式简单的继承了这个 方法，返回对象本身
```js
//再看看valueOf()方法的结果
var a = 3;
var b = "3";
var c = true;
var d = { test: "123", example: 123 };
var e = function() {
  console.log("example");
};
var f = ["test", "example"];

a.valueOf(); // 3
b.valueOf(); // "3"
c.valueOf(); // true
d.valueOf(); // {test:'123',example:123}
e.valueOf(); // function(){console.log('example');}
f.valueOf(); // ['test','example']
```
## 29. 输入框 change 和 input 事件

### onchange 事件：

要在 input 失去焦点的时候才触发

### oninput 事件：

要在用户输入时触发，他是元素之发生变化时立即触发
## JS 中的函数参数传递到底是按值传递还是按引用传递

按共享传递

```js
var person = { a: 111 };
function change(obj) {
  obj = new Object();
  obj.a = 222;
  return obj;
}
```
## 31. 函数柯里化

### 概念：

一个函数接受函数 A 作为参数，运行后返回一个新的函数，并且可以处理 A 中的参数（只接受一个参数的函数）

### 意义：

将函数完全变成了接受一个参数，返回一个参数的固定形式，便于讨论和优化
## 32. while

 while 循环会在指定条件为真是循环执行代码
 ## 33. TypeScript 的优点

- 编译时的强类型，变成了强类型语言，还是编译成 js，编译的时候可以检验

* 更好的模块化
* 更好的实现面向对象的编程，类、接口、模块
## 34. js 的阻塞特性

- 所有浏览器在下载 js 的时候，会阻一切其他活动，比如其他资源的下载，内容的程序等等；直到 js 下载、解析、执行完毕后才开始继续并下载其他资源并呈现内容。为了提高用户体验，新一代浏览器都支持并行下载 js，但是 js 下载任然会阻塞其他资源的下载（图片，css）

* css 阻塞：因为浏览器会维持 thml 中的 css 和 js 的顺序，样式表必须在嵌入的 js 执行前先加载、解析完。而嵌入的 js 会阻塞后面的资源加载，所以就会出现上面的 css 阻塞下载的情况
## GET 和 POST 的区别，何时使用 POST？

GET：一般用于信息获取，使用 URL 传递参数，对所发送信息的数量也有限制，一般在 2000 个字符
POST：一般用于修改服务器上的资源，对所发送的信息没有限制。

    GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值，
    也就是说Get是通过地址栏来传值，而Post是通过提交表单来传值。

然而，在以下情况中，请使用 POST 请求：
无法使用缓存文件（更新服务器上的文件或数据库）
向服务器发送大量数据（POST 没有数据量限制）

## 36.splice 和 slice；map 和 forEach、filter、reduce 的区别

### 1.slice（start，end）：

方法可以从已有数组中返回选定的元素，返回一个新数组，包含从 start 和 end（不包含该元素）的数组方法

### 2.splice:

该方法向或者从从数组中添加或删除项目，返回被删除的项目。（该方法会改变原数组）

* splice(index,howmany,iteml,...itemx)
* index 参数；必须，整数规定添加或者删除的位置，使用负数，从数组尾部规定位置
* howmany 参数：必须，要删除的数量
* iteml..itemx:可选，向数组添加新项目

### 3.map():

会返回一个全新的数组。使用于改变数据值的时候。会分配内存存储空间数组并返回，forEach()不会返回数据

### 4.forEach():

不会返回任何有价值的东西，并且不打算改变数据，单纯的只是想用数据做一些事情，他允许 callback 更改原始数组的元素

### 5.reduce():

方法接受一个函数作为累加器，数组中的每一个值（从左到右）开始缩减，最终计算一个值，不会改变原数组的值

### 6.filter():

方法创建一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，它里面通过 function 去做处理



> 在 JavaScript 中，用得较多的之一无疑是数组操作，这里过一遍数组的一些用法

```
map: 遍历数组，返回回调返回值组成的新数组
forEach: 无法break，可以用try/catch中throw new Error来停止
filter: 过滤
some: 有一项返回true，则整体为true
every: 有一项返回false，则整体为false
join: 通过指定连接符生成字符串
push / pop: 末尾推入和弹出，改变原数组， 返回推入/弹出项【有误】
unshift / shift: 头部推入和弹出，改变原数组，返回操作项【有误】
sort(fn) / reverse: 排序与反转，改变原数组
concat: 连接数组，不影响原数组， 浅拷贝
slice(start, end): 返回截断后的新数组，不改变原数组
splice(start, number, value...): 返回删除元素组成的数组，value 为插入项，改变原数组
indexOf / lastIndexOf(value, fromIndex): 查找数组项，返回对应的下标
reduce / reduceRight(fn(prev, cur)， defaultPrev): 两两执行，prev 为上次化简函数的return值，cur 为当前值(从第二项开始)
复制代码
```
## 5.移动端 300ms 延迟

- 由来：300 毫秒延迟解决的是双击缩放
  - 双击缩放，手指在屏幕快速点击两次，safari 浏览器就会将网页缩放原始比列
  - 由于用户可以双击缩放或者是滚动操作，当用户点击屏幕一次之后，浏览器并不会判断用户确实要打开这个链接，还是想要进行双击操作
  - 因此，safair 浏览器就会等待 300ms,来判断用户是否在次点击屏幕
- 解决方案
  - 1.禁止缩放，设置 meta 标签 user-scalable=no
  - 2.fastclick.js
    - 原理：FastClick 的实现原理是在检查到 touchend 事件的时候，会通过 dom 自定义事件立即发出 click 事件，并把浏览器在 300ms 之后真正 click 事件阻止掉
    - fastclick.js 还可以解决穿透问题

## 介绍下 Set、Map、WeakSet 和 WeakMap 的区别

- Set
  - 成员的值都是唯一的，没有重复的值
  - 两个属性 constructor,size
  - 可以遍历
  - 四个方法：add,delete,has,clear
- weakSet
  - 不重复的值的集合
  - 成员只能是对象，而不能是其他类型的值
  - 没有 size 属性，不能遍历
  - 三个方法 add,delete,has
- Map
  - javascript 的对象，本质上是键值对的集合
  - 但是传统上只能用字符串当做键
  - 可以遍历，方法很多，可以干根各种数据格式转换
- weakMap
  - 只接受对象作为键名
  - 键名指向的对象，不计入垃圾回收机制
  - 不能遍历，方法同 get,set,has,delete

## 请指出 document load 和 document ready 的区别

### 共同点：

这两种事件都代表的是页面文档加载时触发。

### 异同点：

ready 事件的触发，表示文档结构已经加载完成（不包含图片等非文字媒体文件)。

onload 事件的触发，表示页面包含图片等文件在内的所有元素都加载完成。
## 模块化

- 基本概念:
  - 1.在 js 中，一个模块就是实现特定功能的文件（js）文件
  - 2.遵循模块的机制，想要什么就加载什么模块
  - 3.模块化开发需要遵循规范
- js 实现模块化规范
  - 1.AMD 浏览器 requirejs 模块被异步加载，模块加载不影响后面语句的运行，默认使用 baseURL+paths 的路径解析方式
  - 2.CommonJS nodejs
  - 3.ES6 的 import/export
  - 4.CMD 浏览器端
- 解决的问题：
  - 1.命名冲突
  - 2.文件依赖
  - 3.模块的复用
  - 4.统一规范和开发方式
## 浏览器缓存

浏览器缓存分为强缓存和协商缓存。当客户端请求某个资源时，获取缓存的流程如下：

先根据这个资源的一些 http header 判断它是否命中强缓存，如果命中，则直接从本地获取缓存资源，不会发请求到服务器；

当强缓存没有命中时，客户端会发送请求到服务器，服务器通过另一些 request header 验证这个资源是否命中协商缓存，称为 http 再验证，如果命中，服务器将请求返回，但不返回资源，而是告诉客户端直接从缓存中获取，客户端收到返回后就会从缓存中获取资源；

强缓存和协商缓存共同之处在于，如果命中缓存，服务器都不会返回资源；

区别是，强缓存不会发送请求到服务器，但协商缓存会。

当协商缓存也没命中时，服务器就会将资源发送回客户端。

当 ctrl+f5 强制刷新网页时，直接从服务器加载，跳过强缓存和协商缓存；

当 f5 刷新网页时，跳过强缓存，但是会检查协商缓存；

### 强缓存

Expires（该字段是 http1.0 时的规范，值为一个绝对时间的 GMT 格式的时间字符串，代表缓存资源的过期时间）

Cache-Control:max-age（该字段是 http1.1 的规范，强缓存利用其 max-age 值来判断缓存资源的最大生命周期，它的值单位为秒）

### 协商缓存

Last-Modified（值为资源最后更新时间，随服务器 response 返回）

If-Modified-Since（通过比较两个时间来判断资源在两次请求期间是否有过修改，如果没有修改，则命中协商缓存）

ETag（表示资源内容的唯一标识，随服务器 response 返回）

If-None-Match（服务器通过比较请求头部的 If-None-Match 与当前资源的 ETag 是否一致来判断资源是否在两次请求之间有过修改，如果没有修改，则命中协商缓存）
Opera 会清理近期最少使用的 Firefox 会随机清理 4096 字节，为了兼容性，一般不能超过 IE 提供了一种存储可以持久化用户数据，叫做 IE5.0 就开始支持。每个数据最多 128K，每个域名下最多 1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。

### 属性

- value：如果用于保存用户登录态，应该将该值加密，不能使用明文的用户标识
- http-only:不能通过 js 访问 cookie,减少 xss 攻击
- secure:只能在协议为 https 的请求中携带
- sname-site:规定浏览器不能再跨域请求中携带 cookie,减少 csrf 攻击

### 优点：极高的扩展性和可用性

1.通过良好的编程，控制保存在 cookie 中的 session 对象的大小。 2.通过加密和安全传输技术（SSL），减少 cookie 被破解的可能性。 3.只在 cookie 中存放不敏感数据，即使被盗也不会有重大损失。 4.控制 cookie 的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的 cookie。

### 缺点：

1.`Cookie`数量和长度的限制。每个 domain 最多只能有 20 条 cookie，每个 cookie 长度不能超过 4KB，否则会被截掉。

2.安全性问题。如果 cookie 被人拦截了，那人就可以取得所有的 session 信息。即使加密也与事无补，因为拦截者并不需要知道 cookie 的意义，他只要原样转发 cookie 就可以达到目的了。

3.有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。
## DOM操作——怎样添加、移除、移动、复制、创建和查找节点
（1）创建新节点
 
      createDocumentFragment()    //创建一个DOM片段
 
      createElement()   //创建一个具体的元素
 
      createTextNode()   //创建一个文本节点
 
（2）添加、移除、替换、插入
 
      appendChild()
 
      removeChild()
 
      replaceChild()
 
      insertBefore() //在已有的子节点前插入一个新的子节点
 
（3）查找
 
      getElementsByTagName()    //通过标签名称
 
      getElementsByName()    //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
 
      getElementById()    //通过元素Id，唯一性

JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。
它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小
{'age':'12', 'name':'back'}
javascript对象的几种创建方式
1，工厂模式
2，构造函数模式
3，原型模式
4，混合构造函数和原型模式
5，动态原型模式
6，寄生构造函数模式
7，稳妥构造函数模式
## 异步加载和延迟加载

1.异步加载的方案： 动态插入script标签
2.通过ajax去获取js代码，然后通过eval执行
3.script标签上添加defer或者async属性
4.创建并插入iframe，让它异步执行js
5.延迟加载：有些 js 代码并不是页面初始化的时候就立刻需要的，而稍后的某些情况才需要的。
## 47.== 和 === 有什么区别？

- 首先会判断两者类型是否相同，相同的话就是比较大小
- 类型不同的话就会进行类型转换
- 先判断是否在对比 null 和 undefined,是的话就返回 true
- 判断两者类型是否为 string 和 number,是的话就会将字符串转换为 number
- 判断其中一方是否为 boolean,是的话就会把 boolean 转为 number 再进行判断
- 判断其中一方是否为 object 且另一方为 string、number 或者 symbol 是的话就会把 object 转为原始类型再判断
## 48.路由原理

路由的本质是监听 URL 的变化，然后匹配路由规则，显示相应的页面
，并且无需刷新页面

- hash 模式：通过 hashchange 事件来监听 URL 的变化，从而实现页面跳转，而服务端接受到的 URL 永远都没有 hash 后缀
- history 模式：通过 pushState 和 replaceState 改变 URL;通过 History 模式改变 URL 同样不会引起页面的刷新，只会更新浏览器的历史记录；后退会触发 popState 事件。

#### 对比

- hash 模式只可以更改#后面的内容，history 模式可以通过 API 设置任意的同源 URL
- history 模式可以通过 API 添加任意类型的数据到历史记录中，hash 模式只能更改哈希值，也就是字符串
## 1.手动实现一个 bind（原理通过 call、apply）

- 一句话概况
  - 1.bind()返回一个新函数，并不会立即执行
  - 2.bind 的第一个参数将作为他运行时的 this,之后的一系列参数将会在传递的实参前传入作为他的参数
  - 3.bind 返回函数作为构造函数，就是可以 new 的，bind 时指定的 this 值就会消失，但传入的参数依然生效

```
Function.prototype.bind=function(){
    var self=this
    var context= [].shift.call(arguments)
    var args=[].slice.call(arguments)
    return function(){
        return self.apply(contxt,[].concat.call(args,[].slice.call(arguments)))
    }
}
```

```
Function.prototype._bind=function(){
	var self=this
	var context=[].shift.call(arguments)
	var args=arguments
	return function(){
		self.call(context,...args,...arguments)
	}
}
```

## 2.ajax（异步的 javascript 和 xml）

Ajax 是一种用于创建快速动态网页的技术。Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面

### AJAX 的工作原理：

- 0 （未初始化）还没有调用 send()方法
- 1 （载入）已调用 send()方法，正在发送请求
- 2 （载入完成）send()方法执行完毕
- 3 （交互）正在解析相应的内容
- 4 （完成）响应内容解析完成，可以在客户端调用了

### 优点：

1.减轻服务器的负担,按需取数据,最大程度的减少冗余请求

2.局部刷新页面,减少用户心理和实际的等待时间,带来更好的用户体验

3.基于 xml 标准化,并被广泛支持,不需安装插件等,进一步促进页面和数据的分离

### 劣势：

1.AJAX 大量的使用了 javascript 和 ajax 引擎,这些取决于浏览器的支持.在编写的时候考虑对浏览器的兼容性.

2.AJAX 只是局部刷新,所以页面的后退按钮是没有用的.

3.对流媒体还有移动设备的支持不是太好等

- 怎么解决呢：通过 location.hash 值来解决 ajax 过程中导致的浏览器前进后退按钮失效问题
- 怎么解决以前被人们常遇到的重复加载问题。主要比较前后的 hash 值，看其是否相等，再判断是否触发 ajax

```js
let getDate = (method, url, content) = >
new Promise((resolve, reject) = > {
  let xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.send(content)
  xhr.onreadystatechange = () = > {
    if (xhr.readyState === 4 && xhr.status === 200) {
      resolve(xhr.response)
    }
  }
})
```
## 3.函数节流

```
function throttle(fn, wait) {
    var timer
    return function () {
        var context = this
        var args = arguments
        if (!timer) {
            timer = setTimeout(function () {
                timer = null
                fn.apply(context, args)
            }, wait)
        }
    }
}
window.onresize = throttle(function () {
    console.log(1);
}, 500);
```

## 4.函数防抖

```
function debounce(func,wait){
    var timeout;
    return function(){
        var context= this
        var args= arguments
        clearTimeout(timeout)
        timeout= setTimeout(()=>{
            func.apply(contenxt,args)
        },wait)
    }
}
```
## js 实现简单的双向绑定：

```html
<body>
  <div id="app">
    <input type="text" id="txt" />
    <p id="show"></p>
  </div>
</body>
<script type="text/javascript">
  var obj = {};
  Object.defineProperty(obj, "txt", {
    get: function() {
      return obj;
    },
    set: function(newValue) {
      document.getElementById("txt").value = newValue;
      document.getElementById("show").innerHTML = newValue;
    }
  });
  document.addEventListener("keyup", function(e) {
    obj.txt = e.target.value;
  });
</script>
```
## 5.实现一个函数 clone

可以对 javascirpt 中的 5 种主要的数据类型（包含 number，string，object，array，boolean）进行复制

```js
Object.prototype.clone = function() {
  //对象的深拷贝 获取对应的构造函数 [] 或者{}
  var newObject = this.constructor === Array ? [] : {};
  //遍历对象的
  for (let a in this) {
    newObject[a] = typeof this[a] === "object" ? this[a].clone() : this[a];
  }
  return newObject;
};
```
## 6.实现一个简单的 promise

```js
class Promise {
  constructor(executor) {
    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = value => {
      if (this.status === "pending") {
        this.status = "resolved";
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    };
    let reject = reason => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFullFilled, onRejected) {
    if (this.status == "resolved") {
      onFullFilled(this.value);
    }
    if (this.status === "rejected") {
      onRejected(this.reason);
    }
    if (this.status === "pending") {
      this.onResolvedCallbacks.push(() => {
        onFullFilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world");
  }, 100);
});
p.then(
  data => {
    console.log(data);
  },
  error => {
    console.log(error);
  }
);
```

## 7.发布订阅模式（观察者模式）

```js
var event = {
  clientListen: [],
  trigger: function() {
    for (var i = 0; i < this.clientListen.length; i++) {
      var fn = this.clientListen[i];
      fn.apply(this, arguments);
    }
  },
  listen: function(fn) {
    this.clientListen.push(fn);
  }
};
event.listen(function(time) {
  console.log("正式上班时间为：" + time);
});
event.trigger("2018/7");
```
## 8.手动写一个 node 服务器

```js
const http = require("http");
const fs = requier("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const indexFile = fs.createReadStream("./index.html");
    res.writeHead(200, { "content-Type": "text/html;charset=utf-8" });
    indexFile.pipe(res);
  }
});
server.listen(3000);
```
```js
function create() {
  let obj = {};
  let Con = [].shift.call(arguments);
  obj.__proto__ = Con.prototype;
  let result = Con.apply(obj, arguments);
  return result instanceof Object ? result : obj;
}
```
```js
function myInstanceof(left, right) {
  let prototype = right.prototype;
  left = left.__proto__;
  while (true) {
    if (left === null || left === undefined) {
      return false;
    }
    if (prototype === left) {
      return true;
      left = left.__proto__;
    }
  }
}
```




