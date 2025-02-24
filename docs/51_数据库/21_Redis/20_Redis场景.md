# Redis的使用场景

Redis是一个高性能的键值存储系统，它支持多种数据结构，如字符串、列表、集合等。由于其快速的读写速度和丰富的功能特性，Redis被广泛应用于各种场景中。
在日常开发中，常用的场景：分布式锁、接口限流、热点数据缓存、签到、排行榜、经纬度计算等。

## 1、热点数据缓存

> 把频繁访问的数据放在内存中，可以减少对后端数据库的访问压力。

```redis
-- 例如，网站中大量用户访问的热门文章，可以将它们的ID和摘要等信息存储在Redis中，当用户请求这些文章时，可以直接从Redis获取数据。
set article:101 "{title: 'Redis基础概念', description: '介绍Redis的基本概念和使用方法'}" ex 3600
set article:102 "{title: 'Redis高级特性', description: '介绍Redis的高级特性和使用场景'}" ex 3600
set article:103 "{title: 'Redis性能优化', description: '介绍如何对Redis进行性能优化'}" ex 3600
set article:104 "{title: 'Redis集群部署', description: '介绍如何部署Redis集群'}" ex 3600

-- 获取文章
keys article:*
get article:101
get article:102
get article:103
get article:104
```

## 2、分布式锁

> 在多个服务实例之间，为了保证某个资源不被多个实例同时操作，可以使用Redis的分布式锁。

```redis
-- 线程1：抽奖尝试加锁 超时时间：3秒 （ 加锁成功 ）
set lock:lottery:101 "13266668888" nx px 3000
setnx lock:lottery:101 "13266668888" px 3000

-- 线程2：抽奖尝试加锁 超时时间：3秒 （ 加锁失败 ）
set lock:lottery:101 "13211112222" nx px 3000
setnx lock:lottery:101 "13211112222" px 3000

-- 续锁 超时时间：3秒
ttl lock:lottery:101
set lock:lottery:101 "13266668888" px 3000
-- 解锁
del lock:lottery:101
```

## 3、接口限流

> 接口限流可以使用Redis的计数器功能来实现。例如，我们可以使用`INCR`命令来增加一个键的值，如果值超过了设定的阈值，则拒绝新的请求。

```redis
-- 请求来了，计数器+1
incr limit:key
incrby limit:key 1

```

## 4、地理位置计算

> Redis提供了地理位置计算的功能，可以使用`GEOADD`命令来添加地理位置信息，使用`GEOPOS`、`GEODIST`等命令来进行位置查询和距离计算。

```redis
GEOADD location:school 116.3107 39.9925 "北京大学"
GEOADD location:school 116.3230 40.0036 "清华大学"
GEOADD location:school 116.3582 39.9614 "北京邮电大学"
GEOADD location:school 116.3428 39.9522 "北京交通大学"

-- 查询当前位置附近1公里内的所有地点
GEORADIUS location:school 116.3974 39.9088 15 km WITHDIST
-- 查询北京大学到清华大学的距离
GEODIST location:school "北京大学" "清华大学" m

```

## 5、签到

> 签到可以使用Redis的集合功能来实现。例如，我们可以使用`SADD`命令来添加用户的ID到一个集合中，表示用户已经签到。

```redis
-- 签到
sadd sign:202310 "13266668888"
sadd sign:202310 "13211112222"

-- 查看今天有多少人签到
scard sign:202310

-- 查看今天的签到人员列表
SMEMBERS sign:202310

-- 签到使用bitmap
SETBIT sign:bitmap:20250101 101 1
SETBIT sign:bitmap:20250102 101 1
SETBIT sign:bitmap:20250103 101 1
setbit sign:bitmap:20250101 102 1
setbit sign:bitmap:20250101 103 1
SETBIT sign:bitmap:20250102 103 1
SETBIT sign:bitmap:20250103 103 1
-- 查看今天有多少人签到
bitcount sign:bitmap:20250101
-- 查看连续3天签到的人数
BITOP AND sign:bitmap:20250101-20250103 sign:bitmap:20250101 sign:bitmap:20250102  sign:bitmap:20250103
bitcount sign:bitmap:20250101-20250103

```

## 6、排行榜

> 排行榜可以使用Redis的有序集合功能来实现。例如，我们可以使用`ZADD`命令来添加用户的分数到一个有序集合中，然后使用`ZREVRANGE`等命令来获取排名前N的用户。

```redis
-- 添加用户积分
zadd score:course "13266668888" 95
zadd score:course "13211112222" 90
zadd score:course "13233334444" 85
zadd score:course "13255556666" 80
zadd score:course "13277778888" 75
zadd score:course "13299990000" 70

-- 查看前三名
zrevrange score:course 0 2 WITHSCORES
```

