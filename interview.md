# 布局部分

1.  ## flex 弹性布局

    * 可以简单的使一个元素居中（水平方向和垂直方向）

    - 实现栅格布局
    - bootstrap grid

2.  ## 圣杯和双飞翼布局、三栏布局（两边两栏宽度固定，中间栏宽度自适应）

    * 方案一：

3.  ## 左边定宽，右边自适应

    * 方案一：
      <div></div>

4.  ## 水平居中

    \*

5.  ## BFC

    * BFC 是 css 布局的一个概念，是一块独立的渲染区域，一个环境，里面的元素不会影响到外部的元素

# 样式部分

1.  ## css 盒模型

    * css 中的盒模型包括怪异盒模型和标准盒模型。
      box-sizing: border-box,inherit,content-box
    * 标准盒模型：左右 border+左右 padding+contnet-box
      <div style="width:100px;height:100px;background-color:red;padding:10px;border:10px solid gray;color:green;">这里是盒子的内容区+paddig+border</div>

    - 怪异盒模型：border-box:width = content+padding+border,
      元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制
        <div style="box-sizing: border-box;width:100px;height:100px;background-color:red;padding:10px;border:10px solid gray;color:green;">这里是盒子的内容区+paddig+border</div>
    - inherit:从父类继承 box-sizing 的值

2.  ## 前端一像素问题

    \*

3.  ## transition 和 ainmation 的区别

    * animation 和 transition 大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是 transition 需要触发一个事件才能改变属性；而 animation 不需要触发任何事件的情况下才会随时间改变属性值，并且 transition 为 2 帧，从 from...to,而 animation 可以一帧一帧的。
    * transition 规定动画的名字 规定完成过渡效果需要多少秒或毫秒 规定速度效果 定义过渡效果何时开始
    * animation 指定要绑定到选择器的关键帧的名称

4.  ## 不定高的 div 居中

    1.  ### 弹性盒子
        * 首先左右居中：display:flex;flex-direction:row;justify-content:center;
        * 上下居中：align-items:center;
          <div style="width:100%;height:100px;border:1px solid red;display:flex;flex-direction:row;justify-content:center;align-items:center;"><div>我要左右居中，上下也居中</div></div>
        * 缺点：ie11 下面不兼容
    2.  ### 定位
        * 父级相对定位：position:relative;
        * 子级：positon:absolute;left:50%;top:50%;transiton:translate(-50%,-50%);
          <div style="position:relative;height:100px;width:100%;border:1px solid red;">
              <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);white-space:nowrap;">我要左右居中，上下也居中</div>
          </div>

5.  ## 浮动

    * 特性：浮动元素影响的不仅是自己，他会影响周围元素对其进行环绕
    * 为什么要清除浮动？解决父元素高度塌陷问题一个块级元素如果没有设置 height，其 height 由子元素撑开，对子元素使用了浮动之后，子元素就会脱离文档流也就是说，父级元素中没有内容可以撑开其高度，这样父级元素 height 就会被忽略。这就是所谓的高度坍塌。
    * 如何清除浮动
      1.  给父级元素定义高度
      2.  让父级元素也浮动
      3.  父级定义 display:table;
      4.  父级元素设置 overflow：hidden;

6.  ## position

    * 值：relative，static（默认值），absolute,sticky,fixed
    * absolute 会根据上一级 position 的值不为 static 进行定位，如果向上一直没有找到 position,则相对整个 body 进行定位
    * fix 相对的是视图的窗口，或者 frame 框架（setFram 的子框架，一种 html 标签）

7.  ## css 选择器分类

    * 基本的：

    1.  id 选择器（id="name"）
    2.  类选择器（class="name"）
    3.  标签选择器（body，div，ul，li）
    4.  全局选择器（\*）

    * 复杂的

    1.  组合选择器（.head .head_logo）
    2.  后代选择器（#head .nav ul li 从父级到子孙集）
    3.  群组选择器（div，span，img，{color：red}具有相同样式的标签分组显示）
    4.  继承选择器
    5.  伪类选择器（连接样式，a 元素的伪类）
    6.  子选择器（div > p，带大于号）
    7.  css 相邻兄弟选择器（h1 + p,带加号）

8.  ## css 优先级

    * 不同级别：总排序：!important > 行内样式 > id 选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性

    1.  属性后面加!important 会覆盖页面内任何位置定义的元素样式
    2.  作为 style 属性写在元素内的样式
    3.  id 选择器
    4.  类选择器
    5.  标签选择器
    6.  通配符选择器（\*）
    7.  浏览器自定义或继承

    * 同一级别：后面的会覆盖先写的

    - css 选择器的解析原则：选择器定位 dom 元素是从右往左的方向，这样可以尽早的过滤掉一些不必要的样式规则和元素

9.  ## 块元素和行内元素

    * 块元素会独占一行，默认情况下，其宽度自动填满父元素宽度，
    * 行内块元素：独占一行，没有高度属性
    * 行内元素：没有宽度和高度属性

10. ## 如何画一个三角形

    \*

    <div style="width:0;height:0;border-bottom:100px solid cyan;border-left:50px solid transparent;border-right:50px solid transparent;"></div>

11. ## 伪类

    * link:表示连接正常情况下（即页面加载完成时）显示的颜色
    * hover：表示鼠标悬停时显示的颜色
    * visited：链接被点击时显示的位置
    * focus: 元素获得光标焦点时的颜色
    * active: 元素处于激活状态

12. ## 雪碧图
    * 多个图片集成在一个图片中的图
    * 使用雪碧图可以减少网络请求的次数，加快网页加载的速度
    * 通过 background-positon，去定位图片在屏幕的那个位置
13. ## 使元素消失的方法
    * visibility:hidden
      该元素隐藏起来了，但是不会改变页面布局，该元素绑定的事件不会被触发
    * display:none
      把元素隐藏起来了，并且改变页面的布局，可以理解成在页面中把该元素删掉
    * z-index:-1
    * opacity:0
      该元素隐藏起来了，但不会改变页面布局，并且如果该元素已经绑定了一些事件（如 click），该事件也能触发

# js 部分

1.  ## this 指向

    \*

2.  ## 什么是闭包

    * 内部函数可以访问定义他们外部函数的参数和变量。（作用域链向上查找，把外围的作用域中的变量值存储在内存中而不是在函数调用执行完毕后销毁）设计私有的方法和变量，避免全局变量的污染

    - 嵌套函数本质是将函数内部和外部连接起来，有点是可以读取函数内部的变量，让这些变量的值始终保存在内存中，不会在函数被调用之后自动清除
    - 闭包的缺陷
      1.  闭包的缺点是常驻内存会增大内存的使用量，并且使用不当容易造成内存泄漏
      2.  如果不是因为某些特殊的任务而需要闭包，在没有必要的情况下，在其它函数中创建函数是不明智的，因为闭包对脚本性能具有负面影响，包括处理速度和内存消耗。

3.  ## 什么是内存溢出和内存泄漏（给的不够用，用了不归还）

    * 内存溢出：在程序中申请内存时，没有足够的内存空间供其使用，出现 out of memory;比如申请了一个 integer,但是给它存了 long 才能存下的数，那就是内存溢出

    - 内存泄漏：在程序申请内存后，无法释放已申请的内存空间，一次内存泄漏危害可以忽略，但是内存泄漏堆积后果很严重，无论多少内存，迟早会被占光
    - 举例：闭包中的 this，对象函数。匿名函数返回函数 return function

4.  ## 什么是作用域

    * 由当前环境与上一层环境一系列的变量对象组成；保证当先执行环境里有权访问的变量和函数是有序的，作用域链变量只能被向上访问

    - 变量访问到 window 对象及被总之，作用域链向下访问时不允许的
      1.  改变作用域有 with try...中 catch
      2.  所有未定义的直接赋值的变量自动声明为全局作用域
    - 作用域：一套规则，管理引擎如何在当前作用域以及嵌套的子作用域中根据标识符名称查找变量（标识符就是变量或者函数名）
    - 只有全局作用域和局部作用域，作用域在它创建的时候就存在了
    - 代码执行分为两个阶段：

    1.  代码编译阶段：由编译器完成，将代码翻译可执行的代码，这个阶段会被确定
    2.  代码执行阶段：由 js 引擎完成，主要执行可执行的代码，这个阶段执行上下文被创建（对象被创建）

    * 执行上下文：一个看不见的对象，存在若干个属性和变量，它被调用的时候创建的。函数被调用查看 this 指向的 object,object 就是上下文（只有被调用的时候创建）

5.  ## 作用域链

    * 当代码在一个环境中执行时，会创建变量对象的一个作用域链

    ```
    var name = "Tom"
    function say(){
        alert('hi,'+name)
    }
    say() //hi, Tom
    ```

    * 函数 say()的执行环境为全局环境，所以他的变量对象为 window。当函数执行到 name 时，先查找局部环境，找到则换回，否则顺着作用域查找，在全局环境总，找到 name 返回，这一查找变量的有序过程的依据就是作用域。
    * 作用域链是保证执行环境有权访问的所有变量和函数的有序访问

6.  ## 什么是原型链

    * 函数的原型链对象 constructor 默认执行函数本身，原型对象除了有原型属性外，为了实现继承，还有一个原型链指针**proto**;该指针是指向上一层的原型对象，而上一层的原型对象的结构依然类似。因此可以利用**proto**一直指向 object 的原型对象上，而 object 原型对象用 Object.prototype.**proto** = null 表示原型链顶端。如此形成了 js 的原型链继承。同时所有的 js 对象都有 Object 的基本防范

7.  ## 类的创建和继承


    * es5：new一个function，在这个function的prototype里增加属性和方法，类里面有方法和属性
    ```
    function Parent(name){
        this.name=name
    }
    Parent.prototype.popShow=function popShow(){
        alert(this.name)
    }

    function Child(){

    }
    Child.prototype= new Parent("我是谁")
    var child=new Child()
    child.popShow()
    ```
    - es6: class,extends
    ```
    class Parent{
        constructor(name){
            this.name=name
        }
        popShow(){
            alert(this.name)
        }
    }
    class Child extends Parent{
        constructor(){
            super('123')
        }
    }
    var child = new Child()
    child.popShow()
    ```
    - 继承的方式：
     1. 原型链继承
       ```
       function Parent(name){
           this.name=name
       }
       Parent.prototype.popShow = function popShow(){
           alert(this.name)
       }
       function Child(val){
           this.val = val +this.name
           alert(this.val)
       }
       Child.prototype=new Parent("父亲")
       var child = new Child("子继承")
       child.popShow()
       ```
       - 缺点：无法实现多继承
    - 构造继承：使用父类的构造函数来增强子类实例。
    - 实例继承：为父类实例添加新特性，作为子类实列的返回
    - 拷贝继承：拷贝父类元素上的属性和方法
    - 组合继承：构造继承 + 原型继承的结合体
    - 寄生组合继承 ：通过寄生方式，走啊构造继承上加一个Super函数（没有实例和方法）让他的原型链执行父类的原型链

7.  ## 如何判断是那种类型

    \*

8.  ## 给两个构造函数 A 和 B,如何实现 A 继承 B（Object.prototype）

    \*

9.  ## 异步回调（如何解决回调地狱）

    * promise

    - generator
    - async/await

10. ## 前端事件流

    * 事件流描述的是从页面中接受事件的顺序，事件捕获阶段处于目标阶段；事件冒泡阶段 addevenListener 最后这个布尔值参数如果是 true,表示在捕获阶段调用事件处理程序；如果是 false，表示在冒泡阶段调用事件处理程序。

    - 事件捕获阶段：实际目标 div 在捕获阶段不会接受事件，也就是在捕获阶段，事件从 document 到 html 再到 body 就停止了
    - 处于目标阶段：事件在 div 发生并处理，但是事件处理会被看成是冒泡阶段的一部分。
    - 冒泡阶段：事件又传播回文档
    - 阻止冒泡事件：event.stopPropagation()
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
    - 阻止默认行为：event.preventDefault()
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
    - 事件如何先捕获后冒泡？在 dom 标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后在执行捕获事件。
    - 那些事件不支持冒泡事件：
      * 鼠标事件：mouserleave mouseenter
      * 焦点事件：blur focus
      * UI 事件：scroll resize

11. ## 事件委托（提高性能）

    * 简介：事件委托值得是，不在事件的（直接 dom）上设置监听函数，而是在其父元素上设置监听函数。通过事件冒泡，父元素可以监听到子元素上事件的触发。

    - 通过判断事件发生元素 dom 的类型，来做出不同的响应。
    - 举例：最经典的就是 ul 和 li 标签的事件监听，比如我们在添加事件的时候，采用事件委托机制，不会在 li 标签上直接添加，而是在 ul 父元素上添加
    - 好处：可以比较适合动态元素的绑定，新添加的子元素也会监听函数，也可以有事件触发机制。

12. ## js 的 new 操作符做了什么

    * new 操作符创建了一个空对象，这个对象原型指向构造函数的 prototype，执行构造函数后返回这个对象（return this）

    - 如果不要父类属性和方法，在函数的 prototype 上去 new 这个父类。

13. ## 改变函数内部 this 指针的指向（bind,apply,call）

    * 通过 apply 和 call 改变函数 this 指向，他们两个函数的第一个参数都是一样的，表示要改变指向的那个对象，第二个参数，apply 是数组，而 call 是 arg1,arg2...这种形式

    - bind 是一个返回函数，并不会立即指向第二个是参数（第一个指向 this,后面的用来传递参数）

14. ## 深拷贝和浅拷贝

    * 基本类型：undefined,null,Boolean,String,Number,Symbol 在内存中占据固定大小，保存在栈内存中

    - 引用数据类型：Object,Array,Date,Function,RegExp 等；引用数据类型的值是对象，保存在堆内存中，栈内存存储的是对象的变量标识符以及对象在堆内存中的存储地址。
    - 基本数据类型的复制：其实就是创建一个新的副本给这个值赋值新的变量，改变旧值对象不会改变
    - 引用数据类型：其实就是复制了指针，这个最终都将指向同一个对象，改变其新对象旧的值也会改变
    - 基本类型的比较 == 会进行类型转换
    - 浅拷贝：仅仅只是复制了引用，彼此操作不影响，slice concat object.assign
    - 深拷贝：在堆中重新分配内存，不同的地址，相同的值，互不影响
    - JSON.parse()将一个 js 对象序列化一个 json 字符串 JSON.stringify()将 json 字符串反序列化一个 js 对象

    ```
    var obj={key:{key:1}}
    var obj2 = JSON.parse(JSON.stringify(obj))
    ```

    * es6 的展开

    ```

    ```

    * 深拷贝和浅拷贝的主要区别是：在内存中的存储类型不同：
      * 浅拷贝：重新再堆栈中创建内存，考别前后对象的基本类型互不影响。只拷贝一层，不能对对象的子对象进行拷贝
      * 深拷贝：对对象中的子对象进行递归拷贝，拷贝前后两个对象互不影响

15. ## 跨域

    * 同源策略：协议，端口，域名要相同
      * 协议不同：http 与 https
      * 端口不同：localhost:8080 与 localhost:3000
      * 域名不同：huawei.com 与 consumenr.huawei.com

    - 跨域的十种方式
      1.  ### 降级浏览器
      2.  ### jsonp
      3.  ### cors
      4.  ### nigx
      5.  ### websockt
      6.  ### hash
      7.  ### domain
      8.  ### name
      9.  ### postMessage
      10.

16. ## 图片的懒加载和预加载

    * 预加载：提前加载图片，当用户需要查看是可以直接从本地缓存中渲染

    - 为什么要使用预加载：在网页加载之前，对一些主要内容进行加载，减伤等待时间，给用户提供更好的体验；否则，如歌一个页面的内容过于庞大，会出现留白。
    - 解决留白的方法：
      * 1.  预加载
      * 2.  使用 svg 占位图片，将一些结构快速搭建起来，等请求的数据来了之后，替换当前的占位符
    - 实现预加载的方法：
      * 1.  使用 html 标签
      * 2.  使用 Image 标签
      * 3.  使用 XMLHTTPRequest 对象，但会精细控制预加载过程；
    - 懒加载：客户端优化，减少 http 请求和延迟请求数量
      * 提升用户体验
      * 减少无效资源的加载
      * 防止并发加载资源过多会阻塞 js 的加载，影响网站的正常使用
    - 原理：首先将页面上的图片的 src 属性设置为空字符串，而图片的真路径则设置带 data-original 属性中；当页面滚动的时候去监听 scroll 事件，在 scroll 事件的回调中，判断我们的懒加载的图片是否进入可视区域；如果图片在可视区域将图片的 src 属性设置为 data-original 的值，这样就可以实现延迟加载。

17. ## 函数的节流和防抖

    * 什么是函数的节流：节流是连续触发事件的过程以一定的时间间隔执行函数。节流会稀释你的执行频率，比如每间隔 1 秒钟，只会执行一次函数，无论这 1s 内触发了多少次事件（地铁时间到了出发）

    - 什么是函数的防抖：短时间内多次触发同一事件，只执行最后一次，或者在开始时执行，中间不执行。（公交车等乘客上完后出发）
    - 都为解决高频率事件而来，scroll mosewheel
      mosemover touchmove onesize

18. ## 将类数组 arguments 转换为数组的方法

    * Array.apply(null,arguments)

    - Array.prototype.slice.apply(argumemts)
    - Array.form(arguements)

19. ## 高阶函数

    * 函数作为参数传递，抽离出一部分容易变化的业务逻辑，把这部分业务逻辑放在函数参数中。这样一来可以分离业务代码中变化与不变的部分

    - 函数作为返回值传递

20. ## 如何判断一个变量是对象还是数组

    * typeof 只能判断基本数据类型：Number String undefined symbol Boolean;对于引用数据类型除了 function 都返回 object null 返回 object

    - installOf 用来判断 A 是否是 B 的实列，instanceof 检查的是原型
    - toString 是 Obejct 的原型方法，对 Object 对象，直接调用 toString()就能返回[Object Object].而其他对象，则需要通过 call/apply 来调用才能返回正确的类型信息
    - hasOwnProperty()方法返回一个布尔值，指示对象自身属性中是否具有指定的属性，该方法会忽略掉那些从原型上继承到的属性。
    - isProperty() 方法测试一个对象是否存在拧一个对象的原型链上。

# vue 部分

# react 部分

# node 部分

# express 部分

# koa 部分
