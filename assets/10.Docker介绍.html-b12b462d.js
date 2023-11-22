import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as p,e as d,a as n,d as s,w as t,b as a,f as c}from"./app-d6438571.js";const k={},u={class:"table-of-contents"},m=c('<h2 id="讲个故事" tabindex="-1"><a class="header-anchor" href="#讲个故事" aria-hidden="true">#</a> 讲个故事</h2><blockquote><p>为了更好的理解 Docker 是什么，我们先来讲个故事：</p><p>我需要盖一个房子，于是我搬石头、砍木头、画图纸、盖房子。一顿操作，终于把这个房子盖好了。</p><p>结果，住了一段时间，心血来潮想搬到海边去。这时候按以往的办法，我只能去海边，再次搬石头、砍木头、画图纸、盖房子。</p><p>烦恼之际，跑来一个魔法师教会我一种魔法。这种魔法可以把我盖好的房子复制一份，做成「镜像」，放在我的背包里。<br> 等我到了海边，就用这个「镜像」，复制一套房子，拎包入住。</p><p>是不是很神奇？对应到我们的项目中来，房子就是项目本身，镜像就是项目的复制，背包就是镜像仓库。</p><p>如果要动态扩容，从仓库中取出项目镜像，随便复制就可以了。Build once，Run anywhere!</p><p>不用再关注版本、兼容、部署等问题，彻底解决了「上线即崩，无休止构建」的尴尬。</p></blockquote><h2 id="相关地址" tabindex="-1"><a class="header-anchor" href="#相关地址" aria-hidden="true">#</a> 相关地址</h2>',3),v={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://dockerdocs.cn/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},_=c('<h2 id="什么是docker" tabindex="-1"><a class="header-anchor" href="#什么是docker" aria-hidden="true">#</a> 什么是Docker</h2><ul><li>Docker 是一个开源的应用容器引擎，基于go 语言开发并遵循了apache2.0 协议开源</li><li>Docker 是在Linux 容器里运行应用的开源工具，是一种轻量级的“虚拟机”</li><li>Docker 的容器技术可以在一台主机上轻松为任何应用创建一个轻量级的，可移植的，自给自足的容器</li></ul><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><ul><li>Web 应用的自动化打包和发布。</li><li>自动化测试和持续集成、发布。</li><li>在服务型环境中部署和调整数据库或其他的后台应用。</li><li>Docker 是一个用于开发，交付和运行应用程序的开放平台。</li></ul><h2 id="docker优点" tabindex="-1"><a class="header-anchor" href="#docker优点" aria-hidden="true">#</a> Docker优点</h2><ul><li><code>灵活</code>：即使是最复杂的应用也可以集装箱化。</li><li><code>轻量级</code>：容器利用并共享主机内核。</li><li><code>可互换</code>：可以即时部署更新和升级。</li><li><code>便携式</code>：可以在本地构建，部署到云，并在任何地方运行。</li><li><code>可扩展</code>：可以增加并白动分发容器副本。</li><li><code>可堆叠</code>：可以垂直和即时堆叠服务。</li></ul><h2 id="docker三大核心" tabindex="-1"><a class="header-anchor" href="#docker三大核心" aria-hidden="true">#</a> Docker三大核心</h2>',7),g=n("li",null,[n("p",null,"镜像"),n("blockquote",null,[n("p",null,"Docker的镜像是创建容器的基础，类似虚拟机的快照，可以理解为一个面向Docker容器引擎的只读模板。")])],-1),x=n("li",null,[n("p",null,"容器"),n("blockquote",null,[n("p",null,"Docker的容器是从镜像创建的运行实例，它可以被启动、停止和删除。所创建的每一个容器都是相互隔离、互不可见，以保证平台的安全性。可以把容器看做是一个简易版的linux环境（包括root用户权限、镜像空间、用户空间和网络空间等）和运行在其中的应用程序。")])],-1),D=n("p",null,"仓库",-1),y=n("p",null,"仓库注册服务器上往往存放着多个仓库，每个仓库中包含了多个镜像，每个镜像有不同标签（tag）。",-1),w=n("p",null,"仓库分为公开仓库（Public）和私有仓库（Private）两种形式。",-1),q={href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"},I=c(`<h2 id="网络模式" tabindex="-1"><a class="header-anchor" href="#网络模式" aria-hidden="true">#</a> 网络模式</h2><table><thead><tr><th style="text-align:left;">网络模式</th><th style="text-align:left;">配置</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">host</td><td style="text-align:left;">--network host</td><td style="text-align:left;">容器和宿主机共享 Network namespace</td></tr><tr><td style="text-align:left;">container</td><td style="text-align:left;">--network container:NAME_OR_ID</td><td style="text-align:left;">容器和另外一个容器共享 Network namespace</td></tr><tr><td style="text-align:left;">none</td><td style="text-align:left;">--network none</td><td style="text-align:left;">容器有独立的 Network namespace，但并没有对其进行任何网络设置，如分配 veth pair 和网桥连接，配置 IP 等</td></tr><tr><td style="text-align:left;">bridge</td><td style="text-align:left;">--network</td><td style="text-align:left;">bridge 默认模式</td></tr></tbody></table><h2 id="docker的数据卷" tabindex="-1"><a class="header-anchor" href="#docker的数据卷" aria-hidden="true">#</a> Docker的数据卷</h2><blockquote><p>数据卷是一个供容器使用的特殊目录，位于容器中。可将宿主机的目录挂载到数据卷上，对数据卷的修改操作立刻可见，并且更新数据不会影响镜像，从而实现数据在宿主机与容器之间的迁移。</p></blockquote><h2 id="docker容器" tabindex="-1"><a class="header-anchor" href="#docker容器" aria-hidden="true">#</a> Docker容器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## docker images   --镜像</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> centos7.8 <span class="token parameter variable">-h</span> centos7.8 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">220</span>:22 <span class="token parameter variable">-p</span> <span class="token number">3387</span>:3389 <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
centos:7.8.2003 /usr/sbin/init

<span class="token comment">## 我想拥有一个 linux 8.2 的环境</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> centos8.2 <span class="token parameter variable">-h</span> centos8.2 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">230</span>:22 <span class="token parameter variable">-p</span> <span class="token number">3386</span>:3389 <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
daocloud.io/library/centos:8.2.2004 init

<span class="token comment">## 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> centos7.8 <span class="token function">bash</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> centos8.2 <span class="token function">bash</span>
<span class="token comment">## --查看系统版本</span>
<span class="token function">cat</span> /etc/redhat-release    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-基本命令" tabindex="-1"><a class="header-anchor" href="#docker-基本命令" aria-hidden="true">#</a> docker 基本命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search tomcat                        <span class="token comment"># 搜索tomcat镜像</span>
<span class="token function">docker</span> pull centos:7                        <span class="token comment"># 拉取centos镜像</span>
<span class="token function">docker</span> inspect 容器名称或者容器ID           <span class="token comment"># 查看容器详情</span>
<span class="token function">docker</span> <span class="token function">ps</span>                                   <span class="token comment"># 查看正在运行的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span>                               <span class="token comment"># 列出所有容器ID</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>                                <span class="token comment"># 查看所有运行或者不运行容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-l</span>                                <span class="token comment"># 查看最近运行过的容器</span>
<span class="token function">docker</span> stop <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>              <span class="token comment"># 停止所有的container（容器），这样才能够删除其中的images：</span>
<span class="token function">docker</span> stop <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>                <span class="token comment"># 删除所有container（容器）的话再加一个指令</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>
<span class="token function">docker</span> images                               <span class="token comment"># 查看当前有些什么images</span>
<span class="token function">docker</span> rmi <span class="token operator">&lt;</span>image id<span class="token operator">&gt;</span>                       <span class="token comment"># 删除images（镜像），通过image的id来指定删除谁</span>
<span class="token comment"># 删除untagged images，也就是那些id为的image的话可以用</span>
<span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;^&lt;none&gt;&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&quot;{print <span class="token variable">$3</span>}&quot;</span><span class="token variable">)</span></span>
<span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-q</span><span class="token variable">)</span></span>              <span class="token comment"># 删除所有镜像</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-q</span><span class="token variable">)</span></span>           <span class="token comment"># 强制删除全部image</span>

<span class="token comment">## 开机自启动</span>
<span class="token function">docker</span> update <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token operator">&lt;</span>docker-name<span class="token operator">&gt;</span>

<span class="token comment">## 从容器到宿主机复制</span>
<span class="token function">docker</span> <span class="token function">cp</span> tomcat：/webapps/js/text.js /home/admin  
<span class="token function">docker</span> <span class="token function">cp</span> 容器名:  容器路径             宿主机路径
<span class="token comment">## 从宿主机到容器复制</span>
<span class="token function">docker</span> <span class="token function">cp</span> /home/admin/text.js tomcat：/webapps/js  
<span class="token function">docker</span> <span class="token function">cp</span> 宿主路径中文件        容器名  容器路径

<span class="token function">docker</span> container prune                    <span class="token comment">#删除所有停止的容器</span>
<span class="token function">docker</span> image prune <span class="token parameter variable">--force</span> <span class="token parameter variable">--all</span>          <span class="token comment">#删除所有不使用的镜像</span>
<span class="token function">docker</span> image prune <span class="token parameter variable">-f</span> <span class="token parameter variable">-a</span>

<span class="token function">docker</span> stop Name或者ID                    <span class="token comment">#停止一个容器</span>
<span class="token function">docker</span> start Name或者ID                   <span class="token comment">#启动一个容器</span>
<span class="token function">docker</span> <span class="token function">kill</span> Name或者ID                    <span class="token comment">#杀死一个容器</span>
<span class="token function">docker</span> restart name或者ID                 <span class="token comment">#重启一个容器</span>

<span class="token comment"># 以交互方式运行容器：</span>
<span class="token function">docker</span> run <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">--name</span> 容器名称 repository:tag /bin/bash
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> 容器名称 imageID /bin/bash
<span class="token comment"># 以守护进程方式运行容器：</span>
<span class="token function">docker</span> run <span class="token parameter variable">-di</span> <span class="token parameter variable">--name</span> 容器名称 repository:tag
<span class="token function">docker</span> run <span class="token parameter variable">-di</span> <span class="token parameter variable">--name</span> 容器名称 imageID
<span class="token comment"># 注意：通过 run 创建并进入容器之后，如果使用 exit 命令退出容器，则容器停止。再次进入该容器，先使用 start 启动容器，再使用 exec/attach 命令进入容器</span>

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器名称或者容器ID /bin/bash <span class="token comment"># 进入容器</span>
<span class="token function">docker</span> attach 容器名称或者容器ID
<span class="token comment"># 两者之间的区别：</span>
<span class="token comment"># attach 进入容器之后，如果使用 exit 退出容器，则容器停止。</span>
<span class="token comment"># exec 进入容器之后，使用 exit 退出容器，容器依然处于运行状态。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function N($,V){const e=o("router-link"),l=o("ExternalLinkIcon");return r(),p("div",null,[d(" more "),n("nav",u,[n("ul",null,[n("li",null,[s(e,{to:"#讲个故事"},{default:t(()=>[a("讲个故事")]),_:1})]),n("li",null,[s(e,{to:"#相关地址"},{default:t(()=>[a("相关地址")]),_:1})]),n("li",null,[s(e,{to:"#什么是docker"},{default:t(()=>[a("什么是Docker")]),_:1})]),n("li",null,[s(e,{to:"#应用场景"},{default:t(()=>[a("应用场景")]),_:1})]),n("li",null,[s(e,{to:"#docker优点"},{default:t(()=>[a("Docker优点")]),_:1})]),n("li",null,[s(e,{to:"#docker三大核心"},{default:t(()=>[a("Docker三大核心")]),_:1})]),n("li",null,[s(e,{to:"#网络模式"},{default:t(()=>[a("网络模式")]),_:1})]),n("li",null,[s(e,{to:"#docker的数据卷"},{default:t(()=>[a("Docker的数据卷")]),_:1})]),n("li",null,[s(e,{to:"#docker容器"},{default:t(()=>[a("Docker容器")]),_:1})]),n("li",null,[s(e,{to:"#docker-基本命令"},{default:t(()=>[a("docker 基本命令")]),_:1})])])]),m,n("ul",null,[n("li",null,[a("官网："),n("a",v,[a("https://www.docker.com/"),s(l)])]),n("li",null,[a("官网文档："),n("a",b,[a("https://docs.docker.com/"),s(l)])]),n("li",null,[a("中文文档："),n("a",h,[a("https://dockerdocs.cn/"),s(l)])]),n("li",null,[a("镜像仓库："),n("a",f,[a("https://hub.docker.com/"),s(l)])])]),_,n("ul",null,[g,x,n("li",null,[D,n("blockquote",null,[y,w,n("p",null,[a("最大的公开仓库是 Docker Hub: "),n("a",q,[a("https://hub.docker.com"),s(l)]),a("，存放了数量庞大的镜像供用户下载。")])])])]),I])}const E=i(k,[["render",N],["__file","10.Docker介绍.html.vue"]]);export{E as default};
