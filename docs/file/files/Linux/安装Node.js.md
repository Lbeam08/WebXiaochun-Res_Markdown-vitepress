# 安装Node.js

## 1. 新建目录

```bash
mkdir /usr/local/node
```

## 2. 进入至指定目录

```bash
cd /usr/local/node
```

## 3. 下载安装包

```bash
wget https://nodejs.org/dist/v16.14.0/node-v16.14.0-linux-x64.tar.xz
```

如果需要其他版本 [自行去找](https://nodejs.org/zh-cn/download/) 我安装的是16.14.0

## 4. 解压

```bash
tar -xvf node-v16.14.0-linux-x64.tar.xz
```

## 5. 插入环境变量（末尾插入内容）

```bash
VERSION=v16.14.0
DISTRO=linux-x64
export PATH=/usr/local/node/node-$VERSION-$DISTRO/bin:$PATH
```

## 6. 刷新环境变量配置

```bash
source /etc/profile
```

## 7. 检查是否安装成功

### 验证输入

```bash
node -v
```

### 返回效果

```bash
[root@CentOS node]# node -v
 v16.14.0
```



### 验证输入

```bash
npm version
```

### 返回效果

```bash
[root@CentOS node]# npm version
{
  npm: '8.3.1',
  node: '16.14.0',
  v8: '9.4.146.24-node.20',
  uv: '1.43.0',
  zlib: '1.2.11',
  brotli: '1.0.9',
  ares: '1.18.1',
  modules: '93',
  nghttp2: '1.45.1',
  napi: '8',
  llhttp: '6.0.4',
  openssl: '1.1.1m+quic',
  cldr: '40.0',
  icu: '70.1',
  tz: '2021a3',
  unicode: '14.0',
  ngtcp2: '0.1.0-DEV',
  nghttp3: '0.1.0-DEV'
}
```



### 验证输入

```bash
npx -v
```

### 返回效果

```bash
[root@CentOS node]# npx -v
8.3.1
```