import { readFileSync } from 'node:fs'
import matter from 'gray-matter'
import { basename, normalize, resolve, sep } from 'pathe'
import glob from 'fast-glob'

/** 文章数据 */
export type Article = {
  index: number // 排序字段
  title: string // 标题
  link: string // 链接
  top?: boolean // 置顶
  matter?: {
    date?: string // 发布日期
    author?: string // 作者
    categories?: string[] // 分类
    tags?: string[] // 标签
  }

  [key: string]: any // 其他自定义字段
}

export const getArticleList = async (): Promise<Article[]> => {
  const cwd: string = './docs'
  const pattern: string[] = ['[0-9]+[_|.]*' + '/**/*.md']
  const ignoreList: string[] = []
  const paths: string[] = (await glob(pattern, { cwd, onlyFiles: false, ignore: ['**/node_modules/**', '**/dist/**', 'index.md', ...ignoreList] })).map((path) => normalize(path))

  const articleList: Article[] = await Promise.all(paths.map(async (path) => getArticleData(cwd, path)))
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

/**
 * 获取文章数据
 * @param cwd 工作目录
 * @param path 文件路径
 */
export const getArticleData = (cwd: string, path: string): Article => {
  const file = readFileSync(resolve(cwd, path), 'utf-8')
  const { content, data } = matter(file)

  const item = getPathItem(path)

  return {
    index: item.index,
    title: data.title || item.title || getArticleTitle(content),
    link: '/' + path.replace(/.md$/, '.html').split(sep).join('/'),
    top: !!data.top,
    matter: {
      date: data.date,
      author: data.author,
      categories: (data.categories || []).map(String),
      tags: (data.tags || []).map(String)
    }
  }
}

/**
 * 从文章内容解析文章标题
 * @param content 文章内容
 * @returns 文章标题
 */
export function getArticleTitle(content: string) {
  const match = content.match(/^#\s*(.+)/m)
  return match?.[1].trim().replace(/\{.*}/g, '').replace(/<.*>/g, '')
}

/**
 * 文件名转换为文章信息
 * @param path 文件路径
 * @returns index：排序字段，title：中文标题，link：一般是英文url
 */
export const getPathItem = (path: string): { index: number; title: string; link: string | undefined } => {
  const name = basename(path)
  const array = (name.match(/^((\d+)[_|.])?([^_|.]+)([_|.]([^_|.]+))?.md/) || name.match(/^((\d+)[_|.])?([^_|.]+)([_|.]([^_|.]+))?/) || []).filter((_, index) => [2, 3, 5].includes(index))

  if (array.length === 0) return { index: 999999, title: name, link: undefined }
  return { index: Number(array[0] || 999999), title: array[1], link: array[2] || array[1] }
}
