const n=JSON.parse(`{"key":"v-30a17d81","path":"/61.%E5%AE%B9%E5%99%A8%E6%8A%80%E6%9C%AF/62.kubernetes%E5%AE%9E%E6%88%98/30.MySQL%E4%B8%BB%E4%BB%8E.html","title":"MySQL主从","lang":"zh-CN","frontmatter":{"title":"MySQL主从","date":"2023-02-24T00:00:00.000Z","category":["容器技术","kubernetes实战"],"tag":["kubernetes实战"],"description":"MySQL 示例部署包含一个ConfigMap、两个存储挂载pv和pvc、两个 Service 与一个 StatefulSet。 ConfigMap cat mysql-master-cnf.yaml #master--my.cnf apiVersion: v1 kind: ConfigMap metadata: name: mysql-master-cnf namespace: bc-cnp data: my.cnf: |- [client] default-character-set=utf8 [mysql] default-character-set=utf8 [mysqld] init_connect='SET collation_connection = utf8_unicode_ci' init_connect='SET NAMES utf8' character-set-server=utf8 collation-server=utf8_unicode_ci skip-character-set-client-handshake skip-name-resolve server_id=1 log-bin=mysql-bin read-only=0 replicate-ignore-db=mysql replicate-ignore-db=sys replicate-ignore-db=information_schema replicate-ignore-db=performance_schema","head":[["meta",{"property":"og:url","content":"https://haijunit.top/blog/61.%E5%AE%B9%E5%99%A8%E6%8A%80%E6%9C%AF/62.kubernetes%E5%AE%9E%E6%88%98/30.MySQL%E4%B8%BB%E4%BB%8E.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"MySQL主从"}],["meta",{"property":"og:description","content":"MySQL 示例部署包含一个ConfigMap、两个存储挂载pv和pvc、两个 Service 与一个 StatefulSet。 ConfigMap cat mysql-master-cnf.yaml #master--my.cnf apiVersion: v1 kind: ConfigMap metadata: name: mysql-master-cnf namespace: bc-cnp data: my.cnf: |- [client] default-character-set=utf8 [mysql] default-character-set=utf8 [mysqld] init_connect='SET collation_connection = utf8_unicode_ci' init_connect='SET NAMES utf8' character-set-server=utf8 collation-server=utf8_unicode_ci skip-character-set-client-handshake skip-name-resolve server_id=1 log-bin=mysql-bin read-only=0 replicate-ignore-db=mysql replicate-ignore-db=sys replicate-ignore-db=information_schema replicate-ignore-db=performance_schema"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-23T07:13:54.000Z"}],["meta",{"property":"article:author","content":"知识库"}],["meta",{"property":"article:tag","content":"kubernetes实战"}],["meta",{"property":"article:published_time","content":"2023-02-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-23T07:13:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL主从\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-23T07:13:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"知识库\\",\\"url\\":\\"https://haijunit.top\\",\\"email\\":\\"zhanghaijun_java@163.com\\"}]}"]]},"headers":[{"level":2,"title":"ConfigMap","slug":"configmap","link":"#configmap","children":[]},{"level":2,"title":"pv和pvc","slug":"pv和pvc","link":"#pv和pvc","children":[]},{"level":2,"title":"Service","slug":"service","link":"#service","children":[]},{"level":2,"title":"StatefulSet","slug":"statefulset","link":"#statefulset","children":[]},{"level":2,"title":"主从同步","slug":"主从同步","link":"#主从同步","children":[]}],"git":{"createdTime":1684826034000,"updatedTime":1684826034000,"contributors":[{"name":"zhanghaijun","email":"zhanghaijun@bjtxra.com","commits":1}]},"readingTime":{"minutes":2.53,"words":760},"filePathRelative":"61.容器技术/62.kubernetes实战/30.MySQL主从.md","localizedDate":"2023年2月24日","excerpt":"\\n<blockquote>\\n<p>MySQL 示例部署包含一个ConfigMap、两个存储挂载pv和pvc、两个 Service 与一个 StatefulSet。</p>\\n</blockquote>\\n<h2> ConfigMap</h2>\\n<blockquote>\\n<p>cat mysql-master-cnf.yaml</p>\\n</blockquote>\\n<div class=\\"language-yaml line-numbers-mode\\" data-ext=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token comment\\">#master--my.cnf</span>\\n<span class=\\"token key atrule\\">apiVersion</span><span class=\\"token punctuation\\">:</span> v1\\n<span class=\\"token key atrule\\">kind</span><span class=\\"token punctuation\\">:</span> ConfigMap\\n<span class=\\"token key atrule\\">metadata</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">name</span><span class=\\"token punctuation\\">:</span> mysql<span class=\\"token punctuation\\">-</span>master<span class=\\"token punctuation\\">-</span>cnf\\n  <span class=\\"token key atrule\\">namespace</span><span class=\\"token punctuation\\">:</span> bc<span class=\\"token punctuation\\">-</span>cnp\\n<span class=\\"token key atrule\\">data</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">my.cnf</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">|</span><span class=\\"token punctuation\\">-</span>\\n    <span class=\\"token punctuation\\">[</span>client<span class=\\"token punctuation\\">]</span>\\n    default<span class=\\"token punctuation\\">-</span>character<span class=\\"token punctuation\\">-</span>set=utf8\\n    <span class=\\"token punctuation\\">[</span>mysql<span class=\\"token punctuation\\">]</span>\\n    default<span class=\\"token punctuation\\">-</span>character<span class=\\"token punctuation\\">-</span>set=utf8\\n    <span class=\\"token punctuation\\">[</span>mysqld<span class=\\"token punctuation\\">]</span>\\n    init_connect='SET collation_connection = utf8_unicode_ci'\\n    init_connect='SET NAMES utf8'\\n    character<span class=\\"token punctuation\\">-</span>set<span class=\\"token punctuation\\">-</span>server=utf8\\n    collation<span class=\\"token punctuation\\">-</span>server=utf8_unicode_ci\\n    skip<span class=\\"token punctuation\\">-</span>character<span class=\\"token punctuation\\">-</span>set<span class=\\"token punctuation\\">-</span>client<span class=\\"token punctuation\\">-</span>handshake\\n    skip<span class=\\"token punctuation\\">-</span>name<span class=\\"token punctuation\\">-</span>resolve\\n    server_id=1\\n    log<span class=\\"token punctuation\\">-</span>bin=mysql<span class=\\"token punctuation\\">-</span>bin\\n    read<span class=\\"token punctuation\\">-</span>only=0\\n    replicate<span class=\\"token punctuation\\">-</span>ignore<span class=\\"token punctuation\\">-</span>db=mysql\\n    replicate<span class=\\"token punctuation\\">-</span>ignore<span class=\\"token punctuation\\">-</span>db=sys\\n    replicate<span class=\\"token punctuation\\">-</span>ignore<span class=\\"token punctuation\\">-</span>db=information_schema\\n    replicate<span class=\\"token punctuation\\">-</span>ignore<span class=\\"token punctuation\\">-</span>db=performance_schema\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
