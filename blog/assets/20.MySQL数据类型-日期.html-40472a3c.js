import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as i,a as n,b as s,d as a,e as u,w as p,f as d}from"./app-efa5e96e.js";const k={},r={href:"https://www.sjkjc.com/mysql/select/",target:"_blank",rel:"noopener noreferrer"},m={class:"table-of-contents"},v=d(`<h2 id="时间类型" tabindex="-1"><a class="header-anchor" href="#时间类型" aria-hidden="true">#</a> 时间类型</h2><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">字节</th><th style="text-align:left;">格式</th><th style="text-align:left;">用途</th><th style="text-align:left;">是否支持设置系统默认值</th></tr></thead><tbody><tr><td style="text-align:left;">date</td><td style="text-align:left;">3</td><td style="text-align:left;">YYYY-MM-DD</td><td style="text-align:left;">日期值</td><td style="text-align:left;">不支持</td></tr><tr><td style="text-align:left;">time</td><td style="text-align:left;">3</td><td style="text-align:left;">HH:MM:SS</td><td style="text-align:left;">时间值或持续时间</td><td style="text-align:left;">不支持</td></tr><tr><td style="text-align:left;">year</td><td style="text-align:left;">1</td><td style="text-align:left;">YYYY</td><td style="text-align:left;">年份</td><td style="text-align:left;">不支持</td></tr><tr><td style="text-align:left;">datetime</td><td style="text-align:left;">8</td><td style="text-align:left;">YYYY-MM-DD HH:MM:SS</td><td style="text-align:left;">日期和时间混合值</td><td style="text-align:left;">不支持</td></tr><tr><td style="text-align:left;">timestamp</td><td style="text-align:left;">4</td><td style="text-align:left;">YYYYMMDD HHMMSS</td><td style="text-align:left;">混合日期和时间，可作时间戳</td><td style="text-align:left;">支持</td></tr></tbody></table><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 方式一：</span>
create_time <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 方式二：</span>
create_time <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 方式三：</span>
create_time <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql-date-函数" tabindex="-1"><a class="header-anchor" href="#mysql-date-函数" aria-hidden="true">#</a> MySQL DATE 函数</h2><p>MySQL 提供了许多有用的日期函数，允许您有效地操作日期。以下列出了常用的日期函数：</p><ul><li><p><code>NOW()</code>: 获取当前日期和时间</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>CURDATE()</code>: 获取当前日期</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>DATE()</code>: 获取日期部分</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DATE</span><span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>DATE_FORMAT()</code>: 格式化输出日期</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> DATE_FORMAT<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;%m/%d/%Y&#39;</span><span class="token punctuation">)</span> today<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>DATEDIFF()</code>: 计算两个日期之间的天数</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> DATEDIFF<span class="token punctuation">(</span><span class="token string">&#39;2021-01-01&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2022-01-01&#39;</span><span class="token punctuation">)</span> days<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>DATE_ADD()</code>: 在给定日期上增加给定的时间间隔</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token identifier"><span class="token punctuation">\`</span>今天<span class="token punctuation">\`</span></span><span class="token punctuation">,</span>
  DATE_ADD<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token number">1</span> <span class="token keyword">DAY</span><span class="token punctuation">)</span> <span class="token string">&#39;一天后&#39;</span><span class="token punctuation">,</span>
  DATE_ADD<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token number">1</span> WEEK<span class="token punctuation">)</span> <span class="token string">&#39;一周后&#39;</span><span class="token punctuation">,</span>
  DATE_ADD<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token number">1</span> <span class="token keyword">MONTH</span><span class="token punctuation">)</span> <span class="token string">&#39;一月后&#39;</span><span class="token punctuation">,</span>
  DATE_ADD<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token number">1</span> <span class="token keyword">YEAR</span><span class="token punctuation">)</span> <span class="token string">&#39;一年后&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>DATE_SUB()</code>: 在给定日期上减少给定的时间间隔</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token identifier"><span class="token punctuation">\`</span>今天<span class="token punctuation">\`</span></span><span class="token punctuation">,</span>
  DATE_SUB<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token number">1</span> <span class="token keyword">DAY</span><span class="token punctuation">)</span> <span class="token string">&#39;一天前&#39;</span><span class="token punctuation">,</span>
  DATE_SUB<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token number">1</span> WEEK<span class="token punctuation">)</span> <span class="token string">&#39;一周前&#39;</span><span class="token punctuation">,</span>
  DATE_SUB<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token number">1</span> <span class="token keyword">MONTH</span><span class="token punctuation">)</span> <span class="token string">&#39;一月前&#39;</span><span class="token punctuation">,</span>
  DATE_SUB<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token number">1</span> <span class="token keyword">YEAR</span><span class="token punctuation">)</span> <span class="token string">&#39;一年前&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>DAY()</code>: 返回日期中天</p></li><li><p><code>MONTH()</code>: 返回月份</p></li><li><p><code>QUARTER()</code>: 返回季节</p></li><li><p><code>YEAR()</code>: 返回年份</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DAY</span><span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token identifier"><span class="token punctuation">\`</span>day<span class="token punctuation">\`</span></span><span class="token punctuation">,</span>
  <span class="token keyword">MONTH</span><span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token identifier"><span class="token punctuation">\`</span>month<span class="token punctuation">\`</span></span><span class="token punctuation">,</span>
  QUARTER<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token identifier"><span class="token punctuation">\`</span>quarter<span class="token punctuation">\`</span></span><span class="token punctuation">,</span>
  <span class="token keyword">YEAR</span><span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token identifier"><span class="token punctuation">\`</span>year<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>WEEK()</code>: 函数返回给定日期是一年周的第几周</p></li><li><p><code>WEEKDAY()</code>: 函数返回工作日索引</p></li><li><p><code>WEEKOFYEAR()</code>: 函数返回日历周</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> WEEKDAY<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token identifier"><span class="token punctuation">\`</span>weekday<span class="token punctuation">\`</span></span><span class="token punctuation">,</span>
  WEEK<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token identifier"><span class="token punctuation">\`</span>week<span class="token punctuation">\`</span></span><span class="token punctuation">,</span>
  WEEKOFYEAR<span class="token punctuation">(</span>CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token identifier"><span class="token punctuation">\`</span>weekofyear<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,6);function E(y,g){const l=e("ExternalLinkIcon"),t=e("router-link");return c(),i("div",null,[n("p",null,[s("数据库教程: "),n("a",r,[s("https://www.sjkjc.com/mysql/select/"),a(l)])]),u(" more "),n("nav",m,[n("ul",null,[n("li",null,[a(t,{to:"#时间类型"},{default:p(()=>[s("时间类型")]),_:1})]),n("li",null,[a(t,{to:"#mysql-date-函数"},{default:p(()=>[s("MySQL DATE 函数")]),_:1})])])]),v])}const b=o(k,[["render",E],["__file","20.MySQL数据类型-日期.html.vue"]]);export{b as default};
