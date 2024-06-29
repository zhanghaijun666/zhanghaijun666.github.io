<template>
  <div class="blog-box">
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
.blog-box {
  background-image: url(/icons/background.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.blog-body {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  .blog-list {
    background: rgba(238, 238, 238, 0.5);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 12px;
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
      background: rgba(238, 238, 238, 0.5);
      border-radius: 12px;
      padding: 1rem;
    }
  }
}
</style>
