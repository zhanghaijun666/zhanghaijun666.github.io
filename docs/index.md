---
layout: home

title: VitePress
titleTemplate: 由 Vite 和 Vue 驱动的静态站点生成器

hero:
  name: 学习笔记
  text: 知识分享 | 实践经验
  tagline: 捕捉突发的想法、创意和解决问题的灵感，避免遗忘。总结书籍的主要观点和个人反思，促进深度理解。记录个人反思、成长经历和目标设定，促进自我提升。
  actions:
    - theme: brand
      text: 什么是 VitePress?
      link: /22_vitepress/
    - theme: alt
      text: GitHub
      link: https://github.com/vuejs/vitepress
  image:
    src: /logo.png
    alt: logo
---

<script setup lang="ts">
import { useData } from 'vitepress';
const { site } = useData();
const url = 'https://gitee.com/haijunit_navi';


console.log(` %c ${site.value.title} %c ${url}`, 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;')
</script>
