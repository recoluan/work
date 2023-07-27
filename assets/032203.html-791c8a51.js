import{_ as a,r as t,o as p,c as e,a as n,b as o,d as c,e as l}from"./app-6e895db1.js";const i={},u=l(`<ol><li>devicePixelRatio:它是window对象中有一个devicePixelRatio属性，设备物理像素和设备独立像素的比例，也就是 devicePixelRatio = 物理像素 / 独立像素;这种方式好麻烦，js检测，再给元素添加类名控制，难维护;</li><li>切图：直接.5px的切图，这种方式太low，建议还是别用了，特别难维护，高清屏就糊了,更重要的是被同行看到会觉得你们很渣渣～;</li><li>image背景：css3的background-image:linear-gradient，缺点就是：样式多，遇到圆角这个方案就杯剧了; box-shadow:网上看到说使用box-shadow模拟边框，box-shadow: inset 0px -1px 1px -1px #06c;没用过，不过多评论，建议自己百度;</li><li>伪类缩放：现在用的比较多的方式之一 :after 1px然后transform: scale(0.5);基本能满足所有场景，对于圆角的处理也很方便。</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>1px 边框最佳实践<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"> 
    <span class="token selector">div</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.border::after</span> <span class="token punctuation">{</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #666<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span> <span class="token comment">/* 不添加 border-radius 会有些许阴影 */</span>
      <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> left top<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.border-bottom::after</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
      <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #666<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.border-top::before</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
      <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #666<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.border-left::before</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
      <span class="token property">border-left</span><span class="token punctuation">:</span> 1px solid #666<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.border-right::before</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
      <span class="token property">border-right</span><span class="token punctuation">:</span> 1px solid #666<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 2倍屏 */</span>
    <span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2.0<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
      <span class="token selector">.border::after</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">,</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">,</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.border-bottom::after, .border-top::before</span> <span class="token punctuation">{</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.border-right::after, .border-left::before</span> <span class="token punctuation">{</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* 3倍屏 */</span>
    <span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 3.0<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
      <span class="token selector">.border::after</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300%<span class="token punctuation">;</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.3333<span class="token punctuation">,</span> 0.3333<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.3333<span class="token punctuation">,</span> 0.3333<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.border-bottom::after, .border-top::before</span> <span class="token punctuation">{</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.3333<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.3333<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.border-right::after, .border-left::before</span> <span class="token punctuation">{</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0.3333<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0.3333<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>border-right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r={href:"https://www.jianshu.com/p/fa670b737a29",target:"_blank",rel:"noopener noreferrer"};function k(d,v){const s=t("ExternalLinkIcon");return p(),e("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[o("移动端1像素边框问题"),c(s)])])])])}const m=a(i,[["render",k],["__file","032203.html.vue"]]);export{m as default};
