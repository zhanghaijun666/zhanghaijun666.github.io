import { DefaultTheme, defineConfig, UserConfig } from 'vitepress'
import { search as zhSearch } from './zh'
import { mermaidPlugin } from '../plugins/mermaid'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { type Article, getArticleList } from '../utils/article'

const articles: { article: Article[] } = { article: await getArticleList() }
const base: string = '/docs'

export const shared: UserConfig<DefaultTheme.Config> = defineConfig({
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
    ...articles,
    logo: { src: '/logo.svg', width: 24, height: 24 },
    socialLinks: [{ icon: 'github', link: 'https://gitee.com/haijunit_navi/navi-docs' }],
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
