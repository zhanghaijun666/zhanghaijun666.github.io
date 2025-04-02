import type { DefaultTheme } from 'vitepress'

export const navList: DefaultTheme.NavItem[] = [
  { text: '<i class="fa fa-home"></i> 首页', link: '/' },
  { text: '<i class="fa fa-compass"></i> 导航', link: '/page/link/' },
  { text: '<i class="fa fa-blog"></i> 博客', link: '/page/' },
  { text: '项目搭建', link: '/101_项目管理/21_项目搭建/21_用户访问控制' },
  { text: 'SpringBoot', link: '/31_后端Java/21_Spring全家桶/10.系统架构' },
  {
    text: '博客指南', items: [
      { text: '<i class="fas fa-list"></i> 分类', link: '/page/category/' },
      { text: '<i class="fa-solid fa-archive"></i> 归档', link: '/page/archives/' },
      { text: '<i class="fas fa-tags"></i> 标签', link: '/page/tags/' }
    ]
  },
  { text: `VitePress`, link: '/45_vitepress/' }
]
