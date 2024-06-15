<template>
  <div>
    <BlogHomeBanner />
    <div class="blog-body">
      <div class="blog-author">
        <div>作者信息。。。敬请期待</div>
      </div>
      <div class="blog-list">
        <template v-for="item in page">
          <panel-mate :title="item.title" :description="item.description" :author="item.author" :date="item.date" />
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import PanelMate from '../../components/panel/PanelMate.vue';
import BlogHomeBanner from './BlogHomeBanner.vue';
import PageDate from '../../../../config/data/index';
const { page } = PageDate;
</script>
<style lang="scss" scoped>
.blog-body {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  background-color: #f7f7f7;
  padding: 1rem;
  .blog-list {
    background: #fff;
    border-radius: 24px;
    padding: 1rem 1rem 0 1rem;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    display: grid;
    grid-gap: 2rem;
    padding: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  }
  .blog-author {
    width: 20rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    > div {
      background: #fff;
      border-radius: 16px;
      padding: 1rem;
    }
  }
}
</style>
