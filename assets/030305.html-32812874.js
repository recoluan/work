import{_ as r,r as n,o as s,c as h,a as e,d as l,w as t,b as i,e as o}from"./app-6e895db1.js";const c="/assets/requestMethod-471358e8.png",u={},p={class:"table-of-contents"},v=o(`<h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2><ol><li>简单快速：每个资源都有指定的URI，需要访问，只要输入URI即可</li><li>灵活：HTTP请求的头部都会有一个 <code>content-type</code> ，可以传输不同类型的数据</li><li>无连接：连接一次，就会断掉</li><li>无状态：因为无连接，所以记不住上次连接的状态，所以每次请求都记不住用户的身份</li></ol><h2 id="报文组成" tabindex="-1"><a class="header-anchor" href="#报文组成" aria-hidden="true">#</a> 报文组成</h2><h4 id="请求报文" tabindex="-1"><a class="header-anchor" href="#请求报文" aria-hidden="true">#</a> 请求报文</h4><ol><li>请求行：http方法、请求地址、http协议以及版本</li><li>请求头：key-value值，告诉服务器我要什么内容，注意什么格式</li><li>空行：请求头与请求体的分隔标志</li><li>请求体</li></ol><h4 id="响应报文" tabindex="-1"><a class="header-anchor" href="#响应报文" aria-hidden="true">#</a> 响应报文</h4><ol><li>响应行：http协议以及版本、状态码、状态短语</li><li>响应头</li><li>空行</li><li>响应体</li></ol><h2 id="http方法" tabindex="-1"><a class="header-anchor" href="#http方法" aria-hidden="true">#</a> HTTP方法</h2><ul><li>GET：获取资源</li><li>POST：传输资源</li><li>PUT：更新资源</li><li>DELETE：删除资源</li><li>HEAD：获取报文首部</li></ul><h2 id="post和get区别" tabindex="-1"><a class="header-anchor" href="#post和get区别" aria-hidden="true">#</a> POST和GET区别</h2><ol><li>GET在浏览器回退时是无害的，POST会再次提交</li><li>GET请求会被浏览器主动缓存，POST不会</li><li>GET的请求参数会被保留在浏览器的历史记录中，POST不会</li><li>GET请求在URL中的传递的参数时有长度限制的，POST没有</li><li>GET参数放在URL中，而POST在请求体（---------以下不重要-------）</li><li>GET请求的URL地址可以被收藏，POST不可以</li><li>GET只能进行URL编码，而POST支持多种编码方式</li><li>GET只接受ASCII字符，POST没有限制</li><li>GET参数放在URL中，可见，不安全</li></ol><h2 id="http状态码" tabindex="-1"><a class="header-anchor" href="#http状态码" aria-hidden="true">#</a> HTTP状态码</h2><ul><li>1xx：指示信息。表示请求已接收，继续处理</li><li>2xx：成功。请求已被成功接收</li><li>3xx：重定向。要完成请求，必须更进一步操作</li><li>4xx：客户端错误。请求有语法错误或请求无法实现</li><li>5xx：服务器错误。服务器未能实现合法的请求</li></ul><h4 id="具体状态码" tabindex="-1"><a class="header-anchor" href="#具体状态码" aria-hidden="true">#</a> 具体状态码</h4><ol><li>200 OK：请求成功</li><li>206 Partial Content：客户发送了一个带有Range头的GET请求，服务器完成了它</li><li>301 Moved Permanently：永久重定向</li><li>302 Found：临时重定向</li><li>304 Not Modified：可以使用缓存</li><li>400 Bad Request：客户端有语法错误</li><li>403 Forbidden：被禁止访问</li><li>404 Not Found：资源不存在</li><li>500 Internal Server Error：服务器发生不可预期的错误</li><li>503 Server Unavailable：请求未完成</li></ol><h2 id="不可忽视的http头文件" tabindex="-1"><a class="header-anchor" href="#不可忽视的http头文件" aria-hidden="true">#</a> 不可忽视的HTTP头文件</h2><h3 id="请求头信息" tabindex="-1"><a class="header-anchor" href="#请求头信息" aria-hidden="true">#</a> 请求头信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Accept：客户端支持的数据类型
Accept-Charset：客户端采用的编码
Accept-Encoding：客户端支持的数据压缩格式
Accept-Language：客户端的语言环境
Cookie：客服端的cookie
Host：请求的服务器地址
Connection：客户端与服务连接类型
If-Modified-Since:上一次请求资源的缓存时间，与Last-Modified对应
If-None-Match：客户段缓存数据的唯一标识，与Etag对应
Referer:发起请求的源地址。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应头信息" tabindex="-1"><a class="header-anchor" href="#响应头信息" aria-hidden="true">#</a> 响应头信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>content-encoding：响应数据的压缩格式。
content-length：响应数据的长度。
content-language：语言环境。
content-type：响应数据的类型。
Date:消息发送的时间
Age:经过的时间
Etag:被请求变量的实体值,用于判断请求的资源是否发生变化
Expires：缓存的过期时间
Last-Modified：在服务器端最后被修改的时间
server：服务器的型号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="两者都可能出现的信息" tabindex="-1"><a class="header-anchor" href="#两者都可能出现的信息" aria-hidden="true">#</a> 两者都可能出现的信息</h3><p>Pragma：是否缓存(http1.0提出) Cache-Control:是否缓存(http1.1提出)</p><h3 id="跟缓存相关的字段" tabindex="-1"><a class="header-anchor" href="#跟缓存相关的字段" aria-hidden="true">#</a> 跟缓存相关的字段</h3><ol><li>强制缓存 expire 和 cache-control</li><li>对比缓存 Last-Modified 和 If-Modified-Since Etag 和 If-None-Match</li></ol><h2 id="持久连接" tabindex="-1"><a class="header-anchor" href="#持久连接" aria-hidden="true">#</a> 持久连接</h2><p>HTTP协议采用“请求——应答”模式，当使用普通模式时，既非Keep-Alive模式时，每个请求/应答客户和服务器都要新建一个连接，完成后立即断开（HTTP协议无连接协议）。</p><p>当使用Keep-Alive模式时，使得连接持续有效，避免了建立和重新建立连接（HTTP/1.1才有的Keep-Alive）。</p><h2 id="管线化" tabindex="-1"><a class="header-anchor" href="#管线化" aria-hidden="true">#</a> 管线化</h2><p>在使用持久连接的情况下，某个连接上的消息的传递类似于：请求1-&gt;响应1-&gt;请求2-&gt;响应2-&gt;请求3-&gt;响应3</p><p>管线化后，连接上的消息的传递类似于：请求1-&gt;请求2-&gt;请求3-&gt;响应1-&gt;响应2-&gt;响应3</p><h4 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1" aria-hidden="true">#</a> 特点</h4><ol><li>通过持久连接完成，仅支持HTTP/1.1以上</li><li>只有GET和HEAD请求可以进行管线化，而POST有所限制</li><li>初次创建连接时不应该启动管线机制，对方服务器可能不支持</li><li>HTTP/1.1协议要求服务器支持管辖化，但不要求进行管线化处理，只是要求对于管线化的请求不失败即可</li><li>管线化很可能不能带来大幅度的性能提升，很多服务器支持并不好，现代浏览器Chrome和FireFox默认不开启</li></ol><hr><h2 id="http番外篇" tabindex="-1"><a class="header-anchor" href="#http番外篇" aria-hidden="true">#</a> HTTP番外篇</h2><h4 id="请求过程" tabindex="-1"><a class="header-anchor" href="#请求过程" aria-hidden="true">#</a> 请求过程</h4><ol><li>建立TCP连接</li><li>web浏览器向web服务器发送请求命令</li><li>web浏览器发送请求头</li><li>web服务器应答</li><li>web服务器发送响应头信息</li><li>web服务器向浏览器发送数据</li><li>web浏览器关闭TCP连接</li></ol><h4 id="请求方法对比" tabindex="-1"><a class="header-anchor" href="#请求方法对比" aria-hidden="true">#</a> 请求方法对比</h4><p>这个对比找了好长时间了，我在delete到底有没有请求体、传参方式应该是怎样的这个问题上一直都有困惑，今天在想着要不然去维基百科查一下 <code>XMLHttpRequest</code> 的定义，果真看到的请求方法对比，下面是截图。</p><img src="`+c+'">',39),T={href:"https://tools.ietf.org/html/rfc7231#section-4.3.5",target:"_blank",rel:"noopener noreferrer"},b=e("blockquote",null,[e("p",null,"A payload within a DELETE request message has no defined semantics; sending a payload body on a DELETE request might cause some existing implementations to reject the request.")],-1);function f(x,m){const a=n("router-link"),d=n("ExternalLinkIcon");return s(),h("div",null,[e("nav",p,[e("ul",null,[e("li",null,[l(a,{to:"#特点"},{default:t(()=>[i("特点")]),_:1})]),e("li",null,[l(a,{to:"#报文组成"},{default:t(()=>[i("报文组成")]),_:1})]),e("li",null,[l(a,{to:"#http方法"},{default:t(()=>[i("HTTP方法")]),_:1})]),e("li",null,[l(a,{to:"#post和get区别"},{default:t(()=>[i("POST和GET区别")]),_:1})]),e("li",null,[l(a,{to:"#http状态码"},{default:t(()=>[i("HTTP状态码")]),_:1})]),e("li",null,[l(a,{to:"#不可忽视的http头文件"},{default:t(()=>[i("不可忽视的HTTP头文件")]),_:1}),e("ul",null,[e("li",null,[l(a,{to:"#请求头信息"},{default:t(()=>[i("请求头信息")]),_:1})]),e("li",null,[l(a,{to:"#响应头信息"},{default:t(()=>[i("响应头信息")]),_:1})]),e("li",null,[l(a,{to:"#两者都可能出现的信息"},{default:t(()=>[i("两者都可能出现的信息")]),_:1})]),e("li",null,[l(a,{to:"#跟缓存相关的字段"},{default:t(()=>[i("跟缓存相关的字段")]),_:1})])])]),e("li",null,[l(a,{to:"#持久连接"},{default:t(()=>[i("持久连接")]),_:1})]),e("li",null,[l(a,{to:"#管线化"},{default:t(()=>[i("管线化")]),_:1})]),e("li",null,[l(a,{to:"#http番外篇"},{default:t(()=>[i("HTTP番外篇")]),_:1})])])]),v,e("p",null,[i("其中 "),e("a",T,[i("RFC7231"),l(d)]),i("协议原文中找到了相应的解释。")]),b])}const _=r(u,[["render",f],["__file","030305.html.vue"]]);export{_ as default};