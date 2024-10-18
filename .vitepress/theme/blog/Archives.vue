<template>
  <div v-for="(item,index) in archiveList" :key="index">
    <div class="year">
      {{ item.archive }}
    </div>
    <a :href="withBase(article.link)" v-for="article in item.articles" :key="article.link" class="posts">
      <div class="post-container">
        <div class="post-dot"></div>
        <div class="post-title">
          <span v-if="article.top" class="top-label">
            <i class="fa-solid fa-fire-flame-simple"></i>
          </span>
          {{ article.title }}
        </div>
      </div>
      <div class="date">{{ article?.matter?.date ?? '08-08' }}</div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { Article } from '../../utils/article'
import matter from 'gray-matter'

const { theme } = useData<{ article: Article[] }>()

// 对文章数据进行排序，置顶的文章会优先显示
const archiveList = computed(() => {
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
      'archive': '2024',
      'articles': articleList
    }
  ]
})
</script>

<style lang="scss" scoped>
.year {
  padding: 14px 0 8px 0;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: var(--date-font-family);
}
</style>
