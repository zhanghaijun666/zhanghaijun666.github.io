<template>
  <div class="panel-small">
    <div class="panel-image">
      <img src="/icons/empty.svg" class="post-pic lazy" style="display: block" />
    </div>
    <div class="panel-meta">
      <div class="panel-meta_title">{{ title }}</div>
      <div class="panel-mete_text">{{ description }}</div>
      <div class="panel-meta_foot">
        <div>{{ '作者：' + author }}</div>
        <div>{{ '|' }}</div>
        <div v-if="date">{{ '时间：' + date }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
type MatterItem = {
  cover?: string; // 封面
  title: string; // 标题
  description?: string; // 摘要
  author?: string; // 作者
  date?: string; // 时间
};
withDefaults(defineProps<MatterItem>(), {
  cover: '/icons/empty.svg',
  title: '默认标题',
  author: 'zhanghaijun',
  date: '2024-07-03',
});
</script>
<style lang="scss" scoped>
.panel-small {
  border-radius: 6px;
  transition: all 0.2s ease;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: 6rem auto;
  height: 6rem;
  min-width: 12rem;
  .panel-image {
    border-spacing: 0;
    position: relative;
    height: 6rem;
    > img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .panel-meta {
    display: grid;
    grid-template-rows: 1.5rem auto 2rem;
    padding: 5px 15px;
    .panel-meta_title {
      font-size: 18px;
      display: flex;
      align-items: center;
    }
    .panel-mete_text {
      color: #a0a0a0;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .panel-meta_foot {
      color: #a0a0a0;
      user-select: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      background: #fafafa;
      padding: 1rem;
      border-radius: 5px;
      font-size: 13px;
      overflow: hidden;
    }
  }
}
</style>
