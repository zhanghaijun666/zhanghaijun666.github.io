const t=JSON.parse('{"key":"v-c59f1f94","path":"/81.%E6%95%B0%E6%8D%AE%E5%BA%93/20.MySQL/15.MySQL%E9%94%81.html","title":"MySQL锁","lang":"zh-CN","frontmatter":{"title":"MySQL锁","date":"2023-02-20T16:07:58.000Z","category":["数据库","MySQL"],"tag":["MySQL"],"description":"[[toc]] 按照锁的粒度来说，MySQL 主要包含三种类型（级别）的锁定机制： 全局锁：锁的是整个 database。由 MySQL 的 SQL layer 层实现的; 表级锁：锁的是某个 table。由 MySQL 的 SQL layer 层实现的; 行级锁：锁的是某行数据，也可能锁定行之间的间隙。由某些存储引擎实现，比如 InnoDB。; 按照...","head":[["meta",{"property":"og:url","content":"https://haijunit.top/blog/81.%E6%95%B0%E6%8D%AE%E5%BA%93/20.MySQL/15.MySQL%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"MySQL锁"}],["meta",{"property":"og:description","content":"[[toc]] 按照锁的粒度来说，MySQL 主要包含三种类型（级别）的锁定机制： 全局锁：锁的是整个 database。由 MySQL 的 SQL layer 层实现的; 表级锁：锁的是某个 table。由 MySQL 的 SQL layer 层实现的; 行级锁：锁的是某行数据，也可能锁定行之间的间隙。由某些存储引擎实现，比如 InnoDB。; 按照..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-23T07:13:54.000Z"}],["meta",{"property":"article:author","content":"知识库"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-02-20T16:07:58.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-23T07:13:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL锁\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-20T16:07:58.000Z\\",\\"dateModified\\":\\"2023-05-23T07:13:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"知识库\\",\\"url\\":\\"https://haijunit.top\\",\\"email\\":\\"zhanghaijun_java@163.com\\"}]}"]]},"headers":[{"level":2,"title":"全局锁","slug":"全局锁","link":"#全局锁","children":[]},{"level":2,"title":"MySQL 表级锁","slug":"mysql-表级锁","link":"#mysql-表级锁","children":[]},{"level":2,"title":"InnoDB 的行锁","slug":"innodb-的行锁","link":"#innodb-的行锁","children":[]},{"level":2,"title":"锁相关参数","slug":"锁相关参数","link":"#锁相关参数","children":[]},{"level":2,"title":"行锁分析实战","slug":"行锁分析实战","link":"#行锁分析实战","children":[]}],"git":{"createdTime":1684826034000,"updatedTime":1684826034000,"contributors":[{"name":"zhanghaijun","email":"zhanghaijun@bjtxra.com","commits":1}]},"readingTime":{"minutes":5.48,"words":1643},"filePathRelative":"81.数据库/20.MySQL/15.MySQL锁.md","localizedDate":"2023年2月21日","excerpt":"","autoDesc":true}');export{t as data};
