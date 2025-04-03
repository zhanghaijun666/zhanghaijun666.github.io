<template>
  <div v-if="!!article" class=" rounded-lg shadow-sm  hover:shadow-md transition-shadow duration-200">
    <div class="flex gap-6">
      <img :src="article.cover ?? CoverImage" :alt="article.title" class="w-48 h-32 rounded-2 object-cover">
      <div class="flex-1">
        <a class="text-xl font-medium mb-2 hover:text-blue-600 cursor-pointer line-clamp-1" :href="withBase(article.link)">{{ article.title }}</a>
        <div class="text-gray-600 dark:text-gray-400 text-sm mb-4 grid grid-cols-[1fr_auto]">
          <div class="flex-x-start gap-2 overflow-hidden">
            <div v-if="!!article.tags" v-for="(item,index) in (article.tags ?? []).slice(0,3)" :key="index">
              <div>{{ item }}</div>
            </div>
          </div>
          <div>{{ '2025-03-02' }}</div>
        </div>
        <p class="text-gray-600 dark:text-gray-400 line-clamp-2">{{ article.summary ?? '暂无简介' }}</p>
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
