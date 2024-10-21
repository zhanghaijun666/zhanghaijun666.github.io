<template>
  <div class="tags">
    <span @click="toggleTag(item.tag)" v-for="(item, key) in tagList" :key="key" class="tag">
      {{ item.tag }} <strong>{{ item.count || 0 }}</strong>
    </span>
  </div>
  <div class="tag-header">{{ selectTag }}</div>
  <a v-if="selectTag" :href="withBase(article.link)" v-for="article in articleList" :key="article.link" class="article item">
    <div class="post-container">
      <div class="post-dot"></div>
      <div class="post-title">
        <span v-if="article.frontMatter.top" class="top-label">
          <i class="fa-solid fa-fire-flame-simple"></i>
        </span>
        {{ article.title }}
      </div>
    </div>
    <div class="date">{{ article?.matter?.date ?? '2024-08-08' }}</div>
  </a>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { Article } from '../../utils/article'

const { theme } = useData<{ article: Article[] }>()

const tagList = computed<{ tag: string; count: number }[]>(() => {
  // 获取所有文章中的标签列表，过滤掉空数组和空标签，并展平为一个数组
  const allTags = (theme.value.article || [])
    .flatMap(article => article.matter?.tags || [])
    .filter(tag => tag) // 过滤掉空标签

  // 使用 reduce 统计标签的出现次数，并转换为所需格式
  const tagCountMap = allTags.reduce<Record<string, number>>((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1
    return acc
  }, {})
  // 将统计结果转换为所需的数组格式
  return Object.entries(tagCountMap).map(([tag, count]) => ({ tag, count }))
})

const articleList = computed<Article[]>(() => {
  if (!selectTag.value) {
    return []
  }
  return (theme.value.article || []).filter(article => article.matter?.tags?.includes(selectTag.value))
})


const selectTag = ref('')

// 在组件挂载时从 URL 中获取初始 tag
onMounted(() => {
  selectTag.value = new URLSearchParams(location.search).get('tag') || ''
})

const toggleTag = (tag: string) => {
  selectTag.value = tag
}
</script>

<style lang="scss" scoped>
@import './style.scss';
.tags {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  padding: 4px 16px;
  margin: 6px 8px;
  font-size: 0.875rem;
  line-height: 25px;
  background-color: var(--vp-c-bg-alt);
  transition: background-color 0.4s ease;
  border-radius: 2px;
  color: var(--vp-c-text-1);
  cursor: pointer;

  strong {
    color: var(--vp-c-brand);
  }
}

.tag-header {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0;
  text-align: left;
}
</style>
