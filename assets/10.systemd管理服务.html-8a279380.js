const e=JSON.parse('{"key":"v-6c646072","path":"/80.%E8%BF%90%E7%BB%B4%E6%8A%80%E5%B7%A7/30.%E6%9C%8D%E5%8A%A1%E7%AE%A1%E7%90%86/10.systemd%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1.html","title":"systemd管理服务","lang":"zh-CN","frontmatter":{"title":"systemd管理服务","date":"2023-05-23T00:00:00.000Z","category":["运维技巧","服务管理"],"tag":["服务管理"],"description":"systemd 简介 Linux 从关闭到运行, 完整的启动和启动过程有三个主要部分: 硬件启动(Hardware boot): 初始化系统硬件 Linux 引导(Linux boot): 加载 Linux 内核，然后加载 systemd Linux 启动(Linux startup): systemd为主机做好生产性工作的准备 systemd 是一个软件套件, 充当系统和服务管理器, 软件平台, 以及作为应用程序和内核之间的粘合剂. 一般作为 PID 1 运行, 是引导期间启动的第一个进程, 也是关机期间终止的最后一个进程. 常见的发行版 Arch Linux, Debian, Ubuntu, Dedora 等都启用了 systemd.","head":[["meta",{"property":"og:url","content":"https://haijunit.top/80.%E8%BF%90%E7%BB%B4%E6%8A%80%E5%B7%A7/30.%E6%9C%8D%E5%8A%A1%E7%AE%A1%E7%90%86/10.systemd%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"systemd管理服务"}],["meta",{"property":"og:description","content":"systemd 简介 Linux 从关闭到运行, 完整的启动和启动过程有三个主要部分: 硬件启动(Hardware boot): 初始化系统硬件 Linux 引导(Linux boot): 加载 Linux 内核，然后加载 systemd Linux 启动(Linux startup): systemd为主机做好生产性工作的准备 systemd 是一个软件套件, 充当系统和服务管理器, 软件平台, 以及作为应用程序和内核之间的粘合剂. 一般作为 PID 1 运行, 是引导期间启动的第一个进程, 也是关机期间终止的最后一个进程. 常见的发行版 Arch Linux, Debian, Ubuntu, Dedora 等都启用了 systemd."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-23T07:13:54.000Z"}],["meta",{"property":"article:author","content":"知识库"}],["meta",{"property":"article:tag","content":"服务管理"}],["meta",{"property":"article:published_time","content":"2023-05-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-23T07:13:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"systemd管理服务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-23T07:13:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"知识库\\",\\"url\\":\\"https://haijunit.top\\",\\"email\\":\\"zhanghaijun_java@163.com\\"}]}"]]},"headers":[{"level":2,"title":"systemd 简介","slug":"systemd-简介","link":"#systemd-简介","children":[]},{"level":2,"title":"journalctl","slug":"journalctl","link":"#journalctl","children":[]},{"level":2,"title":"hello service","slug":"hello-service","link":"#hello-service","children":[{"level":3,"title":"小结一下","slug":"小结一下","link":"#小结一下","children":[]}]},{"level":2,"title":"Sleep 与 Timeout 测试","slug":"sleep-与-timeout-测试","link":"#sleep-与-timeout-测试","children":[]},{"level":2,"title":"Requires 测试","slug":"requires-测试","link":"#requires-测试","children":[]},{"level":2,"title":"After 测试","slug":"after-测试","link":"#after-测试","children":[]}],"git":{"createdTime":1684826034000,"updatedTime":1684826034000,"contributors":[{"name":"zhanghaijun","email":"zhanghaijun@bjtxra.com","commits":1}]},"readingTime":{"minutes":10.01,"words":3004},"filePathRelative":"80.运维技巧/30.服务管理/10.systemd管理服务.md","localizedDate":"2023年5月23日","excerpt":"\\n<h2> systemd 简介</h2>\\n<p>Linux 从关闭到运行, 完整的启动和启动过程有三个主要部分:</p>\\n<ul>\\n<li>硬件启动(Hardware boot): 初始化系统硬件</li>\\n<li>Linux 引导(Linux boot): 加载 Linux 内核，然后加载 systemd</li>\\n<li>Linux 启动(Linux startup): systemd为主机做好生产性工作的准备</li>\\n</ul>\\n<p>systemd 是一个软件套件, 充当系统和服务管理器, 软件平台, 以及作为应用程序和内核之间的粘合剂. 一般作为 PID 1 运行, 是引导期间启动的第一个进程, 也是关机期间终止的最后一个进程. 常见的发行版 Arch Linux, Debian, Ubuntu, Dedora 等都启用了 systemd.</p>","autoDesc":true}');export{e as data};
