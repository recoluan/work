import{_ as s,o as a,c as t,a as n,e}from"./app-6e895db1.js";const p={},o=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"「回文」是指正着读和反着读都一样。")],-1),c=e(`<p><strong>1. 数组判断是否是回文</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isPalindromicA</span> <span class="token operator">=</span> <span class="token parameter">str</span> <span class="token operator">=&gt;</span> str <span class="token operator">===</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. 普通循环是否是回文</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isPalindromicB</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">w</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> w<span class="token punctuation">.</span>length
  <span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span> <span class="token comment">// parseInt(len / 2) 也可以</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>mid <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 字符串像数组一样是可以直接通过下标来获取对应的值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>w<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">!==</span> w<span class="token punctuation">[</span>len <span class="token operator">-</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    mid<span class="token operator">--</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>借用数组方法代码简洁，但是使用循环来判断，性能远高于数组方法。在其他一些例子中也能看到，借用数组方法，往往很耗性能。</p></blockquote>`,5),l=[o,c];function i(r,u){return a(),t("div",null,l)}const d=s(p,[["render",i],["__file","032701.html.vue"]]);export{d as default};