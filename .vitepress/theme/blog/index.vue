<template>
  <div class="blog-content">
    <div class="welcome">
      <h1>欢迎阅读我的博客</h1>
      <p>我是Hardy，这里是我分享技术见解和生活点滴的地方。</p>
    </div>
    <article-list />
  </div>
</template>
<script lang="ts" setup>
import ArticleList from '../components/article/index.vue'

const articles: Article[] = [
  {
    icon: '📊',
    title: 'Vue3 入门指南',
    details: 'Vue3 入门指南，带你快速上手 Vue3。',
    date: '2024-03-01',
    tags: ['Vue3', '前端'],
    cover: 'http://localhost:5173/docs/assets/imgage/background.jpg'
  },
  {
    icon: '🙋‍',
    title: 'TypeScript 基础',
    details: 'TypeScript 基础，带你快速上手 TypeScript。',
    date: '2024-02-20',
    tags: ['TypeScript', '后端'],
    cover: 'http://localhost:5173/docs/assets/imgage/background.jpg'
  }
]
</script>
<style scoped lang="scss">
.blog-content {
  margin: 0 auto;
  width: 80%;

  .welcome {
    padding: 20px 0;
    text-align: center;
    border-radius: 10px;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  //.article {
  //  margin-bottom: 20px;
  //  padding: 30px 15px;
  //  border: 1px solid #ebeef5;
  //  background-color: var(--vp-c-bg-soft);
  //  box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.1);
  //  border-radius: 10px;
  //  display: flex;
  //  align-items: center;
  //  justify-content: space-between;
  //  flex-direction: column;
  //
  //  .article-top {
  //    width: 100%;
  //    display: flex;
  //    align-items: center;
  //    justify-content: space-between;
  //
  //    .title {
  //      line-height: 24px;
  //      font-size: 16px;
  //      font-weight: 600;
  //    }
  //
  //    .details {
  //      flex-grow: 1;
  //      padding-top: 8px;
  //      line-height: 24px;
  //      font-size: 14px;
  //      font-weight: 500;
  //      color: var(--vp-c-text-2);
  //    }
  //  }
  //
  //  .article-stats {
  //    width: 100%;
  //    display: flex;
  //    align-items: center;
  //    justify-content: flex-start;
  //    margin-top: 10px;
  //  }
  //}
}
</style>
