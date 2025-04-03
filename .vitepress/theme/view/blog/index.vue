<template>
  <div class="min-h-screen">
    <!-- 个人介绍 -->
    <div class=":uno: pb-12 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div class="max-w-7xl mx-auto px-4 flex items-center">
        <div class="w-1/2 pr-12">
          <h1 class="text-4xl font-bold mb-6">你好，我是张明远</h1>
          <p class="text-lg leading-relaxed mb-8">
            资深全栈工程师，拥有 8 年开发经验。专注于 Web 开发、云原生架构与人工智能应用。热爱技术分享，已在个人博客发表超过 200 篇技术文章。
          </p>
          <a class=":uno: !rounded-2 bg-indigo-600 text-white px-8 py-3 hover:bg-indigo-700 transition-colors whitespace-nowrap" :href="withBase('/')">
            了解更多
          </a>
        </div>
        <div class="w-1/2">
          <img :src="HeroImage" alt="Profile" class="w-full h-[400px] object-cover object-top rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
    <!-- 主要内容区 -->
    <div class="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
      <!-- 博客列表 -->
      <div class="">
        <!-- 个人介绍 -->
        <div class=":uno: md:hidden rounded-2 shadow-sm p-8 mb-8 border-2 border-dashed border-primary grid grid-cols-[128px_1fr] gap-8">
          <img :src="ProfileImage" alt="个人照片" class="w-128px h-128px rounded-full object-cover">
          <div>
            <h1 class="text-2xl font-medium mb-4">陈思远</h1>
            <p class="text-gray-600 leading-relaxed">
              资深前端开发工程师，专注于 Web 性能优化与用户体验设计。热爱技术分享，在业内深耕 8 年，目前就职于字节跳动。喜欢将复杂的技术问题简单化，致力于帮助更多开发者成长。
            </p>
          </div>
        </div>
        <!-- 文章列表 -->
        <div class="space-y-6">
          <article-item v-for="(item,index) in articlePage" :key="index" :article="item" />
          <pagination :total="articleList.length" :page="page" :size="size" @change="paginationChange" />
        </div>
      </div>
      <!-- 侧边栏 -->
      <div class="md:block hidden">
        <!-- 左侧个人资料区域 -->
        <div class="w-full lg:w-72 space-y-6">
          <div class="rounded-lg p-6 shadow-sm">
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img :src="AuthorImage" alt="作者头像" class="w-full h-full object-cover" />
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
        <div class="bg-white rounded-lg p-6 shadow-sm" v-if="tags.length > 0">
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
        <div class="bg-white rounded-lg shadow-sm p-6" v-else-if="categories.length > 0">
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
            <a class="flex gap-3 hover:text-primary" v-for="(article,index) in hotArticles" :key="index" :href="withBase(article.link)" target="_blank">
              <div class=" w-1/3 aspect-5/3 rounded-lg overflow-hidden">
                <img :src="article.cover ?? CoverImage" :alt="article.title1" class="w-full h-full object-cover" />
              </div>
              <div class="flex-1">
                <h4 class="text-sm font-bold mb-1 hover:text-blue-500 cursor-pointer line-clamp-2">
                  {{ article.title }}
                </h4>
                <div class="flex items-center text-xs text-gray-500">
                  <span><i class="far fa-eye mr-1"></i>{{ '2.3k' }}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import ArticleItem from './article-item.vue'
import Pagination from './article-pagination.vue'
import { Blog } from '../../../typings/blog'
import CoverImage from '@/assets/cover/default.jpg'
import HeroImage from '@/assets/avatar/hero.jpg'
import AuthorImage from '@/assets/avatar/author.jpg'
import ProfileImage from '@/assets/avatar/profile.jpg'

const { theme } = useData<{ articles: Blog.ArticleData[] }>()
const articles: Blog.ArticleData[] = theme.value.articles
const page = ref<number>(1)
const size = ref<number>(5)
const currentTag = ref<string | undefined>(undefined)

const paginationChange = (pagePage: number, pageSize: number) => {
  page.value = pagePage
  size.value = pageSize
}

const articleList = computed(() => currentTag.value ? articles.filter(item => item.tags.includes(currentTag.value)) : articles)
const articlePage = computed(() => articleList.value.slice((page.value - 1) * size.value, page.value * size.value))

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
const hotArticles = computed(() => articles.slice(0, 3))
</script>

<style scoped lang="scss"></style>

