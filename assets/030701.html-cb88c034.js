import{_ as l,r as s,o,c as h,a as e,d as r,w as i,b as t,e as d}from"./app-6e895db1.js";const n="/assets/CSRF-166c7b9d.jpg",c={},u={class:"table-of-contents"},f=d('<h2 id="csrf" tabindex="-1"><a class="header-anchor" href="#csrf" aria-hidden="true">#</a> CSRF</h2><h4 id="基本概念和缩写" tabindex="-1"><a class="header-anchor" href="#基本概念和缩写" aria-hidden="true">#</a> 基本概念和缩写</h4><p>通常成为跨站请求伪造，英文名字：Cross-site request forgery</p><h4 id="攻击原理" tabindex="-1"><a class="header-anchor" href="#攻击原理" aria-hidden="true">#</a> 攻击原理</h4><img src="'+n+'"><p>前提：</p><ol><li>某个接口确实存在这种漏洞</li><li>用户在网站A确实处于登录状态</li></ol><h4 id="防御措施" tabindex="-1"><a class="header-anchor" href="#防御措施" aria-hidden="true">#</a> 防御措施</h4><ul><li>Token 验证</li><li>Referer验证</li><li>隐藏令牌</li></ul><blockquote><p>学习资料：https://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html</p></blockquote><h2 id="xss" tabindex="-1"><a class="header-anchor" href="#xss" aria-hidden="true">#</a> XSS</h2><h4 id="基本概念和缩写-1" tabindex="-1"><a class="header-anchor" href="#基本概念和缩写-1" aria-hidden="true">#</a> 基本概念和缩写</h4><p>Cross-site scripting跨域脚本攻击</p><blockquote><p>https://www.imooc.com/learn/812</p></blockquote><h4 id="攻击方式" tabindex="-1"><a class="header-anchor" href="#攻击方式" aria-hidden="true">#</a> 攻击方式</h4><ol><li>反射型<br> 发出请求时，XSS代码出现在URL中，作为出入提交到服务器，服务器端解析后响应，XSS代码随响应内容一起传回浏览器，最后浏览器解析执行期执行XSS代码。这个过程像一次反射，故叫反射型。</li><li>存储型<br> 存储型XSS和反射型XSS的差别仅在于，提交的代码会存储在服务端（数据库、内存，文件系统等），下次请求目标页面时不用再提交XSS代码。</li></ol><h4 id="防御措施-1" tabindex="-1"><a class="header-anchor" href="#防御措施-1" aria-hidden="true">#</a> 防御措施</h4><ol><li>编码<br> 对用户输入的数据进行HTML Entity编码</li><li>过滤<br> 移除用户上传的DOM属性，如onerror等<br> 移除用户上传的style节点、script节点、iframe节点等</li><li>矫正<br> 避免直接对HTML Entity解码<br> 使用DOM Parse转换，校正不匹配的DOM标签</li></ol><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2><p>CSRF是利用本身的漏洞自动触发接口，XSS是向页面注入js，然后在函数体中去操作</p>',20);function _(b,p){const a=s("router-link");return o(),h("div",null,[e("nav",u,[e("ul",null,[e("li",null,[r(a,{to:"#csrf"},{default:i(()=>[t("CSRF")]),_:1})]),e("li",null,[r(a,{to:"#xss"},{default:i(()=>[t("XSS")]),_:1})]),e("li",null,[r(a,{to:"#区别"},{default:i(()=>[t("区别")]),_:1})])])]),f])}const x=l(c,[["render",_],["__file","030701.html.vue"]]);export{x as default};