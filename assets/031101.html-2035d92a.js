import{_ as n,o as s,c as a,e}from"./app-6e895db1.js";const i={},l=e(`<h2 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> MAC</h2><h3 id="node、npm-安装" tabindex="-1"><a class="header-anchor" href="#node、npm-安装" aria-hidden="true">#</a> Node、NPM 安装</h3><p>利用Homebrew安装(简称brew,MacOSX上的软件包管理工具，能在Mac中方便的安装软件或者卸载软件)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打开终端，执行以下命令安装Homebrew</span>
ruby <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/master/install<span class="token variable">)</span></span>&quot;</span>

<span class="token comment"># 安装node</span>
<span class="token function">sudo</span> brew <span class="token function">install</span> <span class="token function">node</span>

<span class="token comment"># 查看node版本</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token comment"># 查看npm版本</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="node、npm-升级" tabindex="-1"><a class="header-anchor" href="#node、npm-升级" aria-hidden="true">#</a> Node、NPM 升级</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Node 升级</span>

<span class="token comment"># 1. 利用Node.js的多版本管理器n</span>
<span class="token function">sudo</span> <span class="token function">npm</span> cache clean <span class="token parameter variable">-f</span> //清除nodejs的cache：
<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> n //使用npm安装n模块
<span class="token function">npm</span> view <span class="token function">node</span> versions // node所有版本
<span class="token function">sudo</span> n latest // 升级到最新版本
<span class="token function">sudo</span> n stable // 升级到稳定版本
<span class="token function">sudo</span> n xx.xx // 升级到具体版本号

<span class="token comment"># 2. 利用brew升级</span>
brew update
<span class="token comment"># (1) 更新homebrew,如果出现The /usr/local directory is not writable.则需要更改权限 ，然后输入：sudo chown -R $(whoami) /usr/local</span>
<span class="token comment"># (2) 升级完以后，会弹出这个</span>
Homebrew no longer needs to have ownership of /usr/local. If you wish you can
<span class="token builtin class-name">return</span> /usr/local to its default ownership with 
<span class="token function">sudo</span> <span class="token function">chown</span> root:wheel /usr/local
<span class="token comment"># (3) 按提示输入下边的命令，更改会原来的权限</span>
<span class="token function">sudo</span> <span class="token function">chown</span> root:wheel /usr/local

<span class="token comment"># 接下来更新node</span>
brew upgrade <span class="token function">node</span>

<span class="token comment"># npm 升级</span>
<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> npm@latest <span class="token parameter variable">-g</span> //升级到最新版
<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> npm@xx <span class="token parameter variable">-g</span> //升级到指定版本
<span class="token function">npm</span> version // 查看版本详情
<span class="token function">npm</span> view <span class="token function">npm</span> version // npm最新版本
<span class="token function">npm</span> view <span class="token function">npm</span> versions // npm所有版本
<span class="token function">npm</span> list //  插件清单
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入下载目录</span>
<span class="token builtin class-name">cd</span> /download

<span class="token comment"># 下载 NodeJS 文件</span>
<span class="token function">wget</span> https://npm.taobao.org/mirrors/node/v10.15.3/node-v10.15.3-linux-x64.tar.xz

<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> node-v10.15.3-linux-x64.tar.xz

<span class="token comment"># 重命名</span>
<span class="token function">mv</span> node-v10.15.3-linux-x64 nodejs

<span class="token comment"># 建立软链接，配置全局环境变量（源路径和目标路径为相对路径）</span>
<span class="token comment"># 某些情况下，需要变量连接到 /usr/bin/</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /download/nodejs/bin/node /usr/local/bin/node
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /download/nodejs/bin/npm /usr/local/bin/npm
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /download/nodejs/bin/npx /usr/local/bin/npx

<span class="token comment"># 如果安装了 cnpm，cnpm 会在 /download/nodejs/bin/cnpm 内</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /download/nodejs/bin/cnpm /usr/local/bin/cnpm

<span class="token comment"># 检查是否配置成功</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
npx <span class="token parameter variable">-v</span>
cnpm <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[l];function o(d,t){return s(),a("div",null,c)}const r=n(i,[["render",o],["__file","031101.html.vue"]]);export{r as default};
