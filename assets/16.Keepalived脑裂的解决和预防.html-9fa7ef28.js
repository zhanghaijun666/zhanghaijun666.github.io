const s=JSON.parse(`{"key":"v-c3a90c0e","path":"/62.%E9%9B%86%E6%88%90%E9%85%8D%E7%BD%AE/31.Nginx/16.Keepalived%E8%84%91%E8%A3%82%E7%9A%84%E8%A7%A3%E5%86%B3%E5%92%8C%E9%A2%84%E9%98%B2.html","title":"Keepalived脑裂的解决和预防","lang":"zh-CN","frontmatter":{"title":"Keepalived脑裂的解决和预防","date":"2023-05-16T00:00:00.000Z","category":["集成配置","Nginx"],"tag":["Nginx"],"description":"Keepalived脑裂的解决和预防 #!/bin/bash export PATH=$PATH:/usr/sbin ## 脑裂检查及控制：第三方仲裁机制，使用ping网关ip方式 ## 循环次数 CHECK_TIME=3 ## 虚拟ip VIP=$1 ## 网关ip(根据实际环境修改) GATEWAY=192.168.1.8 ## 本机网卡 eth=enp2s0 ## 服务器和网关通信状态 0=失败，1=成功 keepalived_communication_status=1 ## 是否获取vip状态 0=失败，1=成功 get_vip_status=1 ## keepalived服务状态 0=未运行，1=运行中 keepalived_service_status=1 ## 服务状态运行中字符串 active_status_str='active (running)' echo \\"开始执行脚本 check_gateway.sh $VIP；时间:\\" date ## 查看是否获取vip状态 function check_get_vip_status() { ## 通过ip add命令查看ip信息，搜索$VIP，统计行数，是否等于1 if [ $(ip add | grep \\"$VIP\\" | wc -l) -eq 1 ]; then get_vip_status=1 else get_vip_status=0 fi return $get_vip_status } ## 检查通信状态 function check_keepalived_status() { ## 检测$VIP 能否ping通$GATEWAY：使用$eth网络设备（-I $eth），发送数据包5（-c 5），源地址$VIP询问目的地[vip] $GATEWAY [网关地址 公用参考ip]（-s $VIP $GATEWAY） 日志不保存 &gt;/dev/null 2&gt;&amp;1 /sbin/arping -I $eth -c 5 -s $VIP $GATEWAY &gt;/dev/null 2&gt;&amp;1 ## 判断上一步执行结果 等于0成功 if [ $? = 0 ]; then keepalived_communication_status=1 else keepalived_communication_status=0 fi return $keepalived_communication_status } ## 检查keepalived服务状态 function check_keepalived_service_status() { ## 通过systemctl status keepalived.service命令查看keepalived服务状态，搜索$active_status_str，统计行数，是否等于1 if [ $(systemctl status keepalived.service | grep \\"$active_status_str\\" | wc -l) -eq 1 ]; then keepalived_service_status=1 else keepalived_service_status=0 fi return $keepalived_service_status } ## 循环执行 ## 判断$CHECK_TIME 不等于 0 while [ $CHECK_TIME -ne 0 ]; do ## 执行check_get_vip_status获取get_vip_status check_get_vip_status ## 未获取vip if [ $get_vip_status = 0 ]; then ## 修改CHECK_TIME值 结束循环 CHECK_TIME=0 ## 检查服务状态 执行check_keepalived_service_status获取keepalived_service_status if [ $keepalived_service_status = 0 ]; then echo \\"执行脚本 check_gateway.sh $VIP；启动keepalived服务\\" systemctl start keepalived.service fi echo \\"执行脚本 check_gateway.sh $VIP；执行结果：未获取vip，无需处理，脚本执行结束，时间:\\" date ## 正常运行程序并退出程序 exit 0 fi ## $CHECK_TIME = $CHECK_TIME-1 let \\"CHECK_TIME -= 1\\" ## 执行check_keepalived_status获取keepalived_communication_status check_keepalived_status ## 判断 $keepalived_communication_status = 1 通信成功 if [ $keepalived_communication_status = 1 ]; then ## 修改CHECK_TIME值 结束循环 CHECK_TIME=0 ## 检查服务状态 执行check_keepalived_service_status获取keepalived_service_status check_keepalived_service_status if [ $keepalived_service_status = 0 ]; then echo \\"执行脚本 check_gateway.sh $VIP；启动keepalived服务\\" systemctl start keepalived.service fi echo \\"执行脚本 check_gateway.sh $VIP；GATEWAY=$GATEWAY，执行结果：通信正常，无需处理，脚本执行结束，时间:\\" date ## 正常运行程序并退出程序 exit 0 fi ## 通信失败&amp;&amp;连续3次 if [ $keepalived_communication_status -eq 0 ] &amp;&amp; [ $CHECK_TIME -eq 0 ]; then ## 关闭keepalived echo \\"执行脚本 check_gateway.sh $VIP；关闭keepalived服务\\" systemctl stop keepalived.service echo \\"执行脚本 check_gateway.sh $VIP；GATEWAY=$GATEWAY，执行结果：通信失败&amp;&amp;连续3次 关闭keepalived，脚本执行结束，时间:\\" date ## 非正常运行程序并退出程序 exit 1 fi sleep 3 done","head":[["meta",{"property":"og:url","content":"https://haijunit.top/62.%E9%9B%86%E6%88%90%E9%85%8D%E7%BD%AE/31.Nginx/16.Keepalived%E8%84%91%E8%A3%82%E7%9A%84%E8%A7%A3%E5%86%B3%E5%92%8C%E9%A2%84%E9%98%B2.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"Keepalived脑裂的解决和预防"}],["meta",{"property":"og:description","content":"Keepalived脑裂的解决和预防 #!/bin/bash export PATH=$PATH:/usr/sbin ## 脑裂检查及控制：第三方仲裁机制，使用ping网关ip方式 ## 循环次数 CHECK_TIME=3 ## 虚拟ip VIP=$1 ## 网关ip(根据实际环境修改) GATEWAY=192.168.1.8 ## 本机网卡 eth=enp2s0 ## 服务器和网关通信状态 0=失败，1=成功 keepalived_communication_status=1 ## 是否获取vip状态 0=失败，1=成功 get_vip_status=1 ## keepalived服务状态 0=未运行，1=运行中 keepalived_service_status=1 ## 服务状态运行中字符串 active_status_str='active (running)' echo \\"开始执行脚本 check_gateway.sh $VIP；时间:\\" date ## 查看是否获取vip状态 function check_get_vip_status() { ## 通过ip add命令查看ip信息，搜索$VIP，统计行数，是否等于1 if [ $(ip add | grep \\"$VIP\\" | wc -l) -eq 1 ]; then get_vip_status=1 else get_vip_status=0 fi return $get_vip_status } ## 检查通信状态 function check_keepalived_status() { ## 检测$VIP 能否ping通$GATEWAY：使用$eth网络设备（-I $eth），发送数据包5（-c 5），源地址$VIP询问目的地[vip] $GATEWAY [网关地址 公用参考ip]（-s $VIP $GATEWAY） 日志不保存 &gt;/dev/null 2&gt;&amp;1 /sbin/arping -I $eth -c 5 -s $VIP $GATEWAY &gt;/dev/null 2&gt;&amp;1 ## 判断上一步执行结果 等于0成功 if [ $? = 0 ]; then keepalived_communication_status=1 else keepalived_communication_status=0 fi return $keepalived_communication_status } ## 检查keepalived服务状态 function check_keepalived_service_status() { ## 通过systemctl status keepalived.service命令查看keepalived服务状态，搜索$active_status_str，统计行数，是否等于1 if [ $(systemctl status keepalived.service | grep \\"$active_status_str\\" | wc -l) -eq 1 ]; then keepalived_service_status=1 else keepalived_service_status=0 fi return $keepalived_service_status } ## 循环执行 ## 判断$CHECK_TIME 不等于 0 while [ $CHECK_TIME -ne 0 ]; do ## 执行check_get_vip_status获取get_vip_status check_get_vip_status ## 未获取vip if [ $get_vip_status = 0 ]; then ## 修改CHECK_TIME值 结束循环 CHECK_TIME=0 ## 检查服务状态 执行check_keepalived_service_status获取keepalived_service_status if [ $keepalived_service_status = 0 ]; then echo \\"执行脚本 check_gateway.sh $VIP；启动keepalived服务\\" systemctl start keepalived.service fi echo \\"执行脚本 check_gateway.sh $VIP；执行结果：未获取vip，无需处理，脚本执行结束，时间:\\" date ## 正常运行程序并退出程序 exit 0 fi ## $CHECK_TIME = $CHECK_TIME-1 let \\"CHECK_TIME -= 1\\" ## 执行check_keepalived_status获取keepalived_communication_status check_keepalived_status ## 判断 $keepalived_communication_status = 1 通信成功 if [ $keepalived_communication_status = 1 ]; then ## 修改CHECK_TIME值 结束循环 CHECK_TIME=0 ## 检查服务状态 执行check_keepalived_service_status获取keepalived_service_status check_keepalived_service_status if [ $keepalived_service_status = 0 ]; then echo \\"执行脚本 check_gateway.sh $VIP；启动keepalived服务\\" systemctl start keepalived.service fi echo \\"执行脚本 check_gateway.sh $VIP；GATEWAY=$GATEWAY，执行结果：通信正常，无需处理，脚本执行结束，时间:\\" date ## 正常运行程序并退出程序 exit 0 fi ## 通信失败&amp;&amp;连续3次 if [ $keepalived_communication_status -eq 0 ] &amp;&amp; [ $CHECK_TIME -eq 0 ]; then ## 关闭keepalived echo \\"执行脚本 check_gateway.sh $VIP；关闭keepalived服务\\" systemctl stop keepalived.service echo \\"执行脚本 check_gateway.sh $VIP；GATEWAY=$GATEWAY，执行结果：通信失败&amp;&amp;连续3次 关闭keepalived，脚本执行结束，时间:\\" date ## 非正常运行程序并退出程序 exit 1 fi sleep 3 done"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-23T07:13:54.000Z"}],["meta",{"property":"article:author","content":"知识库"}],["meta",{"property":"article:tag","content":"Nginx"}],["meta",{"property":"article:published_time","content":"2023-05-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-23T07:13:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Keepalived脑裂的解决和预防\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-23T07:13:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"知识库\\",\\"url\\":\\"https://haijunit.top\\",\\"email\\":\\"zhanghaijun_java@163.com\\"}]}"]]},"headers":[{"level":2,"title":"Keepalived脑裂的解决和预防","slug":"keepalived脑裂的解决和预防","link":"#keepalived脑裂的解决和预防","children":[]}],"git":{"createdTime":1684826034000,"updatedTime":1684826034000,"contributors":[{"name":"zhanghaijun","email":"zhanghaijun@bjtxra.com","commits":1}]},"readingTime":{"minutes":2.28,"words":683},"filePathRelative":"62.集成配置/31.Nginx/16.Keepalived脑裂的解决和预防.md","localizedDate":"2023年5月16日","excerpt":"<h2> Keepalived脑裂的解决和预防</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/bin/bash</span>\\n<span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\"><span class=\\"token environment constant\\">PATH</span></span><span class=\\"token operator\\">=</span><span class=\\"token environment constant\\">$PATH</span>:/usr/sbin\\n<span class=\\"token comment\\">## 脑裂检查及控制：第三方仲裁机制，使用ping网关ip方式</span>\\n<span class=\\"token comment\\">## 循环次数</span>\\n<span class=\\"token assign-left variable\\">CHECK_TIME</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">3</span>\\n<span class=\\"token comment\\">## 虚拟ip</span>\\n<span class=\\"token assign-left variable\\">VIP</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">$1</span>\\n<span class=\\"token comment\\">## 网关ip(根据实际环境修改)</span>\\n<span class=\\"token assign-left variable\\">GATEWAY</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">192.168</span>.1.8\\n<span class=\\"token comment\\">## 本机网卡</span>\\n<span class=\\"token assign-left variable\\">eth</span><span class=\\"token operator\\">=</span>enp2s0\\n<span class=\\"token comment\\">## 服务器和网关通信状态  0=失败，1=成功</span>\\n<span class=\\"token assign-left variable\\">keepalived_communication_status</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span>\\n<span class=\\"token comment\\">## 是否获取vip状态 0=失败，1=成功</span>\\n<span class=\\"token assign-left variable\\">get_vip_status</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span>\\n<span class=\\"token comment\\">## keepalived服务状态 0=未运行，1=运行中</span>\\n<span class=\\"token assign-left variable\\">keepalived_service_status</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span>\\n<span class=\\"token comment\\">## 服务状态运行中字符串</span>\\n<span class=\\"token assign-left variable\\">active_status_str</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">'active (running)'</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"开始执行脚本 check_gateway.sh <span class=\\"token variable\\">$VIP</span>；时间:\\"</span>\\n<span class=\\"token function\\">date</span>\\n<span class=\\"token comment\\">## 查看是否获取vip状态</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function-name function\\">check_get_vip_status</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">## 通过ip add命令查看ip信息，搜索$VIP，统计行数，是否等于1</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">ip</span> <span class=\\"token function\\">add</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">grep</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$VIP</span>\\"</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">wc</span> <span class=\\"token parameter variable\\">-l</span><span class=\\"token variable\\">)</span></span> <span class=\\"token parameter variable\\">-eq</span> <span class=\\"token number\\">1</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n    <span class=\\"token assign-left variable\\">get_vip_status</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span>\\n  <span class=\\"token keyword\\">else</span>\\n    <span class=\\"token assign-left variable\\">get_vip_status</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span>\\n  <span class=\\"token keyword\\">fi</span>\\n  <span class=\\"token builtin class-name\\">return</span> <span class=\\"token variable\\">$get_vip_status</span>\\n<span class=\\"token punctuation\\">}</span>\\n \\n<span class=\\"token comment\\">## 检查通信状态</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function-name function\\">check_keepalived_status</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">## 检测$VIP 能否ping通$GATEWAY：使用$eth网络设备（-I $eth），发送数据包5（-c 5），源地址$VIP询问目的地[vip] $GATEWAY [网关地址 公用参考ip]（-s $VIP $GATEWAY） 日志不保存 &gt;/dev/null 2&gt;&amp;1</span>\\n  /sbin/arping <span class=\\"token parameter variable\\">-I</span> <span class=\\"token variable\\">$eth</span> <span class=\\"token parameter variable\\">-c</span> <span class=\\"token number\\">5</span> <span class=\\"token parameter variable\\">-s</span> <span class=\\"token variable\\">$VIP</span> <span class=\\"token variable\\">$GATEWAY</span> <span class=\\"token operator\\">&gt;</span>/dev/null <span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">2</span>&gt;</span><span class=\\"token file-descriptor important\\">&amp;1</span>\\n  <span class=\\"token comment\\">## 判断上一步执行结果 等于0成功</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$?</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n    <span class=\\"token assign-left variable\\">keepalived_communication_status</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span>\\n  <span class=\\"token keyword\\">else</span>\\n    <span class=\\"token assign-left variable\\">keepalived_communication_status</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span>\\n  <span class=\\"token keyword\\">fi</span>\\n  <span class=\\"token builtin class-name\\">return</span> <span class=\\"token variable\\">$keepalived_communication_status</span>\\n<span class=\\"token punctuation\\">}</span>\\n \\n<span class=\\"token comment\\">## 检查keepalived服务状态</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function-name function\\">check_keepalived_service_status</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">## 通过systemctl status keepalived.service命令查看keepalived服务状态，搜索$active_status_str，统计行数，是否等于1</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\"><span class=\\"token variable\\">$(</span>systemctl status keepalived.service <span class=\\"token operator\\">|</span> <span class=\\"token function\\">grep</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$active_status_str</span>\\"</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">wc</span> <span class=\\"token parameter variable\\">-l</span><span class=\\"token variable\\">)</span></span> <span class=\\"token parameter variable\\">-eq</span> <span class=\\"token number\\">1</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n    <span class=\\"token assign-left variable\\">keepalived_service_status</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span>\\n  <span class=\\"token keyword\\">else</span>\\n    <span class=\\"token assign-left variable\\">keepalived_service_status</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span>\\n  <span class=\\"token keyword\\">fi</span>\\n  <span class=\\"token builtin class-name\\">return</span> <span class=\\"token variable\\">$keepalived_service_status</span>\\n<span class=\\"token punctuation\\">}</span>\\n \\n<span class=\\"token comment\\">## 循环执行</span>\\n<span class=\\"token comment\\">## 判断$CHECK_TIME 不等于 0</span>\\n<span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$CHECK_TIME</span> <span class=\\"token parameter variable\\">-ne</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">do</span>\\n  <span class=\\"token comment\\">## 执行check_get_vip_status获取get_vip_status</span>\\n  check_get_vip_status\\n  <span class=\\"token comment\\">## 未获取vip</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$get_vip_status</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n    <span class=\\"token comment\\">## 修改CHECK_TIME值 结束循环</span>\\n    <span class=\\"token assign-left variable\\">CHECK_TIME</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span>\\n    <span class=\\"token comment\\">## 检查服务状态 执行check_keepalived_service_status获取keepalived_service_status</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$keepalived_service_status</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n      <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"执行脚本 check_gateway.sh <span class=\\"token variable\\">$VIP</span>；启动keepalived服务\\"</span>\\n      systemctl start keepalived.service\\n    <span class=\\"token keyword\\">fi</span>\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"执行脚本 check_gateway.sh <span class=\\"token variable\\">$VIP</span>；执行结果：未获取vip，无需处理，脚本执行结束，时间:\\"</span>\\n    <span class=\\"token function\\">date</span>\\n    <span class=\\"token comment\\">## 正常运行程序并退出程序</span>\\n    <span class=\\"token builtin class-name\\">exit</span> <span class=\\"token number\\">0</span>\\n  <span class=\\"token keyword\\">fi</span>\\n  <span class=\\"token comment\\">## $CHECK_TIME  = $CHECK_TIME-1</span>\\n  <span class=\\"token builtin class-name\\">let</span> <span class=\\"token string\\">\\"CHECK_TIME -= 1\\"</span>\\n  <span class=\\"token comment\\">## 执行check_keepalived_status获取keepalived_communication_status</span>\\n  check_keepalived_status\\n  <span class=\\"token comment\\">## 判断 $keepalived_communication_status = 1 通信成功</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$keepalived_communication_status</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n    <span class=\\"token comment\\">## 修改CHECK_TIME值 结束循环</span>\\n    <span class=\\"token assign-left variable\\">CHECK_TIME</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span>\\n    <span class=\\"token comment\\">## 检查服务状态 执行check_keepalived_service_status获取keepalived_service_status</span>\\n    check_keepalived_service_status\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$keepalived_service_status</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n      <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"执行脚本 check_gateway.sh <span class=\\"token variable\\">$VIP</span>；启动keepalived服务\\"</span>\\n      systemctl start keepalived.service\\n    <span class=\\"token keyword\\">fi</span>\\n \\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"执行脚本 check_gateway.sh <span class=\\"token variable\\">$VIP</span>；GATEWAY=<span class=\\"token variable\\">$GATEWAY</span>，执行结果：通信正常，无需处理，脚本执行结束，时间:\\"</span>\\n    <span class=\\"token function\\">date</span>\\n    <span class=\\"token comment\\">## 正常运行程序并退出程序</span>\\n    <span class=\\"token builtin class-name\\">exit</span> <span class=\\"token number\\">0</span>\\n  <span class=\\"token keyword\\">fi</span>\\n  <span class=\\"token comment\\">## 通信失败&amp;&amp;连续3次</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$keepalived_communication_status</span> <span class=\\"token parameter variable\\">-eq</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$CHECK_TIME</span> <span class=\\"token parameter variable\\">-eq</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n    <span class=\\"token comment\\">## 关闭keepalived</span>\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"执行脚本 check_gateway.sh <span class=\\"token variable\\">$VIP</span>；关闭keepalived服务\\"</span>\\n    systemctl stop keepalived.service\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"执行脚本 check_gateway.sh <span class=\\"token variable\\">$VIP</span>；GATEWAY=<span class=\\"token variable\\">$GATEWAY</span>，执行结果：通信失败&amp;&amp;连续3次 关闭keepalived，脚本执行结束，时间:\\"</span>\\n    <span class=\\"token function\\">date</span>\\n    <span class=\\"token comment\\">## 非正常运行程序并退出程序</span>\\n    <span class=\\"token builtin class-name\\">exit</span> <span class=\\"token number\\">1</span>\\n  <span class=\\"token keyword\\">fi</span>\\n  <span class=\\"token function\\">sleep</span> <span class=\\"token number\\">3</span>\\n<span class=\\"token keyword\\">done</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{s as data};
