<template>
  <!-- 年份切换 -->
  <div class="py-4 z-10">
    <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button v-for="item in yearList" :key="item.year" :class="{
        'px-6 py-2 rounded-full whitespace-nowrap shadow-sm': true,
        'bg-primary text-white': item.year === year,
        'bg-white text-gray-500  hover:text-primary': item.year !== year
      }" @click="() => year = (year === item.year ? 0 : item.year)">{{ item.text }}
      </button>
    </div>
  </div>
  <div>
    <template v-for="article in articleList" :key="article.year">
      <div>
        <!-- 年份 -->
        <div class="flex items-center">
          <div class="text-3xl font-bold text-primary">{{ article.year + '年' }}</div>
          <div class="h-[1px] bg-gray-200 flex-1 mx-4"></div>
          <span class="text-gray-500 text-sm">共 {{ article.items.length }} 篇文章</span>
        </div>
        <div class="relative space-y-3 pt-6">
          <!-- 垂直时间轴 -->
          <div class="absolute top-0 left-95px w-4px h-full bg-[#79D46B] rounded-full"></div>
          <template v-for="(item, index) in article.items" :key="index">
            <!-- 时间轴节点 -->
            <div class="relative grid grid-cols-[80px_1fr] gap-30px">
              <div class="absolute left-83px w-24px h-24px bg-[#79D46B] rounded-full flex-x-center">
                <span class="text-white text-xs">{{ index + 1 }}</span>
              </div>
              <div class="text-lg font-bold" style="text-align: right;">
                <div class="text-lg font-medium">02.22</div>
                <div class="text-sm text-gray-400">2025</div>
              </div>
              <article-item :article="item" />
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, type ComputedRef, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { Blog } from '../../typings'
import ArticleItem from './article-item.vue'

const { theme } = useData<{ articles: Blog.Article[] }>()
const year = ref<number>(new Date().getFullYear())
const yearList: { text: string, year: number }[] = [
  { text: '全部', year: 0 },
  ...Array.from({ length: 3 }).map((_, index) => ({ text: `${new Date().getFullYear() - index} 年`, year: new Date().getFullYear() - index }))
]

const archive: ComputedRef<{ year: number, items: Blog.Article[] }[]> = computed<{ year: number, items: Blog.Article[] }[]>(() => {
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
<style lang="scss" scoped></style>
