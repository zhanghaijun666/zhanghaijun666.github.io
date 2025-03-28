<template>
  <div class="article-list pt-6 pb-6">
    <div class="mb-8 flex justify-between items-center">
      <div class="flex flex-wrap gap-3 mb-6">
        <button class="!rounded-button px-4 py-2 bg-primary text-white text-sm font-medium">全部</button>
        <button class="!rounded-button px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">前端开发</button>
        <button class="!rounded-button px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">数据分析</button>
        <button class="!rounded-button px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">人工智能</button>
        <button class="!rounded-button px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">UI/UX</button>
        <button class="!rounded-button px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">云原生</button>
        <button class="!rounded-button px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">网络安全</button>
      </div>
      <div class="flex space-x-2">
        <button class="p-2 text-white bg-gray-800 rounded-button"><i class="fas fa-th-large"></i></button>
        <button class="p-2 text-white bg-gray-800 rounded-button"><i class="fas fa-list"></i></button>
      </div>
    </div>
    <div class="bg-gray-800 rounded-lg p-6 mb-6 card-hover">
      <h2 class="text-2xl font-bold mb-4">深入理解 JavaScript 异步编程</h2>
      <p class="text-gray-400 mb-4">异步编程是 JavaScript 中的重要概念，本文将深入探讨 Promise、async/await 等异步编程方案，帮助你更好地理解和使用这些特性...</p>
      <div class="flex items-center text-sm text-gray-500">
        <span class="mr-4"><i class="far fa-calendar mr-2"></i>2024-01-15</span>
        <span class="mr-4"><i class="far fa-eye mr-2"></i>1,234 阅读</span>
        <span><i class="far fa-comment mr-2"></i>23 评论</span>
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
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import ArticleItem from './article-item.vue'

defineOptions({
  name: 'ArticleList'
})

const articles: Article[] = []

const pageSize = ref(5)
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(articles.length / pageSize.value))
const articleList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return articles.slice(start, end)
})
const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

</script>
<style lang="scss" scoped>
.articles {
  @apply w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}
</style>
