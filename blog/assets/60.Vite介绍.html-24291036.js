import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as l,f as a}from"./app-efa5e96e.js";const t={},r=a('<h2 id="_1-1、什么是vite" tabindex="-1"><a class="header-anchor" href="#_1-1、什么是vite" aria-hidden="true">#</a> 1.1、什么是Vite</h2><blockquote><p>Vite是一种新型的前端构建工具，它能显著改善前端开发体验。</p></blockquote><p>Vite由两个主要部分组成：</p><ol><li><code>dev server</code>：利用浏览器的ESM能力来提供源文件，具有丰富的内置功能并具有高效的HMR</li><li>生产构建：生产环境利用Rollup来构建代码，提供指令用来优化构建过程</li></ol><p>Vite作为一个基于浏览器原生ESM的构建工具，它省略了开发环境的打包过程，利用浏览器去解析imports，在服务端按需编译返回。同时，在开发环境拥有速度快到惊人的模块热更新，且热更新的速度不会随着模块增多而变慢。因此，使用Vite进行开发，至少会比Webpack快10倍左右。</p><h2 id="_1-2-、vite的主要特性" tabindex="-1"><a class="header-anchor" href="#_1-2-、vite的主要特性" aria-hidden="true">#</a> 1.2 、Vite的主要特性</h2><ul><li>Instant Server Start —— 即时服务启动</li><li>Lightning Fast HMR —— 闪电般快速的热更新</li><li>Rich Features —— 丰富的功能</li><li>Optimized Build —— 经过优化的构建</li><li>Universal Plugin Interface —— 通用的Plugin接口</li><li>Fully Typed APIs —— 类型齐全的API</li></ul><h2 id="_1-3、-主流构建工具对比" tabindex="-1"><a class="header-anchor" href="#_1-3、-主流构建工具对比" aria-hidden="true">#</a> 1.3、 主流构建工具对比</h2><p>构建工具指能自动对代码执行检验、转换、压缩等功能的工具。常见功能包括：代码转换、代码打包、代码压缩、HMR、代码检验。构建工具也随着前端技术的发展，从Browserify、Gulp到Parcel，从Webpack到Rollup，一直到最近比较火的面向非打包的Snowpack和Vite。</p><h3 id="browserify" tabindex="-1"><a class="header-anchor" href="#browserify" aria-hidden="true">#</a> Browserify</h3><ul><li>预编译模块化方案（文件打包工具）</li><li>Browserify基于流方式干净灵活</li><li>遵循commonJS规范打包JS</li><li>可引入插件打包CSS等其他资源（非原生能力）</li></ul><h3 id="gulp" tabindex="-1"><a class="header-anchor" href="#gulp" aria-hidden="true">#</a> Gulp</h3><ul><li>基于流的自动化构建工具（工程化）</li><li>配置复杂度高，偏向编程式，需要定义task处理构建</li><li>支持监听读写文件</li><li>可搭配Browserify等模块化工具来使用</li></ul><h3 id="parcel" tabindex="-1"><a class="header-anchor" href="#parcel" aria-hidden="true">#</a> Parcel</h3><ul><li>极速打包（工程化：极速0配置）</li><li>零配置，但造成了配置不灵活，内置常见场景的构建方案及其依赖，无需再次安装（babel等）</li><li>以html入口，自动检测和打包依赖</li><li>不支持SourceMap</li><li>无法Tree-shaking</li></ul><h3 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h3><ul><li>预编译模块化方案（工程化：大而全）</li><li>通过配置文件达到一站式配置</li><li>loader进行资源转换，功能全面（css+js+icon+front）</li><li>插件丰富，灵活扩展</li><li>社群庞大</li><li>大型项目构建慢</li></ul><h3 id="rollup" tabindex="-1"><a class="header-anchor" href="#rollup" aria-hidden="true">#</a> Rollup</h3><ul><li>基于ES6打包（模块打包工具）</li><li>Tree-shaking</li><li>打包文件小且干净，执行效率更高</li><li>更专注于JS打包</li></ul><h3 id="snowpack" tabindex="-1"><a class="header-anchor" href="#snowpack" aria-hidden="true">#</a> Snowpack</h3><ul><li>基于ESM运行时编译（工程化：ESM运行时）</li><li>无需递归循环依赖组装依赖树</li><li>默认输出单独的构建模块（未打包），可选择不同打包器（webpack、rollup等）</li></ul><h3 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite</h3><ul><li>基于ESM运行时打包</li><li>借鉴了Snowpack</li><li>生产环境使用Rollup，集成度更高，相比Snowpack支持多页面、库模式、动态导入自动polyfill等</li></ul><h2 id="_1-4、-为什么要使用vite" tabindex="-1"><a class="header-anchor" href="#_1-4、-为什么要使用vite" aria-hidden="true">#</a> 1.4、 为什么要使用Vite</h2><p>开发环境⚡️速度的提升</p><p>经过1.3节，我们简单对比了各打包工具之间的差异。可以看到使用JS开发的工具通常需要很长的时间才能启动开发服务器，且这个启动时间与代码量、代码复杂度正相关。即使使用HMR，文件修改后的效果也要几秒钟才能在浏览器中反应出来，代表如Webpack。那么Vite是如何解决如Webpack这样的构建工具一样，在复杂、多模块项目开发中启动慢、HMR慢的问题呢？</p><p>我们详细对比了开发环境中的Vite和Webpack，发现主要有如下不同：</p><table><thead><tr><th>Webpack</th><th>Vite</th></tr></thead><tbody><tr><td>先打包生成bundle，再启动开发服务器</td><td>先启动开发服务器，利用新一代浏览器的ESM能力，无需打包，直接请求所需模块并实时编译</td></tr><tr><td>HMR时需要把改动模块及相关依赖全部编译</td><td>HMR时只需让浏览器重新请求该模块，同时利用浏览器的缓存（源码模块协商缓存，依赖模块强缓存）来优化请求</td></tr><tr><td>内存高效利用</td><td>-</td></tr></tbody></table><p>因此，针对开发环境中的启动慢问题，Vite开发环境冷启动无需打包，无需分析模块之间的依赖，同时也无需在启动开发服务器前进行编译，启动时还会使用esbuild来进行预构建。而Webpack 启动后会做一堆事情，经历一条很长的编译打包链条，从入口开始需要逐步经历语法解析、依赖收集、代码转译、打包合并、代码优化，最终将高版本的、离散的源码编译打包成低版本、高兼容性的产物代码，这可满满都是 CPU、IO 操作啊，在 Node 运行时下性能必然是有问题。</p><p>针对HMR慢，即使只有很小的改动，Webpack依然需要构建完整的模块依赖图，并根据依赖图来进行转换。而Vite利用了ESM和浏览器缓存技术，更新速度与项目复杂度无关。可以看到，如Snowpack、Vite这类面相非打包的构建工具，在开发环境启动时只需要启动两个Server，一个用于页面加载，一个用于HMR的Websocket。当浏览器发出原生的ESM请求，Server收到请求只需要编译当前文件后返回给浏览器，不需要管理依赖。</p><p>相比Webpack需要对entry、loader、plugin等进行诸多配置，Vite的使用可谓是相当简单了。只需执行初始化命令，就可以得到一个预设好的开发环境，开箱即获得一堆功能，包括：CSS预处理、html预处理、异步加载、分包、压缩、HMR等。他使用复杂度介于Parcel和Webpack的中间，只是暴露了极少数的配置项和plugin接口，既不会像Parcel一样配置不灵活，又不会像Webpack一样需要了解庞大的loader、plugin生态，灵活适中、复杂度适中。适合前端新手。</p><h2 id="_1-5、-vite-开发环境-vs-生产环境" tabindex="-1"><a class="header-anchor" href="#_1-5、-vite-开发环境-vs-生产环境" aria-hidden="true">#</a> 1.5、 Vite 开发环境 VS 生产环境</h2><p>在1.3节主流工具对比时我们可以看到Vite的开发环境和生产环境具有较大的差异性。</p><p>开发环境不需要对所有资源打包，只是使用esbuild对依赖进行预构建，将CommonJS和UMD发布的依赖转换为浏览器支持的ESM，同时提高了后续页面的加载性能（lodash的请求）。Vite会将于构建的依赖缓存到node_modules/.vite目录下，它会根据几个源来决定是否需要重新运行预构建，包括 packages.json中的dependencies列表、包管理器的lockfile、可能在vite.config.js相关字段中配置过的。只要三者之一发生改变，才会重新预构建。</p><p>同时，开发环境使用了浏览器缓存技术，解析后的依赖请求以http头的max-age=31536000,immutable强缓存，以提高页面性能。</p><p>在生产环境，由于嵌套导入会导致发送大量的网络请求，即使使用HTTP2.x（多路复用、首部压缩），在生产环境中发布未打包的ESM仍然性能低下。因此，对比在开发环境Vite使用esbuild来构建依赖，生产环境Vite则使用了更加成熟的Rollup来完成整个打包过程。因为esbuild虽然快，但针对应用级别的代码分割、CSS处理仍然不够稳定，同时也未能兼容一些未提供ESM的SDK。</p><p>为了在生产环境中获得最佳的加载性能，仍然需要对代码进行tree-shaking、懒加载以及chunk分割（以获得更好的缓存）。</p>',37),d=[r];function h(c,n){return i(),l("div",null,d)}const s=e(t,[["render",h],["__file","60.Vite介绍.html.vue"]]);export{s as default};
