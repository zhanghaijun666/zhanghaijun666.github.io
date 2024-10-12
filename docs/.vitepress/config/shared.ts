import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'
import { mermaidPlugin } from '../plugins/mermaid'

export const shared = defineConfig({
  title: '学习笔记',

  rewrites: {
    // 'zh/:rest*': ':rest*'
  },
  // sitemap: {
  //   hostname: 'https://vitepress.dev',
  //   transformItems(items) {
  //     return items.filter((item) => !item.url.includes('migration'))
  //   }
  // },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;' }],
    ['meta', { name: 'referrer', content: 'never' }],
    ['meta', { name: 'keywords', content: '希望是火，失望是烟，人生就是一边生火一边冒烟' }]
  ],
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  markdown: {
    //行号显示
    lineNumbers: true,
    math: true,
    // 使用 `!!code` 防止转换
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],
    config: (md) => {
      // 组件插入h1标题下
      ;(md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options)
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`
        return htmlResult
      }),
        md.use(mermaidPlugin)
    },
    // 图片懒加载
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    search: {
      provider: 'local',
      options: {
        locales: {
          ...zhSearch
        }
      }
    }
  }
})
