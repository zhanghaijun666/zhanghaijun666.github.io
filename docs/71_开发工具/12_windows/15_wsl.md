# WSL

## 一、WSL 是什么

`WSL`，即 `Windows Subsystem for Linux`，是微软在 Windows 10 及更高版本中推出的一项功能，它允许用户在 Windows 系统上直接运行 Linux 二进制可执行文件（ELF 格式），而无需借助传统的虚拟机或双系统安装方式。

WSL 的优势

- 资源利用高效: 与传统虚拟机不同，WSL 并不需要为每个 Linux 实例分配独立的硬件资源，它共享 Windows 系统的内核，因此在运行时占用的系统资源更少，响应速度更快。
- 便捷的互操作性: WSL 允许 Windows 和 Linux 文件系统之间的无缝交互。
- 快速部署与使用: 安装和配置 WSL 非常简单，用户可以通过 Windows 应用商店快速获取并安装各种 Linux 发行版，如 Ubuntu、Debian、Kali Linux 等。

## 二、WSL 的安装

[microsoft文档](https://learn.microsoft.com/zh-cn/windows/wsl/install)

```shell
# 升级到最新版本（wsl2）
wsl --update
# 查看所有可用的发行版
wsl --list --online
# 安装 Ubuntu-22.04 系统
wsl --install -d Ubuntu-22.04
# 显示当前安装了哪些系统
wsl -l -v
# 设置wsl默认版本为wsl2
wsl --set-default-version 2
# 设置Ubuntu-22.04为 wsl2
wsl.exe --set-version Ubuntu-22.04 2
# 登录到Ubuntu环境
wsl -d Ubuntu-22.04
# 关闭Ubuntu-22.04
wsl --shutdown Ubuntu-22.04
```
