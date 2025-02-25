# Docker常用命令

```shell [container]
docker ps 

# 删除停止的容器
docker container prune
```

```shell [volume]
docker volume ls

# 列出所有未使用的卷
docker volume prune
```

```shell [network]
docker network ls

# 列出所有未使用的网络
docker network prune
```

```shell [image]
# 列出所有未使用的镜像
docker image ls --filter "dangling=true"
docker images --filter "dangling=false" --format "{{.ID}}\t{{.Repository}}\t{{.Tag}}"
docker images --format "{{.ID}}\t{{.Repository}}\t{{.Tag}}" | grep "<none>"

# 删除所有未使用的镜像
docker image prune -a 
## -a 选项会删除所有未被容器使用的镜像（包括未标记的镜像）。
## 如果不加 -a，则只会删除none镜像。
```
