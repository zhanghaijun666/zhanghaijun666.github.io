/*
 * 生成博客数据的插件
 * ------------------------------------------------------------------------
 */
import type { Plugin } from 'vite'
import type { UserConfig } from '../sidebar/types'
import { getArticleList } from '../../../scripts/article'


export default function blogPlugin(): Plugin {
  return {
    name: 'vitepress-blog-plugin',
    config: async (config) => {
      console.log('blog data generation start...')
      const list = await getArticleList()


      ;(config as UserConfig).vitepress.site.themeConfig.articles = list
      console.log('blog data generation success!')
      return config
    }
  }
}
