import type { DefaultTheme } from 'vitepress'
import { Blog } from './blog'

declare global {
  interface Window {
  }
}

declare module 'vitepress' {
  interface ThemeConfig  {
    articles?: Blog.ArticleData[]
  }
}
export {}
