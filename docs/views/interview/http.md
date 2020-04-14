---
title: HTTP
---

## HTTP有哪些⽅法？

- HTTP1.0定义了三种请求⽅法： GET, POST 和 HEAD⽅法 
- HTTP1.1新增了五种请求⽅法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT

## 这些⽅法的具体作⽤是什么？

- GET: 通常⽤于请求服务器发送某些资源 
- HEAD: 请求资源的头部信息, 并且这些头部与 HTTP GET ⽅法请求时返回的⼀致. 该请求⽅法的⼀个使⽤场景是在 下载⼀个⼤⽂件前先获取其⼤⼩再决定是否要下载, 以此可以节约带宽资源 
- OPTIONS: ⽤于获取⽬的资源所⽀持的通信选项 
- POST: 发送数据给服务器 
- PUT: ⽤于新增资源或者使⽤请求中的有效负载替换⽬标资源的表现形式 
- DELETE: ⽤于删除指定的资源 
- PATCH: ⽤于对资源进⾏部分修改 
- CONNECT: HTTP/1.1协议中预留给能够将连接改为管道⽅式的代理服务器 
- TRACE: 回显服务器收到的请求，主要⽤于测试或诊断

## GET和POST有什么区别？

- 数据传输⽅式不同：GET请求通过URL传输数据，⽽POST的数据通过请求体传输。 
- 安全性不同：POST的数据因为在请求主体内，所以有⼀定的安全性保证，⽽GET的数据在URL中，通过历史记 录，缓存很容易查到数据信息。 
- 数据类型不同：GET只允许 ASCII 字符，⽽POST⽆限制 
- GET⽆害： 刷新、后退等浏览器操作GET请求是⽆害的，POST可能重复提交表单 
- 特性不同：GET是安全（这⾥的安全是指只读特性，就是使⽤这个⽅法不会引起服务器状态变化）且幂等（幂等的 概念是指同⼀个请求⽅法执⾏多次和仅执⾏⼀次的效果完全相同），⽽POST是⾮安全⾮幂等

## PUT和POST都是给服务器发送新增资源，有什么区别？

PUT 和POST⽅法的区别是,PUT⽅法是幂等的：连续调⽤⼀次或者多次的效果相同（⽆副作⽤），⽽POST⽅法是⾮幂 等的。 

除此之外还有⼀个区别，通常情况下，PUT的URI指向是具体单⼀资源，⽽POST可以指向资源集合。 

举个例⼦，我们在开发⼀个博客系统，当我们要创建⼀篇⽂章的时候往往⽤ POST https://www.jianshu.com/articles ， 这个请求的语义是，在articles的资源集合下创建⼀篇新的⽂章，如果我们多次提交这个请求会创建多个⽂章，这是⾮幂 等的。 

⽽ PUT https://www.jianshu.com/articles/820357430 的语义是更新对应⽂章下的资源（⽐如修改作者名称等），这个 URI指向的就是单⼀资源，⽽且是幂等的，⽐如你把『刘德华』修改成『蔡徐坤』，提交多少次都是修改成『蔡徐坤』 

> ps: 『POST表示创建资源，PUT表示更新资源』这种说法是错误的，两个都能创建资源，根本区别就在于幂等性

- [HTTP请求幂等性](https://blog.csdn.net/kepengs/article/details/82706721)
- [幂等性的含义和 HTTP请求方法的幂等性](https://www.cnblogs.com/zhangzl419/p/7323289.html)

## PUT和PATCH都是给服务器发送修改资源，有什么区别？

PUT和PATCH都是更新资源，⽽PATCH⽤来对已知资源进⾏局部更新。 

⽐如我们有⼀篇⽂章的地址 https://www.jianshu.com/articles/820357430 ,这篇⽂章的可以表示为:

```json
article = { 
  author: 'dxy', 
  creationDate: '2019-6-12', content: '我写⽂章像蔡徐坤', 
  id: 820357430 
}
```

当我们要修改⽂章的作者时，我们可以直接发送 PUT https://www.jianshu.com/articles/820357430 ，这个时候的数据应 该是:

```json
{ 
  author:'蔡徐坤', 
  creationDate: '2019-6-12', 
  content: '我写⽂章像蔡徐坤', 
  id: 820357430 
}
```

这种直接覆盖资源的修改⽅式应该⽤put，但是你觉得每次都带有这么多⽆⽤的信息，那么可以发送 PATCH https://www.jianshu.com/articles/820357430 ，这个时候只需要:

```json
{ 
  author:'蔡徐坤'
}
```

## 聊⼀聊HTTP的部⾸有哪些？

> 内容很多，重点看标『✨』内容

通⽤⾸部字段（General Header Fields）：请求报⽂和响应报⽂两⽅都会使⽤的⾸部 
- Cache-Control 控制缓存 ✨(no-cache/no-store/...)
- Connection 连接管理、逐条⾸部 ✨(keep-alive/close)
- Upgrade 升级为其他协议 
- via 代理服务器的相关信息 
- Wraning 错误和警告通知 
- Transfor-Encoding 报⽂主体的传输编码格式 ✨
- Trailer 报⽂末端的⾸部⼀览 
- Pragma 报⽂指令 
- Date 创建报⽂的⽇期

请求⾸部字段（Reauest Header Fields）:客户端向服务器发送请求的报⽂时使⽤的⾸部 
- Accept 客户端或者代理能够处理的媒体类型 ✨(text/xml、application/json)
- Accept-Encoding 优先可处理的编码格式 
- Accept-Language 优先可处理的⾃然语⾔ 
- Accept-Charset 优先可以处理的字符集 
- If-Match ⽐较实体标记（ETage） ✨
- If-None-Match ⽐较实体标记（ETage）与 If-Match相反 ✨
- If-Modified-Since ⽐较资源更新时间（Last-Modified） ✨
- If-Unmodified-Since⽐较资源更新时间（Last-Modified），与 If-Modified-Since 相反
- If-Rnages 资源未更新时发送实体byte的范围请求
- Range 实体的字节范围请求 ✨
- Authorization web的认证信息 ✨
- Proxy-Authorization 代理服务器要求web认证信息 
- Host 请求资源所在服务器 ✨
- From ⽤户的邮箱地址 
- User-Agent 客户端程序信息 ✨
- Max-Forwrads 最⼤的逐跳次数 
- TE 传输编码的优先级 
- Referer 请求原始放的url 
- Expect 期待服务器的特定⾏为

响应⾸部字段（Response Header Fields）:从服务器向客户端响应时使⽤的字段 
- Accept-Ranges 能接受的字节范围 
- Age 推算资源创建经过时间 
- Location 令客户端重定向的URI ✨
- vary 代理服务器的缓存信息 
- ETag 能够表示资源唯⼀资源的字符串 ✨
- WWW-Authenticate 服务器要求客户端的验证信息 
- Proxy-Authenticate 代理服务器要求客户端的验证信息 
- Server 服务器的信息 ✨
- Retry-After 和状态码503 ⼀起使⽤的⾸部字段，表示下次请求服务器的时间

实体⾸部字段（Entiy Header Fields）:针对请求报⽂和响应报⽂的实体部分使⽤⾸部 
- Allow 资源可⽀持http请求的⽅法 ✨
- Content-Language 实体的资源语⾔ 
- Content-Encoding 实体的编码格式 
- Content-Length 实体的⼤⼩（字节） 
- Content-Type 实体媒体类型✨（与 Accept 对应）
- Content-MD5 实体报⽂的摘要 
- Content-Location 代替资源的yri 
- Content-Rnages 实体主体的位置返回 
- Last-Modified 资源最后的修改资源 ✨
- Expires 实体主体的过期资源 ✨

## 聊⼀聊HTTP的状态码有哪些？

2XX 成功
- 200 OK，表示从客户端发来的请求在服务器端被正确处理
- 201 Created 请求已经被实现，⽽且有⼀个新的资源已经依据请求的需要⽽建⽴ 
- 202 Accepted 请求已接受，但是还没执⾏，不保证完成请求 
- 204 No content，表示请求成功，但响应报⽂不含实体的主体部分 
- 206 Partial Content，进⾏范围请求

3XX 重定向 
- 301 moved permanently，永久性重定向，表示资源已被分配了新的 URL 
- 302 found，临时性重定向，表示资源临时被分配了新的 URL
- 303 see other，表示资源存在着另⼀个 URL，应使⽤ GET ⽅法丁⾹获取资源 
- 304 not modified，表示服务器允许访问资源，但因发⽣请求未满⾜条件的情况 
- 307 temporary redirect，临时重定向，和302含义相同 

4XX 客户端错误 
 - 400 bad request，请求报⽂存在语法错误
 - 401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息
 - 403 forbidden，表示对请求资源的访问被服务器拒绝
 - 404 not found，表示在服务器上没有找到请求的资源
 - 408 Request timeout, 客户端请求超时 
 - 409 Confict, 请求的资源可能引起冲突 

5XX 服务器错误 
- 500 internal sever error，表示服务器端在执⾏请求时发⽣了错误
- 501 Not Implemented 请求超出服务器能⼒范围，例如服务器不⽀持当前请求所需要的某个功能，或者请求是服务 器不⽀持的某个⽅法 
- 503 service unavailable，表明服务器暂时处于超负载或正在停机维护，⽆法处理请求 
- 505 http version not supported 服务器不⽀持，或者拒绝⽀持在请求中使⽤的 HTTP 版本

## 同样是重定向307，303，302的区别？

302是http1.0的协议状态码，在http1.1版本的时候为了细化302状态码⼜出来了两个303和307。 

303明确表示客户端应当采⽤get⽅法获取资源，他会把POST请求变为GET请求进⾏重定向。 307会遵照浏览器标准， 不会从post变为get。

## HTTP的keep-alive是⼲什么的？

在早期的HTTP/1.0中，每次http请求都要创建⼀个连接，⽽创建连接的过程需要消耗资源和时间，为了减少资源消耗， 缩短响应时间，就需要重⽤连接。在后来的HTTP/1.0中以及HTTP/1.1中，引⼊了重⽤连接的机制，就是在http请求头中 加⼊Connection: keep-alive来告诉对⽅这个请求响应完成后不要关闭，下⼀次咱们还⽤这个请求继续交流。协议规定HTTP/1.0如果想要保持⻓连接，需要在请求头中加上Connection: keep-alive。

keep-alive的优点： 
- 较少的CPU和内存的使⽤（由于同时打开的连接的减少了） 
- 允许请求和应答的HTTP管线化 
- 降低拥塞控制 （TCP连接减少了） 
- 减少了后续请求的延迟（⽆需再进⾏握⼿） 
- 报告错误⽆需关闭TCP连

## 为什么有了HTTP为什么还要HTTPS？

https是安全版的http，因为http协议的数据都是明⽂进⾏传输的，所以对于⼀些敏感信息的传输就很不安全，HTTPS就 是为了解决HTTP的不安全⽽⽣的。

## HTTPS是如何保证安全的？ 

过程⽐较复杂，我们得先理解两个概念 

对称加密：即通信的双⽅都使⽤同⼀个秘钥进⾏加解密，⽐如特务接头的暗号，就属于对称加密 

对称加密虽然很简单性能也好，但是⽆法解决⾸次把秘钥发给对⽅的问题，很容易被⿊客拦截秘钥。 

⾮对称加密： 
1. 私钥 + 公钥= 密钥对 
2. 即⽤私钥加密的数据,只有对应的公钥才能解密,⽤公钥加密的数据,只有对应的私钥才能解密 
3. 因为通信双⽅的⼿⾥都有⼀套⾃⼰的密钥对,通信之前双⽅会先把⾃⼰的公钥都先发给对⽅ 
4. 然后对⽅再拿着这个公钥来加密数据响应给对⽅,等到到了对⽅那⾥,对⽅再⽤⾃⼰的私钥进⾏解密 

⾮对称加密虽然安全性更⾼，但是带来的问题就是速度很慢，影响性能。 

解决⽅案： 

那么结合两种加密⽅式，将对称加密的密钥使⽤⾮对称加密的公钥进⾏加密，然后发送出去，接收⽅使⽤私钥进⾏解密 得到对称加密的密钥，然后双⽅可以使⽤对称加密来进⾏沟通。 

此时⼜带来⼀个问题，中间⼈问题： 

如果此时在客户端和服务器之间存在⼀个中间⼈,这个中间⼈只需要把原本双⽅通信互发的公钥,换成⾃⼰的公钥,这样中 间⼈就可以轻松解密通信双⽅所发送的所有数据。 

所以这个时候需要⼀个安全的第三⽅颁发证书（CA），证明身份的身份，防⽌被中间⼈攻击。 

证书中包括：签发者、证书⽤途、使⽤者公钥、使⽤者私钥、使⽤者的HASH算法、证书到期时间等

但是问题来了，如果中间⼈篡改了证书，那么身份证明是不是就⽆效了？这个证明就⽩买了，这个时候需要⼀个新的技 术，数字签名。 

数字签名就是⽤CA⾃带的HASH算法对证书的内容进⾏HASH得到⼀个摘要，再⽤CA的私钥加密，最终组成数字签 名。

当别⼈把他的证书发过来的时候,我再⽤同样的Hash算法,再次⽣成消息摘要，然后⽤CA的公钥对数字签名解密,得到CA 创建的消息摘要,两者⼀⽐,就知道中间有没有被⼈篡改了。 

这个时候就能最⼤程度保证通信的安全了。

- [http 中设置过期时间expires和max-age的区别](https://blog.csdn.net/yingzizizizizizzz/article/details/81347719)
- [浅谈http中的Cache-Control](https://blog.csdn.net/u012375924/article/details/82806617)
- [HTTP报文头Accept和Content-Type总结](https://www.cnblogs.com/shamo89/p/10151968.html)
