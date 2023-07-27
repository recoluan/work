import{_ as s,o as n,c as a,e}from"./app-6e895db1.js";const i={},c=e(`<h2 id="寻找" tabindex="-1"><a class="header-anchor" href="#寻找" aria-hidden="true">#</a> 寻找</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在当前文件夹下寻找某个文件或某个文件夹（不包括自文件内）</span>
<span class="token function">find</span> fileName/dirName

<span class="token comment"># 在全局寻找某个文件或某个文件夹</span>
<span class="token function">find</span> <span class="token parameter variable">--name</span> fileName/dirName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scp上传" tabindex="-1"><a class="header-anchor" href="#scp上传" aria-hidden="true">#</a> scp上传</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 普通</span>
<span class="token function">scp</span> ./public/* root@192.168.0.226:/data/ftp/http/files/
<span class="token function">scp</span> 源路径/源文件 用户名<span class="token punctuation">(</span>root<span class="token punctuation">)</span>@服务器IP:目标路径


<span class="token comment"># 免密码</span>
yum <span class="token function">install</span> sshpass
sshpass <span class="token parameter variable">-p</span> <span class="token number">111111</span> <span class="token function">scp</span> ./public/* root@192.168.0.226:/data/ftp/http/files/
sshpass <span class="token parameter variable">-p</span> 密码 <span class="token function">scp</span> 源路径/源文件 用户名<span class="token punctuation">(</span>root<span class="token punctuation">)</span>@服务器IP:目标路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是下载，调换顺序</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">scp</span> root@192.168.0.226:/data/ftp/http/files/ ./public/*
<span class="token function">scp</span> 用户名<span class="token punctuation">(</span>root<span class="token punctuation">)</span>@服务器IP:目标路径 源路径/源文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[c];function l(p,d){return n(),a("div",null,t)}const r=s(i,[["render",l],["__file","050801.html.vue"]]);export{r as default};
