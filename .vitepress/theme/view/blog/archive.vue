<template>
  <!-- 年份切换 -->
  <div class="sticky top-0 bg-gray-50 py-4 z-10">
    <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button v-for="item in yearList" :key="item.year" :class="{
        'px-6 py-2 rounded-full whitespace-nowrap shadow-sm':true,
        'bg-primary text-white': item.year === year,
        'bg-white text-gray-500  hover:text-primary': item.year !== year
      }" @click="()=>year=(year === item.year ? 0:item.year)">{{ item.text }}
      </button>
    </div>
  </div>
  <div>
    <template v-for="item in articleList" :key="item.year">
      <div>
        <!-- 年份 -->
        <div class="flex items-center mb-8">
          <div class="text-3xl font-bold text-primary">{{ item.year + '年' }}</div>
          <div class="h-[1px] bg-gray-200 flex-1 mx-4"></div>
          <span class="text-gray-500 text-sm">共 {{ item.items.length }} 篇文章</span>
        </div>
        <article-item v-for="(item,index) in item.items" :key="index" :article="item" />
      </div>
    </template>
  </div>
  <article-time />
</template>

<script lang="ts" setup>
import { computed, type ComputedRef, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import ArticleTime from '../../components/article/article-time.vue'
import { Blog } from '../../../typings/blog'
import ArticleItem from './article-item.vue'

const { theme } = useData<{ articles: Blog.ArticleData[] }>()
const year = ref<number>(new Date().getFullYear())
const yearList: { text: string, year: number }[] = [
  { text: '全部', year: 0 },
  ...Array.from({ length: 3 }).map((_, index) => ({ text: `${ new Date().getFullYear() - index } 年`, year: new Date().getFullYear() - index }))
]

const archive: ComputedRef<{ year: number, items: Blog.ArticleData[] }[]> = computed<{ year: number, items: Blog.ArticleData[] }[]>(() => {
  return [
    { year: 2025, items: (theme.value.articles || []).slice(0, 3) }
  ]
})

const articleList = computed(() => {
  if (year.value === 0) return archive.value
  return archive.value.filter(item => item.year === year.value)
})
console.log(articleList.value)

onMounted(() => {
  const y = new Date().getFullYear()
  const a = archive.value.find(item => item.year === y)
  if (!a || a.items.length === 0) {
    year.value = 0
  }
})
</script>
<style lang="scss" scoped>
</style>
