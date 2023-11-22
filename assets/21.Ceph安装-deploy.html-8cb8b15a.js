const e=JSON.parse('{"key":"v-96eb106a","path":"/62.%E9%9B%86%E6%88%90%E9%85%8D%E7%BD%AE/50.%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F/21.Ceph%E5%AE%89%E8%A3%85-deploy.html","title":"Ceph安装-deploy","lang":"zh-CN","frontmatter":{"title":"Ceph安装-deploy","date":"2023-02-20T16:07:59.000Z","star":true,"category":["集成配置","文件系统"],"tag":["OSS","Ceph"],"description":"[[toc]] 节点规划 主机名 public-ip cluster-ip 磁盘 角色 ------ ------------- ------------- ----------------------------------- --------------------------------------------------- ceph1 192....","head":[["meta",{"property":"og:url","content":"https://haijunit.top/62.%E9%9B%86%E6%88%90%E9%85%8D%E7%BD%AE/50.%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F/21.Ceph%E5%AE%89%E8%A3%85-deploy.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"Ceph安装-deploy"}],["meta",{"property":"og:description","content":"[[toc]] 节点规划 主机名 public-ip cluster-ip 磁盘 角色 ------ ------------- ------------- ----------------------------------- --------------------------------------------------- ceph1 192...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-23T07:13:54.000Z"}],["meta",{"property":"article:author","content":"知识库"}],["meta",{"property":"article:tag","content":"OSS"}],["meta",{"property":"article:tag","content":"Ceph"}],["meta",{"property":"article:published_time","content":"2023-02-20T16:07:59.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-23T07:13:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ceph安装-deploy\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-20T16:07:59.000Z\\",\\"dateModified\\":\\"2023-05-23T07:13:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"知识库\\",\\"url\\":\\"https://haijunit.top\\",\\"email\\":\\"zhanghaijun_java@163.com\\"}]}"]]},"headers":[{"level":2,"title":"节点规划","slug":"节点规划","link":"#节点规划","children":[{"level":3,"title":"节点角色","slug":"节点角色","link":"#节点角色","children":[]}]},{"level":2,"title":"系统配置","slug":"系统配置","link":"#系统配置","children":[{"level":3,"title":"网络设置","slug":"网络设置","link":"#网络设置","children":[]},{"level":3,"title":"host配置","slug":"host配置","link":"#host配置","children":[]},{"level":3,"title":"节点互信","slug":"节点互信","link":"#节点互信","children":[]},{"level":3,"title":"系统参数设置","slug":"系统参数设置","link":"#系统参数设置","children":[]},{"level":3,"title":"防火墙设置","slug":"防火墙设置","link":"#防火墙设置","children":[]},{"level":3,"title":"时间同步","slug":"时间同步","link":"#时间同步","children":[]},{"level":3,"title":"yum源设置","slug":"yum源设置","link":"#yum源设置","children":[]}]},{"level":2,"title":"创建用户","slug":"创建用户","link":"#创建用户","children":[]},{"level":2,"title":"安装Ceph","slug":"安装ceph","link":"#安装ceph","children":[{"level":3,"title":"配置ceph-deploy","slug":"配置ceph-deploy","link":"#配置ceph-deploy","children":[]},{"level":3,"title":"监控节点（monitor）","slug":"监控节点-monitor","link":"#监控节点-monitor","children":[]},{"level":3,"title":"管理服务（mgr）","slug":"管理服务-mgr","link":"#管理服务-mgr","children":[]},{"level":3,"title":"创建OSD","slug":"创建osd","link":"#创建osd","children":[]},{"level":3,"title":"创建MDS","slug":"创建mds","link":"#创建mds","children":[]},{"level":3,"title":"服务验证","slug":"服务验证","link":"#服务验证","children":[]}]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[{"level":3,"title":"CephFS文件系统","slug":"cephfs文件系统","link":"#cephfs文件系统","children":[]},{"level":3,"title":"对象存储","slug":"对象存储","link":"#对象存储","children":[]},{"level":3,"title":"块存储","slug":"块存储","link":"#块存储","children":[]}]}],"git":{"createdTime":1684826034000,"updatedTime":1684826034000,"contributors":[{"name":"zhanghaijun","email":"zhanghaijun@bjtxra.com","commits":1}]},"readingTime":{"minutes":9.63,"words":2889},"filePathRelative":"62.集成配置/50.文件系统/21.Ceph安装-deploy.md","localizedDate":"2023年2月21日","excerpt":"","autoDesc":true}');export{e as data};
