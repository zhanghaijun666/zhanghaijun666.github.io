// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch, nextTick } from 'vue'
import type { Theme } from 'vitepress'
import { inBrowser, useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import busuanzi from 'busuanzi.pure.js'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Mermaid from './components/Mermaid.vue'
import Confetti from './components/Confetti.vue' // 五彩纸屑
import DataPanel from './components/DataPanel.vue' //不蒜子
import ArticleMetadata from './components/ArticleMetadata.vue' //字数阅读时间
import HomeUnderline from './components/HomeUnderline.vue'
import BackTop from './components/BackTop.vue'
import LinkCard from './components/LinkCard.vue'

import './style/index.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-footer-before': () => h(BackTop),
      'layout-bottom': () => h(DataPanel)
    })
  },
  enhanceApp: async ({ app, router, siteData }) => {
    app.component('Mermaid', Mermaid)
    app.component('Confetti', Confetti)
    app.component('DataPanel', DataPanel)
    // 字数阅读时间
    app.component('ArticleMetadata', ArticleMetadata)
    app.component('HomeUnderline', HomeUnderline)
    app.component('LinkCard', LinkCard)
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
} satisfies Theme
