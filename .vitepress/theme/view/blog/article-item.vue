<template>
  <div v-if="!!article" class=" rounded-lg shadow-sm  hover:shadow-md transition-shadow duration-200">
    <div class="flex gap-6">
      <img :src="article.cover ?? CoverImage" :alt="article.title" class="w-48 h-32 rounded-2 object-cover">
      <div class=":uno: flex-1 flex flex-col justify-around">
        <a class="text-xl font-medium hover:text-blue-600 cursor-pointer line-clamp-1" style="border-bottom: 1px solid var(--vp-c-divider);" :href="withBase(article.link)">{{ article.title }}</a>
        <div class="text-gray-600 dark:text-gray-400 line-clamp-2">{{ article.summary ?? '暂无描述' }}</div>
        <div class="flex items-center justify-between">
          <div class="flex gap-2">
            <template v-if="!!article.tags" v-for="(item,index) in (article.tags1 ?? ['React','性能优化','前端开发']).slice(0,3)" :key="index">
              <span v-if="index == 0" class="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">{{ item }}</span>
              <span v-else-if="index == 1" class="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">{{ item }}</span>
              <span v-else class="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">{{ item }}</span>
            </template>
          </div>
          <div class="flex items-center text-gray-500 text-sm">
            <!-- <span class="flex items-center gap-1"><i class="fas fa-eye"></i> 阅读量: 100</span> -->
            <!-- <span class="flex items-center gap-1"><i class="fas fa-thumbs-up"></i> 点赞量: 50</span> -->
            <!-- <span class="flex items-center gap-1"><i class="fas fa-bookmark"></i> 收藏: 30</span> -->
            <span class="flex items-center gap-1"><i class="fas fa-calendar-alt"></i>2023-12-25</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="ArticleItem">
import { withBase } from 'vitepress'
import { Blog } from '@/typings'
import CoverImage from '@/assets/cover/default.jpg'


interface Props {
  article: Blog.Article;
}

withDefaults(defineProps<Props>(), {})
</script>
