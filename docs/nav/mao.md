---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
outline: [2, 3, 4]
---

<script setup lang="ts">

</script>

# 链接整理

::: info 教程
如果你也想搭建此导航 [点我查看教程](./index.md)
:::

<MNavLinks v-for="{title, items} in []" :title="title" :items="items"/>
