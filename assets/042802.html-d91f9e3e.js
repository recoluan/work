import{_ as n,o as s,c as e,e as a}from"./app-6e895db1.js";const i={},t=a(`<h2 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset" aria-hidden="true">#</a> git reset</h2><p><strong>在本地代码回退到某个版本，不保留提交记录，线上不会更改，如果需要更新线上，需要强制提交。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看版本号</span>
<span class="token function">git</span> log

<span class="token comment"># 硬回退，会删除本地暂存</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> xxx

<span class="token comment"># 软回退，会删除本地暂存</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> xxx

<span class="token comment"># 强制覆盖线上，若分支受保护需取消保护</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-revert" tabindex="-1"><a class="header-anchor" href="#git-revert" aria-hidden="true">#</a> git revert</h2><p><strong>将本地代码回退到某个版本，不撤销提交记录，并建立一个新的提交，来记录这次回退，如果需要更新线上，直接提交即可。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看版本号</span>
<span class="token function">git</span> log

<span class="token comment"># 回退代码，生成新的暂存</span>
<span class="token function">git</span> revert <span class="token parameter variable">-n</span> xxx

<span class="token comment"># 提交到本地仓库</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;回退至 xxx&#39;</span>

<span class="token comment"># 推至线上仓库</span>
<span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function c(r,d){return s(),e("div",null,l)}const p=n(i,[["render",c],["__file","042802.html.vue"]]);export{p as default};
