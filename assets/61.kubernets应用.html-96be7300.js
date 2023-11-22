const e=JSON.parse('{"key":"v-110fb52b","path":"/61.%E5%AE%B9%E5%99%A8%E6%8A%80%E6%9C%AF/62.kubernetes%E5%AE%9E%E6%88%98/61.kubernets%E5%BA%94%E7%94%A8.html","title":"kubernets应用","lang":"zh-CN","frontmatter":{"title":"kubernets应用","date":"2023-02-20T16:07:59.000Z","category":["容器技术","kubernetes实战"],"tag":["kubernetes"],"description":"[[toc]] 使用 Ceph 做持久化存储创建 MySQL 集群 https://jimmysong.io/kubernetes-handbook/practice/using-ceph-for-persistent-storage.html (https://jimmysong.io/kubernetes-handbook/practice/usi...","head":[["meta",{"property":"og:url","content":"https://haijunit.top/61.%E5%AE%B9%E5%99%A8%E6%8A%80%E6%9C%AF/62.kubernetes%E5%AE%9E%E6%88%98/61.kubernets%E5%BA%94%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"kubernets应用"}],["meta",{"property":"og:description","content":"[[toc]] 使用 Ceph 做持久化存储创建 MySQL 集群 https://jimmysong.io/kubernetes-handbook/practice/using-ceph-for-persistent-storage.html (https://jimmysong.io/kubernetes-handbook/practice/usi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-23T07:13:54.000Z"}],["meta",{"property":"article:author","content":"知识库"}],["meta",{"property":"article:tag","content":"kubernetes"}],["meta",{"property":"article:published_time","content":"2023-02-20T16:07:59.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-23T07:13:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kubernets应用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-20T16:07:59.000Z\\",\\"dateModified\\":\\"2023-05-23T07:13:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"知识库\\",\\"url\\":\\"https://haijunit.top\\",\\"email\\":\\"zhanghaijun_java@163.com\\"}]}"]]},"headers":[{"level":2,"title":"使用 Ceph 做持久化存储创建 MySQL 集群","slug":"使用-ceph-做持久化存储创建-mysql-集群","link":"#使用-ceph-做持久化存储创建-mysql-集群","children":[]},{"level":2,"title":"配置 Ceph","slug":"配置-ceph","link":"#配置-ceph","children":[{"level":3,"title":"安装 ceph 客户端","slug":"安装-ceph-客户端","link":"#安装-ceph-客户端","children":[]},{"level":3,"title":"生成 Ceph secret","slug":"生成-ceph-secret","link":"#生成-ceph-secret","children":[]},{"level":3,"title":"创建租户","slug":"创建租户","link":"#创建租户","children":[]},{"level":3,"title":"创建 Ceph secret","slug":"创建-ceph-secret","link":"#创建-ceph-secret","children":[]},{"level":3,"title":"创建 StorageClass","slug":"创建-storageclass","link":"#创建-storageclass","children":[]}]},{"level":2,"title":"配置 MySQL","slug":"配置-mysql","link":"#配置-mysql","children":[{"level":3,"title":"1. 创建 MySQL 配置文件","slug":"_1-创建-mysql-配置文件","link":"#_1-创建-mysql-配置文件","children":[]},{"level":3,"title":"2. 创建 MySQL root 用户和密码","slug":"_2-创建-mysql-root-用户和密码","link":"#_2-创建-mysql-root-用户和密码","children":[]}]},{"level":2,"title":"创建 MySQL secret","slug":"创建-mysql-secret","link":"#创建-mysql-secret","children":[{"level":3,"title":"3. 创建 yaml 配置文件","slug":"_3-创建-yaml-配置文件","link":"#_3-创建-yaml-配置文件","children":[]},{"level":3,"title":"部署 MySQL 集群","slug":"部署-mysql-集群","link":"#部署-mysql-集群","children":[]}]}],"git":{"createdTime":1684826034000,"updatedTime":1684826034000,"contributors":[{"name":"zhanghaijun","email":"zhanghaijun@bjtxra.com","commits":1}]},"readingTime":{"minutes":2.38,"words":713},"filePathRelative":"61.容器技术/62.kubernetes实战/61.kubernets应用.md","localizedDate":"2023年2月21日","excerpt":"","autoDesc":true}');export{e as data};
