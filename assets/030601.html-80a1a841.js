import{_ as c,o as e,c as o,e as t}from"./app-6e895db1.js";const d={},a=t("<p>最近有一个 vue 做的单页面应用在微信分享时出现了签名的报错，先给介绍一下场景。</p><p>这个应用需要微信授权和微信分享，所以当前页面没有授权时，先会跳转授权，然后携带 <code>code</code> 值跳回游戏页，原链接为 <code>https://www.abc.com/#/abc</code>，授权后跳转的路由为 <code>https://www.abc.com/?code=xxx&amp;state=#/abc</code>，此时分享功能也是完好的，但是如果此用户再通过原链接 <code>https://www.abc.com/#/abc</code> 进入应用页面，分享功能就失败了，报错为 <code>config:fail,Error: invalid signature</code>。</p><p>如果分享功能有成功过，说明后端给到的参数是没问题的，一定是前端传给后端的 url 有问题，文档介绍到 <code>url（当前网页的URL，不包含#及其后面部分）</code>，大家都知道，当前端项目为单页面应用时，微信识别起来会很麻烦，因为 hash 路由并不是真正的路由。我尝试着在 <code>#</code> 前加了一个 <code>?</code> 完美解决：<code>https://www.abc.com/?#/abc</code>。</p>",3),s=[a];function r(_,n){return e(),o("div",null,s)}const i=c(d,[["render",r],["__file","030601.html.vue"]]);export{i as default};