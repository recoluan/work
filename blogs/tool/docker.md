---
title: docker
date: 2020-08-10
publish: false
---

## 一、Docker 介绍

## 二、Docker 基本操作

### 2.1 安装

**1. 下载 docker 的依赖环境**

```bash
yum -y install yum-utils device-mapper-persistent-data lvm2
```

**2. 设置 docker 的镜像资源**

```bash
yum-config-manager--add-repohttp://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

**3. 安装 docker**

```bash
yum makacache fast
yum -y install docker-ce
```

**4. 启动，并设置为开机自启动，测试**

```bash
# 启动服务
systemctl start docker

# 设置开机自启动
systemctl enable docker

# 测试
docker run hello-world
```

### 2.2 Docker 中央仓库

1. Docker 官方的中央仓库：这个仓库是镜像最全的，但是下载速度较慢，[地址](https://hub.docker.com/)
2. 国内镜像：[网易蜂巢](https://c.163yun.com/hub#/home)、[DaoCloud](http://hub.daocloud.io/)（推荐）
3. 在公司内部会采用私服的方式拉取镜像（添加配置）
   ```bash
   # 需要在 /etc/docker/daemon.json

   {
     "registry-mirrors": ["https://registry.docker-cn.com"],
     "insecure-registries": ["ip:port"]
   }

   # 重启两个服务
   systemctl daemon-reload
   systemctl restart docker
   ```

### 2.3 Docker 镜像操作

**1. 拉取镜像到本地**

```bash
docker pull 镜像名称[:tag]

# 举例
docker pull daocloud.io/library/tomcat:8.5.15-jre8
```

**2. 查看全部本地镜像**

```bash
docker images
```

**3. 删除本地镜像**

```bash
docker rmi 镜像的标识
```

**4. 镜像导入导出**

```bash
# 将本地镜像导出
docker save -o 导出的路径 镜像id

# 加载本地的镜像文件
docker load -i 镜像文件

# 修改镜像名称
docker tag 镜像id 新镜像名称:tag
```


## 三、Docker 应用

## 四、Docker 自定义镜像

## 五、Docker-Compose

## 六、Docker DI\CD