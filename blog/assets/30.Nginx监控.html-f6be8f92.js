import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c,e as d,a as n,d as a,w as l,b as e,f as u}from"./app-efa5e96e.js";const p={},f={class:"table-of-contents"},m=n("h2",{id:"时序数据库-influxdb",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#时序数据库-influxdb","aria-hidden":"true"},"#"),e(" 时序数据库 InfluxDB")],-1),g={href:"https://www.influxdata.com/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://docs.influxdata.com/influxdb/v1.6/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.linuxdaxue.com/series/influxdb-series/",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"telegraf-安装配置-nginx-监控",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#telegraf-安装配置-nginx-监控","aria-hidden":"true"},"#"),e(" Telegraf 安装配置 Nginx 监控")],-1),b=n("p",null,[n("code",null,"Telegraf"),e("是一个用 Go 编写的代理程序，是收集和报告指标和数据的代理。")],-1),h=n("p",null,[e("可收集系统和服务的统计数据，并写入到"),n("code",null,"InfluxDB"),e("数据库。")],-1),k=n("p",null,[n("code",null,"Telegraf"),e("具有内存占用小的特点，通过插件系统开发人员可轻松添加支持其他服务的扩展。")],-1),w={href:"https://www.influxdata.com/time-series-platform/telegraf/",target:"_blank",rel:"noopener noreferrer"},N=u(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 下载并安装</span>
<span class="token function">wget</span> https://dl.influxdata.com/telegraf/releases/telegraf-1.4.3-1.x86_64.rpm
yum localinstall telegraf-1.4.3-1.x86_64.rpm
systemctl status telegraf

<span class="token comment">## 生成配置</span>
<span class="token comment"># 默认的配置文件生成：</span>
telegraf --input-filter cpu:mem:http_listener --output-filter influxdb config
<span class="token comment">#</span>
telegraf config -input-filter cpu:mem -output-filter influxdb <span class="token operator">&gt;</span> telegraf.conf
<span class="token comment"># 生成带 cpu、memroy、disk、diskio、net 和 influxdb 插件的配置文件 telegraf.conf，指定输出到 influxdb和 opentsdb</span>
telegraf --input-filter cpu:mem:disk:diskio:net --output-filter influxdb:opentsdb config <span class="token operator">&gt;</span> telegraf.conf

<span class="token comment">## 配置nginx</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span>inputs.nginx<span class="token punctuation">]</span><span class="token punctuation">]</span>
  urls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;http://127.0.0.1/nginx_status&quot;</span><span class="token punctuation">]</span>

<span class="token comment">## 运行Telegraf</span>
telegraf <span class="token parameter variable">--config</span> telegraf.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grafana-集成-nginx-监控" tabindex="-1"><a class="header-anchor" href="#grafana-集成-nginx-监控" aria-hidden="true">#</a> Grafana 集成 Nginx 监控</h2>`,2);function B(I,T){const t=i("router-link"),s=i("ExternalLinkIcon");return o(),c("div",null,[d(" more "),n("nav",f,[n("ul",null,[n("li",null,[a(t,{to:"#时序数据库-influxdb"},{default:l(()=>[e("时序数据库 InfluxDB")]),_:1})]),n("li",null,[a(t,{to:"#telegraf-安装配置-nginx-监控"},{default:l(()=>[e("Telegraf 安装配置 Nginx 监控")]),_:1})]),n("li",null,[a(t,{to:"#grafana-集成-nginx-监控"},{default:l(()=>[e("Grafana 集成 Nginx 监控")]),_:1})])])]),m,n("ul",null,[n("li",null,[e("官网地址："),n("a",g,[e("influxdata"),a(s)])]),n("li",null,[e("官方文档："),n("a",_,[e("influxdb 文档"),a(s)])]),n("li",null,[e("参考："),n("a",x,[e("InfluxDB 系列教程"),a(s)])])]),v,n("blockquote",null,[b,h,k,n("p",null,[e("官方介绍："),n("a",w,[e("https://www.influxdata.com/time-series-platform/telegraf/"),a(s)])])]),N])}const q=r(p,[["render",B],["__file","30.Nginx监控.html.vue"]]);export{q as default};
