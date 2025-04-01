import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav/' },
  { text: '茂茂主页', link: 'https://fe-mm.com' },
  {
    text: '茂茂物语',
    link: 'https://notes.fe-mm.com',
  },
  { text: 'mmPlayer', link: 'https://netease-music.fe-mm.com' },
  {
    text: '油猴脚本',
    link: 'https://github.com/maomao1996/tampermonkey-scripts',
  },
]
export const navList: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: '项目搭建', link: '/101_项目管理/21_项目搭建/21_用户访问控制' },
  { text: 'SpringBoot', link: '/31_后端Java/21_Spring全家桶/10.系统架构' },
  {
    text: '指南', items: [
      { text: '分类', link: '/page/category' },
      { text: '归档', link: '/page/archives' },
      { text: '标签', link: '/page/tags' }
    ]
  },
  { text: `VitePress`, link: 'https://vitepress.dev/zh/', noIcon: true }
]
