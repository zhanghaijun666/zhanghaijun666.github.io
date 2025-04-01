import glob from 'fast-glob'
import { basename, normalize, resolve, sep } from 'pathe'
import { readFileSync } from 'node:fs'
import matter from 'gray-matter'
import { Blog } from '../typings/blog'
import { withBase } from 'vitepress'

// 文件夹或者文件按的命名规则
const NAME_REGEX: RegExp = RegExp(/^((\d+)[_|.])?([^_|.]+)(.md)?/)

/**
 * 获取文章列表
 */
export const getArticleList = async (dir: string = './docs'): Promise<Blog.ArticleData[]> => {
  const pattern: string[] = ['[0-9]+[_|.]*' + '/**/*.md']
  const ignoreList: string[] = ['**/page/**']
  const paths: string[] = (await glob(pattern, { cwd: dir, onlyFiles: false, ignore: ['**/node_modules/**', '**/dist/**', '**/index.md', ...ignoreList] })).map((path) => normalize(path))
  // 文章详情处理
  const articleList: Blog.ArticleData[] = await Promise.all(paths.map(async (path) => getArticle(dir, path)))
  // 文章排序
  articleList.sort((a, b) => {
    if (!a.index || !b.index) {
      return (b.index ? 1 : 0) - (a.index ? 1 : 0)
    }
    if (a.index !== b.index) {
      return a.index - b.index
    }
    return a.title.localeCompare(b.title)
  })
  return articleList
}

/**
 * 获取文章详情
 */
const getArticle = async (dir: string, path: string): Promise<Blog.ArticleData> => {
  const file: string = readFileSync(resolve(dir, path), 'utf-8')
  const { data } = matter(file)
  const array: string[] = (NAME_REGEX.exec(basename(path)) ?? []).filter((_, index) => [2, 3].includes(index))
  return {
    index: array[0] ? Number(array[0]) : data.index,
    title: array[1],
    link: withBase('/' + path.replace(/.md$/, '.html').split(sep).join('/')),
    summary: data.summary,
    cover: data.cover,
    categories: (data.categories ?? []).map(String),
    tags: (data.tags ?? []).map(String),
    top: !!data.top
  }
}

/**
 * 从文章内容解析文章标题
 * 规则：文章中第一个带#的标题文字
 * @param content 文章内容
 * @returns 文章标题
 */
function getArticleTitle(content: string) {
  return RegExp(/^#\s*(.+)/m).exec(content)?.[1].trim().replace(/\{.*}/g, '').replace(/<.*>/g, '')
}
