import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { zh } from './zh'
import AutoSidebarPlugin from '../plugins/sidebar'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default defineConfig({
  ...shared,
  locales: {
    root: {label: '简体中文', ...zh}
  },
  vite: {
    plugins: [
      // https://github.com/Ares-Chang/vitepress-auto-sidebar-plugin/blob/master/src/index.ts
      AutoSidebarPlugin({
        pattern: ['[0-9]+[_|.]*' + '/**/*.md'],
        useH1Title: false
      }),
      groupIconVitePlugin({
        customIcon: {
          '.mdx': 'vscode-icons:file-type-light-mdx',
          'babel': 'vscode-icons:file-type-light-babel2'
        }
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    build: {
      chunkSizeWarningLimit: 1500
    }
  }
})
