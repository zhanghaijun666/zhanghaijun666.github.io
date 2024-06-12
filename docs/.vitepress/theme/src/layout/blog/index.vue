<template>
  <div>
    <div>{{ '博客主页' }}</div>
    <BlogHomeBanner />
    <div class="blog-box">
      <div class="blog-item" v-for="(item, index) in page" :key="index">
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BlogHomeBanner from './BlogHomeBanner.vue';
import PageDate from '../../../../config/data/index';
const { page } = PageDate;
</script>
<style lang="scss" scoped>
.blog-box {
  display: grid;
  grid-gap: 2rem;
  padding: 0 2rem;
  grid-template-columns: repeat(auto-fill, minmax(192px, 1fr));

  .blog-item {
    height: 5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
}
</style>
