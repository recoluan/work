import{_ as n,o as s,c as a,e}from"./app-6e895db1.js";const t={},p=e(`<p><strong>1. ES5</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">uniqueES5</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 利用一个额外对象来存储</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> cache<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> cache<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. ES6</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Array.from() 会自动去重</span>
<span class="token keyword">const</span> <span class="token function-variable function">uniqueES6</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=&gt;</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>ES5</code> 方法性能更好，高一倍以上。不过笔试、面试时，附上 <code>Set</code> 的办法，肯定会更好</p></blockquote>`,5),o=[p];function c(l,r){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","032702.html.vue"]]);export{u as default};
