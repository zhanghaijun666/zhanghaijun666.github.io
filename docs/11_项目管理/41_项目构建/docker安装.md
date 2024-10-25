# docker安装

```bash
## 脚手架自动安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

## 手动安装
sudo yum update -y
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
# Docker 的官方仓库
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
# 阿里云
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 清华
sudo yum-config-manager --add-repo https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/docker-ce.repo

## 查看 docker 版本
yum list docker-ce --showduplicates | sort -r
## 安装 docker 引擎
yum install -y docker-ce docker-ce-cli containerd.io
systemctl start docker && systemctl enable docker && systemctl status docker
```

## 将 docker 添加用户组

为了方便起见，你可以将当前用户添加到 docker 组中，这样就不需要在每次运行 Docker 命令时使用 sudo：

```bash
sudo usermod -aG docker $USER

## 退出并重新登录以使更改生效，或者执行以下命令:
newgrp docker
```

## 安装 docker-compose

```shell
## github
sudo curl -L "https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
## gitee
sudo curl -L "https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

## 授权
sudo chmod +x /usr/local/bin/docker-compose
## 检查版本
docker-compose --version
```
