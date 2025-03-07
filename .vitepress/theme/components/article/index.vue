<template>
  <div class="mb-8">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold text-white mb-2">精选博客</h1>
        <p class="text-gray-400">发现更多精彩的技术内容与见解</p>
      </div>
      <div class="flex items-center gap-4">
        <div class="relative">
          <input type="text" placeholder="搜索文章..." class="pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-primary focus:outline-none w-64">
          <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
        <select class="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-primary focus:outline-none">
          <option value="">所有分类</option>
          <option value="tech">技术</option>
          <option value="design">设计</option>
          <option value="ai">人工智能</option>
        </select>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mb-6">
      <button class="!rounded-button px-4 py-2 bg-primary text-white text-sm font-medium">全部</button>
      <button class="!rounded-button px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">前端开发</button>
      <button class="!rounded-button px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">数据分析</button>
      <button class="!rounded-button px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">人工智能</button>
      <button class="!rounded-button px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">UI/UX</button>
      <button class="!rounded-button px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">云原生</button>
      <button class="!rounded-button px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">网络安全</button>
    </div>
  </div>
  <div class="articles">
    <template v-for="(item,index) in 9" :key="index">
      <article-item :article="item" />
    </template>
  </div>
  <div class="flex items-center justify-between mt-8">
    <div class="text-gray-400">
      显示 1-6 共 24 篇文章
    </div>
    <div class="flex justify-center items-center gap-2">
      <button class="!rounded-button w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
        <i class="fas fa-chevron-left text-sm"></i>
      </button>
      <button class="!rounded-button w-10 h-10 flex items-center justify-center bg-primary text-white">1</button>
      <button class="!rounded-button w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white">2</button>
      <button class="!rounded-button w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white">3</button>
      <button class="!rounded-button w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white">4</button>
      <button class="!rounded-button w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-400">
        <i class="fas fa-chevron-right text-sm"></i>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import ArticleItem from './article-item.vue'
import { defineProps } from 'vue'

defineOptions({
  name: 'Article'
})

interface Props {
  articles: Article[]
}

withDefaults(defineProps<Props>(), { articles: [{}] })
</script>
<style lang="scss" scoped>
.articles {
  @apply w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1;
}
</style>
