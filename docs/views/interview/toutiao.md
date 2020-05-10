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