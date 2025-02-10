import { readFileSync } from 'node:fs'
import { basename } from 'pathe'
import matter from 'gray-matter'
import type { ArticleOptions, Item, TitleMode } from './types'

/**
 * 获取文件数据
 * @param path 文件绝对路径
 * @return 文件数据
 */
export function getArticleData(path: string): ArticleOptions {
  const file = readFileSync(path, 'utf-8')
  const { content, data } = matter(file)

  // return {
  //   ...(data as Omit<ArticleOptions, 'h1' | 'index'>),
  //   h1,
  //   index
  // }
  return Object.entries({
    index: data.index,
    hide: data.hide,
    title: data.title,
    h1: data.title || getArticleTitle(content) || undefined,
    group: data.group,
    groupTitle: data.groupTitle,
    groupIndex: data.groupIndex,
    groupAlone: data.groupAlone,
    collapsed: data.collapsed,
    sortPrev: data.sortPrev,
    sortNext: data.sortNext
  }).reduce((acc: {}, [key, value]) => {
    if (value !== undefined) {
      acc[key] = value
    }
    return acc
  }, {})
}

/**
 * 解析文章标题
 * @param content 文章内容
 * @returns 文章标题
 */
export function getArticleTitle(content: string) {
  const match = RegExp(/^#\s*(.+)/m).exec(content)
  return match?.[1]
    .trim()
    .replace(/\{.*}/g, '')
    .replace(/<.*>/g, '')
}

/**
 * 提取路径最后一项的信息
 * @param path 文件路径
 * @returns index：排序字段，title：中文标题，link：一般是英文url
 */
export const getPathItem = (path: string): { index: number; title: string; link: string } => {
  const name = basename(path)
  const array = (RegExp(/^((\d+)[_|.])?([^_|.]+)([_|.]([^_|.]+))?/).exec(name) || []).filter((_, index) => [2, 3, 5].includes(index))

  return {
    index: Number((array[0] || getPathIndex(path)) ?? 999999),
    title: array[1],
    link: array[2] || array[1]
  }
}

/**
 * 提取路径中最后一项的数字下标
 * @param path 文件绝对路径
 * @returns 下标
 */
export function getPathIndex(path: string): number | undefined {
  const name = basename(path)

  // 使用正则表达式匹配文件名中的数字前缀
  const match = RegExp(/^(\d+)\./).exec(name)
  if (match) return Number(match[1])
  return undefined
}

/**
 * 格式化标题
 * @param text 字符
 * @param mode 运行模式
 * @returns 格式化后的标题
 */
export function useTextFormat(text: string, mode: TitleMode) {
  if (typeof mode === 'function') return mode(text)

  switch (mode) {
    case 'lowercase':
      return text.toLowerCase()
    case 'uppercase':
      return text.toUpperCase()
    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    case 'kebabcase':
      return text
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
    case 'titlecase':
      return text
        .split(/[ -]/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    default:
      return text
  }
}

/**
 * 文件路由排序, 提取 index.md 到第一位
 * 优先级：index.md > 其他
 * @param list 路由列表
 * @returns 排序后的路由
 */
export function useSortIndexName(list: string[]) {
  return list.sort((a, b) => {
    if (a.includes('index.md') && !b.includes('index.md')) return -1
    if (!a.includes('index.md') && b.includes('index.md')) return 1
    return 0
  })
}

/**
 * 根据 index 下标来排序
 * @param list 要排序的列表
 * @returns 排序后的列表
 */
export function useIndexSort(list: Item[]) {
  return list.sort((a, b) => {
    if (a.index === undefined && b.index === undefined) return 0
    else if (a.index === undefined) return 1
    else if (b.index === undefined) return -1
    else return a.index - b.index
  })
}

/**
 * 按 sortPrev | sortNext 排序
 * 如果 sortPrev 等于 name ，则将数据插入到前面
 * 如果 sortNext 等于 name ，则将数据插入到后面
 * **sortPrev 优先级高于 sortNext**
 *
 * @param list
 * @returns 排序后的列表
 */
export function usePrevNextSort(list: Item[]) {
  const insertList = list.filter((item) => item.sortPrev || item.sortNext)
  const listWithoutInsert = list.filter((item) => !item.sortPrev && !item.sortNext)

  insertList.forEach((item) => {
    if (item.sortPrev) {
      const index = listWithoutInsert.findIndex(({ name }) => name === item.sortPrev)
      listWithoutInsert.splice(index, 0, item)
    } else if (item.sortNext) {
      const index = listWithoutInsert.findIndex(({ name }) => name === item.sortNext)
      listWithoutInsert.splice(index + 1, 0, item)
    }
  })

  return listWithoutInsert
}
