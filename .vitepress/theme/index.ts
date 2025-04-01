// https://vitepress.dev/guide/custom-theme
import { h, nextTick, onMounted, watch } from 'vue'
import { EnhanceAppContext, Theme, useData, useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Mermaid from './components/Mermaid.vue'
import Confetti from './components/Confetti.vue' // 五彩纸屑
import ArticleMetadata from './components/ArticleMetadata.vue' //字数阅读时间
import HomeUnderline from './components/HomeUnderline.vue' //首页文字特效
import BackTop from './components/BackTop.vue'
import Link from './components/Link/index.vue'
import ShareButton from './components/ShareButton.vue'
import LayoutFooter from './components/LayoutFooter.vue'

import BlogArchive from './view/blog2/blog-archive.vue'
import BlogCategory from './view/blog2/blog-category.vue'
import BlogTag from './view/blog2/blog-tag.vue'
import Blog from './view/blog/index.vue'

import './style/index.css'
import 'virtual:group-icons.css'
import 'virtual:uno.css'
import { webLinks } from '../assets/data'

let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    const { frontmatter } = useData()
    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }
    return h(Layout, props, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-footer-before': () => h(BackTop),
      'aside-outline-before': () => h(ShareButton),
      'layout-bottom': () => h(LayoutFooter, { group: webLinks })
    })
  },
  enhanceApp: async ({ app, router, siteData }: EnhanceAppContext) => {
    app.component('Mermaid', Mermaid)
    app.component('Confetti', Confetti)
    // 字数阅读时间
    app.component('ArticleMetadata', ArticleMetadata)
    app.component('HomeUnderline', HomeUnderline)
    app.component('NLink', Link)
    // 博客界面
    app.component('Blog', Blog)
    app.component('BlogArchive', BlogArchive)
    app.component('BlogCategory', BlogCategory)
    app.component('BlogTag', BlogTag)

    watch(
      () => router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === '/'),
      { immediate: true }
    )
  },
  setup() {
    const route = useRoute()
    const initZoom = (): void => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => initZoom())
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
} satisfies Theme


if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome'))
    document.documentElement.classList.add('browser-chrome')
  else if (browser.includes('firefox'))
    document.documentElement.classList.add('browser-firefox')
  else if (browser.includes('safari'))
    document.documentElement.classList.add('browser-safari')
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle)
      return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle)
      return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}
