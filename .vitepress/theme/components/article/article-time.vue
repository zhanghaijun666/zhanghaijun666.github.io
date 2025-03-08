<template>
  <!-- 年份切换 -->
  <div class="sticky top-0 bg-gray-50 py-4 z-10">
    <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button class="px-6 py-2 bg-primary text-white rounded-full whitespace-nowrap">2023 年</button>
      <button class="px-6 py-2 bg-white text-gray-500 hover:text-primary rounded-full whitespace-nowrap shadow-sm">2022 年</button>
      <button class="px-6 py-2 bg-white text-gray-500 hover:text-primary rounded-full whitespace-nowrap shadow-sm">2021 年</button>
      <button class="px-6 py-2 bg-white text-gray-500 hover:text-primary rounded-full whitespace-nowrap shadow-sm">2020 年</button>
    </div>
  </div>
  <div class="article-time">
    <!-- 年份 -->
    <div class="flex items-center mb-8">
      <div class="text-3xl font-bold text-primary">2025 年</div>
      <div class="h-[1px] bg-gray-200 flex-1 mx-4"></div>
      <span class="text-gray-500 text-sm">共 24 篇文章</span>
    </div>
    <!-- 月份 -->
    <div class="relative flex flex-row flex-justify-start gap-6">
      <div class="absolute left-40px top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>
      <div class="absolute left-31px top-0 rounded-full absolute" style="width: 24px;height: 24px;background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);"></div>
      <div class="mt-24px">
        <div class="text-lg font-medium text-[#1db702]">02.22</div>
        <div class="text-sm text-gray-500">2025</div>
      </div>
      <!-- 文章 -->
      <div class="flex flex-col gap-4">
        <template v-for="item in 10" :key="item">
          <div class="article-item bg-white rounded-lg shadow-lg p-6 border-2 border-solid rounded-button border-gray-300 hover:border-primary">
            <h3 class="!mt-0 text-xl font-semibold text-gray-900 mb-2">大规模 Node.js 应用性能调优实践</h3>
            <p class="text-gray-600 mb-4 line-clamp-2">本文总结了在处理百万级并发请求的 Node.js 应用中的性能优化经验，包括内存泄漏排查、CPU 密集任务优化、异步 I/O 处理等关键技术点。</p>
            <div class="flex items-center justify-between">
              <div class="flex gap-2">
                <span class="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">React</span>
                <span class="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">性能优化</span>
                <span class="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">前端开发</span>
              </div>
              <div class="flex items-center text-gray-500 text-sm">
                <span class="mr-4"><i class="fas fa-eye mr-1"></i> 2,456</span>
                <span class="flex items-center gap-1"><i class="fas fa-calendar-alt"></i>2023-12-25</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

defineOptions({
  name: 'ArticleTime'
})

</script>
<style scoped lang="scss">
.article-time {
}
</style>
