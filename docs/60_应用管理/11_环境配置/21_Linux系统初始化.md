# Linux系统初始化

## 1、网络配置

::: code-group

```shell [CentOS] {6,17-21}
cat >> /etc/sysconfig/network-scripts/ifcfg-ens33 <<EOF
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
#BOOTPROTO=dhcp
BOOTPROTO=static
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=b3d1393d-059d-49ea-a12b-9aa9e4c9bc2c
DEVICE=ens33
ONBOOT=yes
NM_CONTROLLED=no
IPADDR=192.16.18.100
NETMASK=255.255.255.0
GATEWAY=192.16.18.2
DNS1=114.114.114.114
DNS2=8.8.8.8
EOF

```

```shell [ubuntu]
cat >> /etc/netplan/00-installer-config.yaml <<EOF
network:
version:2
renderer:networkd
ethernets:
 ens33:
dhcp4:false
   addresses:
     -192.168.1.100/24
   gateway4:192.168.1.1
   nameservers:
     addresses:
-8.8.8.8
-8.8.4.4

EOF
## 网络配置生效
sudo netplan apply

# 1.设置时区
timedatectl
sudo timedatectl set-timezone Asia/Shanghai
# 2.启用时间同步
sudo timedatectl set-ntptrue
```

:::

## 2、更新软件源

::: code-group

```shell [yum]
## 更改系统源
yum -y install wget yum-utils epel-release
mv /etc/yum.repos.d/CentOS-Base.repo  /etc/yum.repos.d/CentOS-Base.repo.bak
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
wget -O  /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
## docker源
wget -O /etc/yum.repos.d/docker-ce.repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
## 清楚缓存、生成新缓存
yum clean all && yum makecache
yum -y upgrade
```

```shell [apt]
## 备份原始软件源文件
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak

## 定义新的软件源（清华大学源和阿里云源）
new_sources="
## 清华大学源
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse

## 阿里云源
deb http://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse
"
## 编辑软件源文件
echo "$new_sources" | sudo tee /etc/apt/sources.list > /dev/null

## 更新软件包索引
sudo apt update
```

:::

## 3、安装常用软件

::: code-group

```shell [CentOS]
## 内核升级
rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-4.el7.elrepo.noarch.rpm
# 安装内核  kernel官网：https://kernel.org/
yum --enablerepo=elrepo-kernel install -y kernel-lt
# 查询已安装的内核
rpm -qa | grep kernel
# 查看默认启动项
awk -F\' '$1=="menuentry " {print $2}' /etc/grub2.cfg
# 设置开机从新内核启动
#grub2-set-default 'CentOS Linux (4.4.189-1.el7.elrepo.x86_64) 7 (Core)'
# 上述命令不生效，可执行下面的命令设置默认启动
# 默认启动的顺序是从0开始（CentOS Linux (3.10.0-1127.el7.x86_64) 7），新内核是从头插入，所以需要选择0
grub2-set-default 0
# 注意：设置完内核后，需要重启服务器才会生效。
reboot
# 查询内核 4.4.249-1.el7.elrepo.x86_64
uname -r

## 安装常用工具
yum install -y vim curl wget telnet lrzsz unzip jq gcc tree sysstat libseccomp bash-completion yum-utils bzip2
yum install -y policycoreutils-python openssh-server openssh-clients cronie
yum install -y iptables conntrack ipvsadm ipset net-tools lsof iproute bridge-utils bind-utils
yum install -y epel-release xorg-x11-xauth htop dstat glances lftp
yum install -y ntpdate ntp
```

```shell [Ubuntu]
## 升级系统
sudo apt upgrade -y
sudo apt dist-upgrade -y
## 清理旧文件
sudo apt autoremove -y
sudo apt autoclean

## 安装常用工具
sudo apt install -y vim curl wget git net-tools htop unzip build-essential lsof
```

:::

## 防火墙配置

::: code-group

```shell [CentOS]
## 启动防火墙并开机自启
systemctl enable firewalld && systemctl start firewalld

## 查看端口、添加端口
firewall-cmd --list-ports
firewall-cmd --zone=public --add-port=80/tcp --permanent
firewall-cmd --reload

## 关闭防火墙和SELinux
systemctl disable firewalld
systemctl stop firewalld
sed -i 's/^ *SELINUX=enforcing/SELINUX=disabled/g' /etc/selinux/config
setenforce 0
```

```shell [ubuntu]
sudo apt install ufw -y
sudo ufw enable
sudo ufw allow ssh
sudo ufw status
```

:::
