import{_ as a,o as e,c as n,e as s}from"./app-6e895db1.js";const i={},d=s(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>遇到这么一个情况：分支A向分支B合并代码产生冲突，在线上解决后会自动将分支B上的代码反向合并到分支A，从而污染了分支A的代码。</p><h2 id="处理" tabindex="-1"><a class="header-anchor" href="#处理" aria-hidden="true">#</a> 处理</h2><h3 id="已经在线上解决" tabindex="-1"><a class="header-anchor" href="#已经在线上解决" aria-hidden="true">#</a> 已经在线上解决</h3><p>本地切换到分支A</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将本地代码回滚到上一个版本</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> head^

<span class="token comment"># 强行将本地代码更新到线上</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="没有在线上解决" tabindex="-1"><a class="header-anchor" href="#没有在线上解决" aria-hidden="true">#</a> 没有在线上解决</h3><p>本地切换到分支B</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新代码，将冲突拉到本地</span>
<span class="token function">git</span> pull origin A

<span class="token comment"># 解决冲突，推到线上</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=[d];function c(l,t){return e(),n("div",null,r)}const h=a(i,[["render",c],["__file","042801.html.vue"]]);export{h as default};
