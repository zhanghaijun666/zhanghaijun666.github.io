<template>
  <div class="min-h-screen">
    <!-- 个人介绍 -->
    <div class="pb-12 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div class="max-w-7xl mx-auto px-4 flex items-center">
        <div class="w-1/2 pr-12">
          <h1 class="text-4xl font-bold mb-6">你好，我是张明远</h1>
          <p class="text-lg leading-relaxed mb-8">
            资深全栈工程师，拥有 8 年开发经验。专注于 Web 开发、云原生架构与人工智能应用。热爱技术分享，已在个人博客发表超过 200 篇技术文章。
          </p>
          <button class="!rounded-button bg-indigo-600 text-white px-8 py-3 hover:bg-indigo-700 transition-colors whitespace-nowrap">
            了解更多
          </button>
        </div>
        <div class="w-1/2">
          <img :src="heroImage" alt="Profile" class="w-full h-[400px] object-cover object-top rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
    <!-- 主要内容区 -->
    <div class="max-w-7xl mx-auto px-4 py-12 flex">
      <!-- 博客列表 -->
      <div class="w-2/3 pr-8">
        <!-- 个人介绍 -->
        <div class="bg-white rounded-2 shadow-sm p-8 mb-8 flex items-center gap-8 border-2 border-dashed border-primary">
          <img :src="profileUrl" alt="个人照片" class="w-32 h-32 rounded-full object-cover">
          <div>
            <h1 class="text-2xl font-medium mb-4">陈思远</h1>
            <p class="text-gray-600 leading-relaxed">
              资深前端开发工程师，专注于 Web 性能优化与用户体验设计。热爱技术分享，在业内深耕 8 年，
              目前就职于字节跳动。喜欢将复杂的技术问题简单化，致力于帮助更多开发者成长。
            </p>
          </div>
        </div>
        <!-- 文章列表 -->
        <div class="space-y-6">
          <article-item v-for="(item,index) in articleList" :key="index" :article="item" />
        </div>
      </div>
      <!-- 侧边栏 -->
      <div class="w-1/3">
        <!-- 左侧个人资料区域 -->
        <div class="w-full lg:w-72 space-y-6">
          <div class="rounded-lg p-6 shadow-sm">
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img :src="authorImage" alt="作者头像" class="w-full h-full object-cover" />
              </div>
              <h2 class="text-xl font-bold mb-2">全栈工程师</h2>
              <p class="text-sm text-center mb-4">
                全栈开发工程师，热爱技术分享，专注于Web开发与云原生技术
              </p>
              <div class="flex gap-4 mb-6">
                <a href="#" class="hover:text-primary">
                  <i class="fab fa-github text-xl"></i>
                </a>
                <a href="#" class="hover:text-primary">
                  <i class="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" class="hover:text-primary">
                  <i class="fab fa-linkedin text-xl"></i>
                </a>
              </div>
              <div class="w-full grid grid-cols-3 gap-2 text-center">
                <div class="p-2">
                  <div class="text-xl font-bold text-gray-800">126</div>
                  <div class="text-sm text-gray-600">文章</div>
                </div>
                <div class="p-2">
                  <div class="text-xl font-bold text-gray-800">23k</div>
                  <div class="text-sm text-gray-600">访问</div>
                </div>
                <div class="p-2">
                  <div class="text-xl font-bold text-gray-800">891</div>
                  <div class="text-sm text-gray-600">评论</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 标签云 -->
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-bold mb-4">标签云</h3>
          <div class="flex flex-wrap gap-2">
            <div v-for="tag in tags.slice(0,10)" :key="tag.name"
                 class="px-3 py-1  text-sm  rounded-full cursor-pointer hover:(bg-blue-500 text-white) bg-blue-500"
                 :class="{'bg-blue-500 text-white':tag.name == currentTag,'bg-gray-100 text-gray-600':tag.name != currentTag}"
                 @click="()=> currentTag = currentTag == tag.name?undefined:tag.name">
              {{ tag.name }}
            </div>
          </div>
        </div>
        <!-- 文章分类 -->
        <div class="bg-white rounded-lg shadow-sm p-6 ">
          <h3 class="font-bold mb-4">文章分类</h3>
          <div class="space-y-2">
            <div v-for="category in categories" :key="category.name" class="flex items-center justify-between text-gray-600 hover:text-indigo-600 transition-colors">
              <span>{{ category.name }}</span>
              <span class="text-sm text-gray-400">({{ category.count }})</span>
            </div>
          </div>
        </div>
        <!-- 热门文章 -->
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-bold mb-4">热门文章</h3>
          <div class="space-y-4">
            <div v-for="(article,index) in hotArticles" :key="index" class="flex gap-3">
              <div class="w-20 h-20 rounded-lg overflow-hidden">
                <img :src="article.cover" :alt="article.title" class="w-full h-full object-cover" />
              </div>
              <div class="flex-1">
                <h4 class="text-sm font-bold mb-1 hover:text-blue-500 cursor-pointer line-clamp-2">
                  {{ article.title }}
                </h4>
                <div class="flex items-center text-xs text-gray-500">
                  <span><i class="far fa-eye mr-1"></i>{{ '2.3k' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import ArticleItem from './article-item.vue'

const heroImage = 'https://ai-public.mastergo.com/ai/img_res/3f11c790b57ee2fa5d666da865d228cc.jpg'
const authorImage = 'https://ai-public.mastergo.com/ai/img_res/5692efa8dbc681fb582c0f3a917e3a92.jpg'
const avatarUrl = 'https://ai-public.mastergo.com/ai/img_res/66c9982ad29ac16e404086f2d2dd501b.jpg'
const profileUrl = 'https://ai-public.mastergo.com/ai/img_res/16b3d054c471df7cfa8e9c157f73ed66.jpg'
const authorAvatar = 'https://ai-public.mastergo.com/ai/img_res/82a29597261f9f59004f2c6b7a1806a3.jpg'

const articles = [
  {
    title: '深入理解 Vue3 响应式系统的设计与实现',
    summary: '本文深入探讨了 Vue3 响应式系统的核心原理，从源码层面分析其设计思路和实现细节，并提供了实际应用案例。',
    cover: 'https://ai-public.mastergo.com/ai/img_res/85b2691cb4f36a2ce0ddb824ea9feb0f.jpg',
    categories: ['Vue3', '响应式系统'],
    tags: ['Vue3', '响应式系统']
  },
  {
    title: 'Web 性能优化实战指南',
    summary: '从实际项目出发，详细介绍了前端性能优化的各个方面，包括资源加载、渲染性能、代码分割等关键技术点。',
    cover: 'https://ai-public.mastergo.com/ai/img_res/69f4c1facc9ec4be8f2fe80f2ffe5f8f.jpg',
    categories: ['Web性能优化'],
    tags: ['性能优化']
  },
  {
    title: '现代前端工程化实践',
    summary: '探讨现代前端开发中的工程化实践，包括构建工具、CI/CD、自动化测试等关键环节的最佳实践。',
    cover: 'https://ai-public.mastergo.com/ai/img_res/bb0c2e0203bcb94fd404c8decfe4dd5d.jpg',
    categories: ['前端工程化'],
    tags: ['前端工程化']
  },
  {
    title: 'Next.js 13 新特性解析：App Router 架构详解',
    summary: '深入解析 Next.js 13 中的 App Router，探讨其架构设计、优势及使用场景。',
    cover: 'https://ai-public.mastergo.com/ai/img_res/927c25520e00e079b53d5d1704797d59.jpg',
    categories: ['Next.js', 'App Router'],
    tags: ['Next.js']
  },
  {
    title: 'Spring Boot 3.0 微服务实战：从设计到部署',
    summary: '从零开始构建 Spring Boot 3.0 应用，涵盖微服务架构设计、数据访问层优化等关键点。',
    cover: 'https://ai-public.mastergo.com/ai/img_res/60b0d4288da3a460004d5ce04c245600.jpg',
    categories: ['Spring Boot', '微服务'],
    tags: ['Spring Boot']
  },
  {
    title: '深入浅出 GraphQL：构建高效 API 服务',
    summary: '全面解析 GraphQL 的工作原理、优势及实战应用，助力构建高效 API 服务。',
    cover: 'https://ai-public.mastergo.com/ai/img_res/366af67a84c0cc8d3a125a38b7ac7b04.jpg',
    categories: ['GraphQL'],
    tags: ['GraphQL']
  }
]

const articleList = computed(() => {
  if (currentTag.value) {
    return articles.filter(item => item.tags.includes(currentTag.value))
  } else {
    return articles
  }
})

const categories = computed(() => {
  return articles.flatMap((item) => item.categories).filter(item => !!item).reduce((acc, cur) => {
    if (!acc.find(item => item.name === cur)) {
      acc.push({ name: cur, count: 1 })
    } else {
      acc.find(item => item.name === cur).count++
    }
    acc.sort((a, b) => b.count - a.count)
    return acc
  }, [])
})

const currentTag = ref<string | undefined>(undefined)
const tags = computed(() => {
  return articles.flatMap((item) => item.tags).filter(item => !!item).reduce((acc, cur) => {
    if (!acc.find(item => item.name === cur)) {
      acc.push({ name: cur, count: 1 })
    } else {
      acc.find(item => item.name === cur).count++
    }
    acc.sort((a, b) => b.count - a.count)
    return acc
  }, [])
})

const hotArticles = computed(() => articleList.value.slice(0, 3))
</script>

<style scoped lang="scss"></style>

