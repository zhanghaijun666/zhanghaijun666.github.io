import { defineConfig } from 'vitepress'
import autoSidebarPlugin from './plugins/sidebar'
import blogPlugin from './plugins/blog'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import UnoCSS from 'unocss/vite'
import { navList } from '../assets/data'
import locales from './lang'
import markdownConfig from './plugins/markdown'
import { getArticleList } from '../scripts/article'
import { Blog } from '../typings/blog'

const base: string = '/docs'
const { zh } = locales

const articles: Blog.ArticleData = await getArticleList()

export default defineConfig({
  title: '学习笔记',
  srcDir: './docs',
  outDir: './dist/docs/',
  base,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: base + '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: base + '/logo.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
    ['meta', { name: 'og:site_name', content: 'Ares Chang' }],
    ['meta', { name: 'og:image', content: base + '/logo.png' }],
    ['link', { rel: 'manifest', href: base + '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#18794e' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' }],
    ['meta', { name: 'referrer', content: 'never' }],
    ['meta', { name: 'keywords', content: '希望是火，失望是烟，人生就是一边生火一边冒烟' }]
  ],
  lastUpdated: true,
  cleanUrls: false,
  metaChunk: true,
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' }
  },
  markdown: {
    theme: { light: 'one-light', dark: 'one-dark-pro' },
    toc: { level: [2, 3] },
    image: { lazyLoading: true },
    lineNumbers: true,
    math: true,
    config: (md) => markdownConfig(md),
    codeTransformers: [
      {
        // 使用 `!!code` 防止转换
        postprocess: (code) => code.replace(/\[!!code/g, '[!code')
      }
    ]
  },
  themeConfig: {
    articles,
    nav: navList,
    logo: { src: '/logo.svg', width: 24, height: 24 },
    socialLinks: [{ icon: 'github', link: 'https://gitee.com/haijunit_navi/navi-docs' }],
    editLink: {
      pattern: 'https://gitee.com/haijunit_navi/navi-docs/edit/vitepress/docs/:path',
      text: '编辑本页'
    },
    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      }
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: zh.search
        }
      }
    }
  },
  vite: {
    plugins: [
      UnoCSS(),
      // 自定义，自动生成侧边栏
      autoSidebarPlugin({ pattern: ['[0-9]+[_|.]*' + '/**/*.md'], useH1Title: false }),
      groupIconVitePlugin({
        customIcon: {
          '.mdx': 'vscode-icons:file-type-light-mdx',
          'babel': 'vscode-icons:file-type-light-babel2'
        }
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    build: {
      chunkSizeWarningLimit: 1500
    }
  }
})
