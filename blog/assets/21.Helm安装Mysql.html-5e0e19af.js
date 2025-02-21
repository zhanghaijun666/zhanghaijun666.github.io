import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,f as e}from"./app-efa5e96e.js";const l={},t=e(`<h2 id="mysql-1主2从" tabindex="-1"><a class="header-anchor" href="#mysql-1主2从" aria-hidden="true">#</a> MySQL（1主2从）</h2><h3 id="_1、添加仓库" tabindex="-1"><a class="header-anchor" href="#_1、添加仓库" aria-hidden="true">#</a> 1、添加仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> bitnami https://charts.bitnami.com/bitnami
helm repo update
helm search repo bitnami/mysql
<span class="token comment"># NAME            CHART VERSION   APP VERSION     DESCRIPTION</span>
<span class="token comment"># bitnami/mysql   9.5.0           8.0.32          MySQL is a fast, reliable, scalable, and easy t...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、安装" tabindex="-1"><a class="header-anchor" href="#_2、安装" aria-hidden="true">#</a> 2、安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装MySQL</span>
helm <span class="token function">install</span> mysql bitnami/mysql <span class="token parameter variable">--version</span> <span class="token number">9.5</span>.0 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--set</span> <span class="token assign-left variable">fullnameOverride</span><span class="token operator">=</span>mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">--set</span> <span class="token assign-left variable">auth.rootPassword</span><span class="token operator">=</span>Admin@123456 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--set</span> <span class="token assign-left variable">auth.database</span><span class="token operator">=</span>db_test <span class="token punctuation">\\</span>
  <span class="token parameter variable">--set</span> <span class="token assign-left variable">auth.username</span><span class="token operator">=</span>test <span class="token punctuation">\\</span>
  <span class="token parameter variable">--set</span> <span class="token assign-left variable">auth.password</span><span class="token operator">=</span>Admin@123456 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--namespace</span><span class="token operator">=</span>devops-mysql --create-namespace
<span class="token comment">## 查看资源</span>
helm <span class="token parameter variable">-n</span> devops-mysql list
kubectl <span class="token parameter variable">-n</span> devops-mysql get pod,pvc,svc
<span class="token comment">## 导出MySQL密码</span>
<span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>kubectl get secret <span class="token parameter variable">--namespace</span> devops-mysql mysql <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.data.mysql-root-password}&quot;</span> <span class="token operator">|</span> base64 <span class="token parameter variable">-d</span><span class="token variable">)</span></span>
<span class="token comment">## 运行一个客户端pod</span>
kubectl run mysql-client <span class="token parameter variable">--rm</span> <span class="token parameter variable">--tty</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span><span class="token string">&#39;Never&#39;</span> <span class="token parameter variable">--image</span>  docker.io/bitnami/mysql:8.0.32-debian-11-r8 <span class="token parameter variable">--namespace</span> devops-mysql <span class="token parameter variable">--env</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token variable">$MYSQL_ROOT_PASSWORD</span> <span class="token parameter variable">--command</span> -- <span class="token function">sleep</span> infinity
<span class="token comment">## 进去客户端</span>
kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">--tty</span> <span class="token parameter variable">-i</span> mysql-client <span class="token parameter variable">--namespace</span> devops-mysql -- <span class="token function">bash</span>
<span class="token comment">## 登陆数据库节点</span>
mysql <span class="token parameter variable">-h</span> mysql.devops-mysql.svc.cluster.local <span class="token parameter variable">-uroot</span> -p<span class="token string">&quot;<span class="token variable">$MYSQL_ROOT_PASSWORD</span>&quot;</span>
show databases<span class="token punctuation">;</span>
<span class="token comment"># 查看主从状态</span>
<span class="token comment"># show master status\\G;</span>
<span class="token comment"># show slave status\\G;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[t];function i(r,c){return s(),n("div",null,p)}const d=a(l,[["render",i],["__file","21.Helm安装Mysql.html.vue"]]);export{d as default};
