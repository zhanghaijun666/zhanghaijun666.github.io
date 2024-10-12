import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { zh } from './zh'
import AutoSidebarPlugin from 'vitepress-auto-sidebar-plugin'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: '简体中文', ...zh }
  },
  vite: {
    plugins: [
      // https://github.com/Ares-Chang/vitepress-auto-sidebar-plugin/blob/master/src/index.ts
      AutoSidebarPlugin({
        srcDir: './docs',
        sort: (a, b) => a.text.localeCompare(b.text),
        useH1Title: false
      })
    ]
  }
})
