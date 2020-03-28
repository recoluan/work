---
title: CSS
---

## relative 和 absolute 的区别？

- relative 没有跳出文本流，定位是相对于父级和兄弟节点。
- absolute 跳出文本流，是相对于父级且带有定位，如果父级没有定位属性，那么就会往上一级再找是否带定位，找到顶级之后如果还没有定位，就以 body 定位。



参考：
1. [CSS深入理解vertical-align和line-height的基友关系](https://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/)
2. [字母’x’在CSS世界中的角色和故事](https://www.zhangxinxu.com/wordpress/2015/06/about-letter-x-of-css/)