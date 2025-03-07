import { type DefaultTheme } from 'vitepress'


export const navList: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: '项目搭建', link: '/101_项目管理/21_项目搭建/21_用户访问控制' },
  { text: 'SpringBoot', link: '/31_后端Java/21_Spring全家桶/10.系统架构' },
  {
    text: '指南', items: [
      { text: '分类', link: '/pages/category' },
      { text: '归档', link: '/pages/archives' },
      { text: '标签', link: '/pages/tags' }
    ]
  },
  { text: `VitePress`, link: 'https://vitepress.dev/zh/', noIcon: true }
]


