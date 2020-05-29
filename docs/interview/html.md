---
title: HTML
---

[[toc]]

## doctype 的作⽤是什么？

DOCTYPE 标签是一种 **标准通用标记语言（SGML）** 的文档类型声明，目的是要告诉标准通用标记语言解析器，它应该使用什么样的 **文档类型定义（DTD）** 来解析文档。

html ⽂档解析类型有：

- BackCompat：怪异模式，浏览器使⽤⾃⼰的怪异模式解析渲染⻚⾯。（如果没有声明DOCTYPE，默认就是这个 模式）；
- CSS1Compat：标准模式，浏览器使⽤W3C的标准解析渲染⻚⾯。

> IE8 还有⼀种介乎于上述两者之间的近乎标准的模式，但是基本淘汰了。

## 这三种模式的区别是什么？ 

- 标准模式(standards mode)：⻚⾯按照 HTML 与 CSS 的定义渲染
- 怪异模式(quirks mode)模式： 会模拟更旧的浏览器的⾏为
- 近乎标准(almost standards)模式：会实施了⼀种表单元格尺⼨的怪异⾏为（与 IE7 之前的单元格布局⽅式⼀致），除此之外符合标准定义

## 标准模式和怪异模式的区别？

1. 盒模型的处理差异。在标准模式中，width是内容（content）宽度；在怪异模式中，width则是元素的实际宽度，是 border + padding + content。
2. 图片元素的垂直对齐方式。对于inline元素和table-cell元素，标准模式下vertical-align属性默认取值为baseline，在怪异模式下，table单元格中的图片的vertical-align属性默认取值为bottom，因此在图片底部会有及像素的空间。
3. 内联元素的尺寸。标准模式中，给span等行内元素设置width和height都不会生效，而在怪异模式下，却会生效。
4. 可设置百分比的高度。在标准模式下，一个元素的高度由其包含的内容 content 决定，如果父元素没有设置高度，子元素设置一个百分比高度是无效的。
5. 用 `margin : 0 auto` 设置水平居中。在标准模式下可以使元素水平居中，但是在怪异模式下，无效，可以用 `text-align : center;` 来实现居中。
6. 怪异模式下设置图片的 padding 会失效
7. 怪异模式下 table 中的字体属性不能继承上层的设置
8. 元素溢出的处理。标准模式下，overflow 默认是 visible，在怪异模式下，溢出会被当做扩展 box 来对待，溢出不会裁减，元素框自动调整大小，能够包含溢出内容。

## HTML、XHTML、XML有什么区别

- HTML(超⽂本标记语⾔): 在 html4.0 之前 HTML 先有实现再有标准，导致HTML⾮常混乱和松散 
- XML(可扩展标记语⾔): 主要⽤于存储数据和结构，可扩展，⼤家熟悉的JSON也是相似的作⽤，但是更加轻量⾼效，所以XML现在市场越来越⼩了 
- XHTML(可扩展超⽂本标记语⾔): 基于上⾯两者⽽来，W3C为了解决HTML混乱问题⽽⽣，并基于此诞⽣了 HTML5，开头加⼊ `<!DOCTYPE html>` 的做法因此⽽来，如果不加就是兼容混乱的HTML，加了就是标准模式。总结：加了 `<!DOCTYPE ...>` 的就是 XHTML（标准模式），不加就是 HTML（怪异模式）。

## 什么是data-属性？ 
HTML的数据属性，⽤于将数据储存于标准的HTML元素中作为额外信息,我们可以通过js访问并操作它，来达到操作数据的⽬的。 

``` html
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars"
>
...
</article>
```

> 前端框架出现之后，这种⽅法已经不流⾏了。

## 你对HTML语义化的理解？

语义化是指使⽤恰当语义的 html 标签，让⻚⾯具有良好的结构与含义，⽐如 `<p>` 标签就代表段落， `<article>` 代表正⽂ 内容等等。 

语义化的好处主要有两点： 

- 开发者友好：使⽤语义类标签增强了可读性，开发者也能够清晰地看出⽹⻚的结构，也更为便于团队的开发和维护 
- 机器友好：带有语义的⽂字表现⼒丰富，更适合搜索引擎的爬⾍爬取有效信息，语义类还可以⽀持读屏软件，根据 ⽂章可以⾃动⽣成⽬录 

这对于简书、知乎这种富⽂本类的应⽤很重要，语义化对于其⽹站的内容传播有很⼤的帮助，但是对于功能性的web软件重要性⼤打折扣，⽐如⼀个按钮、骨架屏这种组件根本没有对应的语义，也不需要什么SEO。

[所有语义化标签](https://blog.csdn.net/qq_41557320/article/details/89016584?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task)

## H5 中 section/article/div 的区别（追问）

重点看最后的总结。

**1. article:**

article元素代表文档、页面或应用程序中独立的、完整的、可以独自被外部引用的内容。它可以是一篇博客或报刊中的文章、一篇论坛帖子、一段用户评论或独立的插件，或其他任何独立的内容。除了内容部分，一个article元素通常有它自己的标题（一般放在一个header元素里面），有时还有自己的脚注。

article是一个特殊的section标签，它比section具有更明确的语义, 它代表一个独立的、完整的相关内容块。 div、section、article，语义是从无到有，逐渐增强的。div无任何语义，仅仅用作样式化或者脚本化的标签，对于一段主题性的内容，则就适用section，而假如这段内容可以脱离上下文，作为完整的独立存在的一段内容，则就适用 article。 原则上来说，能使用article的时候，也是可以使用section的，但是实际上，假如使用article更合适，那么就不要使用section。

```js
<article>
  <header>         
　　 <h1>标题</h1>
    <p>发表日期：<time pubdate="pubdate">2010/10/10</time></p>
　</header>
　<p>article的使用方法</p>
　<footer>
    <p><small>Copyright @ yiiyaa.net All Rights Reserverd</samll></p>
　</footer>
</article>
```

**注：** article元素是可以嵌套使用的，内层的内容在原则上需要与外层的内容相关联。例如，一篇博客文章中，针对该文章的评论就可以使用嵌套article元素的方式；用来呈现评论的article元素被包含在表示整体内容的article元素里面。

**2. section:**

section用作一段有专题性的内容，一般在它里面会带有标题。 section典型的应用场景应该是文章的章节、标签对话框中的标签页、或者论文中有编号的部分。section元素用于对网站或应用程序中页面上的内容进行分块，section元素的作用是对页面上的内容进行分块，或者说对文章进行分段；一个section元素通常由内容及其标题组成，通常不推荐为那些没有标题的内容使用section元素。

article与section的嵌套方式一般如下：

```html
<article>
  <header>
    <h1>article元素使用方法</h1>
    <p>发表日期：<time pubdate="pubdate">2010/10/10</time></p>
  </header>
  <p>此标签里显示的是article整个文章的主要内容，，下面的section元素里是对该文章的评论</p>
  <section>
    <h2>评论</h2>
    <article>
      <header>
        <h3>发表者：maizi</h3>
        <p><time pubdate datetime="2016-6-14">1小时前</time></p>
      </header>  
      <p>这篇文章很不错啊，顶一下！</p>
    </article> 
    <article>
      <header>            
        <h3>发表者：小妮</h3>
        <p><time pubdate datetime="2016-6-14T:21-26:00">1小时前</time></p>
      </header>
      <p>这篇文章很不错啊，对article解释的很详细</p>  
    </article>
  </section>
</article>
```

示例内容分为几个部分，文章标题放在了header元素中，文章正文放在了header元素后面的p元素中，然后section元素把正文与评论进行了区分（是一个分块元素，用来把页面中的内容进行区分），在section元素中嵌入了评论的内容，评论中每一个人的评论相对来说又是比较独立的、完整的，因此对它们都使用一个article元素，在评论的article元素中，又可以分为标题与评论内容部分，分别放在header元素与p元素中。

但是关于section元素的使用禁忌总结如下：
1. 不要将section元素用作设置样式的页面容器，那是div元素的工作。
2. 如果article元素、aside元素或nav元素更符合使用条件，不要使用section元素。
3. 不要为没有标题的内容区块使用section元素。

**3. div:**

众所周知只是一个生命块的标签，并无具体语义，可用在任何场景，只是对比H5标签不好清晰看懂上下文。

**4. 总结：**

在H5中，article元素可以看成是一种特殊类型的section元素，它比section元素更强调独立性。即section元素强调分段或分块，而article强调独立完整性。具体来说，如果一块内容相对来说比较独立的、完整的时候，应该使用article元素，但是如果你想将一块内容分成几段的时候，应该使用section元素。另外，在HTML5中，div元素变成了一种容器，当使用CSS样式的时候，可以对这个容器进行一个总体的CSS样式的套用。

## HTML5与HTML4的不同之处 

- ⽂件类型声明（<!DOCTYPE>）仅有⼀型：<!DOCTYPE HTML>。 
- 新的解析顺序：不再基于SGML。 
- 新的元素：section, video, progress, nav, meter, time, aside, canvas, command, datalist, details, embed, figcaption, figure, footer, header, hgroup, keygen, mark, output, rp, rt, ruby, source, summary, wbr。 input
- input 元素的新类型：date, email, url等等。 
- 新的属性：ping（⽤于a与area）, charset（⽤于meta）, async（⽤于script）。 
- 全域属性：id, tabindex, repeat。 
- 新的全域属性：contenteditable, contextmenu, draggable, dropzone, hidden, spellcheck。 
- 移除元素：acronym, applet, basefont, big, center, dir, font, frame, frameset, isindex, noframes, strike, tt

补充：

- HTML 4.01 中的 doctype 需要对 DTD 进行引用，因为 HTML 4.01 基于 SGML。
- HTML 5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要 doctype 来规范浏览器的行为（html 5简化了这种声明，意在告诉浏览器使用统一的标准即可）。

## 有哪些常⽤的meta标签？ 

`<meta>` 元素是元数据，元数据就是描述数据的数据，而HTML有一个“官方的”方式来为一个文档添加元数据—— `<meta>` 元素。

meta 标签由 name 和 content 两个属性来定义，来描述⼀个 HTML ⽹⻚⽂档的属性，例如作者、⽇期和时间、⽹⻚描述、关键词、⻚⾯刷新等，**除了⼀些http标准规定了⼀些name作为⼤家使⽤的共识，开发者也可以⾃定义 name**。 

- charset，⽤于描述HTML⽂档的编码形式 
    ``` html
    <meta charset="UTF-8" > 
    ```
- 许多 `<meta>` 元素包含了name 和 content 特性
    ```html
    <!-- 在移动设备浏览器上，禁用缩放（zooming）功能，用户只能滚动屏幕。 -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <!-- 告诉搜索引擎，当前页面的主要内容是xxx。 -->
    <meta name="description" content="a beautiful theme">
    <!-- 告诉搜索引擎，当前页面的关键字。 -->
    <meta name="keywords" content="vuepress,theme">
    <!-- 告诉搜索引擎，标注网站作者是谁。 -->
    <meta name="author" content="reco_luan">
    <!-- 标注网站的版权信息。 -->
    <meta name="copyright" content="2020 reco_luan">
    ```
- http-equiv，顾名思义，相当于http的⽂件头作⽤,⽐如下⾯的代码就可以设置http的缓存过期⽇期
    ```html
    <!-- 设定页面使用的字符集。 -->
    <meta http-equiv="content-Type" content="text/html;charset=utf-8">
    <!-- 
      utf-8：代表世界通用的语言编码；
      gb2312：代表说明网站是采用的编码是简体中文；
      big5：代表说明网站是采用的编码是繁体中文；
      iso-2022-jp：代表说明网站是采用的编码是日文；
      ks_c_5601：代表说明网站是采用的编码是韩文；
      iso-8859-1：代表说明网站是采用的编码是英文； 
     -->
    ```
    ```html
    <!-- 强制浏览器按照特定的版本标准进行渲染。但不支持IE7及以下版本。如果是ie浏览器就用最新的ie渲染，如果是双核浏览器就用chrome内核。 -->
    <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
    <!-- 
      IE=edge：告诉 IE 以最高级模式渲染文档，也就是任何IE版本都以当前版本所支持的最高级标准模式渲染，避免版本升级造成的影响。
      chrome=1：激活 Google Frame。【Google 官方提供了对 Google Frame 插件安装情况的检测，这里直接调用方法即可】
     -->
    ```
    ```html
    <!-- 说明：content-language,显示语言的设定 -->
    <meta http-equiv="content-language"content="zh-cn"/>
    ```
    ```html
    <!-- 说明：expires（期限）设定网页的到期时间。一旦网页过期，必须到服务器上重新传输。必须使用GMT的时间格式。0表示不缓存 -->
    <meta http-equiv="expires" content="0">
    <meta http-equiv="expires" content="Fri,12 Jan 2001 18:18:18 GMT">

    <!-- 禁止浏览器从本地计算机的缓存中访问页面内容。访问者将无法脱机浏览。 -->
    <meta http-equiv="Pragma" content="no-cache">

    <!-- 说明：cache-control指定请求和响应遵循的缓存机制。在请求消息或响应消息中设置cache-control并不会修改另一个消息处理过程中的缓存处理过程。 -->
    <meta http-equiv="cache-control" content="no-cache">
    <!-- 
    请求时的缓存指令包括：no-cache、no-store、max-age、max-stale、min-fresh、only-if-cached
    响应消息中的指令包括：public、private、no-cache、no-store、no-transform、must-revalidate、proxy-revalidate、max-age。

    各个消息中的指令含义如下：
    public：指示响应可被任何缓存区缓存
    private：指示对于单个用户的整个或部分响应消息，不能被共享缓存处理。这允许服务器仅仅描述当用户的部分响应消息，此响应消息对于其他用户的请求无效
    no-cache：指示请求或响应消息不能缓存
    no-store：用于防止重要的信息被无意的发布。在请求消息中发送将使得请求和响应消息都不使用缓存。
    max-age：指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应
    min-fresh：指示客户机可以接收响应时间小于当前时间加上指定时间的响应
    max-stale：指示客户机可以接收超出超时期间的响应消息。如果指定max-stale消息的值，那么客户机可以接收超出超时期指定值之内的响应消息。 -->
    ```
    ```html
    <!-- 说明：refresh自动刷新并指向新页面。上面这样设定，代表停留2秒钟后自动刷新到新的网址：https://www.baidu.com/ -->
    <meta http-equiv="refresh" content="2;url=https://www.baidu.com/">
    ```
    ```html
    <!-- 如果网页过期，那么存盘的cookie将被删除。必须使用GMT的时间格式。 -->
    <meta http-equiv="set-cookie" content="cookie value=xxx;expires=Fri,12 Jan 2001 18:18:18 GMT;path=/"> 
    ```
    ```html
    <!-- 说明：显示窗口的设定，这样设定会强制页面在当前窗口以独立页面显示，用来防止别人在框架里调用自己的页面。 -->
    <meta http-equiv="Window-target" content="_top">
    ```
- 自定义meta
    ```html
    <!-- Facebook / Open Graph -->
    <meta property ="og:url" content="https://www.example.com/">
    <meta property ="og:title" content="title">
    <meta property ="og:description" content="description">
    <meta property ="og:site_name" content="website name">
    <meta property ="og:image" content="https://example.com/image.jpg">
    <meta property ="og:type" content="website">
    <meta property ="og:phone_number" content="650-123-4567"/>
    <meta property ="og:fax_number" content="+1-415-123-4567"/>
    <meta property ="og:locale" content="en_US">
    <meta property ="og:region" content="CA"/>
    <meta property="og:country-name" content="CHINA"/>
    <meta property ="og:postal-code" content="94304"/>
    <meta property ="og:street-address" content="1601 S California Ave"/>
    <meta property ="fb:app_id" content="Facebook numeric ID"> 
    <meta property ="fb:admins" content="Facebook numeric ID">
    <!-- 说明：为了提高站外内容的传播效率，2010年9月，在F8会议上Facebook公布了一套开放图景协议(Open Graph Protocol)，任何网页只要遵守该协议，SNS就能从页面上提取最有效的信息并呈现给用户。通过Open Graph把其他社交网站建构的。 -->
    ```

    ```html
    <!-- Twitter 还拥有自己的类型的专有元数据协议，当网站的 URL 显示在 twitter.com 上时，它具有相似的效果。例如下面： -->
    <meta name="twitter:title" content="Mozilla Developer Network">
    ```

## src 和 href 的区别？ 

- src 是指向 **外部资源** 的位置。指向的内容会嵌⼊到⽂档中当前标签所在的位置，在请求src资源时会将其指向的资源下载并应⽤到⽂档内，如js脚本，img图⽚和frame等元素。**当浏览器解析到该元素，会暂停其他资源的下载和处理**，直到将该资源加载、编译、执⾏完毕，所以⼀般js脚本会放在底部⽽不是头部。 
- href 是指向 **⽹络资源** 所在位置（的超链接）。⽤来建⽴和当前元素或⽂档之间的连接，当浏览器识别到它他指向的⽂件，就会并⾏下载资源，不会停⽌对当前⽂档的处理。

## 知道 img 的 srcset 的作⽤是什么？（追问） 

可以设计响应式图⽚，我们可以使⽤两个新的属性 srcset 和 sizes 来提供更多额外的资源图像和提示，帮助浏览器选择正确的⼀个资源：

- srcset 定义了我们允许浏览器选择的图像集，以及每个图像的⼤⼩；
- sizes 定义了⼀组媒体条件（例如屏幕宽度）并且指明当某些媒体条件为真：什么样的图⽚尺⼨是最佳选择。 

所以，有了这些属性，浏览器会： 

- 查看设备宽度 
- 检查 sizes 列表中哪个媒体条件是第⼀个为真 
- 查看给予该媒体查询的槽⼤⼩ 
- 加载 srcset 列表中引⽤的最接近所选的槽⼤⼩的图像 

> srcset提供了根据屏幕条件选取图⽚的能⼒

```html
<img 
  src="elva-fairy-200w.jpg" 
  srcset="elva-fairy-320w.jpg 320w,
          elva-fairy-480w.jpg 480w,
          elva-fairy-800w.jpg 800w"
  sizes="(max-width: 320px) 280px,
         (max-width: 480px) 440px,
         50vw"
  alt="Clock" 
>
```

## 还有哪⼀个标签能起到跟srcset相似作⽤？（追问） 

`<picture>` 元素通过包含零或多个 `<source>` 元素和⼀个 `<img>` 元素来为不同的显示/设备场景提供图像版本。浏览器 会选择最匹配的⼦ `<source>` 元素，如果没有匹配的，就选择 `<img>` 元素的 src 属性中的 URL。然后，所选图像呈现 在 `<img>` 元素占据的空间中 

> picture同样可以通过不同设备来匹配不同的图像资源

```html
<picture>
  <source srcset="/media/examples/surfer-240-200.jpg" media="(min-width: 800px)"> 
  <img src="/media/examples/painted-hand-298-332.jpg" /> 
</picture>
```

## script标签中defer和async的区别？

- defer：浏览器指示脚本在⽂档被解析后执⾏，script 被异步加载后并不会⽴刻执⾏，⽽是等待⽂档被解析完毕后执⾏。
- async：同样是异步加载脚本，区别是脚本加载完毕后⽴即执⾏，这导致async属性下的脚本是乱序的，对于script 有先后依赖关系的情况，并不适⽤。

## 有⼏种前端储存的⽅式？

cookies、localstorage、sessionstorage、Web SQL、IndexedDB

## 这些⽅式的区别是什么？（追问）

- cookies： 在 HTML5 标准前本地储存的主要⽅式，优点是兼容性好，请求头⾃带cookie⽅便，缺点是⼤⼩只有4k， ⾃动请求头加⼊cookie浪费流量，每个domain限制20个cookie，使⽤起来麻烦需要⾃⾏封装 
- localStorage：HTML5 加⼊的以键值对(Key-Value)为标准的⽅式，优点是操作⽅便，永久性储存（除⾮⼿动删除），⼤⼩为5M，兼容IE8+ 
- sessionStorage：与localStorage基本类似，区别是sessionStorage当⻚⾯关闭后会被清理，⽽且与cookie、 localStorage不同，他不能在所有同源窗⼝中共享，是会话级别的储存⽅式 
- Web SQL：2010年被W3C废弃的本地数据库数据存储⽅案，但是主流浏览器（⽕狐除外）都已经有了相关的实 现，web sql类似于SQLite，是真正意义上的关系型数据库，⽤sql进⾏操作，当我们⽤JavaScript时要进⾏转换， 较为繁琐。 
- IndexedDB： 是被正式纳⼊HTML5标准的数据库储存⽅案，它是NoSQL数据库，⽤键值对进⾏储存，可以进⾏快 速读取操作，⾮常适合web场景，同时⽤JavaScript进⾏操作会⾮常⽅便。

参考链接：

1. [src与href](https://blog.csdn.net/Panda_m/article/details/78456358)
2. [语义化](https://www.zhihu.com/question/20455165)
3. [defer和async的区别](https://segmentfault.com/q/1010000000640869)
4. [响应式图⽚MDN](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
5. [张鑫旭-srcset释义](https://www.zhangxinxu.com/wordpress/2014/10/responsive-images-srcset-size-w-descriptor/)
6. [picture元素-MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/picture)
7. [head 标签里有什么? Metadata-HTML中的元数据](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
8. [img 的 srcset、sizes 属性和 picture 元素](https://www.jianshu.com/p/607567e488fc)
9. [响应式图片srcset全新释义sizes属性w描述符](https://www.zhangxinxu.com/wordpress/2014/10/responsive-images-srcset-size-w-descriptor/)
