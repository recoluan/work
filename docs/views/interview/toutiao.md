---
title: 今日头条面试
date: 2020-05-10
---

### 一面

#### 1. script refer 和 async 的区别

#### 2. 防抖和节流

#### 3. 线上性能自动分析，业务错误自动检测

#### 4. vue3.0 的 compositionAPI （或者说是 react 的 hooks 语法）与传统的 options 语法的对比

#### 5. typescript 的优缺点

#### 6. 函数柯里化

::: details
**题目**

总共参数>=3,直接返回结果
如果<3,一直链式调用

add(2,3,4)=9
add(2,3,4,5)=14
add(2)(3,4)=9
add(2)(3)(4)=9
add(2,3)(4)=9

```js
function add (...args) {
  if (args.length >= 3) {
    return args.reduce((prev, next) => {
      return prev + next
    }, 0)
  } else {
    return function (...agms) {
      return add.apply(add, args.concat(agms))
    }
  }
}
```
:::


### 二面

#### 1. 不定宽不定高的矩形垂直居中，大小由内容撑开

::: details

**布局**

```html
<div class="wrapper">
  <div class="inner">
    <p>1</p>
    <p>2</p>
  </div>
</div>
```

**方法1**

```css
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: black;
}
.inner {
  background-color: red;
}
```

**方法2**

```css
.wrapper {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  width: 200px;
  height: 200px;
  background-color: black;
}
.inner {
  /* 如果不加入这一行代码，横向是100%，而不是被内容撑开 */
  display: inline-block;
  background-color: red;
}
```

**方法3**

```css
.wrapper {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: black;
}
.inner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  background-color: red;
}
```
:::

#### 2. link preload 和 prefetch 的区别

- [资源预加载preload和资源预读取prefetch简明学习](https://www.cnblogs.com/xiaohuochai/p/9183874.html)
- [HTML rel属性值释义大全](https://www.zhangxinxu.com/wordpress/2019/06/html-a-link-rel/)

#### 3. this 指向问题

#### 4. 值类型和引用类型的区别

#### 5. [] == false

#### 6. 构造函数中出现 return 语句，分别为 对象、null、普通类型时的影响

#### 7. 多个同步任务、异步任务的打印顺序

#### 8. z-index 谁距离屏幕更近，样式层级问题

- [层叠上下⽂-张鑫旭](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)

#### 9. 用 Vue 绘制一个 Modal 组件（自定义 v-model）

::: details
**题目**

使用场景: 用 Vue 实现 Modal 组件：
1. 实现 open 的双向绑定，假设已经有show(）hide() 方法
2. 接收一些 props， 例如：title
3. 点击按钮的时候，触发事件 on-ok

```vue
<template>
  <div>
    <button @on-click="open= true">开始</button>
    <modal v-model="open" tiltle="title" @on-ok="handler"> content </modal>
  </div>
</template>
```

```vue
<template>
  <div class="wrapper" v-show="open">
    <h3>{{ title }}</h3>
    <div>content</div>
    <div class="btn-ok" @click="okClick">ok</div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    okClick () {
      this.$emit('change', false)
      this.$emit('ok')
    }
  }
}
</script>
```
:::

### 三面

[什么是面向对象（OOP）](https://www.jianshu.com/p/7a5b0043b035)
[面向对象的JavaScript --- 多态](https://www.cnblogs.com/Roylh/p/8135777.html)







## 跟谁学

### 一面

#### 1. async await

::: details
```js
/**
 * 期待每隔两秒输出p1、p2、p3，最后输出'done'
 */
const p1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('p1')
      resolve()
    }, 2000)
  })
}
const p2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('p2')
      resolve()
    }, 2000)
  })
}
const p3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('p3')
      resolve()
    }, 2000)
  })
}

createQueue([p1, p2, p3]).then((msg) => {
  console.log(msg) // 'done'
})

async function createQueue(tasks) {
  for (let i = 0; i < tasks.length; i++) {
    const a = await tasks[i]()
  }
  return Promise.resolve('done')
}
```
:::

#### 2. 闭包实现累加

::: details
```js
/**
 * 闭包实现累加
 * 有参数时相加，无参数时输出最终结果
 * add(1)() // => 1
 * add(1)(2)(3)(4)() //  => 10
 */

function add (num) {
  let sum = 0
    
  function getVal (subNum) {
    if (subNum !== undefined) {
      sum+=subNum
      return getVal
    }
    return sum
  }

  if (num !== undefined) {
    sum+=args[0]
    return getVal
  }
  return 0
}
```
:::

#### 3. git rebase 和 git merge 区别
  - [你真的懂git rebase吗？](https://www.jianshu.com/p/6960811ac89c)
  - [【Git】rebase 用法小结](https://www.jianshu.com/p/4a8f4af4e803)

#### 4. jsx 和 template 区别

  - [vue用template还是JSX？](https://www.cnblogs.com/lvonve/p/12470666.html)
  - [vuejs/jsx](https://github.com/vuejs/jsx#installation)

#### 5. proxy 为什么比 Object.definPropety

## 作业帮

### 一面

#### 1. 生命周期

### 二面

#### 1. 订阅发布模式，简单实现
#### 2. 闭包
#### 3-1. 二叉树
#### 3-2. 输入为一个整形数组，数组里有正数也有负数，数组中连续的一个或者多个整数组成一个子数组，每个连续子数组都有一个和。求所有连续子数组和的最大值。[1,7,-6,9,-10,2,3,4,5,-7,0,-1,23,.........]
#### 4. 123456789->123,456,789