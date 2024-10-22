<template>
  <div v-for="article in articleList" :key="article.link" class="post-list">
    <div class="post-title">
      <span v-if="article.top" class="top-label">
        <i class="fa-solid fa-fire-flame-simple"></i>
      </span>
      <a :href="withBase(article.link)">
        {{ article.title }}
      </a>
    </div>
    <div class="describe">
      <a :href="withBase(article.link)">
        {{ article.description }}
      </a>
    </div>

    <div class="post-info">
      <i class="fa-solid fa-calendar-week" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
      {{ article?.matter?.date ?? '2024-08-08' }}
      <span>
        <span v-for="(tag, index) in article?.matter?.tags || []" :key="index">
          <i v-if="index === 0" class="fa-solid fa-tags" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
          <a :href="withBase(`/pages/tags.html?tag=${tag}`)"> {{ tag }}<span v-if="index < article.frontMatter.tags.length - 1">,</span> </a>
        </span>
      </span>
    </div>
  </div>

  <div class="pagination">
    <a class="link" :href="withBase('/index.html')" v-if="pageCurrent > 1">
      <i class="fa-solid fa-angles-left"></i>
    </a>
    <a class="link" :class="{ active: pageCurrent === 1 }" :href="withBase(pageCurrent > 1 ? `/page_${pageCurrent - 1}.html` : '/index.html')" v-if="pageCurrent > 1">
      <i class="fa-solid fa-angle-left"></i>
    </a>

    <template v-for="i in displayPages" :key="i">
      <a class="link" :class="{ active: pageCurrent === i }" :href="withBase(i === 1 ? '/index.html' : `/page_${i}.html`)">
        {{ i }}
      </a>
    </template>

    <a class="link" :class="{ active: pageCurrent === pagesNum }" :href="withBase(pageCurrent < pagesNum ? `/page_${pageCurrent + 1}.html` : `/page_${pagesNum}.html`)" v-if="pageCurrent < pagesNum">
      <i class="fa-solid fa-angle-right"></i>
    </a>
    <a class="link" :href="withBase(`/page_${pagesNum}.html`)" v-if="pageCurrent < pagesNum">
      <i class="fa-solid fa-angles-right"></i>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { Article } from '../../utils/article'

const { theme } = useData<{ article: Article[] }>()

const props = defineProps({
  pageCurrent: { type: Number, default: 1 },
  pagesNum: { type: Number, default: 1 }
})

const articleList = computed(() => {
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
  return articleList
})

const displayPages = computed(() => {
  const maxPagesToShow = 6
  const half = Math.floor(maxPagesToShow / 2)
  let start = Math.max(1, props.pageCurrent - half)
  let end = Math.min(props.pagesNum, start + maxPagesToShow - 1)

  if (end - start < maxPagesToShow - 1) {
    start = Math.max(1, end - maxPagesToShow + 1)
  }

  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
})
</script>

<style lang="scss" scoped>
.post-list {
  border-bottom: 1px dashed var(--vp-c-gray-3);
  padding: 20px 0;
}

.post-title {
  font-size: 1.125rem;
  margin: 0.1rem 0;

  a {
    color: var(--vp-c-text-1);

    &:hover {
      color: var(--vp-c-brand-1);
    }
  }
}

.describe {
  margin: 0.5rem 0;
  line-height: 1.5rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    font-size: 0.9rem;
    color: var(--vp-c-text-2) !important;
    font-weight: 450 !important;
  }
}

.pagination {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

.link {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 500 !important;
  width: 24px;
  text-align: center;
  border-radius: 4px;
  color: var(--vp-c-text-1);
  margin: 0 4px;
  transition:
    background-color 0.3s,
    color 0.3s;

  &.active {
    color: var(--vp-c-text-1) !important;
    background-color: var(--vp-c-bg-alt);
  }

  &:hover {
    background-color: var(--vp-c-bg-soft);
  }
}
</style>
