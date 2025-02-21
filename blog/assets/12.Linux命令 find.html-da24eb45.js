import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c,e as o,a,d as s,w as l,b as n,f as d}from"./app-efa5e96e.js";const m={},u=a("p",null,[n("find 命令是 Linux 命令中最有用的命令之一，它的功能非常强大，且语法复杂。"),a("br"),a("br"),n(" 命令格式：find path -option [-exec ...]")],-1),v={class:"table-of-contents"},b=d(`<h2 id="按文件名查找-name" tabindex="-1"><a class="header-anchor" href="#按文件名查找-name" aria-hidden="true">#</a> 按文件名查找（-name）</h2><ul><li>-name：按照文件名称查找，准确匹配；</li><li>-iname：不区分文件名的大小写；</li><li>-inode：按照文件 inode 号查找；</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找当前目录下所有 go 文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.go&quot;</span>
<span class="token comment"># 在 etc 目录下，查找大写字母开头的 txt 文件</span>
<span class="token function">find</span> /etc <span class="token parameter variable">-name</span> <span class="token string">&quot;[A-Z]*.txt&quot;</span> <span class="token parameter variable">-print</span>
<span class="token comment"># 在当前目录下查找不是 out 开头的 txt 文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;out*&quot;</span> <span class="token parameter variable">-prune</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span> <span class="token parameter variable">-print</span>
<span class="token comment"># 在当前目录除 git 子目录外查找 txt 文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-path</span> <span class="token string">&quot;./git&quot;</span> <span class="token parameter variable">-prune</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span> <span class="token parameter variable">-print</span>
<span class="token comment"># 找出某个文件的所有硬链接，ls 命令 -i 选项可以查看文件的 inode 号</span>
<span class="token function">ls</span> <span class="token parameter variable">-i</span> <span class="token number">1</span>.txt   <span class="token comment"># 138956 1.txt</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-num</span> <span class="token number">138956</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按照文件类型查找-type" tabindex="-1"><a class="header-anchor" href="#按照文件类型查找-type" aria-hidden="true">#</a> 按照文件类型查找（-type）</h2><blockquote><p>可以使用 -type 选项，具体支持的文件类型如下：</p></blockquote><ul><li>f：普通文件</li><li>d：目录文件</li><li>l：链接文件</li><li>s：套接字文件</li><li>p：管道文件</li><li>b：块设备文件，比如：磁盘</li><li>c：字符设备文件，比如：键盘、鼠标、网卡</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在当前目录下，查找软连接文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> l <span class="token parameter variable">-print</span>
<span class="token comment"># 在当前目录下，查找 log 结尾的普通文件，f 表示普通文件类型</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.log&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按照文件从属关系查找" tabindex="-1"><a class="header-anchor" href="#按照文件从属关系查找" aria-hidden="true">#</a> 按照文件从属关系查找</h2><ul><li>-user：以用户名查找</li><li>-group：以组名查找</li><li>-uid：以用户 ID 查找</li><li>-gid：以组 ID 查找</li><li>-nouser：查找没有属主的文件</li><li>-nogroup：查找没有属组的文件</li></ul><h2 id="按照文件大小查找-size" tabindex="-1"><a class="header-anchor" href="#按照文件大小查找-size" aria-hidden="true">#</a> 按照文件大小查找（-size）</h2><blockquote><p>用 -size 选项，选项后边指定大小 1024M，表示大小的格式有如下几种：</p></blockquote><ul><li>-5M：查找小于 5M 的文件</li><li>+5M：查找大于 5M 的文件</li><li>5M：查找大小为 5M 的文件</li><li>单位支持的有 c（字节）、k、M、G 等，需要注意的是默认单位并不是字节，而是 b，大小为 512 字节。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找小于 64k 的文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-size</span> <span class="token parameter variable">-64k</span> <span class="token parameter variable">-print</span>
<span class="token comment"># 查找大小超过 200M 的文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-size</span> +200M <span class="token parameter variable">-type</span> f <span class="token parameter variable">-print</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按照时间查找-atime" tabindex="-1"><a class="header-anchor" href="#按照时间查找-atime" aria-hidden="true">#</a> 按照时间查找（-atime）</h2><blockquote><p>能对系统管理员来说，十分常用，find 支持如下几种时间类型：</p></blockquote><ul><li>atime：以访问时间查找</li><li>mtime：以数据修改时间查找</li><li>ctime：以元数据修改时间查找</li><li>newer：以文件为条件，判断比它新的文件<br> 按时间查找时，使用格式如下：</li><li>-atime -5：表示 5 天内访问过的文件；</li><li>-atime +5：表示 6 天前访问过的文件；</li><li>-atime 5：表示前 5-6 那一天访问的文件；</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找 2 天内被修改过的文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-mtime</span> <span class="token parameter variable">-2</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-print</span>
<span class="token comment"># 查找 2 天前被更改过的文件，-mtime 表示内容修改时间</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-mtime</span> +2 <span class="token parameter variable">-type</span> f <span class="token parameter variable">-print</span>
<span class="token comment"># 查找一天内被访问的文件，-atime 表示访问时间</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-atime</span> <span class="token parameter variable">-1</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-print</span>
<span class="token comment"># 查找一天内状态被改变的文件，-ctime 表示元数据被变化时间</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-ctime</span> <span class="token parameter variable">-1</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-print</span>
<span class="token comment"># 查找比 chopin.txt 新的文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-newer</span> <span class="token string">&quot;chopin.txt&quot;</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-print</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按照权限查找-perm" tabindex="-1"><a class="header-anchor" href="#按照权限查找-perm" aria-hidden="true">#</a> 按照权限查找（-perm）</h2><blockquote><p>通过 -perm 选项，可以按照如下方式使用：</p></blockquote><ul><li>-perm 644：精确权限查找</li><li>-perm /666：任何一类用户中的任何一位符合条件即满足</li><li>-perm -222：每一类用户的每一位同时符合条件即满足</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找当前目录权限为 644 的文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-perm</span> <span class="token number">644</span>
<span class="token comment"># 查找 etc 目录下至少有一个用户有写权限的文件</span>
<span class="token function">find</span> /etc <span class="token parameter variable">-type</span> f <span class="token parameter variable">-perm</span> /222
<span class="token comment"># 查找 etc 目录下所有用户都有执行权限的文件</span>
<span class="token function">find</span> /etc <span class="token parameter variable">-perm</span> <span class="token parameter variable">-111</span> <span class="token parameter variable">-ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合条件" tabindex="-1"><a class="header-anchor" href="#组合条件" aria-hidden="true">#</a> 组合条件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找当前目录下属于 chopin 用户的普通文件，-a 可以省略</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-a</span> <span class="token parameter variable">-user</span> chopin <span class="token parameter variable">-print</span>
<span class="token comment"># 查找当前目录下大于 2M 或 2 天前被修过的文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-size</span> +2M <span class="token parameter variable">-o</span> <span class="token parameter variable">-mtime</span> +2 <span class="token parameter variable">-print</span>
<span class="token comment"># 查找当前目录下不是普通文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-not</span> <span class="token parameter variable">-type</span> f
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token operator">!</span> <span class="token parameter variable">-type</span> f
<span class="token comment"># 查找非空文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token operator">!</span> <span class="token parameter variable">-empty</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理动作" tabindex="-1"><a class="header-anchor" href="#处理动作" aria-hidden="true">#</a> 处理动作</h2><ul><li>-print：打印，默认动作，可省略</li><li>-ls：以 ls 长文件格式输出</li><li>-delete：删除查找到的文件</li><li>-exec：查找到的文件传递给任何 Linux 命令</li><li>-ok：与 exec 功能相同，区别是需要用户确认每次的操作</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -print 默认为打印，可省略 下面等价</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.log&quot;</span> <span class="token parameter variable">-print</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.log&quot;</span>
<span class="token comment"># -ls 以 ls 长文件的格式形式输出</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span> <span class="token parameter variable">-ls</span>
<span class="token comment"># -delete 删除查找到的文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-size</span> +100M <span class="token parameter variable">-delete</span>
<span class="token comment"># -exec 将查找到的文件传递给 command 命令。</span>
<span class="token comment"># 下边例子是将查找到的文件传递给了 ls 命令，同理我们可以传递给任何一个 Linux 命令，功能十分强大，也很灵活。</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">ls</span> <span class="token parameter variable">-lh</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="经典案例" tabindex="-1"><a class="header-anchor" href="#经典案例" aria-hidden="true">#</a> 经典案例</h2><p>如果存在一个名称乱码的文件，想要删除它，该怎么办？即使我们复制乱码名称到命令行，很有可能终端不能正确识别。不用担心，下边来展示下 find 是如何优雅的解决问题的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span>  <span class="token parameter variable">-i</span>
<span class="token number">138957</span> a.txt  <span class="token number">138959</span> T.txt  <span class="token number">132395</span> ڹ��.txt

$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-inum</span> <span class="token number">132395</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结束语" tabindex="-1"><a class="header-anchor" href="#结束语" aria-hidden="true">#</a> 结束语</h2><p>这里需要提一下，find 搜索文件时通过扫描磁盘来进行的，尽可能不要大范围的搜索文件，尤其是在 / 目录下搜索，会长时间消耗服务器的 cpu 资源。如果是生产环境的机器，执行前要考虑是否会对业务造成影响。</p><h2 id="扩展-locate" tabindex="-1"><a class="header-anchor" href="#扩展-locate" aria-hidden="true">#</a> 扩展 locate</h2><p>虽然 find 功能非常强大，但要知道的是，find 执行过程是通过扫描磁盘文件来进行查找的，如果大范围的查找文件，需要花费的时间很长，且消耗服务器 cpu 资源。</p><p>这里推荐另一个 Linux 文件查找神器 locate，类似于 win 平台下的 everything。它基于索引表进行查询，查询速度非常快，基本不占用 cpu 资源。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">locate</span> file.txt
<span class="token function">locate</span> /etc/httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意，如果是当天新创建的文件，通过 locate 默认是查不到的，因为它的数据库默认是每天自动更新一次。如果希望查询到当天创建的新文件，需要执行 updatedb 即可。</p><p>查找速度快是 locate 的优势，但它的缺点也非常明显：</p><ul><li>模糊查询</li><li>查找匹配模式单一</li><li>查询的名称匹配路径命令</li><li>索引表的建立会占用磁盘空间</li><li>非实时查询，当天数据可能查不到</li></ul>`,38),k={href:"https://www.linuxcool.com/",target:"_blank",rel:"noopener noreferrer"};function h(f,g){const e=i("router-link"),t=i("ExternalLinkIcon");return r(),c("div",null,[u,o(" more "),a("nav",v,[a("ul",null,[a("li",null,[s(e,{to:"#按文件名查找-name"},{default:l(()=>[n("按文件名查找（-name）")]),_:1})]),a("li",null,[s(e,{to:"#按照文件类型查找-type"},{default:l(()=>[n("按照文件类型查找（-type）")]),_:1})]),a("li",null,[s(e,{to:"#按照文件从属关系查找"},{default:l(()=>[n("按照文件从属关系查找")]),_:1})]),a("li",null,[s(e,{to:"#按照文件大小查找-size"},{default:l(()=>[n("按照文件大小查找（-size）")]),_:1})]),a("li",null,[s(e,{to:"#按照时间查找-atime"},{default:l(()=>[n("按照时间查找（-atime）")]),_:1})]),a("li",null,[s(e,{to:"#按照权限查找-perm"},{default:l(()=>[n("按照权限查找（-perm）")]),_:1})]),a("li",null,[s(e,{to:"#组合条件"},{default:l(()=>[n("组合条件")]),_:1})]),a("li",null,[s(e,{to:"#处理动作"},{default:l(()=>[n("处理动作")]),_:1})]),a("li",null,[s(e,{to:"#经典案例"},{default:l(()=>[n("经典案例")]),_:1})]),a("li",null,[s(e,{to:"#结束语"},{default:l(()=>[n("结束语")]),_:1})]),a("li",null,[s(e,{to:"#扩展-locate"},{default:l(()=>[n("扩展 locate")]),_:1})])])]),b,a("p",null,[n("Linux 命令大全(手册)："),a("a",k,[n("https://www.linuxcool.com/"),s(t)])])])}const q=p(m,[["render",h],["__file","12.Linux命令 find.html.vue"]]);export{q as default};
