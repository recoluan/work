---
title: CSS
---

## CSS选择器的优先级是怎样的？

CSS选择器的优先级是：内联样式 > ID选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 元素选择器 = 关系选择器 = 伪元素选择器 > 通配符选择器

- !important 特殊性最高，详情访问重要性
- 对于内联样式，加1000
- 对于选中器中给定的ID属性值，加0100
- 对于选择器中给定的类属性值，属性选择或伪类，加0010
- 对于选择器中给定的元素选择器和伪元素，加0001
- 结合符和通配符选择器对特殊性没有任何贡献，0000

### 样式继承

样式不仅可以应用到指定的元素，还会应用到它的后代元素。在两个比较特殊的情况需要注意：
- 一个是在HTML中，应用到body元素的背景样式可以传递到html元素；
- 另一个是 a 标签不会继承父元素的文本样式

### 可以继承的属性

文本属性、字体属性、列表属性、表格属性，和分类属性的 `cursor`、`visibility`，和尺寸属性的 `line-height`。

#### 文本属性

|属性名|解释|继承性|是否属性值中拥有inherit|
|:-:|:-:|:-:|:-:|
|color|设置文本颜色|Yes|Yes|
|direction|规定文本的方向|Yes|Yes|
|line-height|设置行高|Yes|Yes|
|letter-spacing|设置字符间距|Yes|Yes|
|text-align|对齐元素中的文本|Yes|Yes|
|text-decoration|向文本中添加修饰|No|Yes|
|text-indent|缩进元素中文本的的首行|Yes|Yes|
|text-shadow|设置文本阴影|Yes|Yes|
|text-transform|控制元素中的字母|Yes|Yes|
|white-space|设置元素中空白的处理方式|Yes|Yes|
|word-spacing|设置字间距|Yes|Yes|

#### 字体属性

|属性名|解释|继承性|是否属性值中拥有inherit|
|:-:|:-:|:-:|:-:|
|font|简写属性|Yes|Yes|
|font-family|设置字体系列|Yes|Yes|
|font-size|设置字体的尺寸|Yes|Yes|
|font-style|设置字体风格|Yes|Yes|
|font-variant|以小型大写字体或者正常字体显示文本|Yes|Yes|
|font-weight|设置字体的粗细|Yes|Yes|

#### 列表属性

属性名|解释|继承性|是否属性值中拥有inherit|
|:-:|:-:|:-:|:-:|
|list-style|简写属性，用于把所有用于列表的属性设置在一个声明中|Yes|Yes|
|list-style-image|将图片设置为列表项标志|Yes|Yes|
|list-style-position|设置列表项中列表项标志的位置|Yes|Yes|
|list-style-type|设置列表项标志的类型|Yes|Yes|

#### 表格属性

属性名|解释|继承性|是否属性值中拥有inherit|
|:-:|:-:|:-:|:-:|
|border-collapse|设置是否把表格单元合并为单一的边框|Yes|Yes|
|border-spacing|设置分隔单元格边框的距离|Yes|Yes|
|caption-side|设置表格标题的位置|Yes|Yes|
|empty-cells|设置是否显示表格中的空单元格|Yes|Yes|
|table-layout|设置显示单元、行和列的算法|Yes|Yes|

#### 分类属性

属性名|解释|继承性|是否属性值中拥有inherit|
|:-:|:-:|:-:|:-:|
|clear|设置一个元素的侧面是否允许其他浮动的元素|No|Yes|
|cursor|规定当指向某元素之上时显示的指针类型|Yes|Yes	
|display|设置是否及如何显示元素|No|Yes|
|float|定义元素在哪个方向浮动|No|Yes|
|position|把元素放置到一个静态的，相对的，绝对的，或者固定的位置|No|Yes|
|visibility|设置元素是否可见或不可见|Yes|Yes|

#### 尺寸属性

属性名|解释|继承性|是否属性值中拥有inherit|
|:-:|:-:|:-:|:-:|
|height|设置元素的高度|No|Yes|
|line-height|设置行高|Yes|Yes|
|max-height|设置元素的最大高度|No|Yes|
|max-width|设置元素的最带宽度|No|Yes|
|min-height|设置元素的最小高度|No|Yes|
|min-width|设置元素的最小宽度|No|Yes|
|width|设置元素的高度|No|Yes|

#### 轮廓属性

属性名|解释|继承性|是否属性值中拥有inherit|
|:-:|:-:|:-:|:-:|
|outline|在一个声明中设置所有的轮廓属性|No|Yes|
|outline-color|设置轮廓的颜色|No|Yes|
|outline-style|设置轮廓的样式|No|Yes|
|outline-width|设置轮廓的宽度|No|Yes|

#### 背景属性

属性名|解释|继承性|是否属性值中拥有inherit|
|:-:|:-:|:-:|:-:|
|background|设置背景属性|No|Yes|
|background-color|规定要使用的背景颜色|No|Yes|
|background-position|规定背景图像的位置|No|Yes|
|background-size|规定背景图片的尺寸|No|Yes|
|background-origin|规定背景图片的定位区域|No|Yes|
|background-repeat|规定如何重复背景图像|No|Yes|
|background-clip|规定背景的绘制区域|No|Yes|
|background-attachment|规定背景是否固定或者随着页面的其余部分滚动|No|Yes|
|background-image|规定要使用的背景图像|No|Yes|

#### 盒子属性

属性名|解释|继承性|是否属性值中拥有inherit|
|:-:|:-:|:-:|:-:|
|padding|简写属性，作用是在一个声明中设置元素的所在内边距属性|No|Yes|
|padding-bottom|设置元素的下内边距|No|Yes|
|padding-left|设置元素的左内边距|No|Yes|
|padding-right|设置元素的右内边距|No|Yes|
|padding-top|设置元素的上内边距|No|Yes|
|border|简写属性，用于把对四个边的属性设置在一个声明中。|No|Yes|
|border-style|用于设置元素所有边框的样式，或者单独的为各边设置边宽样式|No|Yes|
|border-width|简写属性，用于元素的所有边框设置宽度，或者单独的为各边边框设置宽度|No|Yes|
|border-color|简写属性，设置元素的所有边框中可见部分的颜色，或者为4个边分别|置颜色|No|Yes|
|margin|简写属性，在一个声明中设置所有外边距属性|No|Yes|
|margin-bottom|设置元素的下外边距|No|Yes|
|margin-left|设置元素的左外边距|No|Yes|
|margin-right|设置元素的右外边距|No|Yes|
|margin-top|设置元素的上外边距|No|Yes|

#### 定位属性

属性名|解释|继承性|是否属性值中拥有inherit|
|:-:|:-:|:-:|:-:|
|position|把元素放置到一个静态的、相对的、绝对的、或固定的位置中。|No|Yes|
|top|定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移。|No|Yes|
|right|定义了定位元素右外边距边界与其包含块右边界之间的偏移。|No|Yes|
|bottom|定义了定位元素下外边距边界与其包含块下边界之间的偏移。|No|Yes|
|left|定义了定位元素左外边距边界与其包含块左边界之间的偏移。|No|Yes|
|overflow|设置当元素的内容溢出其区域时发生的事情。|No|Yes|
|clip|设置元素的形状。元素被剪入这个形状之中，然后显示出来。|No|Yes|
|vertical-align|设置元素的垂直对齐方式。|No|Yes|
|z-index|设置元素的堆叠顺序。|No|Yes|

### 层叠

CSS层叠样式表的层叠特性就是让样式层叠在一起，通过特殊性、重要性、来源及继承机制来排列层叠样式的顺序及选出胜出者。

1. 重要性和来源需要同时考虑，因为二者的结合使用与否会存在不同的顺序：
    - 不考虑来源的情况下，`!important` 最高。
    - 在不考虑重要性的前提下，来源优先级顺序为：
        读者的重要声明 > 创作人员的重要声明 > 创作人员的正常声明 > 读者的正常声明 > 用户代理声明(浏览器默认样式)
    - 二者一起考虑的情况下，user(用户)的优先级大于author(作者)的优先级，这样做是试图平衡author(作者)和user(用户)。所以，最终的优先级排序为：user(用户)!important > author(作者)!important > author > user > user agent
2. 接着，对于非重要声明来说，按照特殊性排序。特殊性越高的规则，权重越大

3. 最后，如果特殊性相同，则按照出现顺序排序。声明在样式表或文档中越靠后出现，权重越大。如果样式表中有通过@import导入的样式表，一般认为出现在导入样式表中的声明在前，主样式表的所有声明在后。

## CSS有⼏种定位⽅式？

- static 正常⽂档流定位，此时 top, right, bottom, left 和 z-index 属性⽆效，块级元素从上往下纵向排布，⾏级元素 从左向右排列
- relative 没有跳出文本流，定位是相对于父级和兄弟节点
- absolute 跳出文本流，是相对于父级且带有定位，如果父级没有定位属性，那么就会往上一级再找是否带定位，找到顶级之后如果还没有定位，就以 body 定位
- fixed 元素相对于屏幕视⼝（viewport）的位置来指定元素位置
- sticky 粘性定位，特性近似于relative和fixed的合体


## link和@import的区别？ 

- link 属于 XHTML标签，⽽ @import 是 CSS 提供的；
- ⻚⾯被加载时，link 会同时被加载，⽽ @import 引⽤的 CSS 会等到⻚⾯被加载完再加载；
- import 只在 IE 5 以上才能识别，⽽ link 是 XHTML 标签，⽆兼容问题；
- link ⽅式的样式权重⾼于 @import 的权重；
- 当使⽤ js 控制 dom 去改变样式的时候，只能使⽤ link 标签。

## link和@import的区别？ 

- link属于XHTML标签，⽽@import是CSS提供的。 
- ⻚⾯被加载时，link会同时被加载，⽽@import引⽤的CSS会等到⻚⾯被加载完再加载。 
- import只在IE 5以上才能识别，⽽link是XHTML标签，⽆兼容问题。 
- link⽅式的样式权重⾼于@import的权重。 
- 使⽤dom控制样式时的差别。当使⽤javascript控制dom去改变样式的时候，只能使⽤link标签，因为@import不是 dom可以控制的

## 有哪些⽅式（CSS）可以隐藏⻚⾯元素？

- opacity:0 ：本质上是将元素的透明度将为0，就看起来隐藏了，但是依然占据空间且可以交互 
- visibility:hidden : 与上⼀个⽅法类似的效果，占据空间，但是不可以交互了 
- overflow:hidden : 这个只隐藏元素溢出的部分，但是占据空间且不可交互 
- display:none : 这个是彻底隐藏了元素，元素从⽂档流中消失，既不占据空间也不交互，也不影响布局 
- z-index:-9999 : 原理是将层级放到底部，这样就被覆盖了，看起来隐藏了 
- transform: scale(0,0) : 平⾯变换，将元素缩放为0，但是依然占据空间，但不可交互

## 如何理解层叠上下⽂？

### 是什么？

层叠上下⽂是HTML元素的三维概念，这些HTML元素在⼀条假想的相对于⾯向（电脑屏幕的）视窗或者⽹⻚的⽤户的 z 轴上延伸，HTML元素依据其⾃身属性按照优先级顺序占⽤层叠上下⽂的空间。

### 如何产⽣？

> 其实可以理解为如何脱离正常的文档流。

触发⼀下条件则会产⽣层叠上下⽂：
- 根元素 `(HTML)`
- `z-index` 值不为 `auto` 的 绝对/相对定位
- ⼀个 `z-index` 值不为 `auto` 的 `flex` 项⽬ (flex item)，即：⽗元素 display: flex|inline-flex
- `opacity` 属性值⼩于 1 的元素
- `transform` 属性值不为 `none` 的元素
- `mix-blend-mode` 属性值不为 `normal` 的元素
- `filter` 值不为 `none` 的元素
- `perspective` 值不为 `none` 的元素
- `isolation` 属性被设置为 `isolate` 的元素
- `position: fixed` 在 `will-change` 中指定了任意 CSS 属性,即便你没有直接指定这些属性的值
- `-webkit-overflow-scrolling` 属性被设置 `touch` 的元素

> 拓展阅读：[层叠上下⽂-张鑫旭](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)

## 对媒体查询的理解？

### 是什么 

媒体查询由⼀个可选的媒体类型和零个或多个使⽤媒体功能的限制了样式表范围的表达式组成。媒体查询，添加⾃CSS3，允许内容的呈现针对⼀个特定范围的输出设备⽽进⾏裁剪，⽽不必改变内容本身,⾮常适合 web ⽹⻚应对不同型号的设备⽽做出对应的响应适配。 

### 如何使⽤？

```html
<!-- 语法规范 -->
<media-query> = <media-condition> | [ not | only ]? <media-type> [ and <media-condition-without-or> ]?
```

```html
<!-- link元素中的CSS媒体查询 --> 
<link rel="stylesheet" media="only screen and (max-width: 800px)" href="example.css" /> 

<!-- 样式表中的CSS媒体查询 --> 
<style> 
@media only screen and (max-width: 800px) { 
  .facet_sidebar {
    display: none
  } 
}
</style> 

<!-- 样式表中的CSS媒体查询 --> 
<style media="only screen and (max-width: 800px)"> 
  .facet_sidebar {
    display: none
  }
</style> 
```

> 拓展阅读：[深⼊理解CSS Media媒体查询](https://www.cnblogs.com/xiaohuochai/p/5848612.html)、[@media](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media)

## 对盒模型的理解

### 是什么？

浏览器的渲染引擎会根据标准之⼀的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为⼀个个矩形的盒⼦，CSS 决定这些盒⼦的⼤⼩、位置以及属性（例如颜⾊、背 景、边框尺⼨…）。盒模型由content（内容）、padding（内边距）、border（边框）、margin（外边距）组成。

### 标准盒模型和怪异盒模型有什么区别

计算宽高的方式不一样。标准盒模型 `width = content`，怪异盒模型 `width = border-left + padding-left + content + padding-right + border-right`，虽然现代浏览器默认使⽤ W3C 的标准盒模型，但是在不少情况下怪异盒模型更好⽤，于是W3C在css3中加⼊ `box-sizing `。 
```css
box-sizing: content-box // 标准盒模型 
box-sizing: border-box // 怪异盒模型 
box-sizing: padding-box // ⽕狐的私有模型，没⼈⽤
```

## BFC

在解释BFC之前，先说一下文档流。我们常说的文档流其实分为定位流、浮动流和普通流三种。而普通流其实就是指BFC中的FC。FC是formatting context的首字母缩写，直译过来是格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。常见的FC有BFC、IFC，还有GFC和FFC。

### 是什么

BFC是block formatting context，也就是块级格式化上下文，它是⼀块独⽴的区域，让处于BFC内部的元素与外部的元素互相隔离。

### 触发条件

- 根元素，即HTML元素
- float的值不为none
- overflow的值不为visible
- display的值为inline-block、table-cell、table-caption
- position的值为absolute或fixed

### 作用

1. 清除浮动
2. 阻止margin重叠
3. 两栏布局，防⽌⽂字环绕等

## 为什么有时候⼈们⽤translate来改变位置⽽不是定位？ 

translate()是transform的⼀个值。改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。

⽽改变绝对定位会触发重新布局，进⽽触发重绘和复合。transform使浏览器为元素创建⼀个 GPU 图层，但改变绝对定位会使⽤到 CPU。 因此translate()更⾼效，可以缩短平滑动画的绘制时间。 ⽽translate改变位置时，元素依然会占据其原始空间，绝对定位就不会发⽣这种情况。

> 拓展阅读: [CSS3 3D transform变换-张鑫旭](https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/)

## 伪类和伪元素的区别是什么？

- 伪类（pseudo-class）其实就是一种选择器。是⼀个以冒号(:)作为前缀，被添加到⼀个选择器末尾的关键字，用于给某些特定的元素添加样式时使用。
- 伪元素其实是一种dom。⽤于创建⼀些不在⽂档树中的元素，并为其添加样式。⽐如说，我们可以通过::before来在⼀个元素前增加⼀些⽂本，并为这些⽂本添加样式。虽然⽤户可以看到这些⽂本，但是这些⽂本实际上不在⽂档树中。

参考：
1. [CSS深入理解vertical-align和line-height的基友关系](https://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/)
2. [字母 'x' 在CSS世界中的角色和故事](https://www.zhangxinxu.com/wordpress/2015/06/about-letter-x-of-css/)
3. [CSS3--clip-path练习](https://www.cnblogs.com/liangdecha/p/9629150.html)