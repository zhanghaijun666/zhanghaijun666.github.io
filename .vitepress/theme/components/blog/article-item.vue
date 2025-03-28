<template>
  <div v-if="!!article" class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
    <div class="flex gap-6">
      <img :src="article.cover" :alt="article.title" class="w-48 h-32 rounded-lg object-cover">
      <div class="flex-1">
        <h2 class="text-xl font-medium mb-2 hover:text-blue-600 cursor-pointer">{{ article.title }}</h2>
        <div class="text-gray-600 text-sm mb-4 grid grid-cols-[1fr_auto]">
          <div v-if="!!article.tags" v-for="(item,index) in article.tags" :key="index" class="flex-x-start gap-1">
            <div>{{ item }}</div>
          </div>
          <div>{{ '2025-03-02' }}</div>
        </div>
        <p class="text-gray-600 line-clamp-2">{{ article.summary }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="ArticleItem">
import { Blog } from '../../../typings/blog'

interface Props {
  article: Blog.ArticleData | undefined;
}

withDefaults(defineProps<Props>(), {})
</script>
