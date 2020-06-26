---
title: Git 基础
---

## 获取 Git 仓库

### 在已存在目录中初始化仓库

```bash
# 假如本地仓库名字为 reco-test
cd reco-test

# 初始化
git init

# 添加追踪文件
git add .

# 提交到本地仓库
git commit -m 'initial project'
```

### 克隆远程仓库

```bash
git clone git@github.com:vuepress-reco/vuepress-theme-reco.git
```

### git clone 的更多用法

```bash
# 获取全部 branch 内容，整体下载时间较长 & 所占磁盘空间较大
git clone git_仓库_url 

# 根上述结果一致
git clone -b git_分支名称 git_仓库_url 

# 获取指定分支的代码
git clone -b git_分支名称 --single-branch git_仓库_url 

# 只会获取最近 XX（10条提交记录的）代码，默认是 master 分支，如果要指定分支，可以结合 -b --single-branch 使用
git clone --depth 10 git_仓库_url
```

## 记录每次更新到仓库

### 检查当前文件状态

使用 `git status` 来检查哪些文件属于什么状态。

新增加的文件，也就是未被追踪的文件，会出现在 `Untracked files（未跟踪的文件）` 分类里，可以使用 `git add` 来添加追踪


### 跟踪新增文件

使用 `git add` 开始跟踪一个文件，并提交至暂存区。

```bash
git add README
```

再执行 `git status`，会出现在 `Changes to be committed（要提交的变更）` 分类里。

### 暂存已修改的文件

如果一个已经被跟踪的文件被修改，这时执行 `git status`，会出现在 `Changes not staged for commit（尚未暂存以备提交的变更：）` 分类里。

使用 `git add` 将更改提交至暂存区。

**总结：**`git add` 是个多功能命令：可以用它开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等。 所以这个命令可以理解为“精确地将内容添加到下一次提交中”。

如果一个被追踪的文件，被修改并暂存后，再一次被修改，执行 `git status`，会发现此文件同时出现在 `Changes to be committed（要提交的变更）` 和 `Changes not staged for commit（尚未暂存以备提交的变更：）` 分类里。**因为提交时，被修改文件的版本是最后一次运行 `git add` 命令时的那个版本。**

### 状态简览

```bash
git status -s # git status -short
```

```bash
$ git status -s
 M README             # 已修改未暂存
M  lib/simplegit.rb   # 已暂存的修改
MM Rakefile           # 文件已修，暂存后又作了修改
A  lib/git.rb         # 新添加到暂存区中的文件
?? LICENSE.txt        # 新添加的未跟踪文件
```

### 忽略文件

养成一开始就为你的新仓库设置好 .gitignore 文件的习惯。

```bash
$ cat .gitignore
*.[oa] # 忽略所有以 .o 或 .a 结尾的文件
*~     # 忽略所有名字以波浪符（~）结尾的文件
```

文件 .gitignore 的格式规范如下：

- 所有空行或者以 # 开头的行都会被 Git 忽略。
- 可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。
- 匹配模式可以以（/）开头防止递归。
- 匹配模式可以以（/）结尾指定目录。
- 要忽略指定模式以外的文件或目录，可以在模式前加上叹号（!）取反。

所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。 星号（*）匹配零个或多个任意字符；`[abc]` 匹配任何一个列在方括号中的字符 （这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）； 问号（?）只匹配一个任意字符；如果在方括号中使用短划线分隔两个字符， 表示所有在这两个字符范围内的都可以匹配（比如 [0-9] 表示匹配所有 0 到 9 的数字）。 使用两个星号（**）表示匹配任意中间目录，比如 `a/**/z` 可以匹配 `a/z` 、 `a/b/z` 或 `a/b/c/z` 等。

一个 .gitignore 文件的例子：

```bash
# 忽略所有的 .a 文件
*.a

# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

# 忽略任何目录下名为 build 的文件夹
build/

# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```

::: warning
在最简单的情况下，一个仓库可能只根目录下有一个 .gitignore 文件，它递归地应用到整个仓库中。 然而，子目录下也可以有额外的 .gitignore 文件。子目录中的 .gitignore 文件中的规则只作用于它所在的目录中。
:::

### 查看已暂存和未暂存的修改

```bash
# 查看尚未暂存的文件更新了哪些部分
# 此命令比较的是工作目录中当前文件和暂存区域快照之间的差异。也就是修改之后还没有暂存起来的变化内容。
git diff

# 查看已暂存的将要添加到下次提交里的内容
# 或者 git diff --cached
git diff -staged
```

### 提交更新

```bash
# 通过 vim 编辑器添加提交说明信息
git commit

# 通过 -m 添加提交说明信息
git commit -m '提交信息'

# 跳过使用暂存区域
git commit -a -m 'added new benchmarks'
```

### 移除文件

#### 彻底移除

```bash
git rm README.md
```

此命令所执行的操作就是：

```bash
rm README.md
git add
```

#### 只移除跟踪，不移除本地磁盘文件

```bash
git rm --cached README.md
```

### 移动文件

```bash
git mv README.md newFlod/README.md
```

此命令所执行的操作就是：

```bash
mv README.md newFlod/README.md
git add
```

## 查看提交历史

```bash
git log
```

|参数|含义|
|-|-|
|不传入任何参数|`git log` 会按时间先后顺序列出所有的提交，最近的更新排在最上面。这个命令会列出每个提交的 `SHA-1` 校验和、作者的名字和电子邮件地址、提交时间以及提交说明。|
|-p 或 --patch|显示每次提交所引入的差异（按 补丁 的格式输出）。也可以限制显示的日志条目数量，例如使用 `git log -p -2` 选项来只显示最近的两次提交。|
|--stat|每次提交的下面列出所有被修改过的文件、有多少文件被修改了以及被修改过的文件的哪些行被移除或是添加了。在每次提交的最后还有一个总结。|
|--pretty|以不同的默认格式的方式展示提交历史，比如 `oneline` 会将每个提交放在一行显示，在浏览大量的提交时非常有用。 另外还有 `short`，`full` 和 `fuller` 选项，它们展示信息的格式基本一致，但是详尽程度不一，`git log --pretty=online`。<br><br>`format`，可以定制记录的显示格式。 `git log --pretty=format:"%h - %an, %ar : %s"`，具体选项见下表|

**Table 1. git log --pretty=format 常用的选项**
|选项|说明|
|-|-|
|%H|提交的完整哈希值|
|%h|提交的简写哈希值|
|%T|树的完整哈希值|
|%t|树的简写哈希值|
|%P|父提交的完整哈希值|
|%p|父提交的简写哈希值|
|%an|作者名字|
|%ae|作者的电子邮件地址|
|%ad|作者修订日期（可以用 --date=选项 来定制格式）|
|%ar|作者修订日期，按多久以前的方式显示|
|%cn|提交者的名字|
|%ce|提交者的电子邮件地址|
|%cd|提交日期|
|%cr|提交日期（距今多长时间）|
|%s|提交说明|

你一定奇怪 `作者` 和 `提交者` 之间究竟有何差别， 其实作者指的是实际作出修改的人，提交者指的是最后将此工作成果提交到仓库的人。

当 `oneline` 或 `format` 与另一个 log 选项 `--graph` 结合使用时尤其有用。 这个选项添加了一些 ASCII 字符串来形象地展示你的分支、合并历史：

```bash
$ git log --pretty=format:"%h %s" --graph
* 2d3acf9 ignore errors from SIGCHLD on trap
*  5e3ee11 Merge branch 'master' of git://github.com/dustin/grit
|\
| * 420eac9 Added a method for getting the current branch.
* | 30e367c timeout code and tests
* | 5a09431 add timeout protection to grit
* | e1193f8 support for heads with slashes in them
|/
* d6016bc require time for xmlschema
*  11d191e Merge branch 'defunkt' into local
```


**Table 2. git log 的常用选项：**

|选项|说明|
|-|-|
|-p|按补丁格式显示每个提交引入的差异。|
|--stat|显示每次提交的文件修改统计信息。|
|--shortstat|只显示 --stat 中最后的行数修改添加移除统计。|
|--name-only|仅在提交信息后显示已修改的文件清单。|
|--name-status|显示新增、修改、删除的文件清单。|
|--abbrev-commit|仅显示 SHA-1 校验和所有 40 个字符中的前几个字符。|
|--relative-date|使用较短的相对时间而不是完整格式显示日期（比如“2 weeks |ago”）。|
|--graph|在日志旁以 ASCII 图形显示分支与合并历史。|
|--pretty|使用其他格式显示历史提交信息。可用的选项包括 oneline、short、|full、fuller 和 format（用来定义自己的格式）。|
|--oneline|--pretty=oneline --abbrev-commit 合用的简写。|

### 查看输出长度

**Table 3. 限制 git log 输出的选项**

|选项|说明|
|-|-|
|-<n>|仅显示最近的 n 条提交。|
|--since, --after|仅显示指定时间之后的提交。|
|--until, --before|仅显示指定时间之前的提交。|
|--author|仅显示作者匹配指定字符串的提交。|
|--committer|仅显示提交者匹配指定字符串的提交。|
|--grep|仅显示提交说明中包含指定字符串的提交。|
|-S|仅显示添加或删除内容匹配指定字符串的提交。|

`-<n>` 表示仅显示最近的 n 条提交。但是，类似 --since 和 --until 这种按照时间作限制的选项很有用。例如，下面的命令会列出最近两周的所有提交：

```bash
git log --since=2.weeks
```

该命令可用的格式十分丰富——可以是类似 `"2008-01-15"` 的具体的某一天，也可以是类似 `"2 years 1 day 3 minutes ago"` 的相对日期。

来看一个实际的例子，如果要在 Git 源码库中查看 Junio Ham：
```bash
$ git log --pretty="%h - %s" --author='Junio C Hamano' --since="2008-10-01" \
   --before="2008-11-01" --no-merges -- t/
5610e3b - Fix testcase failure when extended attributes are in use
acd3b9e - Enhance hold_lock_file_for_{update,append}() API
f563754 - demonstrate breakage of detached checkout with symbolic link HEAD
d1a43f2 - reset --hard/read-tree --reset -u: remove unmerged new paths
51a94af - Fix "checkout --track -b newbranch" on detached HEAD
b0ad11e - pull: allow "git pull origin $something:$current_branch" into an unborn branch
```

## 撤销操作

```bash
git commit --amend
```

如果在提交之后，重新添加文件或修改文件，执行此命令后，会合并提交，但是提交信息不变；如果前后没有改变，会启动编辑器，让你重新填写提交信息。

### 取消暂存的文件

```bash
git reset HEAD <file>
```

### 取消未暂存的修改

```bash
git checkout -- <file>
```

:::tip
记住，在 Git 中任何 已提交 的东西几乎总是可以恢复的。 甚至那些被删除的分支中的提交或使用 --amend 选项覆盖的提交也可以恢复。 然而，任何你未提交的东西丢失后很可能再也找不到了。
:::

## 远程仓库的使用

### 查看远程仓库

```bash
# 获取仓库服务器的名字
git remote # 默认 origin

# 显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL
# 如果你的远程仓库不止一个，该命令会将它们全部列出
git remote -v
```

### 添加远程仓库

运行 `git remote add <shortname> <url>` 添加一个新的远程 Git 仓库，同时指定一个方便使用的简写：

```bash
git remote add shortname https://github.com/paulboone/ticgit
```

### 从远程仓库中抓取与拉取

```bash
# 只拉取数据，不做合并
git fetch <remote> <branch>

# 拉取最新数据，并且合并
git pull <remote> <branch>
```

### 推送到远程仓库


```bash
git push <remote> <branch>
```

### 查看某个远程仓库

```bash
git remote show origin
```

### 远程仓库的重命名与移除

```bash
# 重命名
git remote rename oldname newname

# 移除
git remote remove branchname
```

## 打标签

### 列出标签

```bash
git tag # 可带上可选的 -l 选项 --list

git tag -l "v1.8.5*" # 可以按照特定的模式查找标签
```

### 创建标签

Git 支持两种标签：轻量标签（lightweight）与附注标签（annotated）。

|名称|描述|
|-|-|
|轻量标签|很像一个不会改变的分支——它只是某个特定提交的引用|
|附注标签|是存储在 Git 数据库中的一个完整对象， 它们是可以被校验的，其中包含打标签者的名字、电子邮件地址、日期时间， 此外还有一个标签信息，并且可以使用 GNU Privacy Guard （GPG）签名并验证。**通常会建议创建附注标签，这样你可以拥有以上所有信息。**|

```bash
git tag -a v1.4 -m "my version 1.4" # 附注标签
git tag v1.4-lw # 轻量标签
```

### 显示标签

```bash
git show v1.4
```

### 后期打标签

```bash
git tag -a v1.2 9fceb02
```

### 共享标签

默认情况下，`git push` 命令并不会传送标签到远程仓库服务器上。

```bash
git push origin v1.5   # 推送某个标签
git push origin --tags # 推送全部标签
```

### 删除标签

```bash
git tag -d v1.4-lw # 本地删除 tag

# 方法一
git push <remote> :refs/tags/<tagname> # git push origin :refs/tags/v1.4-lw
# 方法二
git push origin --delete <tagname> # git push origin --delete v1.4-lw
```

### 检出分支

[见原文档](https://www.git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE#_%E6%A3%80%E5%87%BA%E6%A0%87%E7%AD%BE)

## Git 别名

```bash
git config --global alias.ci commit
```

这意味着，当要输入 `git commit` 时，只需要输入 `git ci`。









