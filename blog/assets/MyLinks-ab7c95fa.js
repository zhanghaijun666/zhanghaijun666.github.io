import{g as d,o as t,c as o,M as i,N as h,P as m,e as a,Q as f,a as n,S as l}from"./app-efa5e96e.js";import{_ as v}from"./plugin-vue_export-helper-c27b6911.js";const p=[{name:"Markdown",desc:"Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，Markdown文件的后缀名便是“.md”。",href:"https://markdown.com.cn/",cover:"https://code.visualstudio.com/assets/icons/file-icons/markdown.svg",type:["local"]},{name:"VuePress",desc:"Vue 驱动的静态网站生成器",href:"https://v2.vuepress.vuejs.org",cover:"https://v2.vuepress.vuejs.org/images/hero.png",type:["local"]},{name:"vuepress-theme-hope",desc:"一个具有强大功能的 vuepress 主题✨",href:"https://theme-hope.vuejs.press",cover:"https://theme-hope.vuejs.press/logo.svg",type:["local"]},{name:"APlayer",desc:"🍭 一款很漂亮的 HTML5 播放器",href:"https://aplayer.js.org",cover:"https://camo.githubusercontent.com/5e1e7eda4ea5c1a2da695eab72033d799316671d86b5cc0aba5e49bc07ef0e65/68747470733a2f2f692e696d6775722e636f6d2f4c6e50765a764f2e706e67",type:["localUp"]},{name:"Waline",desc:"一款简洁、安全的评论系统。",href:"https://waline.js.org/",cover:"https://waline.js.org/logo.png",type:["localUp"]},{name:"iconfont-阿里巴巴矢量图标库",desc:"国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。",href:"https://www.iconfont.cn/",cover:"https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg",type:["localUp"]},{name:"Vue.js",desc:"易学易用，性能出色，适用场景丰富的 Web 前端框架。",href:"https://cn.vuejs.org",cover:"https://cdn.docschina.org/home/logo/vue.svg",type:["localUp"]},{name:"MDN Web Docs",desc:"MDN Web Docs站点提供了关于开放Web技术的信息，包括HTML、CSS和用于Web站点和渐进式Web应用程序的api。",href:"https://developer.mozilla.org",cover:"https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",type:["localUp"]},{name:"TypeScript手册",desc:"JavaScript的超集。",href:"https://bosens-china.github.io/Typescript-manual/",cover:"https://bosens-china.github.io/Typescript-manual/favicon.png",type:["localUp"]},{name:"Sass",desc:"Sass 是世界上最成熟、稳定、强大的专业级 CSS 扩展语言。",href:"https://www.sasscss.com/",cover:"https://www.sasscss.com/assets/img/logos/sass-77bd637b.png",type:["localUp"]},{name:"MongoDB",desc:"高性能、可扩展、易部署、易使用，存储数据非常方便",href:"https://docs.mongoing.com/",cover:"/img/logo-mongodb.png",type:["localUp"]},{name:"GitHub",desc:"世界最大的程序员聚集地。",href:"https://github.com/",cover:"https://github.com/fluidicon.png",type:["localUp"]},{name:"Visual Studio Code",desc:"免费开源的超强大的编辑器。",href:"https://code.visualstudio.com",cover:"https://code.visualstudio.com/apple-touch-icon.png",type:["localUp"]},{name:"ECharts",desc:"一个基于 JavaScript 的开源可视化图表库",href:"https://echarts.apache.org/",cover:"https://echarts.apache.org/zh/images/favicon.png",type:["Web"]},{name:"Go语言中文网",desc:"Golang中文社区,包括 golang 的最新安装包下载。",href:"https://studygolang.com/",cover:"/img/golangjob.ico",type:["Serve"]},{name:"Day.js",desc:"处理时间的 js 工具,Moment.js 的 2kB 轻量化方案",href:"https://day.js.org/",cover:"https://day.js.org/img/logo.png",type:["none"]}],u=[{name:"墨七",desc:"博客 & 记录 & 分享",href:"https://blog.mo7.cc",cover:"https://file.mo7.cc/static/lxh_gif/lxh_71.gif",type:["friend"]},{name:"Bing🐣",desc:"鱼跃此时海 花开彼岸天",href:"https://liubing.me",cover:"https://liubing.me/logo.svg",type:["friend"]},{name:"AI悦创",desc:"浅者见浅，深者见深——黄家宝",href:"https://bornforthis.cn",cover:"https://bornforthis.cn/aiyc.svg",type:["friend"]},{name:"叉叉白",desc:"菜鸡程序员",href:"https://blog.xxwhite.com",cover:"https://blog.xxwhite.com/assets/img/avatar.jpg",type:["friend"]},{name:"测试猿全栈知识体系",desc:"质量是1到100的事情!",href:"https://testyuan1024.com",cover:"https://testyuan1024.com/avatar.png",type:["friend"]}],y=[{name:"Tiny",desc:"超好用的图片压缩工具",href:"https://tinypng.com",cover:"https://tinypng.com/images/apng/panda-waving.png",type:["image"]},{name:"Bing每日一图",desc:"golang 实现获取 每日一图，每 8 小时自动更新一次 , 跟 bing 每日一图保持一致",href:"//file.mo7.cc/daily_cover",cover:"http://file.mo7.cc/static/logo/512.png",type:["image"]},{name:"AItrade",desc:"博主本人编写的，基于大数据和深度学习 , 打造的量化交易工具。",href:"https://trade.mo7.cc",cover:"https://file.mo7.cc/AItrade/logo/app.svg",type:["trade"]}],b={key:0,class:"MyLinks project-panel"},_=["href"],k=["src"],w={class:"name"},j={class:"desc"},M=d({__name:"MyLinks",props:{type:{},src:{}},setup(g){const c=g;let e=p;switch(c.src){case"document":e=p;break;case"tools":e=y;break;case"friend":e=u;break;default:e=p}return(S,x)=>c.type?(t(),o("div",b,[i(e).length>0?(t(!0),o(h,{key:0},m(i(e),(s,r)=>(t(),o(h,null,[s.type.indexOf(c.type)>-1?(t(),o("a",{class:f(["linkWrapper project",`project${r%9}`]),target:"_blank",href:s.href,key:r},[n("img",{class:"image",src:s.cover},null,8,k),n("div",w,l(s.name),1),n("div",j,l(s.desc),1)],10,_)):a("v-if",!0)],64))),256)):a("v-if",!0)])):a("v-if",!0)}});const L=v(M,[["__scopeId","data-v-9cd46fb7"],["__file","MyLinks.vue"]]);export{L as default};
