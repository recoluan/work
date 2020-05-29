---
title: JS
---

## 解释下变量提升？

JavaScript引擎的⼯作⽅式是，先解析代码，获取所有被声明的变量，然后再⼀⾏⼀⾏地运⾏。这造成的结果，就是所 有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）。

## ⼀段JavaScript代码是如何执⾏的？

[JS 运行机制](/views/frontEnd/FEMainPoint/031301.html)

## 理解闭包吗？

### 闭包是什么 

MDN的解释：闭包是函数和声明该函数的词法环境的组合。 
按照我的理解就是：闭包是指有权访问另一个函数作用域中的变量的函数，内层函数会保存并共享外层函数的OA。

```js
function add () {
  let index = 0
  let indexFn = () => ++index
  return indexFn
}
const index = add()
console.log(1, index()) // 1
console.log(2, index()) // 2
```

### 闭包的作⽤?

闭包最⼤的作⽤就是隐藏变量，闭包的⼀⼤特性就是内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回（寿命终结）了之后。

基于此特性，JavaScript可以实现私有变量、特权变量、储存变量等。

我们就以私有变量举例，私有变量的实现⽅法很多，有靠约定的（变量名前加_）,有靠 Proxy 代理的，也有靠Symbol这种新数据类型的。

Proxy 实现私有变量：

```js
const protectHandler = {
    // target为目标对象， key为成员变量
    get (target, key) {
      // 调用isProtected判断是否合法
      isProtected(key, 'get')
      // 如果合法会运行此步，返回目标对象中的成员变量
      return target[key] 
    },
    // value为要给成员变量设置的值
    set (target, key, value) {
        isProtected(key, 'set')
        target[key] = value
        return true //成功返回true
}
// 判断是否合法的函数
function isProtected (key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}
const yourObj = new Student()
const myObj = new Proxy(yourObj, protectHandler)
```

## JavaScript的作⽤域链理解吗？

[作⽤域链](/views/frontEnd/js/2019/082801.html#预编译、作用域、作用域链)

## ES6模块与CommonJS模块有什么区别？

ES6 Module和CommonJS模块的区别： 
- CommonJS 是对模块的浅拷⻉；ES6 Module 是对模块的引⽤，即 ES6 Module 只存只读，不能改变其值，具体点就是指针指向不能变，类似const 
- import的接⼝是 read-only（只读状态），不能修改其变量值，即不能修改其变量的指针指向，但是可以改变变量内部指针指向；可以对 commonJS 对重新赋值（改变指针指向），但是对 ES6 Module 赋值会编译报错。

ES6 Module 和 CommonJS 模块的共同点：
- CommonJS 和 ES6 Module 都可以对引⼊的对象进⾏赋值，即对对象内部属性的值进⾏改变。

## js有哪些类型？

JavaScript的类型分为两⼤类，⼀类是原始类型，⼀类是复杂(引⽤）类型。

原始类型:
- boolean 
- null 
- undefined 
- number 
- string 
- symbol
- ⼀个没有正式发布但即将被加⼊标准的原始类型 [BigInt](https://es6.ruanyifeng.com/?search=BigInt&x=0&y=0#docs/number#BigInt-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)

复杂类型:
- Object

## null 与 undefined 的区别是什么？

null 表示为空，代表此处不应该有值的存在，⼀个对象可以是 null，代表是个空对象，⽽ null 本身也是对象。 

undefined 表示『不存在』，JavaScript 是⼀⻔动态类型语⾔，成员除了表示存在的空值外，还有可能根本就不存在（因为存不存在只在运⾏期才知道），这就是 undefined 的意义所在。

## 精度问题

- [关于js小数浮点数操作出现的精度问题的原因以及解决方法](https://segmentfault.com/a/1190000018685770)
- [BigInt 数据类型](https://es6.ruanyifeng.com/?search=BigInt&x=0&y=0#docs/number#BigInt-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
- [详解JavaScript中精度失准问题及解决方法](https://www.jb51.net/article/179419.htm)
- [js中精度问题以及解决方案](https://www.cnblogs.com/coce/p/9405121.html)

## 类型转换原理

[js面试题大坑——隐式类型转换](https://blog.csdn.net/itcast_cn/article/details/82887895)

## 原型链

- [原型链](/views/frontEnd/FEMainPoint/030306.html)
- [面向对象](/views/frontEnd/FEMainPoint/030307.html#对象属性)

## 如何判断是否是数组？

```js
// es6中加⼊了新的判断⽅法
if（Array.isArray(value)）{ return true; }

// 更兼容的办法
if(!Array.isArray){ 
  Array.isArray = function(arg){ 
    return Object.prototype.toString.call(arg)==='[object Array]' 
  } 
}
```

## 谈⼀谈你对this的了解？

this的指向不是在编写时确定的,⽽是在执⾏时确定的，同时，this不同的指向在于遵循了⼀定的规则。 ⾸先，在默认情况下，this是指向全局对象的，⽐如在浏览器就是指向window。

```js
name = "Bale"; 
function sayName () { 
  console.log(this.name); 
};
sayName(); //"Bale"
```

其次，如果函数被调⽤的位置存在上下⽂对象时，那么函数是被隐式绑定的。 

```js
function f() { 
  console.log( this.name ); 
}
var obj = { 
  name: "Messi", 
  f: f 
};
obj.f(); //被调⽤的位置恰好被对象obj拥有，因此结果是Messi 
```

再次，显示改变this指向，常⻅的⽅法就是call、apply、bind 以bind为例: 

```js
function f() { 
  console.log( this.name ); 
}
var obj = { 
  name: "Messi", 
};
var obj1 = { 
  name: "Bale" 
};
f.bind(obj)(); //Messi ,由于bind将obj绑定到f函数上后返回⼀个新函数,因此需要再在后⾯加上括号进⾏执⾏,这是bind与apply和call的 区别 
```

最后，也是优先级最⾼的绑定 new 绑定。 

⽤ new 调⽤⼀个构造函数，会创建⼀个新对象, 在创造这个新对象的过程中,新对象会⾃动绑定到Person对象的this上， 那么 this ⾃然就指向这个新对象。 

```js
function Person(name) { 
  this.name = name; 
  console.log(name); 
}
var person1 = new Person('Messi'); //Messi 
```

> 绑定优先级: new绑定 > 显式绑定 >隐式绑定 >默认绑定

## 那么箭头函数的this指向哪⾥？

箭头函数不同于传统JavaScript中的函数,箭头函数并没有属于⾃⼰的this,它的所谓的this是捕获其所在上下⽂的 this 值，作为⾃⼰的 this 值,并且由于没有属于⾃⼰的this,⽽箭头函数是不会被new调⽤的，这个所谓的this也不会被改变. 

我们可以⽤Babel理解⼀下箭头函数:

```js
// ES6 
const obj = { 
  getArrow() { 
    return () => { 
      console.log(this === obj)
    }
  } 
} 
```

转化后

```js
// ES5，由 Babel 转译 
var obj = {
  getArrow: function getArrow() {
    var _this = this
    return function () {
      console.log(_this === obj)
    }
  }
}
```

## async/await是什么？

async 函数，就是 Generator 函数的语法糖，它建⽴在Promises上，并且与所有现有的基于Promise的API兼容。 
1. Async—声明⼀个异步函数(async function someName(){...}) 
2. ⾃动将常规函数转换成Promise，返回值也是⼀个Promise对象
3. 只有async函数内部的异步操作执⾏完，才会执⾏then⽅法指定的回调函数
4. 异步函数内部可以使⽤await 
   1. Await—暂停异步的功能执⾏(var result = await someAsyncCall();) 
   2. 放置在Promise调⽤之前，await强制其他代码等待，直到Promise完成并返回结果 
   3. 只能与Promise⼀起使⽤，不适⽤与回调 
   4. 只能在async函数内部使⽤

## async/await相⽐于Promise的优势？

- 代码读起来更加同步，Promise虽然摆脱了回调地狱，但是then的链式调⽤也会带来额外的阅读负担 
- Promise传递中间值⾮常麻烦，⽽async/await⼏乎是同步的写法，⾮常优雅 
- 错误处理友好，async/await可以⽤成熟的try/catch，Promise的错误捕获⾮常冗余 
- 调试友好，Promise的调试很差，由于没有代码块，你不能在⼀个返回表达式的箭头函数中设置断点，如果你在⼀ 个.then代码块中使⽤调试器的步进(step-over)功能，调试器并不会进⼊后续的.then代码块，因为调试器只能跟踪 同步代码的『每⼀步』。

## JavaScript的参数是按照什么⽅式传递的？

### 基本类型传递⽅式

由于js中存在复杂类型和基本类型,对于基本类型⽽⾔,是按值传递的.

```js
var a = 1; 
function test(x) { 
  x = 10; 
  console.log(x); 
}
test(a); // 10 
console.log(a); // 1
```

虽然在函数 test 中 a 被修改,并没有有影响到 外部 a 的值,基本类型是按值传递的.

### 复杂类型按引⽤传递? 

我们将外部 a 作为⼀个对象传⼊ test 函数. 

```js
var a = { a: 1, b: 2 };
function test(x) { x.a = 10; console.log(x); }
test(a); // { a: 10, b: 2 } 
console.log(a); // { a: 10, b: 2 } 
```

可以看到,在函数体内被修改的 a 对象也同时影响到了外部的 a 对象,可⻅复杂类型是按引⽤传递的. 可是如果再做⼀个实验: 

```js
var a = { a: 1, b: 2 };
function test(x) { x = 10; console.log(x); }
test(a); // 10 
console.log(a); // { a: 1, b: 2 } 
```

外部的 a 并没有被修改,如果是按引⽤传递的话,由于共享同⼀个堆内存, a 在外部也会表现为 10 才对. 此时的复杂类型 同时表现出了 按值传递 和 按引⽤传递 的特性.

### 按共享传递 

复杂类型之所以会产⽣这种特性,原因就是在传递过程中,对象 a 先产⽣了⼀个 副本a ,这个 副本a 并不是深克隆得到的 副 本a , 副本a 地址同样指向对象 a 指向的堆内存. 

因此在函数体中修改 x=10 只是修改了 副本a , a 对象没有变化. 但是如果修改了 x.a=10 是修改了两者指向的同⼀堆内 存,此时对象 a 也会受到影响.

有⼈讲这种特性叫做 **传递引⽤**,也有⼀种说法叫做 **按共享传递**.

## 聊⼀聊如何在JavaScript中实现不可变对象？

实现不可变数据有三种主流的⽅法 
1. 深克隆，但是深克隆的性能⾮常差，不适合⼤规模使⽤ 
2. Immutable.js，Immutable.js是⾃成⼀体的⼀套数据结构，性能良好，但是需要学习额外的API 
3. immer，利⽤Proxy特性，⽆需学习额外的api，性能良好

- [不可变数据](https://www.ucloud.cn/yun/89779.html)
- [从JS对象开始，谈一谈“不可变数据”和函数式编程](https://segmentfault.com/a/1190000008780076)
- [immutable-js](https://immutable-js.github.io/immutable-js/)

## JavaScript的基本类型和复杂类型是储存在哪⾥的？

- 基本类型储存在栈中，但是⼀旦被闭包引⽤则成为常住内存，会储存在内存堆中。 
- 复杂类型会储存在内存堆中。

- [内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)

## 讲讲JavaScript垃圾回收是怎么做的？

- [javascript垃圾回收](https://www.cnblogs.com/starof/p/6594904.html)

## 最简单的一个 Event Bus

```js
class EventBus {
  constructor () {
    this.events = {}
  }

  $on (type, fn) {
    if (!this.events[type]) this.events[type] = []
    this.events[type].push(fn)
  }

  $emit (type, ...args) {
    const events = this.events[type]
    events.forEach(event => {
      event.apply(this, args)
    });
  }

  $off (type) {
    delete this.events[type]
  }
}

// 测试
const eb = new EventBus()

eb.$on('bus1', (...args) => {
  console.log('bus1', args)
})

eb.$on('bus1', (...args) => {
  console.log('bus1', args)
})

eb.$emit('bus1', 111, 222)
```

## instanceof 原理

其实 instanceof 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可。因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，如果查找失败，则会返回 false，告诉我们左边变量并非是右边变量的实例。

```js
function new_instanceof (left, right) {
  const rightProto = right.prototype
  let leftProto = left.__proto__
  while (true) {
    if (leftProto === null) {
      return false
    }
    if (leftProto === rightProto) {
      return true
    }
    leftProto = leftProto.__proto__
  }
}

class Parent {}
class Child extends Parent {}

const c = new Child()

console.log(new_instanceof(c, Child))
console.log(new_instanceof(c, Parent))
console.log(new_instanceof(c, Object))
```

## 矩阵循环打印

```js
function print (m) {
  let up = 0, left = 0, down = m.length - 1, right = m[0].length - 1

  const arr = []

  while (up <= down || left <= right) {
    Array.prototype.push.apply(arr, cicle(m, up++, down--, left++, right--))
  }
  return arr.toString()
}

function cicle (m, up, down, left, right) {
  console.log(up, down, left, right)
  const arr = []
    // top & bottom
  let topArr = []
  let bottomArr = []
    // left & right
  const leftArr = []
  const rightArr = []

  // 获取上下两行的数据
  if (up < down) {
    const firstLine = m[up]
    const lastLine = m[down]
    // + 1 是为了可以取到最后一个值
    topArr = firstLine.slice(left, right + 1)
    // reverse() 是因为底部行是从后往前走的
    bottomArr = lastLine.slice(left, right + 1).reverse()
  }

  // 获取左右两列的数据
  if (left < right) {
    for (let i = up + 1; i < down; i++) {
      leftArr.unshift(m[i][left])
      rightArr.push(m[i][right])
    }
  }

  Array.prototype.push.apply(arr, topArr.concat(rightArr, bottomArr, leftArr))

  // 以下是处理边界情况

  // 处理 [[1, 2, 3]] 这种情况
  if (up === down && left < right) {
    Array.prototype.push.apply(arr, m[0].slice(left, right + 1))

  // 处理 [[1]] 这种情况
  } else if (up === down &&left === right) {
    arr.push(m[up][left])
  }

  return arr
}

const arr = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]

console.log(print(arr))
```
