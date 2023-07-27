import{_ as s,r as t,o as i,c as d,a,b as r,d as l,e as n}from"./app-6e895db1.js";const c={},o=n(`<h2 id="获取-git-仓库" tabindex="-1"><a class="header-anchor" href="#获取-git-仓库" aria-hidden="true">#</a> 获取 Git 仓库</h2><h3 id="在已存在目录中初始化仓库" tabindex="-1"><a class="header-anchor" href="#在已存在目录中初始化仓库" aria-hidden="true">#</a> 在已存在目录中初始化仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 假如本地仓库名字为 reco-test</span>
<span class="token builtin class-name">cd</span> reco-test

<span class="token comment"># 初始化</span>
<span class="token function">git</span> init

<span class="token comment"># 添加追踪文件</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 提交到本地仓库</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;initial project&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="克隆远程仓库" tabindex="-1"><a class="header-anchor" href="#克隆远程仓库" aria-hidden="true">#</a> 克隆远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:vuepress-reco/vuepress-theme-reco.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="git-clone-的更多用法" tabindex="-1"><a class="header-anchor" href="#git-clone-的更多用法" aria-hidden="true">#</a> git clone 的更多用法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取全部 branch 内容，整体下载时间较长 &amp; 所占磁盘空间较大</span>
<span class="token function">git</span> clone git_仓库_url 

<span class="token comment"># 根上述结果一致</span>
<span class="token function">git</span> clone <span class="token parameter variable">-b</span> git_分支名称 git_仓库_url 

<span class="token comment"># 获取指定分支的代码</span>
<span class="token function">git</span> clone <span class="token parameter variable">-b</span> git_分支名称 --single-branch git_仓库_url 

<span class="token comment"># 只会获取最近 XX（10条提交记录的）代码，默认是 master 分支，如果要指定分支，可以结合 -b --single-branch 使用</span>
<span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">10</span> git_仓库_url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="记录每次更新到仓库" tabindex="-1"><a class="header-anchor" href="#记录每次更新到仓库" aria-hidden="true">#</a> 记录每次更新到仓库</h2><h3 id="检查当前文件状态" tabindex="-1"><a class="header-anchor" href="#检查当前文件状态" aria-hidden="true">#</a> 检查当前文件状态</h3><p>使用 <code>git status</code> 来检查哪些文件属于什么状态。</p><p>新增加的文件，也就是未被追踪的文件，会出现在 <code>Untracked files（未跟踪的文件）</code> 分类里，可以使用 <code>git add</code> 来添加追踪</p><h3 id="跟踪新增文件" tabindex="-1"><a class="header-anchor" href="#跟踪新增文件" aria-hidden="true">#</a> 跟踪新增文件</h3><p>使用 <code>git add</code> 开始跟踪一个文件，并提交至暂存区。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> README
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再执行 <code>git status</code>，会出现在 <code>Changes to be committed（要提交的变更）</code> 分类里。</p><h3 id="暂存已修改的文件" tabindex="-1"><a class="header-anchor" href="#暂存已修改的文件" aria-hidden="true">#</a> 暂存已修改的文件</h3><p>如果一个已经被跟踪的文件被修改，这时执行 <code>git status</code>，会出现在 <code>Changes not staged for commit（尚未暂存以备提交的变更：）</code> 分类里。</p><p>使用 <code>git add</code> 将更改提交至暂存区。</p><p><strong>总结：</strong><code>git add</code> 是个多功能命令：可以用它开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等。 所以这个命令可以理解为“精确地将内容添加到下一次提交中”。</p><p>如果一个被追踪的文件，被修改并暂存后，再一次被修改，执行 <code>git status</code>，会发现此文件同时出现在 <code>Changes to be committed（要提交的变更）</code> 和 <code>Changes not staged for commit（尚未暂存以备提交的变更：）</code> 分类里。<strong>因为提交时，被修改文件的版本是最后一次运行 <code>git add</code> 命令时的那个版本。</strong></p><h3 id="状态简览" tabindex="-1"><a class="header-anchor" href="#状态简览" aria-hidden="true">#</a> 状态简览</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status <span class="token parameter variable">-s</span> <span class="token comment"># git status -short</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status <span class="token parameter variable">-s</span>
 M README             <span class="token comment"># 已修改未暂存</span>
M  lib/simplegit.rb   <span class="token comment"># 已暂存的修改</span>
MM Rakefile           <span class="token comment"># 文件已修，暂存后又作了修改</span>
A  lib/git.rb         <span class="token comment"># 新添加到暂存区中的文件</span>
?? LICENSE.txt        <span class="token comment"># 新添加的未跟踪文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件" aria-hidden="true">#</a> 忽略文件</h3><p>养成一开始就为你的新仓库设置好 .gitignore 文件的习惯。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .gitignore
*.<span class="token punctuation">[</span>oa<span class="token punctuation">]</span> <span class="token comment"># 忽略所有以 .o 或 .a 结尾的文件</span>
*~     <span class="token comment"># 忽略所有名字以波浪符（~）结尾的文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件 .gitignore 的格式规范如下：</p><ul><li>所有空行或者以 # 开头的行都会被 Git 忽略。</li><li>可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。</li><li>匹配模式可以以（/）开头防止递归。</li><li>匹配模式可以以（/）结尾指定目录。</li><li>要忽略指定模式以外的文件或目录，可以在模式前加上叹号（!）取反。</li></ul><p>所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。 星号（*）匹配零个或多个任意字符；<code>[abc]</code> 匹配任何一个列在方括号中的字符 （这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）； 问号（?）只匹配一个任意字符；如果在方括号中使用短划线分隔两个字符， 表示所有在这两个字符范围内的都可以匹配（比如 [0-9] 表示匹配所有 0 到 9 的数字）。 使用两个星号（**）表示匹配任意中间目录，比如 <code>a/**/z</code> 可以匹配 <code>a/z</code> 、 <code>a/b/z</code> 或 <code>a/b/c/z</code> 等。</p><p>一个 .gitignore 文件的例子：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 忽略所有的 .a 文件</span>
*.a

<span class="token comment"># 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件</span>
<span class="token operator">!</span>lib.a

<span class="token comment"># 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO</span>
/TODO

<span class="token comment"># 忽略任何目录下名为 build 的文件夹</span>
build/

<span class="token comment"># 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt</span>
doc/*.txt

<span class="token comment"># 忽略 doc/ 目录及其所有子目录下的 .pdf 文件</span>
doc/**/*.pdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),p=a("div",{class:"custom-container warning"},[a("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[a("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[a("circle",{cx:"12",cy:"12",r:"9"}),a("path",{d:"M12 8v4"}),a("path",{d:"M12 16h.01"})])]),a("p",{class:"custom-container-title"},"WARNING"),a("p",null,"在最简单的情况下，一个仓库可能只根目录下有一个 .gitignore 文件，它递归地应用到整个仓库中。 然而，子目录下也可以有额外的 .gitignore 文件。子目录中的 .gitignore 文件中的规则只作用于它所在的目录中。")],-1),u=n(`<h3 id="查看已暂存和未暂存的修改" tabindex="-1"><a class="header-anchor" href="#查看已暂存和未暂存的修改" aria-hidden="true">#</a> 查看已暂存和未暂存的修改</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看尚未暂存的文件更新了哪些部分</span>
<span class="token comment"># 此命令比较的是工作目录中当前文件和暂存区域快照之间的差异。也就是修改之后还没有暂存起来的变化内容。</span>
<span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># 查看已暂存的将要添加到下次提交里的内容</span>
<span class="token comment"># 或者 git diff --cached</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">-staged</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提交更新" tabindex="-1"><a class="header-anchor" href="#提交更新" aria-hidden="true">#</a> 提交更新</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 通过 vim 编辑器添加提交说明信息</span>
<span class="token function">git</span> commit

<span class="token comment"># 通过 -m 添加提交说明信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;提交信息&#39;</span>

<span class="token comment"># 跳过使用暂存区域</span>
<span class="token function">git</span> commit <span class="token parameter variable">-a</span> <span class="token parameter variable">-m</span> <span class="token string">&#39;added new benchmarks&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移除文件" tabindex="-1"><a class="header-anchor" href="#移除文件" aria-hidden="true">#</a> 移除文件</h3><h4 id="彻底移除" tabindex="-1"><a class="header-anchor" href="#彻底移除" aria-hidden="true">#</a> 彻底移除</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此命令所执行的操作就是：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> README.md
<span class="token function">git</span> <span class="token function">add</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="只移除跟踪-不移除本地磁盘文件" tabindex="-1"><a class="header-anchor" href="#只移除跟踪-不移除本地磁盘文件" aria-hidden="true">#</a> 只移除跟踪，不移除本地磁盘文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="移动文件" tabindex="-1"><a class="header-anchor" href="#移动文件" aria-hidden="true">#</a> 移动文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">mv</span> README.md newFlod/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此命令所执行的操作就是：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mv</span> README.md newFlod/README.md
<span class="token function">git</span> <span class="token function">add</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看提交历史" tabindex="-1"><a class="header-anchor" href="#查看提交历史" aria-hidden="true">#</a> 查看提交历史</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td>不传入任何参数</td><td><code>git log</code> 会按时间先后顺序列出所有的提交，最近的更新排在最上面。这个命令会列出每个提交的 <code>SHA-1</code> 校验和、作者的名字和电子邮件地址、提交时间以及提交说明。</td></tr><tr><td>-p 或 --patch</td><td>显示每次提交所引入的差异（按 补丁 的格式输出）。也可以限制显示的日志条目数量，例如使用 <code>git log -p -2</code> 选项来只显示最近的两次提交。</td></tr><tr><td>--stat</td><td>每次提交的下面列出所有被修改过的文件、有多少文件被修改了以及被修改过的文件的哪些行被移除或是添加了。在每次提交的最后还有一个总结。</td></tr><tr><td>--pretty</td><td>以不同的默认格式的方式展示提交历史，比如 <code>oneline</code> 会将每个提交放在一行显示，在浏览大量的提交时非常有用。 另外还有 <code>short</code>，<code>full</code> 和 <code>fuller</code> 选项，它们展示信息的格式基本一致，但是详尽程度不一，<code>git log --pretty=online</code>。<br><br><code>format</code>，可以定制记录的显示格式。 <code>git log --pretty=format:&quot;%h - %an, %ar : %s&quot;</code>，具体选项见下表</td></tr></tbody></table><p><strong>Table 1. git log --pretty=format 常用的选项</strong></p><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>%H</td><td>提交的完整哈希值</td></tr><tr><td>%h</td><td>提交的简写哈希值</td></tr><tr><td>%T</td><td>树的完整哈希值</td></tr><tr><td>%t</td><td>树的简写哈希值</td></tr><tr><td>%P</td><td>父提交的完整哈希值</td></tr><tr><td>%p</td><td>父提交的简写哈希值</td></tr><tr><td>%an</td><td>作者名字</td></tr><tr><td>%ae</td><td>作者的电子邮件地址</td></tr><tr><td>%ad</td><td>作者修订日期（可以用 --date=选项 来定制格式）</td></tr><tr><td>%ar</td><td>作者修订日期，按多久以前的方式显示</td></tr><tr><td>%cn</td><td>提交者的名字</td></tr><tr><td>%ce</td><td>提交者的电子邮件地址</td></tr><tr><td>%cd</td><td>提交日期</td></tr><tr><td>%cr</td><td>提交日期（距今多长时间）</td></tr><tr><td>%s</td><td>提交说明</td></tr></tbody></table><p>你一定奇怪 <code>作者</code> 和 <code>提交者</code> 之间究竟有何差别， 其实作者指的是实际作出修改的人，提交者指的是最后将此工作成果提交到仓库的人。</p><p>当 <code>oneline</code> 或 <code>format</code> 与另一个 log 选项 <code>--graph</code> 结合使用时尤其有用。 这个选项添加了一些 ASCII 字符串来形象地展示你的分支、合并历史：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%h %s&quot;</span> <span class="token parameter variable">--graph</span>
* 2d3acf9 ignore errors from SIGCHLD on <span class="token builtin class-name">trap</span>
*  5e3ee11 Merge branch <span class="token string">&#39;master&#39;</span> of git://github.com/dustin/grit
<span class="token operator">|</span><span class="token punctuation">\\</span>
<span class="token operator">|</span> * 420eac9 Added a method <span class="token keyword">for</span> getting the current branch.
* <span class="token operator">|</span> 30e367c <span class="token function">timeout</span> code and tests
* <span class="token operator">|</span> 5a09431 <span class="token function">add</span> <span class="token function">timeout</span> protection to grit
* <span class="token operator">|</span> e1193f8 support <span class="token keyword">for</span> heads with slashes <span class="token keyword">in</span> them
<span class="token operator">|</span>/
* d6016bc require <span class="token function">time</span> <span class="token keyword">for</span> xmlschema
*  11d191e Merge branch <span class="token string">&#39;defunkt&#39;</span> into <span class="token builtin class-name">local</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Table 2. git log 的常用选项：</strong></p><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>-p</td><td>按补丁格式显示每个提交引入的差异。</td></tr><tr><td>--stat</td><td>显示每次提交的文件修改统计信息。</td></tr><tr><td>--shortstat</td><td>只显示 --stat 中最后的行数修改添加移除统计。</td></tr><tr><td>--name-only</td><td>仅在提交信息后显示已修改的文件清单。</td></tr><tr><td>--name-status</td><td>显示新增、修改、删除的文件清单。</td></tr><tr><td>--abbrev-commit</td><td>仅显示 SHA-1 校验和所有 40 个字符中的前几个字符。</td></tr><tr><td>--relative-date</td><td>使用较短的相对时间而不是完整格式显示日期（比如“2 weeks</td></tr><tr><td>--graph</td><td>在日志旁以 ASCII 图形显示分支与合并历史。</td></tr><tr><td>--pretty</td><td>使用其他格式显示历史提交信息。可用的选项包括 oneline、short、</td></tr><tr><td>--oneline</td><td>--pretty=oneline --abbrev-commit 合用的简写。</td></tr></tbody></table><h3 id="查看输出长度" tabindex="-1"><a class="header-anchor" href="#查看输出长度" aria-hidden="true">#</a> 查看输出长度</h3><p><strong>Table 3. 限制 git log 输出的选项</strong></p><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td><code>-&lt;n&gt;</code></td><td>仅显示最近的 n 条提交。</td></tr><tr><td>--since, --after</td><td>仅显示指定时间之后的提交。</td></tr><tr><td>--until, --before</td><td>仅显示指定时间之前的提交。</td></tr><tr><td>--author</td><td>仅显示作者匹配指定字符串的提交。</td></tr><tr><td>--committer</td><td>仅显示提交者匹配指定字符串的提交。</td></tr><tr><td>--grep</td><td>仅显示提交说明中包含指定字符串的提交。</td></tr><tr><td>-S</td><td>仅显示添加或删除内容匹配指定字符串的提交。</td></tr></tbody></table><p><code>-&lt;n&gt;</code> 表示仅显示最近的 n 条提交。但是，类似 --since 和 --until 这种按照时间作限制的选项很有用。例如，下面的命令会列出最近两周的所有提交：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token number">2</span>.weeks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令可用的格式十分丰富——可以是类似 <code>&quot;2008-01-15&quot;</code> 的具体的某一天，也可以是类似 <code>&quot;2 years 1 day 3 minutes ago&quot;</code> 的相对日期。</p><p>来看一个实际的例子，如果要在 Git 源码库中查看 Junio Ham：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span><span class="token string">&quot;%h - %s&quot;</span> <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&#39;Junio C Hamano&#39;</span> <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&quot;2008-10-01&quot;</span> <span class="token punctuation">\\</span>
   <span class="token parameter variable">--before</span><span class="token operator">=</span><span class="token string">&quot;2008-11-01&quot;</span> --no-merges -- t/
5610e3b - Fix testcase failure when extended attributes are <span class="token keyword">in</span> use
acd3b9e - Enhance hold_lock_file_for_<span class="token punctuation">{</span>update,append<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span> API
f563754 - demonstrate breakage of detached checkout with symbolic <span class="token function">link</span> HEAD
d1a43f2 - reset --hard/read-tree <span class="token parameter variable">--reset</span> -u: remove unmerged new paths
51a94af - Fix <span class="token string">&quot;checkout --track -b newbranch&quot;</span> on detached HEAD
b0ad11e - pull: allow <span class="token string">&quot;git pull origin <span class="token variable">$something</span>:<span class="token variable">$current_branch</span>&quot;</span> into an unborn branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="撤销操作" tabindex="-1"><a class="header-anchor" href="#撤销操作" aria-hidden="true">#</a> 撤销操作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果在提交之后，重新添加文件或修改文件，执行此命令后，会合并提交，但是提交信息不变；如果前后没有改变，会启动编辑器，让你重新填写提交信息。</p><h3 id="取消暂存的文件" tabindex="-1"><a class="header-anchor" href="#取消暂存的文件" aria-hidden="true">#</a> 取消暂存的文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset HEAD <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="取消未暂存的修改" tabindex="-1"><a class="header-anchor" href="#取消未暂存的修改" aria-hidden="true">#</a> 取消未暂存的修改</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout -- <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,40),h=a("div",{class:"custom-container tip"},[a("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[a("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[a("circle",{cx:"12",cy:"12",r:"9"}),a("path",{d:"M12 8h.01"}),a("path",{d:"M11 12h1v4h1"})])]),a("p",{class:"custom-container-title"},"TIP"),a("p",null,"记住，在 Git 中任何 已提交 的东西几乎总是可以恢复的。 甚至那些被删除的分支中的提交或使用 --amend 选项覆盖的提交也可以恢复。 然而，任何你未提交的东西丢失后很可能再也找不到了。")],-1),m=n(`<h2 id="远程仓库的使用" tabindex="-1"><a class="header-anchor" href="#远程仓库的使用" aria-hidden="true">#</a> 远程仓库的使用</h2><h3 id="查看远程仓库" tabindex="-1"><a class="header-anchor" href="#查看远程仓库" aria-hidden="true">#</a> 查看远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取仓库服务器的名字</span>
<span class="token function">git</span> remote <span class="token comment"># 默认 origin</span>

<span class="token comment"># 显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL</span>
<span class="token comment"># 如果你的远程仓库不止一个，该命令会将它们全部列出</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加远程仓库" tabindex="-1"><a class="header-anchor" href="#添加远程仓库" aria-hidden="true">#</a> 添加远程仓库</h3><p>运行 <code>git remote add &lt;shortname&gt; &lt;url&gt;</code> 添加一个新的远程 Git 仓库，同时指定一个方便使用的简写：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> shortname https://github.com/paulboone/ticgit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="从远程仓库中抓取与拉取" tabindex="-1"><a class="header-anchor" href="#从远程仓库中抓取与拉取" aria-hidden="true">#</a> 从远程仓库中抓取与拉取</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 只拉取数据，不做合并</span>
<span class="token function">git</span> fetch <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

<span class="token comment"># 拉取最新数据，并且合并</span>
<span class="token function">git</span> pull <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送到远程仓库" aria-hidden="true">#</a> 推送到远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看某个远程仓库" tabindex="-1"><a class="header-anchor" href="#查看某个远程仓库" aria-hidden="true">#</a> 查看某个远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote show origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="远程仓库的重命名与移除" tabindex="-1"><a class="header-anchor" href="#远程仓库的重命名与移除" aria-hidden="true">#</a> 远程仓库的重命名与移除</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重命名</span>
<span class="token function">git</span> remote <span class="token function">rename</span> oldname newname

<span class="token comment"># 移除</span>
<span class="token function">git</span> remote remove branchname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打标签" tabindex="-1"><a class="header-anchor" href="#打标签" aria-hidden="true">#</a> 打标签</h2><h3 id="列出标签" tabindex="-1"><a class="header-anchor" href="#列出标签" aria-hidden="true">#</a> 列出标签</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token comment"># 可带上可选的 -l 选项 --list</span>

<span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token string">&quot;v1.8.5*&quot;</span> <span class="token comment"># 可以按照特定的模式查找标签</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建标签" tabindex="-1"><a class="header-anchor" href="#创建标签" aria-hidden="true">#</a> 创建标签</h3><p>Git 支持两种标签：轻量标签（lightweight）与附注标签（annotated）。</p><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>轻量标签</td><td>很像一个不会改变的分支——它只是某个特定提交的引用</td></tr><tr><td>附注标签</td><td>是存储在 Git 数据库中的一个完整对象， 它们是可以被校验的，其中包含打标签者的名字、电子邮件地址、日期时间， 此外还有一个标签信息，并且可以使用 GNU Privacy Guard （GPG）签名并验证。<strong>通常会建议创建附注标签，这样你可以拥有以上所有信息。</strong></td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.4 <span class="token parameter variable">-m</span> <span class="token string">&quot;my version 1.4&quot;</span> <span class="token comment"># 附注标签</span>
<span class="token function">git</span> tag v1.4-lw <span class="token comment"># 轻量标签</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示标签" tabindex="-1"><a class="header-anchor" href="#显示标签" aria-hidden="true">#</a> 显示标签</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> show v1.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="后期打标签" tabindex="-1"><a class="header-anchor" href="#后期打标签" aria-hidden="true">#</a> 后期打标签</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.2 9fceb02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="共享标签" tabindex="-1"><a class="header-anchor" href="#共享标签" aria-hidden="true">#</a> 共享标签</h3><p>默认情况下，<code>git push</code> 命令并不会传送标签到远程仓库服务器上。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin v1.5   <span class="token comment"># 推送某个标签</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span> <span class="token comment"># 推送全部标签</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除标签" tabindex="-1"><a class="header-anchor" href="#删除标签" aria-hidden="true">#</a> 删除标签</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-d</span> v1.4-lw <span class="token comment"># 本地删除 tag</span>

<span class="token comment"># 方法一</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> :refs/tags/<span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span> <span class="token comment"># git push origin :refs/tags/v1.4-lw</span>
<span class="token comment"># 方法二</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span> <span class="token comment"># git push origin --delete v1.4-lw</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检出分支" tabindex="-1"><a class="header-anchor" href="#检出分支" aria-hidden="true">#</a> 检出分支</h3>`,31),v={href:"https://www.git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE#_%E6%A3%80%E5%87%BA%E6%A0%87%E7%AD%BE",target:"_blank",rel:"noopener noreferrer"},b=n(`<h2 id="git-别名" tabindex="-1"><a class="header-anchor" href="#git-别名" aria-hidden="true">#</a> Git 别名</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.ci commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这意味着，当要输入 <code>git commit</code> 时，只需要输入 <code>git ci</code>。</p>`,3);function g(k,f){const e=t("ExternalLinkIcon");return i(),d("div",null,[o,p,u,h,m,a("p",null,[a("a",v,[r("见原文档"),l(e)])]),b])}const w=s(c,[["render",g],["__file","2-git-basics.html.vue"]]);export{w as default};