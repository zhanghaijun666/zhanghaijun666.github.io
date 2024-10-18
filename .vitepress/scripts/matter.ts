import glob from 'fast-glob'
import { normalize } from 'pathe'
import { Article, getArticleData } from '../utils/article'

export const formatMatter = async () => {
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
  console.log(articleList)
}
