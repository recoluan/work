---
title: rebase 合并多个 commit
date: 2020-08-11
---

```bash
git log --pretty=format:"%h: %s" 

git rebase -i HEAD~2

# 选择一个 pick，其余 squash，保存
# 编辑 commit 信息，保存

# 可以强推 git push -f
# 可先 rebase 到新分支，在 rebase 到目标分支

# 继续 rebase
git rebase --continue  

# 取消 rebase
git rebase --abort

# 移除本地的 rebase 请求
rm -fr ".git/rebase-merge"

# 本地强制同步线上代码
git fetch --all 
git reset --hard origin/feature/recoluan-20200811-monitoring
git pull 

```


