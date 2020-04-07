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

## JavaScript的作⽤域链理解吗？✨

[作⽤域链](/views/frontEnd/js/2019/082801.html#预编译、作用域、作用域链)