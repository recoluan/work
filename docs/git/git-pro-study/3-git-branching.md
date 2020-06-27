---
title: Git 分支
---

## 分支简介

暂存操作会为每一个文件计算校验和（使用我们在 起步 中提到的 SHA-1 哈希算法），然后会把当前版本的文件快照保存到 Git 仓库中 （Git 使用 blob 对象来保存它们）。

当使用 git commit 进行提交操作时，Git 会先计算每一个子目录的校验和，然后在 Git 仓库中把这些校验和保存为树对象。随后，Git 便会创建一个提交对象， 它除了包含上面提到的那些信息外，还包含指向这个树对象的指针。 如此一来，Git 就可以在需要的时候重现此次保存的快照。

现在，Git 仓库中有五个对象：三个 `blob` 对象（保存着文件快照）、一个 `树` 对象（记录着目录结构和 blob 对象索引）以及一个 `提交` 对象（包含着指向前述树对象的指针和所有提交信息）。

做些修改后再次提交，那么这次产生的提交对象会包含一个指向上次提交对象（父对象）的指针。

Git 的分支，其实本质上仅仅是指向提交对象的可变指针。 Git 的默认分支名字是 `master`。 在多次提交操作之后，你其实已经有一个指向最后那个提交对象的 `master` 分支。 `master` 分支会在每次提交时自动向前移动。

### 分支创建

创建分支，它只是为你创建了一个可以移动的新的指针。

```bash
git branch testing
```

Git 仓库有一个名为 `HEAD` 的特殊指针，指向当前所在的本地分支（译注：将 HEAD 想象为当前分支的别名。

### 分支切换

要切换到一个已存在的分支。

```bash
git checkout master
```

这条命令做了两件事。 一是使 HEAD 指回 master 分支，二是将工作目录恢复成 master 分支所指向的快照内容。 也就是说，你现在做修改的话，项目将始于一个较旧的版本。本质上来讲，这就是忽略 testing 分支所做的修改，以便于向另一个方向进行开发。

你可以简单地使用 git log 命令查看分叉历史。 运行 `git log --oneline --decorate --graph --all`，它会输出你的提交历史、各个分支的指向以及项目的分支分叉情况。

## 分支的新建与合并

### 新建分支

```bash
git checkout -b iss53

# 上面命令是下面两条命令的简写
git branch iss53
git checkout iss53
```

### 合并分支

```bash
git checkout -b hotfix

git checkout master
git merge hotfix
```

因为，master 分支所在提交并不是 hotfix 分支所在提交的直接祖先，Git 会使用两个分支的末端所指的快照（C4 和 C5）以及这两个分支的公共祖先（C2），做一个简单的三方合并（C6）。

### 删除分支

```bash
git branch -d iss53
```

## 分支管理

```bash
git branch    # 当前仓库所有分支的一个列表
git branch -v # 查看每一个分支的最后一次提交
git branch --merged # 查看哪些分支已经合并到当前分支
git branch --no-merged # 查看所有包含未合并工作的分支
```

如果它包含了还未合并的工作，尝试使用 `git branch -d` 命令删除它时会失败，可以使用 `-D` 选项强制删除它。

## 远程分支

```bash
git ls-remote <remote> # 来显式地获得远程引用的完整列表， 
git remote show <remote> # 获得远程分支的更多信息。
```

`git fetch <remote>`，查找 “origin” 是哪一个服务器， 从中抓取本地没有的数据，并且更新本地数据库，移动 origin/master 指针到更新之后的位置。可以运行 `git remote add` 命令添加一个新的远程仓库引用到当前的项目。

### 推送

```bash
git push origin serverfix
```

### 拉取远程分支

`git checkout -b <branch> <remote>/<branch>`，比如 `git checkout -b serverfix origin/serverfix`，本地的名字是可以与远程不同的，比如：`git checkout -b sf origin/serverfix`。

如果本地与远程分支名字一样，可以使用捷径 `git checkout --track origin/serverfix`，该捷径本身还有一个捷径：`git checkout serverfix`。

```bash
git branch -u origin/serverfix # 切换跟踪的远程分支，或 `--set-upstream-to`
git branch -vv # 查看设置的所有跟踪分支

# git branch -vv 没有连接服务器，如果需要，可以使用下方命令组合
git fetch --all; git branch -vv
```

### 拉取

当 `git fetch` 命令从服务器上抓取本地没有的数据时，它并不会修改工作目录中的内容。 它只会获取数据然后让你自己合并。

`git pull` 会查找当前分支所跟踪的服务器与分支， 从服务器上抓取数据然后尝试合并入那个远程分支。使用 fetch 与 merge 命令会更好一些。

### 删除远程分支

```bash
git push origin --delete serverfix
```

## 变基

- [变基](https://www.git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA)

变基，指的是将提交到某一分支上的所有修改都移至另一分支上，就好像“重新播放”一样。

将 `experiment` 分支，然后将它变基到 `master` 分支上：

```bash
# 找到最近共同祖先 C2，然后找到当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件，然后将当前分支指向目标基底 C3, 最后以此将之前另存为临时文件的修改依序应用。
git checkout experiment
git rebase master

# 回到 master 分支，进行一次快进合
git checkout master
git merge experiment
```

### 更有趣的变基例子

假如：主分支的 master 分支，分出开发分支 develop，又从 develop 分出 develop2，各自开发了一段时间之后，要将 develop2 合并到 master，而 develop 暂不合并：

```bash
# develop2 变基
git rebase --onto master develop develop2

git checkout master
git merge develop2

# develop 变基
git rebase master develop

git checkout master
$ git merge develop

# 删除无用分支
git branch -d develop
git branch -d develop2
```

其中：

```bash
git rebase master develop

# 上面命令相当于下面命令，目的不用来回切换分支
git checkout develop
git rebase master
```

### 变基的风险

**如果提交存在于你的仓库之外，而别人可能基于这些提交进行开发，那么不要执行变基。**

- [git rebase 还是 merge的使用场景最通俗的解释](https://www.jianshu.com/p/4079284dd970)


