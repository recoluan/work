---
title: rebase 合并多个 commit
date: 2020-08-11
---

```bash
git log

git rebase -i HEAD~2

# 第一个 pick，其余 squash，保存
# 编辑 commit 信息

# 可以强推 git push -f
# 可先 rebase 到新分支，在 rebase 到目标分支
```
