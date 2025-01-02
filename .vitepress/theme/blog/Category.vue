<template>
  <div v-for="(item, category) in sortedData" :key="category">
    <div class="article title">{{ item.category }}</div>
    <a v-for="article in item.articles" :key="article.link" :href="withBase(article.link)" class="article item">
      <div class="post-container">
        <div class="post-dot"></div>
        <div class="post-title">
          <span v-if="article.top" class="top-label">
            <i class="fa-solid fa-fire-flame-simple"></i>
          </span>
          {{ article.title }}
        </div>
      </div>
      <div class="date">{{ article?.matter?.date ?? '2024-08-08' }}</div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { Article } from '../../utils/article'

const { theme } = useData<{ article: Article[] }>()

const sortedData = computed<{ category: string; articles: Article[] }[]>(() => {
  const articleList = (theme.value.article || []) as Article[]
  articleList.sort((a, b) => {
    if (a.top !== b.top) {
      return (b.top ? 1 : 0) - (a.top ? 1 : 0)
    }
    if (a.index !== b.index) {
      return a.index - b.index
    }
    return a.title.localeCompare(b.title)
  })
  return [
    {
      category: '分类展示',
      articles: articleList
    }
  ]
})
</script>

<style lang="scss" scoped>
@use './style.scss';
</style>
