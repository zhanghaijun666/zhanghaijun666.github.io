# Redis的安装

## windows上安装

1. 安装或启用 WSL2
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
2. 安装 Redis
   在 Windows 上运行 Ubuntu 后，您可以按照 在 Ubuntu/Debian 上安装中详述的步骤从官方packages.redis.ioAPT 存储库安装 Redis 的最新稳定版本。将存储库添加到apt索引，更新它，然后安装：
    ```shell
    curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
    echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

    sudo apt-get update
    sudo apt-get install redis

    sudo apt update
    sudo apt install redis-server
    ## 启动服务
    sudo service redis-server start
    ```
3. 连接到 Redis
    ```shell
    redis-cli
    redis-cli -h 127.0.0.1 -p 6379
    redis-cli -h 127.0.0.1 -p 6379 -a password
    redis-cli -h 127.0.0.1 -p 6379 --tls
    redis-cli -h 127.0.0.1 -p 6379 --tls --cacert /path/to/ca.crt
    redis-cli -h 127.0.0.1 -p 6379 --tls --cacert /path/to/ca.crt --cert /path
    ```

## Linux上安装

::: code-group

```sh [ubuntu]
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

sudo apt-get update
sudo apt-get install redis
```

```sh [centos]
sudo yum install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
sudo yum install -y redis
sudo systemctl start redis
sudo systemctl enable redis
sudo systemctl status redis
```

```sh [Snapcraft 商店]
sudo snap install redis
```

:::

## 容器上安装

::: code-group

```sh [Docker]
docker run -d --name redis-server -p 6379:6379 --restart=alway --requirepass Admin@123 redis

docker exec -it redis-server redis-cli
```

```sh [Docker-Compose]
cat <<EOF > docker-compose.yml
version: '3'
services:
  redis:
    image: redis
    restart: always
    container_name: redis
    ports:
      - "6379:6379"
    volumes:
      - ./data:/data
     environment:
       - REDIS_PASSWORD=Admin@123
     command: redis-server
EOF
docker-compose up -d
```

:::
