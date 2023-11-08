# 使用screen实现程序后台运行



## 1、安装screen

```markdown
yum install -y screen
```

## 2、新建窗口（也可以实现通过ID进行新建窗口）

```markdown
screen -S test
```

#### 例：（如果需要重新连接窗口则需要screen -r 998104）

```markdown
screen -r 998104
```

## 3、执行程序

```markdown
# 进入窗口后输入需要执行文件的命令
sh /root/WebXiaochun-Res_Markdown/main.sh
```

## 4、退出该窗口

```markdown
# 退出当前窗口
ctrl+a+d   （方法1：保留当前窗口）
screen -d  （方法2：保留当前窗口）
```

**6、停止程序**

```markdown
# 1、重新连接窗口
screen -r id或窗口名称

# 示例：
screen -r 998104
screen -r test

# 2、按 Ctrl + C 停止程序运行
```





## screen基础命令

### 查看screen ID

```markdown
screen -ls
```

### 删除screen窗口

```markdown
screen -S 输入ID -X quit
```

## 例如：

### 查看ID

```markdown
[root@VM-0-14-centos ~]# screen -ls
There are screens on:
        5031.998104     (Attached)
Sockets in /var/run/screen/S-root.
```

### 删除ID

```markdown
screen -S 5031.998104 -X quit
```

