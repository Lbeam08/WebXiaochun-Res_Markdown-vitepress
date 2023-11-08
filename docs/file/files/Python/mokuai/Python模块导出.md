---
editLink: false
lastUpdated: false
---

# python导出已安装模块

::: tip Python
是一种高级编程语言，它有着强大的功能和广泛的应用。在Python中，有许多模块可以帮助我们更好地完成编程任务。但有时候，我们需要导出已安装的模块，以便在其他地方使用。本文将从多个角度分析Python导出已安装模块的方法。

:::

## 一、使用pip命令导出模块

pip批量导出包含环境中所有组件的requirements.txt文件；

#### 导出仅可使用：

```python
pip list --format=freeze > requirements.txt
```

pip批量安装requirements.txt文件中包含的组件依赖；

#### 安装仅可使用：

```python
pip install -r requirements.txt
```

这个命令会将名为“模块名”的模块及其版本号输出到requirements.txt文件中。



## 二、使用conda命令导出模块

conda批量导出包含环境中所有组件的requirements.txt文件；

#### 导出仅可使用：
```python
conda list --export > environment.yml
```

conda批量安装requirements.txt文件中包含的组件依赖

#### 安装仅可使用：

```python
conda install --yes --file requirements.txt
```

这个命令会将名为“模块名”的模块及其版本号输出到environment.yml文件中。



## 三、导出项目依赖包（模块包）

####  1. 使用pip运行如下命令，安装pipreqs包

```python
pip install pipreqs
```

conda批量安装requirements.txt文件中包含的组件依赖

####  2. 命令行进入欲生成依赖包信息的项目根目录下

```python
pipreqs ./ --encoding=utf8
```

这个命令会将名为“模块名”的模块及其版本号输出到environment.yml文件中。

若成功，则会在项目根目录下生成一个**requirements.txt** 文件。



## 四、使用pydoc命令导出模块文档

在Python中，每个模块都有相应的文档，可以通过pydoc命令来查看。同时，pydoc也可以用来导出模块文档。

在命令行中，输入以下命令：

```python
pydoc -w 模块名
```

这个命令会将名为“模块名”的模块文档输出到一个HTML文件中。这个文件可以被共享、备份或用于离线查看。



## 五、使用setuptools命令导出模块

如果你是一个Python包的开发者，那么可以使用setuptools命令来导出你的包。在命令行中，输入以下命令：

```python
python setup.py sdist
```

这个命令会将你的Python包打包成一个tar.gz或zip文件。这个文件可以被上传到PyPI等Python包管理平台，供其他人下载和使用。

同时，你也可以使用setuptools命令来导出你的包的依赖。在setup.py文件中，添加如下代码：

```python
install_requires=[
'模块名>=版本号',
]
```

这个代码会告诉setuptools你的包需要哪些依赖，以及它们的版本号。当其他人安装你的包时，这些依赖也会被一并安装。

