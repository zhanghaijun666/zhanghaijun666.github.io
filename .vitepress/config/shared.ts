import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'
import { mermaidPlugin } from '../plugins/mermaid'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import glob from 'fast-glob'
import { normalize } from 'pathe'
import { Article, getArticleData } from '../utils/article'

const getArticle = async (): Promise<Article[]> => {
  const cwd: string = './docs'
  const pattern: string[] = ['[0-9]+[_|.]*' + '/**/*.md']
  const ignoreList: string[] = []
  const paths: string[] = (await glob(pattern, { cwd, onlyFiles: false, ignore: ['**/node_modules/**', '**/dist/**', 'index.md', ...ignoreList] })).map(path => normalize(path))

  const articleList: Article[] = await Promise.all(paths.map(async path => getArticleData(cwd, path)))
  // 文章排序
  articleList.sort((a, b) => {
    if (a.top !== b.top) {
      return (b.top ? 1 : 0) - (a.top ? 1 : 0)
    }
    if (a.index !== b.index) {
      return a.index - b.index
    }
    return a.title.localeCompare(b.title)
  })
  return articleList
}

const articleList = await getArticle()

export const shared = defineConfig({
  title: '学习笔记',
  srcDir: './docs',
  outDir: './dist/docs/',
  base: '/docs/',
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
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
    ['meta', { name: 'og:site_name', content: 'Ares Chang' }],
    ['meta', { name: 'og:image', content: '/logo.png' }],
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
    theme: { light: 'one-light', dark: 'one-dark-pro' },
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
    logo: { src: '/logo.svg', width: 24, height: 24 },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    search: {
      provider: 'local',
      options: {
        locales: {
          ...zhSearch
        }
      }
    },
    article: articleList
  }
})
