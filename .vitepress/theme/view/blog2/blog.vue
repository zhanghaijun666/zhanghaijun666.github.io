<template>
  <div class="blog-content">
    <div class="relative h-[600px] mb-8">
      <img src="/docs/image/imag1-1440x592.jpg" class="w-full h-full object-cover rounded-button" alt="轮播图1">
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
        <h2 class="text-4xl font-bold mb-2">探索未来科技</h2>
        <p class="text-gray-300">深入了解最新的技术趋势和创新发展</p>
      </div>
    </div>
    <article-list class="w-full lg:w-2/3 px-4" />
    <div class="w-full lg:w-1/3 px-4">
      <!-- 个人信息 -->
      <div class="bg-gray-800 rounded-lg p-6 mb-6">
        <div class="flex items-center mb-6">
          <img src="/docs/image/avatar/avatar-512x512.jpg" class="w-20 h-20 rounded-full mr-4 hover:scale-110 transition-transform duration-300" alt="作者头像">
          <div>
            <h3 class="text-xl font-bold">陈思远</h3>
            <p class="text-gray-400">全栈开发工程师 / 技术博主</p>
          </div>
        </div>
        <p class="text-gray-400 mb-6">专注于 Web 开发技术分享，热爱探索新技术，期待与您交流学习。</p>
        <div class="flex space-x-4">
          <a href="#" class="text-white hover:text-gray-300"><i class="fab fa-github text-xl"></i></a>
          <a href="#" class="text-white hover:text-gray-300"><i class="fab fa-twitter text-xl"></i></a>
          <a href="#" class="text-white hover:text-gray-300"><i class="fab fa-linkedin text-xl"></i></a>
        </div>
      </div>
      <!-- 推荐文章 -->
      <div class="bg-gray-800 rounded-lg p-6 mb-6">
        <h3 class="text-xl font-bold mb-4">推荐文章</h3>
        <div class="space-y-4">
          <a href="#" class="block">
            <div class="flex items-center">
              <img src="/docs/image/cover/secure-1344x768.jpg" class="w-20 h-20 rounded object-cover mr-4" alt="推荐文章配图">
              <div>
                <h4 class="font-medium text-white hover:text-gray-300">TypeScript 高级特性详解</h4>
                <p class="text-sm text-gray-400">2,345 阅读</p>
              </div>
            </div>
          </a>
          <a href="#" class="block">
            <div class="flex items-center">
              <img src="https://ai-public.mastergo.com/ai/img_res/2e917ec85daf4458acdf56895c3e4e82.jpg" class="w-20 h-20 rounded object-cover mr-4" alt="推荐文章配图">
              <div>
                <h4 class="font-medium text-white hover:text-gray-300">现代化前端工程化实践</h4>
                <p class="text-sm text-gray-400">1,876 阅读</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <!-- 标签云 -->
      <div class="bg-gray-800 rounded-lg p-6">
        <h3 class="text-xl font-bold mb-4">标签云</h3>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-secondary rounded-button text-sm text-white">JavaScript</span>
          <span class="px-3 py-1 bg-gray-700 rounded-button text-sm text-white">React</span>
          <span class="px-3 py-1 bg-gray-700 rounded-button text-sm text-white">Vue</span>
          <span class="px-3 py-1 bg-gray-700 rounded-button text-sm text-white">Node.js</span>
          <span class="px-3 py-1 bg-gray-700 rounded-button text-sm text-white">TypeScript</span>
          <span class="px-3 py-1 bg-gray-700 rounded-button text-sm text-white">前端优化</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ArticleList from '../../components/article/index.vue'
</script>
<style scoped lang="scss">
.blog-content {
  @apply mx-auto px-4 flex flex-wrap;
  max-width: 1480px;
}
</style>
