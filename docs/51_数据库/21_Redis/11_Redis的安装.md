# Redis的安装

## windows上安装

1. 安装 Ubuntu
   在 Windows 上运行 Ubuntu，您可以使用 WSL（Windows Subsystem for Linux）或类似工具。例如，使用 Microsoft Store 中的 Ubuntu 应用：
   - 在开始菜单中搜索“Ubuntu”，然后选择它以启动并设置您的用户帐户和密码。
   - 您可能需要启用 WSL 功能，这可以通过打开 PowerShell 或命令提示符并以管理员身份运行以下命令来完成：`wsl --install`。

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
