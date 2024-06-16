import { defineConfig } from 'vitepress';
import MarkdownPlugins from './config/plugins';
import data from './config/data';

// import { sidebar, nav } from './config/data';
// import config from '../../package.json';

// console.log(
//   `\n %c ${config.name} - ${config.version} %c https://haijunit.top \n\n`,
//   'background: #35495e; padding: 1px; border-radius: 3px 0 0 3px; color: #fff',
//   'background: #fadfa3; padding: 1px; border-radius: 0 3px 3px 0; color: #fff'
// );
const { sidebar, nav } = data;
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs',
  outDir: '../dist/docs',
  lang: 'zh-CN',
  title: '知识的精心归纳',
  description: '个人知识的精心归纳，每一份知识都像是仓库中的一颗宝石，等待着被发掘和利用',
  head: [
    ['link', { rel: 'icon', href: '/docs/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/docs/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/docs/logo.png' }],
    ['link', { rel: 'mask-icon', href: '/docs/logo.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/docs/logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  srcExclude: ['**/README.md', '**/TODO.md'],
  lastUpdated: true,
  //多语言
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    siteTitle: '知识的精心归纳',
    nav: nav,
    sidebar: sidebar,
    socialLinks: [{ icon: 'github', link: 'https://gitee.com/haijunit/vitepress-demo' }],
    outline: { level: [2, 6], label: '当前页大纲' },
    editLink: { text: '编辑此页', pattern: 'https://gitee.com/haijunit/vitepress-demo/edit/repo/docs/:path' },
    lastUpdated: { text: '最后更新' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lightModeSwitchTitle: '明亮主题',
    darkModeSwitchTitle: '暗黑主题',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    langMenuLabel: '切换语言',
    notFound: { title: 'PAGE NOT FOUND', quote: '页面丢失了...', linkText: '回到首页' },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
  },
  markdown: {
    //行号显示
    lineNumbers: true,
    // 开启图片懒加载
    image: {
      lazyLoading: true,
    },
    config: (md) => MarkdownPlugins(md),
  },
  vite: {
    resolve: {
      alias: [],
    },
    plugins: [],
  },
});
