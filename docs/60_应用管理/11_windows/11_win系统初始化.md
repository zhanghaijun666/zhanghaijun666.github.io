# Win系统初始化

## 1、软件安装

### 开发工具

| 类别     | 软件名称               | 访问地址                                                                           |
|--------|--------------------|--------------------------------------------------------------------------------|
| 代码版本控制 | Git                | https://git-scm.com/downloads                                                  |
| 开发工具   | Java SE 8          | https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html |
| 开发工具   | Java SE 17         | https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html   |
| 开发工具   | Maven              | https://maven.apache.org/download.cgi                                          |
| 开发工具   | nvm (NodeJs)       | https://github.com/coreybutler/nvm-windows/releases                            |
| 开发工具   | MySQL              | https://dev.mysql.com/downloads/mysql/                                         |
| 开发工具   | Redis-windows      | https://github.com/redis-windows/redis-windows/releases                        |
| 开发工具   | Visual Studio Code | https://code.visualstudio.com/Download                                         |
| 开发工具   | Idea               | https://www.jetbrains.com/zh-cn/idea/download/?section=windows                 |
| 浏览器    | chrome             | https://www.google.com/chrome/                                                 |

### 常用软件

| 类别    | 软件名称              | 访问地址                                                                |
|-------|-------------------|---------------------------------------------------------------------|
| 系统    | Windows           | https://www.microsoft.com/zh-cn/windows                             |
| 终端工具  | Windows Terminal  | https://apps.microsoft.com/detail/9n0dx20hk701?rtc=1&hl=zh-cn&gl=CN |
| 效率工具  | uTools            | https://u.tools/download                                            |
| 搜索文件  | Everything        | https://www.voidtools.com/zh-cn/downloads/                          |
| 截图神器  | Snipaste          | https://zh.snipaste.com/download.html                               |
| 科学上网  | Clash for Windows | https://ikuuu.one                                                   |
| 接口调试  | ApiFox            | https://apifox.com                                                  |
| 手势软件  | WGestures 2       | https://www.yingdev.com/projects/wgestures2                         |
| 视频播放  | PotPlayer         | https://potplayer.tv/?lang=zh_CN                                    |
| 解压缩软件 | BandZip           | https://www.bandisoft.com/bandizip/                                 |
| 文本编辑  | Notepad++         | https://notepad-plus-plus.org/                                      |

### 其他软件

| 类别   | 软件名称            | 访问地址                         |
|------|-----------------|------------------------------|
| 软件卸载 | GeekUninstaller | https://geekuninstaller.com/ |

## 2、环境配置

```shell
## 在系统上禁止使用脚本解决方法 | 以管理员身份运行power shell
set-executionpolicy remotesigned

## 密钥生成
ssh-keygen -t rsa -b 4096 -C "zhanghaijun_java@163.com"
## Git配置
git config --global --list
git config --global user.name "zhanghaijun"
git config --global user.email "zhanghaijun_java@163.com"
git config --global core.ignorecase false

## nodejs配置
npm install -g yrm --registry https://registry.npmmirror.com
yrm del taobao
yrm add taobao https://registry.npmmirror.com
yrm use taobao
npm install -g pnpm --registry https://registry.npmmirror.com
```
