const e=JSON.parse('{"key":"v-6aefd182","path":"/61.%E5%AE%B9%E5%99%A8%E6%8A%80%E6%9C%AF/62.kubernetes%E5%AE%9E%E6%88%98/22.Helm%E5%AE%89%E8%A3%85RabbitMQ.html","title":"Helm安装RabbitMQ","lang":"zh-CN","frontmatter":{"title":"Helm安装RabbitMQ","date":"2023-02-24T00:00:00.000Z","category":["容器技术","kubernetes实战"],"tag":["kubernetes实战"],"description":"RabbitMQ集群 添加仓库 helm repo add bitnami https://charts.bitnami.com/bitnami helm repo update helm search repo bitnami/rabbitmq # NAME CHART VERSION APP VERSION DESCRIPTION # bitnami/rabbitmq 11.10.0 3.11.9 RabbitMQ is an open source general-purpose mess... # bitnami/rabbitmq-cluster-operator 3.2.4 2.1.0 The RabbitMQ Cluster Kubernetes Operator automa...","head":[["meta",{"property":"og:url","content":"https://haijunit.top/61.%E5%AE%B9%E5%99%A8%E6%8A%80%E6%9C%AF/62.kubernetes%E5%AE%9E%E6%88%98/22.Helm%E5%AE%89%E8%A3%85RabbitMQ.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"Helm安装RabbitMQ"}],["meta",{"property":"og:description","content":"RabbitMQ集群 添加仓库 helm repo add bitnami https://charts.bitnami.com/bitnami helm repo update helm search repo bitnami/rabbitmq # NAME CHART VERSION APP VERSION DESCRIPTION # bitnami/rabbitmq 11.10.0 3.11.9 RabbitMQ is an open source general-purpose mess... # bitnami/rabbitmq-cluster-operator 3.2.4 2.1.0 The RabbitMQ Cluster Kubernetes Operator automa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-23T07:13:54.000Z"}],["meta",{"property":"article:author","content":"知识库"}],["meta",{"property":"article:tag","content":"kubernetes实战"}],["meta",{"property":"article:published_time","content":"2023-02-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-23T07:13:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Helm安装RabbitMQ\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-23T07:13:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"知识库\\",\\"url\\":\\"https://haijunit.top\\",\\"email\\":\\"zhanghaijun_java@163.com\\"}]}"]]},"headers":[{"level":2,"title":"RabbitMQ集群","slug":"rabbitmq集群","link":"#rabbitmq集群","children":[{"level":3,"title":"添加仓库","slug":"添加仓库","link":"#添加仓库","children":[]},{"level":3,"title":"2、安装","slug":"_2、安装","link":"#_2、安装","children":[]}]}],"git":{"createdTime":1684826034000,"updatedTime":1684826034000,"contributors":[{"name":"zhanghaijun","email":"zhanghaijun@bjtxra.com","commits":1}]},"readingTime":{"minutes":0.5,"words":151},"filePathRelative":"61.容器技术/62.kubernetes实战/22.Helm安装RabbitMQ.md","localizedDate":"2023年2月24日","excerpt":"<h2> RabbitMQ集群</h2>\\n<h3> 添加仓库</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>helm repo <span class=\\"token function\\">add</span> bitnami https://charts.bitnami.com/bitnami\\nhelm repo update\\nhelm search repo bitnami/rabbitmq\\n<span class=\\"token comment\\"># NAME                                    CHART VERSION   APP VERSION     DESCRIPTION</span>\\n<span class=\\"token comment\\"># bitnami/rabbitmq                        11.10.0         3.11.9          RabbitMQ is an open source general-purpose mess...</span>\\n<span class=\\"token comment\\"># bitnami/rabbitmq-cluster-operator       3.2.4           2.1.0           The RabbitMQ Cluster Kubernetes Operator automa...</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
