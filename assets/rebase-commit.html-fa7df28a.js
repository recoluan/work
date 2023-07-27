import{_ as n,o as s,c as a,e}from"./app-6e895db1.js";const i={},l=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%h: %s&quot;</span> 

<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> HEAD~2

<span class="token comment"># 选择一个 pick，其余 squash，保存</span>
<span class="token comment"># 编辑 commit 信息，保存</span>

<span class="token comment"># 可以强推 git push -f</span>
<span class="token comment"># 可先 rebase 到新分支，在 rebase 到目标分支</span>

<span class="token comment"># 继续 rebase</span>
<span class="token function">git</span> rebase <span class="token parameter variable">--continue</span>  

<span class="token comment"># 取消 rebase</span>
<span class="token function">git</span> rebase <span class="token parameter variable">--abort</span>

<span class="token comment"># 移除本地的 rebase 请求</span>
<span class="token function">rm</span> <span class="token parameter variable">-fr</span> <span class="token string">&quot;.git/rebase-merge&quot;</span>

<span class="token comment"># 本地强制同步线上代码</span>
<span class="token function">git</span> fetch <span class="token parameter variable">--all</span> 
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> origin/feature/recoluan-20200811-monitoring
<span class="token function">git</span> pull 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function c(r,o){return s(),a("div",null,t)}const d=n(i,[["render",c],["__file","rebase-commit.html.vue"]]);export{d as default};
