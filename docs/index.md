---
layout: home

title: VitePress
titleTemplate: 由 Vite 和 Vue 驱动的静态站点生成器

hero:
  name: 技术与创意融合
  text: 技术研发的全链条实践
  tagline: 保持对新知的渴望和学习的热情，不断拓宽自己的知识领域。记录学习过程中遇到的挑战和突破，以便持续优化自己的思维方式、工作方法和生活习惯，实现更高效的自我提升。
  actions:
    - theme: brand
      text: 什么是 VitePress?
      link: ./41_前端开发/22_vitepress
    - theme: alt
      text: 项目搭建
      link: ./101_项目管理/21_项目搭建/21_用户访问控制.md
  image:
    src: /logo.png
    alt: logo
features:
  - icon: 📊
    title: 企业资源规划【ERP】
    details: 面向企业资源规划（ERP）的解决方案，涵盖了从供应链到制造、销售和营销的所有业务领域。
  - icon: 🛠
    title: 工业互联网【IIoT】
    details: 面向工业互联网（IIoT）的解决方案，涵盖了从传感器到云端的所有业务领域。
  - icon: 📡
    title: 智慧城市【SC】
    details: 面向智慧城市（SC）的解决方案，涵盖了从数据采集到数据应用的所有业务领域。
  - icon: 🛠
    title: 智慧农业【SA】
    details: 面向智慧农业（SA）的解决方案，涵盖了从数据采集到数据应用的所有业务领域。
---

<script setup lang="ts">
import { useData } from 'vitepress';
const { site } = useData();
const url = 'https://gitee.com/haijunit_navi';


console.log(` %c ${site.value.title} %c ${url}`, 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;')
</script>
