<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'

const { isDark } = useData()

const enableTransitions = () => 'startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})
</script>

<template>
  <!-- https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue -->
  <DefaultTheme.Layout>
    <!--导航-->
    <template #nav-bar-title-before><slot name="nav-bar-title-before" /></template>
    <template #nav-bar-title-after><slot name="nav-bar-title-after" /></template>
    <template #nav-bar-content-before><slot name="nav-bar-content-before" /></template>
    <template #nav-bar-content-after><slot name="nav-bar-content-after" /></template>
    <template #nav-screen-content-before><slot name="nav-screen-content-before" /></template>
    <template #nav-screen-content-after><slot name="nav-screen-content-after" /></template>
    <!-- 侧边栏 -->
    <template #sidebar-nav-before><slot name="sidebar-nav-before" /></template>
    <template #sidebar-nav-after><slot name="sidebar-nav-after" /></template>
    <!-- 内容 -->
    <template #page-top><slot name="page-top" /></template>
    <template #page-bottom><slot name="page-bottom" /></template>

    <template #not-found><slot name="not-found" /></template>
    <template #home-hero-before><slot name="home-hero-before" /></template>
    <template #home-hero-info-before><slot name="home-hero-info-before" /></template>
    <template #home-hero-info><slot name="home-hero-info" /></template>
    <template #home-hero-info-after><slot name="home-hero-info-after" /></template>
    <template #home-hero-actions-after><slot name="home-hero-actions-after" /></template>
    <template #home-hero-image><slot name="home-hero-image" /></template>
    <template #home-hero-after><slot name="home-hero-after" /></template>
    <template #home-features-before><slot name="home-features-before" /></template>
    <template #home-features-after><slot name="home-features-after" /></template>

    <template #doc-footer-before><slot name="doc-footer-before" /></template>
    <template #doc-before><slot name="doc-before" /></template>
    <template #doc-after><slot name="doc-after" /></template>
    <template #doc-top><slot name="doc-top" /></template>
    <template #doc-bottom><slot name="doc-bottom" /></template>

    <template #aside-top><slot name="aside-top" /></template>
    <template #aside-bottom><slot name="aside-bottom" /></template>
    <template #aside-outline-before><slot name="aside-outline-before" /></template>
    <template #aside-outline-after><slot name="aside-outline-after" /></template>
    <template #aside-ads-before><slot name="aside-ads-before" /></template>
    <template #aside-ads-after><slot name="aside-ads-after" /></template>
    <!-- 底部 -->
    <template #layout-bottom><slot name="layout-bottom" /></template>
  </DefaultTheme.Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
