import{_ as s,o as n,c as a,e}from"./app-6e895db1.js";const o={},p=e(`<p><strong>1. 借助临时变量</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span>

<span class="token keyword">let</span> mid <span class="token operator">=</span> a
a <span class="token operator">=</span> b
b <span class="token operator">=</span> mid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 不借助临时变量</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span>

<span class="token comment">// ES6</span>
<span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a<span class="token punctuation">]</span>

<span class="token comment">// 加减法</span>
a <span class="token operator">=</span> b <span class="token operator">-</span> a <span class="token comment">//（开始谁减谁，决定后面的算法，不唯一）</span>
b <span class="token operator">=</span> b <span class="token operator">-</span> a
a <span class="token operator">=</span> a <span class="token operator">+</span> b

<span class="token comment">// 异或</span>
a <span class="token operator">=</span> a <span class="token operator">^</span> b
b <span class="token operator">=</span> a <span class="token operator">^</span> b
a <span class="token operator">=</span> b <span class="token operator">^</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[p];function l(r,c){return n(),a("div",null,t)}const d=s(o,[["render",l],["__file","032704.html.vue"]]);export{d as default};
