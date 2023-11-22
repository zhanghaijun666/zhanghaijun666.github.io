const t=JSON.parse('{"key":"v-744450ed","path":"/60.%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/20.%E4%BB%A3%E7%A0%81%E8%B4%A8%E9%87%8F/10.%E6%9D%83%E9%99%90%E6%A8%A1%E5%9E%8B%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%88%E8%AF%A6%E8%A7%A3.html","title":"权限模型设计方案详解","lang":"zh-CN","frontmatter":{"title":"权限模型设计方案详解","date":"2023-02-28T00:00:00.000Z","category":["项目管理","代码质量"],"tag":["代码质量"],"description":"[[toc]] 1 为什么需要权限管理 日常工作中权限的问题时时刻刻伴随着我们，程序员新入职一家公司需要找人开通各种权限，比如网络连接的权限、编码下载提交的权限、监控平台登录的权限、运营平台查数据的权限等等。 在很多时候我们会觉得这么多繁杂的申请给工作带来不便，并且如果突然想要查一些数据，发现没有申请过权限，需要再走审批流程，时间拉得会很长。那为什么还...","head":[["meta",{"property":"og:url","content":"https://haijunit.top/60.%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/20.%E4%BB%A3%E7%A0%81%E8%B4%A8%E9%87%8F/10.%E6%9D%83%E9%99%90%E6%A8%A1%E5%9E%8B%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%88%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"权限模型设计方案详解"}],["meta",{"property":"og:description","content":"[[toc]] 1 为什么需要权限管理 日常工作中权限的问题时时刻刻伴随着我们，程序员新入职一家公司需要找人开通各种权限，比如网络连接的权限、编码下载提交的权限、监控平台登录的权限、运营平台查数据的权限等等。 在很多时候我们会觉得这么多繁杂的申请给工作带来不便，并且如果突然想要查一些数据，发现没有申请过权限，需要再走审批流程，时间拉得会很长。那为什么还..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://haijunit.top/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-23T07:13:54.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"权限模型设计方案详解"}],["meta",{"property":"article:author","content":"知识库"}],["meta",{"property":"article:tag","content":"代码质量"}],["meta",{"property":"article:published_time","content":"2023-02-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-23T07:13:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"权限模型设计方案详解\\",\\"image\\":[\\"https://haijunit.top/\\"],\\"datePublished\\":\\"2023-02-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-23T07:13:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"知识库\\",\\"url\\":\\"https://haijunit.top\\",\\"email\\":\\"zhanghaijun_java@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1 为什么需要权限管理","slug":"_1-为什么需要权限管理","link":"#_1-为什么需要权限管理","children":[]},{"level":2,"title":"2 权限模型","slug":"_2-权限模型","link":"#_2-权限模型","children":[{"level":3,"title":"2.1 权限设计","slug":"_2-1-权限设计","link":"#_2-1-权限设计","children":[]},{"level":3,"title":"2.2 主流的权限模型","slug":"_2-2-主流的权限模型","link":"#_2-2-主流的权限模型","children":[]}]},{"level":2,"title":"2.2 为什么需要角色","slug":"_2-2-为什么需要角色","link":"#_2-2-为什么需要角色","children":[{"level":3,"title":"2.3 权限模型的演进","slug":"_2-3-权限模型的演进","link":"#_2-3-权限模型的演进","children":[]},{"level":3,"title":"2.4 用户划分","slug":"_2-4-用户划分","link":"#_2-4-用户划分","children":[]},{"level":3,"title":"2.5 理想的RBAC模型","slug":"_2-5-理想的rbac模型","link":"#_2-5-理想的rbac模型","children":[]}]},{"level":2,"title":"3 权限系统表设计","slug":"_3-权限系统表设计","link":"#_3-权限系统表设计","children":[{"level":3,"title":"3.1 标准RBAC模型表设计","slug":"_3-1-标准rbac模型表设计","link":"#_3-1-标准rbac模型表设计","children":[]},{"level":3,"title":"3.2 理想RBAC模型表设计","slug":"_3-2-理想rbac模型表设计","link":"#_3-2-理想rbac模型表设计","children":[]}]},{"level":2,"title":"4 结语","slug":"_4-结语","link":"#_4-结语","children":[]}],"git":{"createdTime":1684826034000,"updatedTime":1684826034000,"contributors":[{"name":"zhanghaijun","email":"zhanghaijun@bjtxra.com","commits":1}]},"readingTime":{"minutes":14.73,"words":4420},"filePathRelative":"60.项目管理/20.代码质量/10.权限模型设计方案详解.md","localizedDate":"2023年2月28日","excerpt":"","autoDesc":true}');export{t as data};
