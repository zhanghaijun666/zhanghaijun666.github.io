import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c,a,d as e,w as i,b as s,f as o}from"./app-efa5e96e.js";const d={},m={class:"table-of-contents"},v=a("h2",{id:"redis-1主2从3哨兵",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#redis-1主2从3哨兵","aria-hidden":"true"},"#"),s(" Redis 1主2从3哨兵")],-1),b={href:"https://artifacthub.io/packages/helm/bitnami/redis",target:"_blank",rel:"noopener noreferrer"},u=o(`<h3 id="_1、添加仓库" tabindex="-1"><a class="header-anchor" href="#_1、添加仓库" aria-hidden="true">#</a> 1、添加仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> bitnami https://charts.bitnami.com/bitnami
<span class="token comment">## 更新仓库</span>
helm repo update
<span class="token comment">## 搜索redis</span>
helm search repo bitnami/redis
<span class="token comment"># NAME                    CHART VERSION   APP VERSION     DESCRIPTION</span>
<span class="token comment"># bitnami/redis           17.8.0          7.0.8           Redis(R) is an open source, advanced key-value ...</span>
<span class="token comment"># bitnami/redis-cluster   8.3.8           7.0.8           Redis(R) is an open source, scalable, distribut...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-安装redis" tabindex="-1"><a class="header-anchor" href="#_2-安装redis" aria-hidden="true">#</a> 2. 安装Redis</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装redis集群</span>
helm <span class="token function">install</span> redis bitnami/redis <span class="token parameter variable">--version</span> <span class="token number">17.8</span>.0 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.redis.password</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--set</span> <span class="token assign-left variable">fullnameOverride</span><span class="token operator">=</span>redis <span class="token punctuation">\\</span>
  <span class="token parameter variable">--set</span> <span class="token assign-left variable">architecture</span><span class="token operator">=</span>replication <span class="token punctuation">\\</span>
  <span class="token parameter variable">--set</span> <span class="token assign-left variable">sentinel.enabled</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">--set</span> <span class="token assign-left variable">sentinel.persistence.enabled</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">--namespace</span><span class="token operator">=</span>devops-redis --create-namespace
<span class="token comment">## 查看资源</span>
helm <span class="token parameter variable">-n</span> devops-redis list
kubectl <span class="token parameter variable">-n</span> devops-redis get pod,pvc,svc
<span class="token comment">## 导出redis密码</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">REDIS_PASSWORD</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>kubectl get secret <span class="token parameter variable">--namespace</span> devops-redis redis <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.data.redis-password}&quot;</span> <span class="token operator">|</span> base64 <span class="token parameter variable">-d</span><span class="token variable">)</span></span>
<span class="token comment">## 运行一个客户端pod</span>
kubectl run <span class="token parameter variable">--namespace</span> devops-redis redis-client <span class="token parameter variable">--restart</span><span class="token operator">=</span><span class="token string">&#39;Never&#39;</span>  <span class="token parameter variable">--env</span> <span class="token assign-left variable">REDIS_PASSWORD</span><span class="token operator">=</span><span class="token variable">$REDIS_PASSWORD</span>  <span class="token parameter variable">--image</span> docker.io/bitnami/redis:7.0.8-debian-11-r13 <span class="token parameter variable">--command</span> -- <span class="token function">sleep</span> infinity
<span class="token comment">## 进去客户端</span>
kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">--tty</span> <span class="token parameter variable">-i</span> redis-client <span class="token parameter variable">--namespace</span> devops-redis -- <span class="token function">bash</span>
<span class="token comment">#### 访问主从集群</span>
<span class="token assign-left variable">REDISCLI_AUTH</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$REDIS_PASSWORD</span>&quot;</span> redis-cli <span class="token parameter variable">-h</span> redis <span class="token parameter variable">-p</span> <span class="token number">6379</span>
info Replication
<span class="token comment">#### 哨兵访问</span>
<span class="token assign-left variable">REDISCLI_AUTH</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$REDIS_PASSWORD</span>&quot;</span> redis-cli <span class="token parameter variable">-h</span> redis-headless <span class="token parameter variable">-p</span> <span class="token number">26379</span>
info Sentinel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis集群-3主3从" tabindex="-1"><a class="header-anchor" href="#redis集群-3主3从" aria-hidden="true">#</a> Redis集群 3主3从</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm <span class="token function">install</span> redis-c bitnami/redis-cluster <span class="token parameter variable">--version</span> <span class="token number">8.3</span>.8 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--namespace</span><span class="token operator">=</span>devops-redis --create-namespace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function k(h,_){const n=l("router-link"),t=l("ExternalLinkIcon");return p(),c("div",null,[a("nav",m,[a("ul",null,[a("li",null,[e(n,{to:"#redis-1主2从3哨兵"},{default:i(()=>[s("Redis 1主2从3哨兵")]),_:1}),a("ul",null,[a("li",null,[e(n,{to:"#_1、添加仓库"},{default:i(()=>[s("1、添加仓库")]),_:1})])])]),a("li",null,[e(n,{to:"#_2-安装redis"},{default:i(()=>[s("2. 安装Redis")]),_:1})]),a("li",null,[e(n,{to:"#redis集群-3主3从"},{default:i(()=>[s("Redis集群 3主3从")]),_:1})])])]),v,a("blockquote",null,[a("p",null,[a("a",b,[s("参考文档"),e(t)])])]),u])}const R=r(d,[["render",k],["__file","20.Helm安装Redis.html.vue"]]);export{R as default};
