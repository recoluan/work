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

### 2.4 Docker 容器操作

**1. 运行容器**

```bash
# 简单操作（如果没有镜像会先拉取镜像）
docker run 镜像的标识|镜像名称[:tag]

# 常用参数
docker run -d -p 宿主机端口:容器端口 --name 容器名称 镜像的标识|镜像名称[:tag]

# -d：代表后台运行容器
# -p 宿主机端口:容器端口：为了映射宿主机端口和容器端口
# --name 容器名称：置顶容器名称
```

**2. 查看正在运行的容器**

```bash
docker ps [-qa]

# -a：查看全部容器，包括没有运行的
# -q：只查看容器的唯一标识
```

**3. 查看容器的日志**

```bash
docker logs -f 容器id

# -f：可以滚动查看日志的最后几行
```

**4. 进入容器内部**

```bash
docker exec -it 容器id bash

# 一般不建议进入容器操作命令，但是可以查看路径
```

**5. 删除容器（删除前必须先停止容器）**

```bash
docker stop 容器id
docker rm 容器id

# 删除所有容器
docker stop $(docker ps -qa)
docker rm $(docker ps -qa)
```

**6. 启动容器**

```bash
docker start 容器id
```

## 三、Docker 应用

### 3.1 准备 MySQL 容器

**1. 运行 MySQL 容器**

```bash
docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root daocloud.io/library/mysql:5.7.4

# -e MYSQL_ROOT_PASSWORD=root 设置 root 账户密码
```

### 3.2 准备 Tomcat 容器

**1. 运行 Tomcat 容器，见前文**

```bash
docker run -d -p 8080:8080 --name tomcat b8
```

**2. 可以通过命令将宿主机的内容拷贝到容器内部**

```bash
docker cp 文件名称 容器id:容器内部路径

# 例子
docker cp ssm.war fe:/user/local/tomcat/webapps/
```

**3. 例子**

```bash
docker cp ssm.war fe:/user/local/tomcat/webapps/
```

## 四、Docker 自定义镜像

## 五、Docker-Compose

## 六、Docker DI\CD