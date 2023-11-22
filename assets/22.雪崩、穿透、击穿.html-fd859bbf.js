import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as l,f as a}from"./app-d6438571.js";const r={},c=a('<h2 id="_1-缓存雪崩" tabindex="-1"><a class="header-anchor" href="#_1-缓存雪崩" aria-hidden="true">#</a> 1. 缓存雪崩</h2><blockquote><p>对于系统 A，假设每天高峰期每秒 5000 个请求，本来缓存在高峰期可以扛住每秒 4000 个请求，但是缓存机器意外发生了全盘宕机。缓存挂了，此时 1 秒 5000 个请求全部落数据库，数据库必然扛不住，它会报一下警，然后就挂了。此时，如果没有采用什么特别的方案来处理这个故障，DBA 很着急，重启数据库，但是数据库立马又被新的流量给打死了。这就是缓存雪崩。</p></blockquote><p>缓存雪崩的事前事中事后的解决方案如下：</p><ul><li>事前：redis 高可用，主从+哨兵，redis cluster，避免全盘崩溃。</li><li>事中：本地 ehcache 缓存 + hystrix 限流&amp;降级，避免 MySQL 被打死。</li><li>事后：redis 持久化，一旦重启，自动从磁盘上加载数据，快速恢复缓存数据。</li></ul><p>缓存雪崩优化</p><p>用户发送一个请求，系统 A 收到请求后，先查本地 ehcache 缓存，如果没查到再查 redis。如果 ehcache 和 redis 都没有，再查数据库，将数据库中的结果，写入 ehcache 和 redis 中。</p><p>限流组件，可以设置每秒的请求，有多少能通过组件，剩余的未通过的请求，怎么办？走降级！可以返回一些默认的值，或者友情提示，或者空白的值。</p><p>好处：</p><ul><li>数据库绝对不会死，限流组件确保了每秒只有多少个请求能通过。</li><li>只要数据库不死，就是说，对用户来说，2/5 的请求都是可以被处理的。</li><li>只要有 2/5 的请求可以被处理，就意味着你的系统没死，对用户来说，可能就是点击几次刷不出来页面，但是多点几次，就可以刷出来一次</li></ul><h2 id="_2-缓存穿透" tabindex="-1"><a class="header-anchor" href="#_2-缓存穿透" aria-hidden="true">#</a> 2. 缓存穿透</h2><blockquote><p>缓存穿透，就是在同一时间，大量的请求所需要的数据在缓存中并不存在，所以穿过缓存去查询数据库。</p><p>解决办法：每次查询数据库之后，如果有更新缓存，如果数据库中也没有，可以再缓存中中更新一个空值进去，这样就不会出现大量的请求落在数据库上。</p></blockquote><h2 id="_3-缓存击穿" tabindex="-1"><a class="header-anchor" href="#_3-缓存击穿" aria-hidden="true">#</a> 3. 缓存击穿</h2><blockquote><p>缓存击穿就是：在缓存中有某个值特别的热门，经常性的处于集中式高并发。当某一时刻失效的时候，请求大量的落在数据库上，就像是在一道屏障上凿开了一个洞。</p></blockquote><p>不同场景下的解决方式可如下：</p><ol><li>若缓存的数据是基本不会发生更新的，则可尝试将该热点数据设置为永不过期。</li><li>若缓存的数据更新不频繁，且缓存刷新的整个流程耗时较少的情况下，则可以采用基于 redis、zookeeper 等分布式中间件的分布式互斥锁，或者本地互斥锁以保证仅少量的请求能请求数据库并重新构建缓存，其余线程则在锁释放后能访问到新缓存。</li><li>若缓存的数据更新频繁或者缓存刷新的流程耗时较长的情况下，可以利用定时线程在缓存过期前主动的重新构建缓存或者延后缓存的过期时间，以保证所有的请求能一直访问到对应的缓存。</li></ol>',15),o=[c];function t(h,_){return i(),l("div",null,o)}const p=e(r,[["render",t],["__file","22.雪崩、穿透、击穿.html.vue"]]);export{p as default};
