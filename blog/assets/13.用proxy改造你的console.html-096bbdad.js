import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,a as s,b as n,d as t,f as i}from"./app-efa5e96e.js";const l={},u=i(`<h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><p>方案一，通过ast解析console 将变量名放在console后面，奈何esbuild不支持ast操作(不是我不会 哈哈哈哈), 故放弃。</p><p>方案二，既然vue能代理对象，那么console是不是也能被代理。</p><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><p>第一步代理console,将原始的console,用全局变量originConsole保存起来，以便后续使用 withLogging 函数拦截console.log 重写log参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>js复制代码<span class="token keyword">const</span> originConsole <span class="token operator">=</span> window<span class="token punctuation">.</span>console<span class="token punctuation">;</span> 
<span class="token keyword">var</span> console <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>console<span class="token punctuation">,</span> <span class="token punctuation">{</span> 
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">if</span><span class="token punctuation">(</span>property <span class="token operator">===</span> <span class="token string">&#39;log&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">return</span> <span class="token function">withLogging</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">)</span> 
    <span class="token punctuation">}</span> 
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遇到问题，js中 无法获取获取变量的名称的字符串。就是说无法打印变量名。</p><p>解决方案，通过vite中的钩子函数transform，将console.log(name.x) 转化成 console.log(name.x, [&#39;isPlugin&#39;, &#39;name.x&#39;])</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">transform</span><span class="token punctuation">(</span><span class="token parameter">src<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 只解析src 下的console</span>
        <span class="token keyword">const</span> matchs <span class="token operator">=</span> src<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">console.log\\((.*)\\);?</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">[</span><span class="token operator">...</span>matchs<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> <span class="token punctuation">[</span>matchStr<span class="token punctuation">,</span> args<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
                <span class="token keyword">let</span> replaceMatch <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
                <span class="token keyword">const</span> haveSemicolon <span class="token operator">=</span> matchStr<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
                <span class="token keyword">const</span> sliceIndex <span class="token operator">=</span> haveSemicolon <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">2</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> temp <span class="token operator">=</span> matchStr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>sliceIndex<span class="token punctuation">)</span><span class="token punctuation">;</span> 
                <span class="token keyword">const</span> tempArgs <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;&quot;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> item
                    <span class="token punctuation">}</span>
                    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span>
                replaceMatch <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>temp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,[&#39;isPlugin&#39;,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>tempArgs<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]);</span><span class="token template-punctuation string">\`</span></span>
                src <span class="token operator">=</span> src<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>matchStr<span class="token punctuation">,</span> replaceMatch<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> src<span class="token punctuation">,</span>
      id<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样最终就实现了类型于这样的输出代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>originConsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;name.x=&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">.</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样也就最终实现了通过变量输出变量名跟变量值的一一对应</p><h3 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h3>`,13),r={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fvite-plugin-consoles",target:"_blank",rel:"noopener noreferrer"},k={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FALiangTech%2Fvite-plugin-consoles%23readme",target:"_blank",rel:"noopener noreferrer"};function d(m,v){const a=e("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[n("我将其写成了一个vite插件，"),s("a",r,[n("vite-plugin-consoles"),t(a)]),n(" 感兴趣的可以试试，有bug记得跟我说(●'◡'●)")]),s("p",null,[n("源码地址： "),s("a",k,[n("github.com/ALiangTech/…"),t(a)])])])}const b=p(l,[["render",d],["__file","13.用proxy改造你的console.html.vue"]]);export{b as default};
