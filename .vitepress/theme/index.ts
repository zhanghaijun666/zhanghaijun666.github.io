// https://vitepress.dev/guide/custom-theme
import { h, nextTick, onMounted, watch } from 'vue'
import { Theme, useData, useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Mermaid from './components/Mermaid.vue'
import Confetti from './components/Confetti.vue' // 五彩纸屑
import ArticleMetadata from './components/ArticleMetadata.vue' //字数阅读时间
import HomeUnderline from './components/HomeUnderline.vue' //首页文字特效
import BackTop from './components/BackTop.vue'
import LinkCard from './components/LinkCard.vue'
import ShareButton from './components/ShareButton.vue'
import LayoutFooter from './components/LayoutFooter.vue'

import Tags from './blog/Tags.vue'
import Category from './blog/Category.vue'
import Archives from './blog/Archives.vue'
import Page from './blog/Page.vue'

import './style/index.css'
import 'virtual:group-icons.css'
import { Footer_Data } from '../data'

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
      'layout-bottom': () => h(LayoutFooter, { Footer_Data })
    })
  },
  enhanceApp: async ({ app, router, siteData }) => {
    app.component('Mermaid', Mermaid)
    app.component('Confetti', Confetti)
    // 字数阅读时间
    app.component('ArticleMetadata', ArticleMetadata)
    app.component('HomeUnderline', HomeUnderline)
    app.component('LinkCard', LinkCard)
    // 博客界面
    app.component('Tags', Tags)
    app.component('Category', Category)
    app.component('Archives', Archives)
    app.component('Page', Page)
  },
  setup() {
    const route = useRoute()
    const initZoom = (): void => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => initZoom())
    watch(() => route.path, () => nextTick(() => initZoom()))
  }
} satisfies Theme
