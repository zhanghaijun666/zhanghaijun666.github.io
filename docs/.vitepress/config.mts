import { defineConfig } from 'vitepress';
import { mdPlugin } from './config/plugins';
import sidebar from './config/sidebar.json';
import config from '../../package.json';

console.log(
  `\n %c ${config.name} - ${config.version} %c https://haijunit.top \n\n`,
  'background: #35495e; padding: 1px; border-radius: 3px 0 0 3px; color: #fff',
  'background: #fadfa3; padding: 1px; border-radius: 0 3px 3px 0; color: #fff'
);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs',
  outDir: '../dist/docs',
  lang: 'cn-ZH',
  title: '知识点的精心归纳',
  description: '个人知识点的精心归纳，每一份知识都像是仓库中的一颗宝石，等待着被发掘和利用',
  head: [
    ['link', { rel: 'icon', href: '/docs/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/docs/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/docs/icons/book.png' }],
    ['link', { rel: 'mask-icon', href: '/docs/icons/book.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/docs/icons/book.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    siteTitle: '知识点的精心归纳',
    nav: [
      { text: '首页', link: '/' },
      { text: '博文笔记', link: '/blogs/' },
      { text: '组件指南', link: '/components/' },
    ],
    sidebar: sidebar,
    socialLinks: [{ icon: 'github', link: 'https://gitee.com/haijunit/vitepress-demo' }],
    outline: {
      level: [2, 6],
      label: '目录',
    },
    editLink: {
      pattern: 'https://gitee.com/haijunit/vitepress-demo/edit/main/docs/:path',
      text: '编辑此页',
    },
    lastUpdated: {
      text: '最后更新',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    lightModeSwitchTitle: '明亮主题',
    darkModeSwitchTitle: '暗黑主题',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
    notFound: {
      title: 'PAGE NOT FOUND',
      quote: '页面丢失了...',
      linkText: '回到首页',
    },
    search: {
      provider: 'local',
    },
  },
  markdown: {
    lineNumbers: true,
    breaks: true,
    headers: { level: [0, 0] },
    // light: #f9fafb, dark: --vp-code-block-bg
    // theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => mdPlugin(md),
  },
  vite: {
    resolve: {
      alias: [],
    },
    plugins: [],
  },
});
