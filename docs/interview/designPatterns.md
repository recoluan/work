---
title: 设计模式
---

## 面向对象

### 封装三要素

三要素：继承、封装和多态

TS 的属性权限管理
- public 完全开放
- protected 对子类开放
- private 对自己开放

- 减少耦合，不该外漏的不外漏
- 利于数据、接口的权限管理
- _开头的属性是私有的

多态：给函数传不同的参数，执行不同的方法，输出不同的结果

### 为什么使用面向对象

- 程序执行：顺序、判断、循环——结构化
- 让数据结构化
- 对于计算机，结构化的才是最简单的
- 编程应该 简单 & 抽象

### UML 类图

关联和泛化

## 设计原则

### 《UNIX、LINUX设计哲学》  

**《UNIX、LINUX设计哲学》准则**
- 准则1：小即是美（阮一峰的集市和教堂的里面的集市）
- 准则2：让每个程序只做好好一件事
- 准则3：快速建立原型（建议一个最简、可使用版本，然后一步步去迭代，去升级）
- 准则4：舍弃高效率而取代可移植性（强调复用）
- 准则5：采用纯文本来存储数据（比如存储人认识的数据而不是二进制数据）
- 充分利用软件的杠杆效应（软件复用，能抽象的抽象，能封装的封装）
- 准则7：使用shell脚本来提高杠杆效应和可移植性
- 准则8：避免强制性的用户界面（用户界面应该是一个插件而不是必备项）
- 准则9：让每个程序员都成为数据过滤器（就像gulp，执行完一个任务，再将数据交给下一个任务）

**《UNIX、LINUX设计哲学》小准则**
- 小准则：允许用户定制环境
- 小准则：尽量使操作系统内核小而轻量化
- 小准则：使用小写字母并尽量简写
- 小准则：沉默是金（比如，如果是数字输出数字，但是碰到不是数字的时候就返回0或什么都不输出，不能输出“这不是数字”，这就变成字符串了）
- 小准则：各部分之和大于整体（尽量模块化和封装，减少耦合）
- 小准则：寻求90%的解决方案（产品不可能满足所有用户，只要满足大部分就可以了）

### S O L I D 五大设计原则

- S 单一职责原则
  - 一个程序制作好一件事
  - 如果功能过于复杂就拆分开，每个部分保持独立
- O 开放封闭原则
  - 对扩展开放，对修改封闭
  - 增加需求时，扩展新代码，而非修改已有代码
  - 这是软件设计的终极目标
- L 李氏置换原则
  - 子类能覆盖父类
  - 父类能出现的地方子类就能出现
  - JS 中使用较少（弱类型&继承使用较少）
- I 接口独立原则
  - 保持接口的单一独立，避免出现“胖借口”
  - JS 中没有接口（typescript例外），使用较少
  - 类似于单一职责原则，这里更关注接口
- D 依赖导致原则
  - 面向接口编程，依赖于抽象而不依赖于具体
  - 使用方只关注接口而不关注具体类的实现
  - JS中使用较少（没有接口&弱类型）

### 设计模式

#### 创建型

- 工厂模式（工厂方法模式、抽象工厂模式、建造者模式）
- 单例模式
- 原型模式

#### 结构型

- 适配器模式
- 装饰器模式
- 代理模式
- 外观模式
- 桥接模式
- 组合模式
- 享元模式

#### 行为型

- 策略模式
- 模板方法模式
- 观察者模式（*）
- 迭代器模式（*）
- 职责连模式
- 命令模式
- 备忘录模式
- 状态模式（*）
- 访问者模式
- 中介者模式
- 解释器模式

### 面向对象面试题一

- 打车时，可以打专车或者打快车。人和车都有车牌号和名称。
- 不同车价格不同，快车每公里 1 元，专车每公里 2 元。
- 行程开始时，显示车辆信息。
- 行程结束时，显示打车金额。

```js
class Car {
  constructor(num, name) {
    this.num = num
    this.name = name
  }
}
class KuaiChe extends Car {
  constructor(num, name) {
    super(num, name)
    this.price = 1
  }
}
class ZhuanChe extends Car {
  constructor(num, name) {
    super(num, name)
    this.price = 2
  }
}
class Tip {
  constructor (car) {
    this.car = car
  }
  start () {
    console.log(`车辆信息：${this.car.num}-${this.car.name}`)
  }
  end () {
    console.log(`价格：${this.car.price * 5}`)
  }
}

const car = new ZhuanChe('123', '大众')
const tip = new Tip(car)

tip.start()
tip.end()
```

### 面向对象面试题二

- 某停车场，分 3 层，每层 100 车位。
- 每个车位都能监控车辆的驶入和离开。
- 车辆进入前，显示每层的空余车位数量。
- 车辆进入时，摄像头可识别车牌号和时间。
- 车辆出来时，出口显示器显示车牌号停车时长。

```js
class Camera {
  shot (car) {
    return {
      num: car.num,
      inTime: Date.now()
    }
  }
}

class Screen {
  show (num, inTime) {
    const stayTime = Date.now() - inTime
    console.log(`${num} 停留 ${stayTime}`)
  }
}

class Car {
  constructor(num) {
    this.num = num
  }
}

class Park {
  constructor(floors) {
    this.floors = floors || []
    this.carList = {}
    this.camera = new Camera()
    this.screen = new Screen()
  }
  in (car) {
    const info = this.camera.shot(car)
    const i = parseInt(Math.random() * 100)
    const place = this.floors[0].places[i]
    place.in()
    info.place = place
    this.carList[car.num] = info
  }
  out (car) {
    const { num, inTime, place } = this.carList[car.num]
    this.screen.show(num, inTime)
    place.out()
    delete this.carList[num]
  }
  emptyNum () {
    return this.floors.map(floor => {
      return `第 ${floor.index} 层还有 ${floor.emptyFloorNum()} 个停车位`
    }).join('\n')
  }
}
class Floor {
  constructor (index, places) {
    this.index = index
    this.places = places || []
  }

  emptyFloorNum () {
    let num = 0
    this.places.forEach(place => {
      if (place.empty) num++
    })
    return num
  }
}
class Place {
  constructor () {
    this.empty = true
  }
  in () {
    this.empty = false
  }
  out () {
    this.empty = true
  }
}

let floors = []
for (let i = 0; i < 3; i++) {
  const floor = []
  for (let j = 0; j < 100; j++) {
    floor.push(new Place())
  }
  floors.push(new Floor(i, floor))
}
const park = new Park(floors)
const car1 = new Car(100)
const car2 = new Car(200)
const car3 = new Car(300)

console.log(park.emptyNum())
park.in(car1)
console.log(park.emptyNum())

park.in(car2)
console.log(park.emptyNum())
park.out(car1)
console.log(park.emptyNum())
```