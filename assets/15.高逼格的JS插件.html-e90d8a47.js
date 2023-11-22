const n=JSON.parse(`{"key":"v-31371dd5","path":"/30.%E7%BC%96%E7%A8%8B%E6%8A%80%E5%B7%A7/12.JavaScript/15.%E9%AB%98%E9%80%BC%E6%A0%BC%E7%9A%84JS%E6%8F%92%E4%BB%B6.html","title":"高逼格的JS插件","lang":"zh-CN","frontmatter":{"title":"高逼格的JS插件","date":"2023-05-14T00:00:00.000Z","category":["编程技巧","JavaScript"],"tag":["JavaScript"],"description":"1、原型链写法 要开始编写插件就得先了解JS模块化，早期的模块化是利用了函数自执行来实现的，在单独的函数作用域中执行代码可以避免插件中定义的变量污染到全局变量，举个栗子🌰，以下代码实现了一个简单随机数生成的插件： ;(function (global) { \\"use strict\\"; var MyPlugin = function (name) { this.name = name }; MyPlugin.prototype = { say: function () { console.log('欢迎你：', this.name) }, random: function (min = 0, max = 1) { if (min &lt;= Number.MAX_SAFE_INTEGER &amp;&amp; max &lt;= Number.MAX_SAFE_INTEGER) { return Math.floor(Math.random() * (max - min + 1)) + min } } }; // 函数自执行将 this（全局下为window）传入，并在其下面挂载方法 global.MyPlugin = MyPlugin; // 兼容CommonJs规范导出 if (typeof module !== 'undefined' &amp;&amp; module.exports) module.exports = MyPlugin; })(this);","head":[["meta",{"property":"og:url","content":"https://haijunit.top/30.%E7%BC%96%E7%A8%8B%E6%8A%80%E5%B7%A7/12.JavaScript/15.%E9%AB%98%E9%80%BC%E6%A0%BC%E7%9A%84JS%E6%8F%92%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"学习笔记"}],["meta",{"property":"og:title","content":"高逼格的JS插件"}],["meta",{"property":"og:description","content":"1、原型链写法 要开始编写插件就得先了解JS模块化，早期的模块化是利用了函数自执行来实现的，在单独的函数作用域中执行代码可以避免插件中定义的变量污染到全局变量，举个栗子🌰，以下代码实现了一个简单随机数生成的插件： ;(function (global) { \\"use strict\\"; var MyPlugin = function (name) { this.name = name }; MyPlugin.prototype = { say: function () { console.log('欢迎你：', this.name) }, random: function (min = 0, max = 1) { if (min &lt;= Number.MAX_SAFE_INTEGER &amp;&amp; max &lt;= Number.MAX_SAFE_INTEGER) { return Math.floor(Math.random() * (max - min + 1)) + min } } }; // 函数自执行将 this（全局下为window）传入，并在其下面挂载方法 global.MyPlugin = MyPlugin; // 兼容CommonJs规范导出 if (typeof module !== 'undefined' &amp;&amp; module.exports) module.exports = MyPlugin; })(this);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-23T07:13:54.000Z"}],["meta",{"property":"article:author","content":"知识库"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2023-05-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-23T07:13:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"高逼格的JS插件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-23T07:13:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"知识库\\",\\"url\\":\\"https://haijunit.top\\",\\"email\\":\\"zhanghaijun_java@163.com\\"}]}"]]},"headers":[{"level":2,"title":"1、原型链写法","slug":"_1、原型链写法","link":"#_1、原型链写法","children":[]},{"level":2,"title":"2、闭包式写法（推荐）","slug":"_2、闭包式写法-推荐","link":"#_2、闭包式写法-推荐","children":[]},{"level":2,"title":"3、仿 JQuery写法","slug":"_3、仿-jquery写法","link":"#_3、仿-jquery写法","children":[]},{"level":2,"title":"4、工程化插件","slug":"_4、工程化插件","link":"#_4、工程化插件","children":[{"level":3,"title":"4.1. umd","slug":"_4-1-umd","link":"#_4-1-umd","children":[]},{"level":3,"title":"4.2. ES","slug":"_4-2-es","link":"#_4-2-es","children":[]},{"level":3,"title":"4.3. CJS","slug":"_4-3-cjs","link":"#_4-3-cjs","children":[]}]},{"level":2,"title":"5、模块化的发展","slug":"_5、模块化的发展","link":"#_5、模块化的发展","children":[]},{"level":2,"title":"5、自动化API文档","slug":"_5、自动化api文档","link":"#_5、自动化api文档","children":[]},{"level":2,"title":"6、发布插件","slug":"_6、发布插件","link":"#_6、发布插件","children":[]},{"level":2,"title":"7、总结","slug":"_7、总结","link":"#_7、总结","children":[]}],"git":{"createdTime":1684826034000,"updatedTime":1684826034000,"contributors":[{"name":"zhanghaijun","email":"zhanghaijun@bjtxra.com","commits":1}]},"readingTime":{"minutes":8.76,"words":2628},"filePathRelative":"30.编程技巧/12.JavaScript/15.高逼格的JS插件.md","localizedDate":"2023年5月14日","excerpt":"<h2> 1、原型链写法</h2>\\n<p>要开始编写插件就得先了解<strong>JS模块化</strong>，早期的模块化是利用了<strong>函数自执行</strong>来实现的，在单独的函数作用域中执行代码可以避免插件中定义的变量污染到全局变量，举个栗子🌰，以下代码实现了一个简单随机数生成的插件：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">global</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string\\">\\"use strict\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">var</span> <span class=\\"token function-variable function\\">MyPlugin</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">name</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name <span class=\\"token operator\\">=</span> name\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token class-name\\">MyPlugin</span><span class=\\"token punctuation\\">.</span>prototype <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function-variable function\\">say</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'欢迎你：'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token function-variable function\\">random</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">min <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> max <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>min <span class=\\"token operator\\">&lt;=</span> Number<span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">MAX_SAFE_INTEGER</span> <span class=\\"token operator\\">&amp;&amp;</span> max <span class=\\"token operator\\">&lt;=</span> Number<span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">MAX_SAFE_INTEGER</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">return</span> Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">floor</span><span class=\\"token punctuation\\">(</span>Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">random</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span> <span class=\\"token punctuation\\">(</span>max <span class=\\"token operator\\">-</span> min <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> min\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n    \\n    <span class=\\"token comment\\">// 函数自执行将 this（全局下为window）传入，并在其下面挂载方法</span>\\n    global<span class=\\"token punctuation\\">.</span>MyPlugin <span class=\\"token operator\\">=</span> MyPlugin<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// 兼容CommonJs规范导出</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> module <span class=\\"token operator\\">!==</span> <span class=\\"token string\\">'undefined'</span> <span class=\\"token operator\\">&amp;&amp;</span> module<span class=\\"token punctuation\\">.</span>exports<span class=\\"token punctuation\\">)</span> module<span class=\\"token punctuation\\">.</span>exports <span class=\\"token operator\\">=</span> MyPlugin<span class=\\"token punctuation\\">;</span> \\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
