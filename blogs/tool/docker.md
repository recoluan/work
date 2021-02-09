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

### 3.3 数据卷

> 将主机的一个目录映射到容器的一个目录中。可以在宿主机中操作目录中的内容，那么容器内部映射的文件，也会跟着一起改变

**1. 创建数据卷**

```bash
docker volume create 数据卷名称

# 创建数据卷之后，默认和存放在一个目录下/var/lib/docker/volumes/数据卷名称/_data
```

**1. 创建数据卷**

```bash
docker volume create 数据卷名称

# 创建数据卷之后，默认和存放在一个目录下/var/lib/docker/volumes/数据卷名称/_data
```

**2. 查看数据卷详细信息**

```bash
docker volume inspect 数据卷名称
```

**3. 查看全部数据卷**

```bash
docker volume ls
```

**4. 删除数据卷**

```bash
docker volume remove 数据卷名称
```

**5. 应用数据卷**

当你映射数据卷时，如果数据不存在，Docker 会自动创建，会将容器内部自带的文件，存储在默认的存放路径中。

```bash
docker run -v 数据卷名称:容器内部的路径 镜像ID
```

直接指定一个路径作为数据卷的存放的为主，这个路径是空的。

```bash
docker run -v 路径:容器内部路径 镜像ID
```

## 四、Docker 自定义镜像

> 中央仓库上的镜像，也是 Docker 的用户自己上传上去的。

**1. 创建一个 Dockerfile 文件，并且指定自定义镜像信息**

Dockerfile 文件中常用的内容

- from: 指定当前自定义镜像依赖的环境
- copy: 将相对路径下的内容复制到自定义镜像中
- workdir: 声明镜像的默认工作目录
- cmd: 需要指定的命令（在 workdir 执行的，cmd 可以写多的，只以最后一个为准）

自定义一个 Tomcat 镜像，并且 ssm.war 部署到 Tomcat 中

```
from daocloud.io/library/tomcat:8.5.15-jre8
copy ssm.war /usr/local/tomcat/webapps
```

**2. 将准备好的 Dockerfile 和相应的文件拖拽到 Linux 操作系统中，通过 Docker 的命令制作镜像**

```
docker build -t 镜像名称:[tag] .
```

## 五、Docker-Compose

### 5.1

**1. GitHub 下载 1.24.1 版本**

**2. 将下载好的文件，拖拽到 Linux 操作系统中**

**3. 需要阿静 DockerCompose 文件的名称修改一下，基于 DockerCompose 文件一个可执行的权限**

```
mv docker-compose-Linux-x86_64 docker-compose
chmod 777 docker-compose
```

**4. 方便后期操作，配置一个环境变量**

将 docker-compose 文件移动到了 /usr/local/bin，修改了 /etc/profile 文件，给 /usr/local/bin 配置到了 PATH 中

```
mv docker-compose /usr/local/bin
vi /etc/profile
  export PATH=$JAVA_HOME:/usr/local/bin:$PATH
source /etc/profile
```

**5. 测试**

任意目录数据输入 docker-compose

### 5.2 docker-compose 管理 MySql 和 Tomcat

::: tip
- yml 文件以 key: value 方式来指定配置信息
- 多个配置信息用换行 + 缩进的方式来区分
- 在 docker-compose.yml 文件中，不要使用制表符
:::

``` yml
version: '3.1'
services:
  mysql:
    restart: always
    image: daocloud.io/librarty/mysql:5.7.4
    container_name: mysql
    ports:
      - 3306:3306
    environment:
      MYSQL_ROOT_PASSWORD: root
      TZ: Asia/Shanghai
    voulmes:
      - /opt/docker_mysql_tomcat/mysql_data:/var/lib/mysql
  tomcat:
    restart: always
    image: daocloud.io/librarty/tomcat:8.5.15-jre8
    container_name: tomcat
    ports:
      - 8080:8080
    environment:
      TZ: Asia/Shanghai
    volumes:
      - /opt/docker_mysql_tomcat/tomcat_webapps:/usr/local/tomcat/webapps
      - /opt/docker_mysql_tomcat/tomcat_logs:/usr/local/tomcat/logs
```

### 5.3 使用

在使用 docker-compose 的命令时，默认会在当前目录下找 docker-compose.yml 文件。

```bash
# 基于 docker-compose.yml 启动管理的容器
docker-compose up -d
```

```bash
# 关闭并删除容器
docker-compose down
```

```bash
# 开启|关闭|重启 已经存在的由 docker-compose 维护的容器
docker-compose start|stop|restart
```

```bash
# 查看由 docker-compose 管理的容器
docker-compose ps
```

```bash
# 查看日志
docker-compose logs -f
```

## 六、Docker DI\CD