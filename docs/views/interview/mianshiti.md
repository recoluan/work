---
title: 面试题整理
date: 2020-05-27
---

## 今日头条面试

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

1. 两指按压，以按压的中心点来进行方法的实现
2. cookie 和 Storage 的区别，怎么实现 Storage 的有效期
3. 手写bind函数
4. new的过程，原型链，ES6和ES5继承的区别
5. xss和csrf，token是怎么实现的
6. 寻找两个子节点的共同父节点 [微软算法面试题：给定两个二叉树节点，寻找其最近共同祖先](https://www.jianshu.com/p/26f5d5910fec)


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

1. 生命周期
2. this 指向
3. 同步异步宏任务微任务
4. 合并有序数组元素（时间复杂度要求O(m+n)）例如：给定的两个数组为[1, 5]和[2, 5, 6, 8]，函数返回[1, 2, 5, 5, 6, 8]。
5. 交错合并数组（时间复杂度要求O(m+n)）。 例如：给定的两个列表为[a, B]和[1, 2, 3]，函数返回[a, 1, B, 2, 3]。
6. 判断一个dom节点是否为另一个dom节点的祖先
7. 手动实现函数截流

### 二面

#### 1. 订阅发布模式，简单实现
#### 2. 闭包
#### 3-1. 二叉树
#### 3-2. 输入为一个整形数组，数组里有正数也有负数，数组中连续的一个或者多个整数组成一个子数组，每个连续子数组都有一个和。求所有连续子数组和的最大值。[1,7,-6,9,-10,2,3,4,5,-7,0,-1,23,.........]
#### 4. 123456789->123,456,789

## 美团

### 二面

1. 一个请求，请求失败后最多重复三次

```js
// function retry (fn, count) {
//   fn().then(res => {
//     return Promise.resolve(res)
//   }).catch(err => {
//     if (--count > -1) {
//       retry(fn, count)
//     } else {
//       console.log('请求失败')
//     }
//   })
// }

async function retry (fn, count) {
  try {
    const result = await fn()
  } catch (err) {
    if (--count > -1) {
      retry(fn, count)
    } else {
      console.log('请求失败')
    }
  }
}

function test () {
  return Promise.reject(0)
}

retry(test, 3)
```

### 三面

1. MVC 和 MVVM
   - [MVC和MVVM的关系图解](https://www.bilibili.com/video/BV1Xf4y1m7x5?from=search&seid=15602997052924417903)
   - [Vue基本代码和MVVM之间对应](https://www.bilibili.com/video/BV1S5411s7Lc)
   - [react是mvvm架构吗？](https://www.zhihu.com/question/310674885)
   - [谈谈MVC模式](http://www.ruanyifeng.com/blog/2007/11/mvc.html)
   - [MVC，MVP 和 MVVM 的图示](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)
   - [MVC、MVP、MVVM、MVPVM区别](https://www.jianshu.com/p/7398ec36d591)
   - [MVC, MVP, MVVM比较以及区别(上)](https://www.cnblogs.com/JustRun1983/p/3679827.html)
   - [MVC, MVP, MVVM比较以及区别(下)](https://www.cnblogs.com/JustRun1983/p/3727560.html)
   - [Model–view–controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
   - [Model–view–viewmodel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)
2. 递归实现数组的反转

    > 1. 首先是终止条件
    > 2. 将本次的执行结果作为下次的执行条件

    ```js
    function transform (arr) {
      if (arr.length < 2) return arr
      const first = arr.shift()
      return [...transform(arr), first]
    }
    console.log(transform([5,4,3,2,1]))
    ```
3. 建议：
   1. 踏实
   2. 眼界
   3. 基础和底层原理
   4. 技术输出
   5. 业务解决方案比作工具（项目构建）更有价值，更容易被得到认可，方向：业务架构师
   6. 设计模式
   7. 面向对象
   8. 领域设计模式 DDD
   9. 业务抽象

## 自我介绍

您好，我是2016年毕业于山东理工大学。从毕业至今就职过两家公司。

最近就职的公司是一猫汽车，业务是汽车供应链金融方面，主要负责一款ERP管理系统的底层实现，和一些开发管理工作。

下面我从技术和管理方面介绍一下我在一猫这两年任职期间的个人情况，希望各位面试官能给到指点：

首先是技术方面，技术方面呢我主要讲一下有意思的几个项目经历：
   1. 第一个是前面提到的ERP管理系统。由于公司的业务倾向，前端这边主要开发任务都集中在这个系统上，技术栈是vue+ElementUI。我的工作是整个项目的搭建，公共代码的编写，根据业务抽离UI库，权限的解决方案等等。从项目搭建到开发过程中其实遇到过很多的问题，其中一个最印象深刻的就是权限的问题：权限分两方面，一个是页面权限，一个是页面上的功能权限，由于业务需要，角色有很多并且是动态创建，角色下面的对应的权限也是动态去绑定的，我的解决办法是和后端协商去维护一套权限数据模板，创建角色时可以动态去勾选所需的权限，前端根据当前用户角色的权限数据动态去组合菜单来处理路由权限，通过一个自定义指令去处理页面的功能权限，当然里面还有很多实现细节。
   2. 第二个是将旧的项目规范化。比如一猫有一个专题项目，每次开发都是 copy 以前的代码去修改，由于功能代码随意罗列，因为没有文档，导致每次翻阅代码都需要重新整理，会浪费很多时间。所以我决定使用webpack的多页面配置来解决专题项目的模块化开发问题，去封装、去写案例代码，补全开发文档，这样就将一天多的开发时间缩减到了2小时，提升了开发效率也提高了代码质量。
   3. 第三个是进行新技术的推动。比如整个前端组技术栈是 vue，并没有react开发经验，同时ts也将成为前端的开发标配，所以我就主张使用这两个结合开发一个全新需求（一款钉钉微应用），拓宽一下前端组的知识体系和开发经验。
   4. 其中还有一个小插曲，就是在开发那个ERP管理系统的时候，我在搭建完底层的时候，开发文档同时快速跟进，当时通过调研之后，最后选择的vuepress，因为想将文档和博客结合来搭建前端内部的分享平台，所以就有了我的那款开源项目，一款vuepress主题。我过去一年多的空余时间几乎都用在了维护这款项目上，结果还是很不错的，现在是最受欢迎的vuepress主题，我个人在开源团队管理以及产品迭代和推广运营的过程中学到了很多。

管理方面呢，主要是团队成员的积极性和主动性方面，我遵循这么几个原则：
   1. 增加交流和信任。用更多工作之外的时间去和大家交谈，增加对我的信任，并发现每个人的长处和不足，从而让每个人去扮演合适的角色来发挥长处，然后也根据不足去针对性的强化。
   2. 将思考和学习成为团队的习惯。每周除了进行必要的工作规划，还要轮流分享一个知识点或者是开发经验，制范不限，让大家始终在保持思考。
   3. 培养管理意识。管理意识，我认为从某种程度上讲，就是一种自驱动，能够自驱动的人太少太少，所以培养管理意识尤为重要。我的做法呢，就是实行业务组长轮值制度，比如他要跟进所有的项目需求会，并配合一些工具来进行任务分配和调整，这样每个人都有机会站在更高的维度去理解和处理公司的需求，从而触发其积极性和主动性。

以上是我的自我介绍，希望您能指点。

对新人的处理办法：

1. 前期要进行较多的主动沟通，了解其对公司情况不断深入后的个人想法；
2. 然后将团建频次提高，通过小需求来快速参与公司项目等，增加团队归属感，也更快地融入团队；
3. 等比较了解个人情况后适当调整其在团队中的角色。

权限分为页面权限（也就是路由权限）和页面上的功能权限，页面功能权限比较简单，通过自定义一个权限指令，根绝判断条件控制当前功能模块是否显示就可以了；复杂点的是路由权限，因为业务需要，角色可以动态创建，角色下面的对应的权限也是动态去绑定的，但是这个项目的菜单层级又比较深，所以综合这写特点，前端没有使用路由嵌套来表现菜单的层级，而是把所有的路由都创建为一级路由，并和后端协商去维护一套权限数据，根据权限的勾选情况，动态组合一套权限数据，返回给前端，前端根据权限数据动态去组合菜单，并且去控制显示页面的功能模块。这看起来是一个比较好的解决方案，但是问题也随之到来：

   1. 比如点击每一层菜单高亮显示
   2. 切换高层级时的路由默认跳转行为的控制

这些都需要我们去手动记录菜单点击行为和路由跳转行为。
