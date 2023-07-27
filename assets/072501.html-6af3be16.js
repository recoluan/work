import{_ as n,o as s,c as a,e}from"./app-6e895db1.js";const i={},t=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有标签</span>
<span class="token function">git</span> tag
<span class="token function">git</span> tag <span class="token parameter variable">-l</span>

<span class="token comment"># 添加标签</span>
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.0.0 <span class="token parameter variable">-m</span> <span class="token string">&#39;测试&#39;</span>

<span class="token comment"># 提交 tag 到远程仓库</span>
<span class="token function">git</span> push origin v1.0.0
<span class="token comment"># 等同于如下操作：  </span>
<span class="token function">git</span> push origin refs/tags/<span class="token operator">&lt;</span>源标签名<span class="token operator">&gt;</span>:refs/tags/<span class="token operator">&lt;</span>目的标签名<span class="token operator">&gt;</span>

<span class="token comment"># 提交所有 tag 到远程仓库</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>

<span class="token comment"># 删除标签</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> v1.0.0

<span class="token comment"># 删除远程标签</span>
<span class="token comment"># </span>
<span class="token function">git</span> push origin :refs/tags/v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[t];function c(o,p){return s(),a("div",null,l)}const d=n(i,[["render",c],["__file","072501.html.vue"]]);export{d as default};
