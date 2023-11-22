import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as c,c as u,e as t,a as i,d as e,w as l,b as n,f as a}from"./app-d6438571.js";const o={},m={class:"table-of-contents"},b=a(`<h2 id="基础模块" tabindex="-1"><a class="header-anchor" href="#基础模块" aria-hidden="true">#</a> 基础模块</h2><h3 id="http-access-白名单" tabindex="-1"><a class="header-anchor" href="#http-access-白名单" aria-hidden="true">#</a> HTTP Access（白名单）</h3><blockquote><p>此模块提供了一个简易的基于主机的访问控制.</p></blockquote><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>## 仅允许网段 192.168.1.0/24中除 192.168.1.1之外的ip访问.
location / {
  deny    192.168.1.1;
  allow   192.168.1.0/24;
  deny    all;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="auth-basic" tabindex="-1"><a class="header-anchor" href="#auth-basic" aria-hidden="true">#</a> Auth Basic</h3><blockquote><p>该模块可以使你使用用户名和密码基于 HTTP 基本认证方法来保护你的站点或其部分内容。</p></blockquote><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>location / {
  auth_basic            &quot;Restricted&quot;;
  auth_basic_user_file  conf/htpasswd;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="autoindex" tabindex="-1"><a class="header-anchor" href="#autoindex" aria-hidden="true">#</a> AutoIndex</h3><blockquote><p>此模块用于自动生成目录列表.</p></blockquote><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>location / {
  autoindex              on;              # 开启整个目录浏览下载
  autoindex_localtime    on;              # 显示文件的GMT时间
  autoindex_exact_size   off;             # 显示文件的大小
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dav" tabindex="-1"><a class="header-anchor" href="#dav" aria-hidden="true">#</a> DAV</h3><blockquote><p>可以为 Http webDAV 增加 PUT, DELETE, MKCOL, COPY 和 MOVE 等方法。</p><p>需要在编译时指定参数 <code>./configure --with-http_dav_module</code></p></blockquote><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>location / {
  root     /data/www;
  client_body_temp_path  /data/client_temp;

  dav_methods  PUT DELETE MKCOL COPY MOVE;

  create_full_put_path   on;
  dav_access             group:rw  all:r;

  limit_except  GET {
    allow  192.168.1.0/32;
    deny   all;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他模块" tabindex="-1"><a class="header-anchor" href="#其他模块" aria-hidden="true">#</a> 其他模块</h2><h3 id="http-跳转到-https" tabindex="-1"><a class="header-anchor" href="#http-跳转到-https" aria-hidden="true">#</a> Http 跳转到 Https</h3><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>#80端口做301转跳
server {
  listen 80;
  server_name _;
  return 301 https://www.example.cn$request_uri;    #跳转到Https
}
#配置ssl证书和开启ssl功能
server {
  listen       443;
  server_name  www.example.cn;

  ssl                  on;
  ssl_certificate      /usr/ssl/ca.pem;
  ssl_certificate_key  /usr/ssl/ca.key;

  ssl_session_timeout  5m;

  ssl_protocols  SSLv2 SSLv3 TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers  ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
  ssl_prefer_server_ciphers   on;
  error_page 497 &quot;https://$host$uri?$args&quot;; ## 这是跳转Http请求到Https

  root   html;
  index  index.html index.htm;
  location / {
      ...
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="资源缓存设置" tabindex="-1"><a class="header-anchor" href="#资源缓存设置" aria-hidden="true">#</a> 资源缓存设置</h3>`,17),_={href:"https://nginx.org/en/docs/http/ngx_http_proxy_module.html",target:"_blank",rel:"noopener noreferrer"},p=a(`<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>## 禁止缓存静态资源
location ~ .*\\.(css|js|swf|php|htm|html )$ {
  add_header Cache-Control no-store;
  add_header Pragma no-cache;
}
## 设置缓存机制
location ~* ^.+\\.(css|js|ico|gif|jpg|jpeg|png|bmp|swf)$ {
  # 关闭日志记录，默认为on
  log_not_found off;
  access_log off;
  # 缓存时间7天 单位 s、m、h、d
  expires 7d;
  # 源服务器
  proxy_pass http://127.0.0.1:8888;
  # 指定上面设置的缓存区域
  proxy_cache imgcache;
  # 缓存过期管理
  proxy_cache_valid 200 302 1d;
  proxy_cache_valid 404 10m;
  proxy_cache_valid any 1h;
  proxy_cache_use_stale error timeout invalid_header updating http_500 http_502 http_503 http_504;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调优案例" tabindex="-1"><a class="header-anchor" href="#调优案例" aria-hidden="true">#</a> 调优案例</h2><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>#user  nobody;

## 和机器的cpu荷属一致 cat /proc/cpuinfo | grep &quot;cores&quot; | uniq
## 开启4个进程
worker_processes 4;
worker_cpu_affinity 0001 0010 0100 1000;
## 开启8个进程
# worker_processes 8;
# worker_cpu_affinity 00000001 00000010 00000100 00001000 00010000 00100000 01000000 10000000;

# 设置日志，错误日志级别有[debug | info | notice | warn | error | crit | alert | emerg]，级别越高记录的信息越少
error_log logs/error.log error;

# 最大打开文件数，通过 ulimit -n 命令查看，可修改/etc/security/limits.conf文件
# *   soft nofile   65535
# *   soft nofile   65535
worker_rlimit_nofile 65535;

#pid        logs/nginx.pid;

events {
 #外部连接数
 worker_connections 1024;
 #收到新的连接通知后接受尽可能多的连接
 multi_accept on;
 # 采用I/O多路复用事件模型，处理效率高
 use epoll;
}
http {
 include mime.types;
 default_type application/octet-stream;

 # 设置日志格式化
 log_format main &#39;{&quot;@timestamp&quot;:&quot;$time_local&quot;,&#39; #访问的时间和时区
  # 客户端地址
  &#39;&quot;client_ip&quot;:&quot;$remote_addr&quot;,&#39;
  # 客户端用户名称
  &#39;&quot;client_name&quot;:&quot;$remote_addr&quot;,&#39;
  # 请求的URI和HTTP协议
  &#39;&quot;request&quot;:&quot;$request&quot;,&#39;
  # 发送给客户端文件内容大小
  &#39;&quot;size&quot;:$body_bytes_sent,&#39;
  # 请求的总时间
  &#39;&quot;response_time&quot;:$request_time,&#39;
  # upstream响应时间
  &#39;&quot;upstream_time&quot;:&quot;$upstream_response_time&quot;,&#39;
  # 后台upstream的地址，提供服务的主机地址
  &#39;&quot;upstream_host&quot;:&quot;$upstream_addr&quot;,&#39;
  # 请求地址（浏览器输入的IP或域名）
  &#39;&quot;http_host&quot;:&quot;$http_host&quot;,&#39;
  # 客户端请求的真实IP，如果代理存在，即有值，否则没值
  &#39;&quot;xff&quot;:&quot;$http_x_forwarded_for&quot;,&#39;
  # url跳转来源
  &#39;&quot;referer&quot;:&quot;$http_referer&quot;,&#39;
  # 用户终端浏览器等信息
  &#39;&quot;agent&quot;:&quot;$http_user_agent&quot;,&#39;
  # HTTP请求状态
  &#39;&quot;status&quot;:&quot;$status&quot;}&#39;;

 # 设置访问日志，参数gzip：压缩级别；buffer：存放日志的缓冲区大小；flush：缓冲区日志刷到磁盘的时间
 access_log logs/access.log main gzip=4 flush=5m;

 # 开启高效文件传输模式
 sendfile on;
 # 减少网络报文，一次性传输
 tcp_nopush on;
 # 提高I/O性能
 tcp_nodelay on;

 # 客户端连接保持会话超时时间
 keepalive_timeout 60;
 # 请求头的超时时间（默认60s）
 client_header_timeout 15;
 # 请求体的超时时间（默认60s）
 client_body_timeout 15;
 # 客户端未在规定时间响应关闭连接
 send_timeout 15s;
 # DNS解析超时（默认30s）
 resolver_timeout 15s;
 # 关闭不响应的客户端连接
 reset_timedout_connection on;

 # 客户端请求头部的缓冲区大小,需根据系统，用命令getconf PAGESIZE获取
 client_header_buffer_size 4k;
 # 客户端请求主体的缓冲区大小
 client_body_buffer_size 512k;
 # 客户端请求服务器最大允许大小，可限制上传文件大小
 client_max_body_size 100m;
 # 打开文件指定缓存，max指定缓存数量，建议和打开文件数一致（worker_rlimit_nofile），inactive指定时间内文件未被请求则删除缓存
 open_file_cache max=65535 inactive=60s;
 # 多长时间检查一次缓存的有效信息
 open_file_cache_valid 30;
 # 文件的最少使用次数，open_file_cache指令中的inactive参数时间内，一次也未被使用，它将被移除
 open_file_cache_min_uses 1;

 # 后端服务器连接的超时时间（默认60秒）
 proxy_connect_timeout 15s;
 # 后端服务器数据回传时间（默认60秒）
 proxy_send_timeout 120s;
 # 等候后端服务器响应时间（默认60秒）
 proxy_read_timeout 120s;
 # 缓冲区大小（头部信息）；默认值4k|8k
 proxy_buffer_size 8k;
 # 响应的数量和大小；默认是8 4k|8k
 proxy_buffers 4 64k;
 # 决定缓冲区发送数据大小，通常是proxy_buffers的两倍
 proxy_busy_buffers_size 128k;
 # 把数据一次性写入临时文件的大小
 proxy_temp_file_write_size 128k;
 # 临时文件路径
 proxy_temp_path /tmp/proxy_temp;
 # levels：目录层次，比如1:2会生成16*256个子目录
 # keys_zone：缓存名字和共享内存大小
 # inactive：在指定时间内文件未被请求则删除缓存
 # max_size：最大缓存空间
 proxy_cache_path /usr/local/nginx/nginx_cache levels=1:2 keys_zone=nginx_cache:200m max_size=50g inactive=168h;
 # 出现超时、500、502等错误时，分配给下一台服务器处理
  proxy_next_upstream http_500 http_502 http_503 http_504 http_404 error timeout invalid_header;

 # 隐藏版本号
 server_tokens off;
 # 域名哈希表的桶大小（默认512）
 server_names_hash_bucket_size 128;
 # 域名哈希表最大大小（默认1024）
 server_names_hash_max_size 512;

 # 开启GZIP压缩功能
 gzip on;
 # 无条件启用压缩 off 关闭对后端服务器的响应结果进行压缩
 gzip_proxied any;
 # 判断是否需要压缩
 gzip_vary on;
 # 允许压缩的最小字节数
 gzip_min_length 1k;
 # 使用4个为16k的内存作为压缩结果缓存流
 gzip_buffers 4 16k;
 # 压缩版本，用于设置识别HTTP协议版
 gzip_http_version 1.1;
 # 压缩比例，1压缩比最小，速度最快，9压缩比最大，速度最慢，消耗CPU资源在1~9中设置，1压缩比最小，速度最快，9压缩比最大，速度最慢，消耗CPU资源
 gzip_comp_level 4;
 # 压缩类型
 gzip_types text/plain text/css text/javascript application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss;

 # 禁用IE6以下进行压缩
 gzip_disable &quot;MSIE [1-6].&quot;;


 server {
  listen 80;
  server_name localhost;
  #charset koi8-r;
  #access_log  logs/host.access.log  main;

  location / {
   root html;
   index index.html index.htm;

   #禁止非GET|POST请求，就是禁止OPTIONS、PUT等请求
   if ($request_method !~ ^(GET|HEAD|POST)$) {
    return 403;
   }
  }
  # 设置动态加载的文件后缀
  location ~ \\.(svg|jpg|jpeg|png|gif|bmp|ico|swf|flv)$ {
   # 缓存路径
   root /var/www/images/;
   # 单位 s、m、h、d
   expires 30d;
   # 关闭日志记录，默认为on
   log_not_found off;
   access_log off;
  }
  # 防盗链
  location ~ .*\\.(jpg|gif|png)$ {
   # 防止别人直接引用你网站资源链接。 指定域名或ip
   valid_referers none blocked www.test.com test.com;
   if ($invalid_referer) {
    return 403;
   }
   root /var/www/images;
  }
  #error_page  404              /404.html;
  # redirect server error pages to the static page /50x.html
  error_page 500 502 503 504 /50x.html;
  location = /50x.html {
   root html;
  }
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gzip-proxied选项" tabindex="-1"><a class="header-anchor" href="#gzip-proxied选项" aria-hidden="true">#</a> gzip_proxied选项</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gzip_proxied选项，可以根据系统的实际情况决定，总共存在多种选项：

- off：关闭Nginx对后台服务器的响应结果进行压缩。
- expired：如果响应头中包含Expires信息，则开启压缩。
- no-cache：如果响应头中包含Cache-Control:no-cache信息，则开启压缩。
- no-store：如果响应头中包含Cache-Control:no-store信息，则开启压缩。
- private：如果响应头中包含Cache-Control:private信息，则开启压缩。
- no_last_modified：如果响应头中不包含Last-Modified信息，则开启压缩。
- no_etag：如果响应头中不包含ETag信息，则开启压缩。
- auth：如果响应头中包含Authorization信息，则开启压缩。
- any：无条件对后端的响应结果开启压缩机制。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function h(f,g){const s=d("router-link"),v=d("ExternalLinkIcon");return c(),u("div",null,[t(" more "),i("nav",m,[i("ul",null,[i("li",null,[e(s,{to:"#基础模块"},{default:l(()=>[n("基础模块")]),_:1}),i("ul",null,[i("li",null,[e(s,{to:"#http-access-白名单"},{default:l(()=>[n("HTTP Access（白名单）")]),_:1})]),i("li",null,[e(s,{to:"#auth-basic"},{default:l(()=>[n("Auth Basic")]),_:1})]),i("li",null,[e(s,{to:"#autoindex"},{default:l(()=>[n("AutoIndex")]),_:1})]),i("li",null,[e(s,{to:"#dav"},{default:l(()=>[n("DAV")]),_:1})])])]),i("li",null,[e(s,{to:"#其他模块"},{default:l(()=>[n("其他模块")]),_:1}),i("ul",null,[i("li",null,[e(s,{to:"#http-跳转到-https"},{default:l(()=>[n("Http 跳转到 Https")]),_:1})]),i("li",null,[e(s,{to:"#资源缓存设置"},{default:l(()=>[n("资源缓存设置")]),_:1})])])]),i("li",null,[e(s,{to:"#调优案例"},{default:l(()=>[n("调优案例")]),_:1}),i("ul",null,[i("li",null,[e(s,{to:"#gzip-proxied选项"},{default:l(()=>[n("gzip_proxied选项")]),_:1})])])])])]),b,i("blockquote",null,[i("p",null,[i("a",_,[n("https://nginx.org/en/docs/http/ngx_http_proxy_module.html"),e(v)])])]),p])}const y=r(o,[["render",h],["__file","12.Nginx模块配置.html.vue"]]);export{y as default};
