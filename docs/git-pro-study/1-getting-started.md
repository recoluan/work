---
title: 起步
---

## 配置

### 配置用户名和邮箱

```bash
# 全局
git config --global user.name 'reco_luan'
git config --global user.email 'recoluan@outlook.com'

# 针对某个项目（默认 --local）
git config --local user.name 'reco_luan'
git config --local user.email 'recoluan@outlook.com'
```

### 获取帮助

```bash
git config --help

# or

git help config
```

### 设置 SSH

```bash
# 生成
ssh-keygen -t rsa -C "recoluan@outlook.com"（全部按 Enter）

# 查看（Mac）
cat /Users/reco/.ssh/id_rsa.pub
vim ~/.ssh/id_rsa.pub # or
```

## 其他

### 常用命令

```bash
# 新增一个文件，并写入内容
echo '内容' > README.md

# 新增一个文件
touch README.md

# 查看文件内容
cat README.md
```

### 注意

1. 所有跟文件路径相关的地方，都可以使用 `glob` 模式。
