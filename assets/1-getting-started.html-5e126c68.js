import{_ as a,o as n,c as s,e}from"./app-6e895db1.js";const i={},l=e(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="配置用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#配置用户名和邮箱" aria-hidden="true">#</a> 配置用户名和邮箱</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 全局</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&#39;reco_luan&#39;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&#39;recoluan@outlook.com&#39;</span>

<span class="token comment"># 针对某个项目（默认 --local）</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> user.name <span class="token string">&#39;reco_luan&#39;</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> user.email <span class="token string">&#39;recoluan@outlook.com&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取帮助" tabindex="-1"><a class="header-anchor" href="#获取帮助" aria-hidden="true">#</a> 获取帮助</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--help</span>

<span class="token comment"># or</span>

<span class="token function">git</span> <span class="token builtin class-name">help</span> config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置-ssh" tabindex="-1"><a class="header-anchor" href="#设置-ssh" aria-hidden="true">#</a> 设置 SSH</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;recoluan@outlook.com&quot;</span>（全部按 Enter）

<span class="token comment"># 查看（Mac）</span>
<span class="token function">cat</span> /Users/reco/.ssh/id_rsa.pub
<span class="token function">vim</span> ~/.ssh/id_rsa.pub <span class="token comment"># or</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新增一个文件，并写入内容</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;内容&#39;</span> <span class="token operator">&gt;</span> README.md

<span class="token comment"># 新增一个文件</span>
<span class="token function">touch</span> README.md

<span class="token comment"># 查看文件内容</span>
<span class="token function">cat</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ol><li>所有跟文件路径相关的地方，都可以使用 <code>glob</code> 模式。</li></ol>`,12),c=[l];function r(d,t){return n(),s("div",null,c)}const p=a(i,[["render",r],["__file","1-getting-started.html.vue"]]);export{p as default};
