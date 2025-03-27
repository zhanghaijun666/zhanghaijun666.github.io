import { defineConfig } from 'vitepress'
import AutoSidebarPlugin from '../plugins/sidebar'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import UnoCSS from 'unocss/vite'
import { mermaidPlugin } from '../plugins/mermaid'
import { navList } from '../assets/data'
import locales from './lang'

const base: string = '/docs'
const { zh } = locales

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
    //行号显示
    lineNumbers: true,
    math: true,
    // 使用 `!!code` 防止转换
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[!!code/g, '[!code')
        }
      }
    ],
    config: (md) => {
      md.use(groupIconMdPlugin)
      md.use(mermaidPlugin)
      // 组件插入h1标题下
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options)
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`
        return htmlResult
      }
    },
    // 图片懒加载
    image: { lazyLoading: true }
  },
  themeConfig: {
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
      // https://github.com/Ares-Chang/vitepress-auto-sidebar-plugin/blob/master/src/index.ts
      AutoSidebarPlugin({
        pattern: ['[0-9]+[_|.]*' + '/**/*.md'],
        useH1Title: false
      }),
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
