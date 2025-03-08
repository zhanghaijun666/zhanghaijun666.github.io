<template>
  <div class="article-item bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div class="relative h-48 overflow-hidden">
      <img src="https://ai-public.mastergo.com/ai/img_res/096bf0ed04fd3e60e7f4a79312fb11fc.jpg"
           class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
           alt="博客封面">
    </div>
    <div class="p-6">
      <div class="flex flex-wrap gap-2 mb-3">
        <span class="tag text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">数据分析</span>
        <span class="tag text-xs font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary">可视化</span>
      </div>
      <h2 class="text-xl font-bold text-white mb-2 line-clamp-2">数据可视化最佳实践：从设计到实现的完整指南</h2>
      <p class="text-gray-400 mb-4 line-clamp-2">本文将带你深入了解数据可视化的核心原则，探讨如何选择合适的图表类型，以及使用现代化工具实现引人入胜的数据故事。</p>
      <div class="flex items-center justify-between">
        <time class="text-sm text-gray-500">2024 年 1 月 12 日</time>
        <button class="!rounded-button flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors">
          阅读更多
          <i class="fas fa-arrow-right text-sm"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

defineOptions({
  name: 'ArticleItem'
})

interface Props {
  article: Article
}

const props = withDefaults(defineProps<Props>(), {})
</script>
<style scoped lang="scss">
.article-item{
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
}
</style>
