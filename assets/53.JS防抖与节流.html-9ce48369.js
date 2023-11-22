import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as i,e as p,a as n,d as t,w as e,b as s,f as u}from"./app-d6438571.js";const r={},k={class:"table-of-contents"},d=n("blockquote",null,[n("p",null,[s("防抖（debounce）和节流/限频（throttle）的作用都是在高频事件中防止函数被多次调用，提高用户体验，是一种性能优化的方案。"),n("br"),s(" 区别在于，防抖函数只会在高频事件结束后n毫秒调用一次函数，节流函数会在高频事件触发过程当中每隔n毫秒调用一次函数。")])],-1),m=u(`<h2 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释" aria-hidden="true">#</a> 名词解释</h2><p><strong>连续操作</strong>：两个操作之间的时间间隔小于设定的阀值，这样子的一连串操作视为连续操作。</p><p><strong>防抖</strong>：一个连续操作中的处理，只触发一次，从而实现防抖动。</p><p><strong>节流/限频</strong>：一个连续操作中的处理，按照阀值时间间隔进行触发，从而实现节流。</p><figure><img src="https://images2017.cnblogs.com/blog/1094893/201711/1094893-20171120172217415-1848957105.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如图所示，其中delay=4，由于红色操作序列与绿色操作序列之间的时间间隔小于delay，所以这两个序列被视为一个连续操作行为。</p><ul><li>debounceTail：执行操作在连续操作完成之后，触发；</li><li>debounceStart：执行操作在连续操作完成之前，触发；</li><li>throttle：在一个连续操作行为中，每间隔delay的时间触发1次。</li></ul><p>结合运行图，可以更好的理解防抖、节流的作用。</p><h2 id="防抖函数" tabindex="-1"><a class="header-anchor" href="#防抖函数" aria-hidden="true">#</a> 防抖函数</h2><p>触发高频事件后一段时间（wait）只会执行一次函数，如果指定时间（wait）内高频事件再次被触发，则重新计算时间。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 防抖函数 且首次执行</span>
<span class="token comment">// 采用原理：第一操作触发，连续操作时，最后一次操作打开任务开关（并非执行任务），任务将在下一次操作时触发）</span>
<span class="token keyword">function</span> <span class="token function">debounceStart</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> immediate <span class="token operator">=</span> <span class="token boolean">true</span> 
    <span class="token keyword">let</span> movement <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> args <span class="token operator">=</span> arguments
        <span class="token comment">// 开关打开时，执行任务</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            immediate <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 清空上一次操作</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>movement<span class="token punctuation">)</span>
        <span class="token comment">// 任务开关打开</span>
        movement <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            immediate <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 防抖 尾部执行</span>
<span class="token comment">// 采用原理：连续操作时，上次设置的setTimeout被clear掉</span>
<span class="token keyword">function</span> <span class="token function">debounceTail</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> movement <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> args <span class="token operator">=</span> arguments
        <span class="token comment">// 清空上一次操作</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>movement<span class="token punctuation">)</span>
        <span class="token comment">// delay时间之后，任务执行</span>
        movement <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 调用</span>
btn<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token function">debounceStart</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;100ms&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> 
btn<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token function">debounceTail</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;100ms&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节流函数" tabindex="-1"><a class="header-anchor" href="#节流函数" aria-hidden="true">#</a> 节流函数</h2><p>规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 节流函数</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span>delay<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 调用</span>
window<span class="token punctuation">.</span>onscroll <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;100ms&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过控制台可以看到，不进行限频时，scroll在1s内可以触发高达上100次，增加了限频之后，就将scroll的触发控制在一定的范围内。</p><h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2><figure><img src="https://images2017.cnblogs.com/blog/1094893/201711/1094893-20171117182033687-255861889.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>在实际的使用场景当中，我们会发现，用户最后一次操作并没有后续的处理，也就是最后一次操作的状态将丢失。在某些应用场景当中，可能造成状态处理不准确。如通过scroll事件判断是否到达页面底部，如果到达，则提示用户。使用throttle方法进行节流，在到达底部之前，小于delay的时间间隔内，触发了一次位置判断操作；下一次触发将在delay时间之后，但在那之前，scroll事件已经结束了，所以无法获取最后scroll到底部的位置，也就不会触发提示。</p></blockquote><p>如何优化呢？可以结合debounceTail的功能，其可以实现最后一次操作的捕捉，如图所示：</p><figure><img src="https://images2017.cnblogs.com/blog/1094893/201711/1094893-20171117182057546-2044168214.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>增加movement来记录和清除最终操作状态；用count来避免与限频的重合；如此便实现了捕获最终操作状态的限频操作。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 限频，每delay的时间执行一次</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> isAvail <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> movement <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">let</span> args <span class="token operator">=</span> arguments
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isAvail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            isAvail <span class="token operator">=</span> <span class="token boolean">false</span>
            count <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                isAvail <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>movement<span class="token punctuation">)</span>
            movement <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> delay<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><p>常见的应用场景都是使用高频事件来调用函数的过程当中，比如应用于window对象的resize、scroll事件，拖拽时的mousemove事件，文字输入、自动完成的keyup事件。</p><h3 id="防抖应用场景" tabindex="-1"><a class="header-anchor" href="#防抖应用场景" aria-hidden="true">#</a> 防抖应用场景</h3><ul><li>scroll事件滚动触发事件</li><li>搜索框输入查询，如果用户一直在输入中，没有必要不停地调用去请求服务端接口，等用户停止输入的时候，再调用，设置一个合适的时间间隔，有效减轻服务端压力。</li><li>表单验证</li><li>按钮提交事件。</li><li>浏览器窗口缩放，resize事件(如窗口停止改变大小之后重新计算布局)等。</li></ul><h3 id="节流的应用场景" tabindex="-1"><a class="header-anchor" href="#节流的应用场景" aria-hidden="true">#</a> 节流的应用场景</h3><ul><li>DOM 元素的拖拽功能实现（mousemove）</li><li>搜索联想（keyup）</li><li>计算鼠标移动的距离（mousemove）</li><li>Canvas 模拟画板功能（mousemove）</li><li>射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）</li><li>监听滚动事件判断是否到页面底部自动加载更多</li></ul>`,28);function v(b,f){const a=c("router-link");return l(),i("div",null,[p(" more "),n("nav",k,[n("ul",null,[n("li",null,[t(a,{to:"#名词解释"},{default:e(()=>[s("名词解释")]),_:1})]),n("li",null,[t(a,{to:"#防抖函数"},{default:e(()=>[s("防抖函数")]),_:1})]),n("li",null,[t(a,{to:"#节流函数"},{default:e(()=>[s("节流函数")]),_:1})]),n("li",null,[t(a,{to:"#思考"},{default:e(()=>[s("思考")]),_:1})]),n("li",null,[t(a,{to:"#应用场景"},{default:e(()=>[s("应用场景")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#防抖应用场景"},{default:e(()=>[s("防抖应用场景")]),_:1})]),n("li",null,[t(a,{to:"#节流的应用场景"},{default:e(()=>[s("节流的应用场景")]),_:1})])])])])]),d,p(" more "),m])}const h=o(r,[["render",v],["__file","53.JS防抖与节流.html.vue"]]);export{h as default};
