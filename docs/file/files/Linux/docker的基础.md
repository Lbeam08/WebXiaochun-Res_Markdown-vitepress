# docker基础

查看内核版本有三种方式：

- cat /proc/version
- uname -a
- uname -r

三种形式都可以查看到内容版本，比如：

```markdown
[ ~]$ uname -r
3.10.0-1160.45.1.el7.x86_64
```

可以看到，当前Linux内核版本满足Docker的需要。

## Docker的自动化安装

Docker官方和国内daocloud都提供了一键安装的脚本，使得Docker的安装更加便捷。

官方的一键安装方式：

```markdown
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

## Docker手动安装

手动安装Docker分三步：卸载、设置仓库、安装。

### 卸载Docker（可选）

**第一步，卸载历史版本**。这一步是可选的，如果之前安装过旧版本的Docker，可以使用如下命令进行卸载：

```markdown
yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine \
                  docker-ce
```

### 设置源仓库

**第二步，设置仓库**。新主机上首次安装Docker Engine-Community之前，需要设置Docker仓库。此后可从仓库安装和更新Docker。

在设置仓库之前，需先按照所需的软件包。yum-utils提供了yum-config-manager，并且device mapper存储驱动程序需要device-mapper-persistent-data和lvm2。

```markdown
sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

执行上述命令，安装完毕即可进行仓库的设置。使用官方源地址设置命令如下：

```markdown
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

通常，官方的源地址比较慢，可将上述的源地址替换为国内比较快的地址：

- 阿里云：http:**//**mirrors.aliyun.com**/**docker-ce**/**linux**/**centos**/**docker-ce.repo
- 清华大学源：https:**//**mirrors.tuna.tsinghua.edu.cn**/**docker-ce**/**linux**/**centos**/**docker-ce.repo

仓库设置完毕，即可进行Docker的安装。

### Docker安装

执行一下命令，安装最新版本的 Docker Engine-Community 和 containerd。

```markdown
sudo yum install -y docker-ce docker-ce-cli containerd.io
```

docker-ce为社区免费版本。稍等片刻，docker即可安装成功。但安装完成之后的默认是未启动的，需要进行启动操作。

如果不需要docker-ce-cli或containerd.io可直接执行如下命令：

```markdown
yum install -y docker-ce
```

至此，完成Docker安装。

## Docker启动

启动Docker的命令：

```markdown
sudo systemctl start docker
```

通过运行hello-world镜像来验证是否正确安装了Docker Engine-Community。

```markdown
// 拉取镜像
sudo docker pull hello-world
// 执行hello-world
sudo docker run hello-world
```

如果执行之后，控制台显示如下信息，则说明Docker安装和启动成功：

```markdown
[~]# docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.
……
```

除了启动Docker，一些其他启动相关的命令：

- 守护进程重启：systemctl daemon-reload
- 重启Docker服务：systemctl restart docker / service docker restart
- 关闭Docker服务：docker service docker stop / docker systemctl stop docker

## 删除Docker

删除安装包：

```markdown
yum remove docker-ce
```

删除镜像、容器、配置文件等内容：

```markdown
rm -rf /var/lib/docker
```

## Docker其他常见命令

安装完成Docker之后，这里汇总列一下常见的Docker操作命令：

- 搜索仓库镜像：docker search 镜像名
- 拉取镜像：docker pull 镜像名
- 查看正在运行的容器：docker ps
- 查看所有容器：docker ps -a
- 删除容器：docker rm container_id
- 查看镜像：docker images
- 删除镜像：docker rmi image_id
- 启动（停止的）容器：docker start 容器ID
- 停止容器：docker stop  容器ID
- 重启容器：docker restart 容器ID
- 启动（新）容器：docker run -it ubuntu /bin/bash
- 进入容器：`docker attach 容器ID`或`docker exec -it 容器ID /bin/bash`，推荐使用后者。

更多的命令可以通过`docker help`命令来查看。

## **启动docker前，一定要关闭防火墙后！！**

```markdown
# 关闭
systemctl stop firewalld
# 禁止开机启动防火墙
systemctl disable firewalld
#查看是否关闭防火墙
systemctl status firewalld
```

## 通过命令启动docker：

```markdown
systemctl start docker  # 启动docker服务
systemctl stop docker  # 停止docker服务
systemctl restart docker  # 重启docker服务
```

## **先删除容器，再删除镜像**

```markdown
删除所有已停止的容器 docker rm $(docker ps -a -q)
删除所有镜像 docker rmi $(docker images -q)
```

## **强制删除**

```markdown
强制删除所有镜像 docker rmi -f $(docker images -q)
```