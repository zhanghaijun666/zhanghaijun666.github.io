import { readFileSync } from 'node:fs'
import matter from 'gray-matter'
import { basename, resolve, sep } from 'pathe'

/** 文章数据 */
export interface Article {
  index: number; // 排序字段
  title: string; // 标题
  link: string; // 链接
  top?: boolean; // 置顶
  matter?: {
    date?: string; // 发布日期
    author?: string; // 作者
    categories?: string[]; // 分类
    tags?: string[]; // 标签
  }

  [key: string]: any; // 其他自定义字段
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
    link: path.replace('.md', '').split(sep).join('/'),
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
  const array = (
    name.match(/^((\d+)[_|.])?([^_|.]+)([_|.]([^_|.]+))?.md/)
    || name.match(/^((\d+)[_|.])?([^_|.]+)([_|.]([^_|.]+))?/)
    || []
  ).filter((_, index) => [2, 3, 5].includes(index))

  if (array.length === 0) return { index: 999999, title: name, link: undefined }
  return { index: Number(array[0] || 999999), title: array[1], link: array[2] || array[1] }
}
