import{_ as t,r as s,o as p,c as o,a as e,b as l,d as n,e as a}from"./app-6e895db1.js";const r={},c=a('<h2 id="http有哪些方法" tabindex="-1"><a class="header-anchor" href="#http有哪些方法" aria-hidden="true">#</a> HTTP有哪些⽅法？</h2><ul><li>HTTP1.0定义了三种请求⽅法： GET, POST 和 HEAD⽅法</li><li>HTTP1.1新增了五种请求⽅法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT</li></ul><h2 id="这些方法的具体作用是什么" tabindex="-1"><a class="header-anchor" href="#这些方法的具体作用是什么" aria-hidden="true">#</a> 这些⽅法的具体作⽤是什么？</h2><ul><li>GET: 通常⽤于请求服务器发送某些资源</li><li>HEAD: 请求资源的头部信息, 并且这些头部与 HTTP GET ⽅法请求时返回的⼀致. 该请求⽅法的⼀个使⽤场景是在 下载⼀个⼤⽂件前先获取其⼤⼩再决定是否要下载, 以此可以节约带宽资源</li><li>OPTIONS: ⽤于获取⽬的资源所⽀持的通信选项</li><li>POST: 发送数据给服务器</li><li>PUT: ⽤于新增资源或者使⽤请求中的有效负载替换⽬标资源的表现形式</li><li>DELETE: ⽤于删除指定的资源</li><li>PATCH: ⽤于对资源进⾏部分修改</li><li>CONNECT: HTTP/1.1协议中预留给能够将连接改为管道⽅式的代理服务器</li><li>TRACE: 回显服务器收到的请求，主要⽤于测试或诊断</li></ul><h2 id="get和post有什么区别" tabindex="-1"><a class="header-anchor" href="#get和post有什么区别" aria-hidden="true">#</a> GET和POST有什么区别？</h2><ul><li>数据传输⽅式不同：GET请求通过URL传输数据，⽽POST的数据通过请求体传输。</li><li>安全性不同：POST的数据因为在请求主体内，所以有⼀定的安全性保证，⽽GET的数据在URL中，通过历史记 录，缓存很容易查到数据信息。</li><li>数据类型不同：GET只允许 ASCII 字符，⽽POST⽆限制</li><li>GET⽆害： 刷新、后退等浏览器操作GET请求是⽆害的，POST可能重复提交表单</li><li>特性不同：GET是安全（这⾥的安全是指只读特性，就是使⽤这个⽅法不会引起服务器状态变化）且幂等（幂等的 概念是指同⼀个请求⽅法执⾏多次和仅执⾏⼀次的效果完全相同），⽽POST是⾮安全⾮幂等</li></ul><h2 id="put和post都是给服务器发送新增资源-有什么区别" tabindex="-1"><a class="header-anchor" href="#put和post都是给服务器发送新增资源-有什么区别" aria-hidden="true">#</a> PUT和POST都是给服务器发送新增资源，有什么区别？</h2><p>PUT 和POST⽅法的区别是,PUT⽅法是幂等的：连续调⽤⼀次或者多次的效果相同（⽆副作⽤），⽽POST⽅法是⾮幂 等的。</p><p>除此之外还有⼀个区别，通常情况下，PUT的URI指向是具体单⼀资源，⽽POST可以指向资源集合。</p><p>举个例⼦，我们在开发⼀个博客系统，当我们要创建⼀篇⽂章的时候往往⽤ POST https://www.jianshu.com/articles ， 这个请求的语义是，在articles的资源集合下创建⼀篇新的⽂章，如果我们多次提交这个请求会创建多个⽂章，这是⾮幂 等的。</p><p>⽽ PUT https://www.jianshu.com/articles/820357430 的语义是更新对应⽂章下的资源（⽐如修改作者名称等），这个 URI指向的就是单⼀资源，⽽且是幂等的，⽐如你把『刘德华』修改成『蔡徐坤』，提交多少次都是修改成『蔡徐坤』</p><blockquote><p>ps: 『POST表示创建资源，PUT表示更新资源』这种说法是错误的，两个都能创建资源，根本区别就在于幂等性</p></blockquote>',12),d={href:"https://blog.csdn.net/kepengs/article/details/82706721",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/zhangzl419/p/7323289.html",target:"_blank",rel:"noopener noreferrer"},u=a(`<h2 id="put和patch都是给服务器发送修改资源-有什么区别" tabindex="-1"><a class="header-anchor" href="#put和patch都是给服务器发送修改资源-有什么区别" aria-hidden="true">#</a> PUT和PATCH都是给服务器发送修改资源，有什么区别？</h2><p>PUT和PATCH都是更新资源，⽽PATCH⽤来对已知资源进⾏局部更新。</p><p>⽐如我们有⼀篇⽂章的地址 https://www.jianshu.com/articles/820357430 ,这篇⽂章的可以表示为:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>article = <span class="token punctuation">{</span> 
  author<span class="token operator">:</span> &#39;dxy&#39;<span class="token punctuation">,</span> 
  creationDate<span class="token operator">:</span> &#39;<span class="token number">2019</span><span class="token number">-6</span><span class="token number">-12</span>&#39;<span class="token punctuation">,</span> content<span class="token operator">:</span> &#39;我写⽂章像蔡徐坤&#39;<span class="token punctuation">,</span> 
  id<span class="token operator">:</span> <span class="token number">820357430</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们要修改⽂章的作者时，我们可以直接发送 PUT https://www.jianshu.com/articles/820357430 ，这个时候的数据应 该是:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span> 
  author<span class="token operator">:</span>&#39;蔡徐坤&#39;<span class="token punctuation">,</span> 
  creationDate<span class="token operator">:</span> &#39;<span class="token number">2019</span><span class="token number">-6</span><span class="token number">-12</span>&#39;<span class="token punctuation">,</span> 
  content<span class="token operator">:</span> &#39;我写⽂章像蔡徐坤&#39;<span class="token punctuation">,</span> 
  id<span class="token operator">:</span> <span class="token number">820357430</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种直接覆盖资源的修改⽅式应该⽤put，但是你觉得每次都带有这么多⽆⽤的信息，那么可以发送 PATCH https://www.jianshu.com/articles/820357430 ，这个时候只需要:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span> 
  author<span class="token operator">:</span>&#39;蔡徐坤&#39;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="聊一聊http的部首有哪些" tabindex="-1"><a class="header-anchor" href="#聊一聊http的部首有哪些" aria-hidden="true">#</a> 聊⼀聊HTTP的部⾸有哪些？</h2><blockquote><p>内容很多，重点看标『✨』内容</p></blockquote><p>通⽤⾸部字段（General Header Fields）：请求报⽂和响应报⽂两⽅都会使⽤的⾸部</p><ul><li>Cache-Control 控制缓存 ✨(no-cache/no-store/...)</li><li>Connection 连接管理、逐条⾸部 ✨(keep-alive/close)</li><li>Upgrade 升级为其他协议</li><li>via 代理服务器的相关信息</li><li>Wraning 错误和警告通知</li><li>Transfor-Encoding 报⽂主体的传输编码格式 ✨</li><li>Trailer 报⽂末端的⾸部⼀览</li><li>Pragma 报⽂指令</li><li>Date 创建报⽂的⽇期</li></ul><p>请求⾸部字段（Reauest Header Fields）:客户端向服务器发送请求的报⽂时使⽤的⾸部</p><ul><li>Accept 客户端或者代理能够处理的媒体类型 ✨(text/xml、application/json)</li><li>Accept-Encoding 优先可处理的编码格式</li><li>Accept-Language 优先可处理的⾃然语⾔</li><li>Accept-Charset 优先可以处理的字符集</li><li>If-Match ⽐较实体标记（ETage） ✨</li><li>If-None-Match ⽐较实体标记（ETage）与 If-Match相反 ✨</li><li>If-Modified-Since ⽐较资源更新时间（Last-Modified） ✨</li><li>If-Unmodified-Since⽐较资源更新时间（Last-Modified），与 If-Modified-Since 相反</li><li>If-Rnages 资源未更新时发送实体byte的范围请求</li><li>Range 实体的字节范围请求 ✨</li><li>Authorization web的认证信息 ✨</li><li>Proxy-Authorization 代理服务器要求web认证信息</li><li>Host 请求资源所在服务器 ✨</li><li>From ⽤户的邮箱地址</li><li>User-Agent 客户端程序信息 ✨</li><li>Max-Forwrads 最⼤的逐跳次数</li><li>TE 传输编码的优先级</li><li>Referer 请求原始放的url</li><li>Expect 期待服务器的特定⾏为</li></ul><p>响应⾸部字段（Response Header Fields）:从服务器向客户端响应时使⽤的字段</p><ul><li>Accept-Ranges 能接受的字节范围</li><li>Age 推算资源创建经过时间</li><li>Location 令客户端重定向的URI ✨</li><li>vary 代理服务器的缓存信息</li><li>ETag 能够表示资源唯⼀资源的字符串 ✨</li><li>WWW-Authenticate 服务器要求客户端的验证信息</li><li>Proxy-Authenticate 代理服务器要求客户端的验证信息</li><li>Server 服务器的信息 ✨</li><li>Retry-After 和状态码503 ⼀起使⽤的⾸部字段，表示下次请求服务器的时间</li></ul><p>实体⾸部字段（Entiy Header Fields）:针对请求报⽂和响应报⽂的实体部分使⽤⾸部</p><ul><li>Allow 资源可⽀持http请求的⽅法 ✨</li><li>Content-Language 实体的资源语⾔</li><li>Content-Encoding 实体的编码格式</li><li>Content-Length 实体的⼤⼩（字节）</li><li>Content-Type 实体媒体类型✨（与 Accept 对应）</li><li>Content-MD5 实体报⽂的摘要</li><li>Content-Location 代替资源的yri</li><li>Content-Rnages 实体主体的位置返回</li><li>Last-Modified 资源最后的修改资源 ✨</li><li>Expires 实体主体的过期资源 ✨</li></ul><h2 id="聊一聊http的状态码有哪些" tabindex="-1"><a class="header-anchor" href="#聊一聊http的状态码有哪些" aria-hidden="true">#</a> 聊⼀聊HTTP的状态码有哪些？</h2><p>2XX 成功</p><ul><li>200 OK，表示从客户端发来的请求在服务器端被正确处理</li><li>201 Created 请求已经被实现，⽽且有⼀个新的资源已经依据请求的需要⽽建⽴</li><li>202 Accepted 请求已接受，但是还没执⾏，不保证完成请求</li><li>204 No content，表示请求成功，但响应报⽂不含实体的主体部分</li><li>206 Partial Content，进⾏范围请求</li></ul><p>3XX 重定向</p><ul><li>301 moved permanently，永久性重定向，表示资源已被分配了新的 URL</li><li>302 found，临时性重定向，表示资源临时被分配了新的 URL</li><li>303 see other，表示资源存在着另⼀个 URL，应使⽤ GET ⽅法丁⾹获取资源</li><li>304 not modified，表示服务器允许访问资源，但因发⽣请求未满⾜条件的情况</li><li>307 temporary redirect，临时重定向，和302含义相同</li></ul><p>4XX 客户端错误</p><ul><li>400 bad request，请求报⽂存在语法错误</li><li>401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息</li><li>403 forbidden，表示对请求资源的访问被服务器拒绝</li><li>404 not found，表示在服务器上没有找到请求的资源</li><li>408 Request timeout, 客户端请求超时</li><li>409 Confict, 请求的资源可能引起冲突</li></ul><p>5XX 服务器错误</p><ul><li>500 internal sever error，表示服务器端在执⾏请求时发⽣了错误</li><li>501 Not Implemented 请求超出服务器能⼒范围，例如服务器不⽀持当前请求所需要的某个功能，或者请求是服务 器不⽀持的某个⽅法</li><li>503 service unavailable，表明服务器暂时处于超负载或正在停机维护，⽆法处理请求</li><li>505 http version not supported 服务器不⽀持，或者拒绝⽀持在请求中使⽤的 HTTP 版本</li></ul><h2 id="同样是重定向307-303-302的区别" tabindex="-1"><a class="header-anchor" href="#同样是重定向307-303-302的区别" aria-hidden="true">#</a> 同样是重定向307，303，302的区别？</h2><p>302是http1.0的协议状态码，在http1.1版本的时候为了细化302状态码⼜出来了两个303和307。</p><p>303明确表示客户端应当采⽤get⽅法获取资源，他会把POST请求变为GET请求进⾏重定向。 307会遵照浏览器标准， 不会从post变为get。</p><h2 id="http的keep-alive是干什么的" tabindex="-1"><a class="header-anchor" href="#http的keep-alive是干什么的" aria-hidden="true">#</a> HTTP的keep-alive是⼲什么的？</h2><p>在早期的HTTP/1.0中，每次http请求都要创建⼀个连接，⽽创建连接的过程需要消耗资源和时间，为了减少资源消耗， 缩短响应时间，就需要重⽤连接。在后来的HTTP/1.0中以及HTTP/1.1中，引⼊了重⽤连接的机制，就是在http请求头中 加⼊Connection: keep-alive来告诉对⽅这个请求响应完成后不要关闭，下⼀次咱们还⽤这个请求继续交流。协议规定HTTP/1.0如果想要保持⻓连接，需要在请求头中加上Connection: keep-alive。</p><p>keep-alive的优点：</p><ul><li>较少的CPU和内存的使⽤（由于同时打开的连接的减少了）</li><li>允许请求和应答的HTTP管线化</li><li>降低拥塞控制 （TCP连接减少了）</li><li>减少了后续请求的延迟（⽆需再进⾏握⼿）</li><li>报告错误⽆需关闭TCP连</li></ul><h2 id="为什么有了http为什么还要https" tabindex="-1"><a class="header-anchor" href="#为什么有了http为什么还要https" aria-hidden="true">#</a> 为什么有了HTTP为什么还要HTTPS？</h2><p>https是安全版的http，因为http协议的数据都是明⽂进⾏传输的，所以对于⼀些敏感信息的传输就很不安全，HTTPS就 是为了解决HTTP的不安全⽽⽣的。</p><h2 id="https是如何保证安全的" tabindex="-1"><a class="header-anchor" href="#https是如何保证安全的" aria-hidden="true">#</a> HTTPS是如何保证安全的？</h2><p>过程⽐较复杂，我们得先理解两个概念</p><p>对称加密：即通信的双⽅都使⽤同⼀个秘钥进⾏加解密，⽐如特务接头的暗号，就属于对称加密</p><p>对称加密虽然很简单性能也好，但是⽆法解决⾸次把秘钥发给对⽅的问题，很容易被⿊客拦截秘钥。</p><p>⾮对称加密：</p><ol><li>私钥 + 公钥= 密钥对</li><li>即⽤私钥加密的数据,只有对应的公钥才能解密,⽤公钥加密的数据,只有对应的私钥才能解密</li><li>因为通信双⽅的⼿⾥都有⼀套⾃⼰的密钥对,通信之前双⽅会先把⾃⼰的公钥都先发给对⽅</li><li>然后对⽅再拿着这个公钥来加密数据响应给对⽅,等到到了对⽅那⾥,对⽅再⽤⾃⼰的私钥进⾏解密</li></ol><p>⾮对称加密虽然安全性更⾼，但是带来的问题就是速度很慢，影响性能。</p><p>解决⽅案：</p><p>那么结合两种加密⽅式，将对称加密的密钥使⽤⾮对称加密的公钥进⾏加密，然后发送出去，接收⽅使⽤私钥进⾏解密 得到对称加密的密钥，然后双⽅可以使⽤对称加密来进⾏沟通。</p><p>此时⼜带来⼀个问题，中间⼈问题：</p><p>如果此时在客户端和服务器之间存在⼀个中间⼈,这个中间⼈只需要把原本双⽅通信互发的公钥,换成⾃⼰的公钥,这样中 间⼈就可以轻松解密通信双⽅所发送的所有数据。</p><p>所以这个时候需要⼀个安全的第三⽅颁发证书（CA），证明身份的身份，防⽌被中间⼈攻击。</p><p>证书中包括：签发者、证书⽤途、使⽤者公钥、使⽤者私钥、使⽤者的HASH算法、证书到期时间等</p><p>但是问题来了，如果中间⼈篡改了证书，那么身份证明是不是就⽆效了？这个证明就⽩买了，这个时候需要⼀个新的技 术，数字签名。</p><p>数字签名就是⽤CA⾃带的HASH算法对证书的内容进⾏HASH得到⼀个摘要，再⽤CA的私钥加密，最终组成数字签 名。</p><p>当别⼈把他的证书发过来的时候,我再⽤同样的Hash算法,再次⽣成消息摘要，然后⽤CA的公钥对数字签名解密,得到CA 创建的消息摘要,两者⼀⽐,就知道中间有没有被⼈篡改了。</p><p>这个时候就能最⼤程度保证通信的安全了。</p>`,53),T={href:"https://blog.csdn.net/yingzizizizizizzz/article/details/81347719",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/u012375924/article/details/82806617",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.cnblogs.com/shamo89/p/10151968.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.jianshu.com/p/227cee9c8d15?utm_campaign=hugo&utm_medium=reader_share&utm_content=note&utm_source=weixin-friends",target:"_blank",rel:"noopener noreferrer"};function v(g,f){const i=s("ExternalLinkIcon");return p(),o("div",null,[c,e("ul",null,[e("li",null,[e("a",d,[l("HTTP请求幂等性"),n(i)])]),e("li",null,[e("a",h,[l("幂等性的含义和 HTTP请求方法的幂等性"),n(i)])])]),u,e("ul",null,[e("li",null,[e("a",T,[l("http 中设置过期时间expires和max-age的区别"),n(i)])]),e("li",null,[e("a",m,[l("浅谈http中的Cache-Control"),n(i)])]),e("li",null,[e("a",P,[l("HTTP报文头Accept和Content-Type总结"),n(i)])]),e("li",null,[e("a",b,[l("一文读懂http缓存（超详细）"),n(i)])])])])}const H=t(r,[["render",v],["__file","http.html.vue"]]);export{H as default};
