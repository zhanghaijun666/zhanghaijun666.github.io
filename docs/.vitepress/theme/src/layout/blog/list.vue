<script setup lang="ts">
import { useData, withBase } from "vitepress";
const { theme } = useData();

import PageDate from "../../../../config/data/index";
const { page } = PageDate;
</script>

<template>
  <div class="box">
    <div class="aside">
      <div class="card personal">
        <div class="overlay"></div>
        <img class="avatar" :src="withBase('/avatar.png')" width="100rem" height="100rem" alt="avatar" />
        <div class="author">{{ theme.siteTitle }}</div>
        <hr style="width: 100%" />
        <div class="motto">千万不要因为走得太久，而忘记了我们为什么出发！</div>
        <div class="motto" style="color: #aaa"></div>
        <div class="site">
          <div class="site-item">
            <span class="site-item-count">153</span>
            <span class="site-item-name">归档</span>
          </div>
          <div class="site-item" style="border-left: 1px solid #eee; border-right: 1px solid #eee">
            <span class="site-item-count">64</span>
            <span class="site-item-name">分类</span>
          </div>
          <div class="site-item">
            <span class="site-item-count">128</span>
            <span class="site-item-name">标签</span>
          </div>
        </div>
      </div>
      <div class="card siteNav">
        <h2>博客导航</h2>
        <div class="nav">
          <div class="icon"></div>
          <div class="name">分类</div>
          <div class="count"><span>10</span></div>
        </div>
        <div class="nav">
          <div class="icon"></div>
          <div class="name">数据库</div>
          <div class="count"><span>10</span></div>
        </div>
        <div class="nav">
          <div class="icon"></div>
          <div class="name">容器技术</div>
          <div class="count"><span>10</span></div>
        </div>
        <div class="nav">
          <div class="icon"></div>
          <div class="name">Linux系统</div>
          <div class="count"><span>10</span></div>
        </div>
      </div>
    </div>
    <div class="blog-list">
      <template v-for="(item, index) in page" :key="index">
        <div class="card blog-box">
          <div class="title">
            <text class="topTip" v-if="item.top">置顶</text>
            <a class="name" :href="item.link || '/'" target="_blank">{{ item.title }}</a>
            <a :href="item.link || '/'" class="jump" target="_blank">阅读全文 》</a>
          </div>
          <hr />
          <div class="info">
            <div>时间: {{ item.date }}</div>
            <div>分类: 个人博客</div>
            <div>标签: {{ item.tags.join(" / ") }}</div>
          </div>
          <div class="content">
            <span>{{ item.description }}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<style scoped lang="scss">
.box {
  margin: 0;
  display: grid;
  grid-template-columns: 20rem auto;
  column-gap: 2rem;
  .card {
    background: #fff;
    box-shadow: 1px 1px 4px #c5c5c5;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .blog-box {
    /* max-height: 20rem; */
    /* overflow: hidden; */
    margin-bottom: 1rem;
    transition: 0.2s;
    &:hover {
      -webkit-transform: scale(1.03);
      -moz-transform: scale(1.03);
      transform: scale(1.03);
    }
    hr {
      border: 0;
      border-top: 1px solid #eee;
    }
    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      .topTip {
        background: linear-gradient(80deg, #ffa54f, #ff4500);
        color: #fff;
        font-size: 1.5rem;
        padding: 0 0.5rem;
        border-radius: 4px;
      }
      a.name {
        flex: 1;
        text-decoration: none;
        color: #37374b;
        font-size: 1.5rem;
        font-weight: bold;
        letter-spacing: 1px;
      }
      a.jump {
        display: inline-block;
        margin: 4px 0;
        padding: 5px 0 5px 7.5px;
        text-decoration: none;
        font-size: 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.6);
        color: rgba(0, 0, 0, 0.8);
        &:hover {
          background-color: rgba(55, 55, 75, 0.8);
          color: #fff;
          padding: 5px 0 5px 7.5px;
          border-radius: 4px;
        }
      }
    }
    .info {
      display: flex;
      color: #888;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-direction: row;
      align-items: center;
      margin: 0.5rem 0;
      gap: 1rem;
    }
    .content {
      font-size: 14px;
      line-height: 1.75em;
      color: rgba(0, 0, 0, 0.75);
      background: #f5f7f8;
      text-indent: 30px;
      word-break: break-all;
      padding: 10px;
      border-radius: 10px;
      > * {
        /* 多行文本溢出显示省略号 */
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }
  }
  .personal {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 7rem;
      background: rgba(55, 55, 75, 0.96);
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      z-index: 0;
    }
    img.avatar {
      z-index: 99;
      margin-top: 2rem;
      box-shadow: 1px 1px 2px #dfd6d6;
      border-radius: 50%;
      transition: all 0.5s ease-in;
      &:hover {
        transform: scale(1) rotate(-360deg) translate(0px);
      }
    }
    .author {
      font-family: cursive;
      font-size: 1.5em;
      color: #37374c;
    }
    .motto {
      letter-spacing: 1px;
      font-size: 0.85em;
      line-height: 1.5em;
      text-align: center;
      white-space: normal;
      word-wrap: break-word;
      color: #37374c;
    }
    .site {
      display: flex;
      flex-direction: row;
      cursor: pointer;
      > .site-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        border-radius: 8px;
        padding: 4px 1rem;
        &:hover {
          background-color: #e8e8f8;
        }
        .site-item-count {
          display: block;
          color: #37374c;
          font-weight: 600;
          font-size: 18px;
        }
        .site-item-name {
          font-size: 12px;
          color: #aaa;
          display: block;
          margin-top: 0.1em;
        }
      }
    }
  }
  .siteNav {
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      &:hover {
        background-color: rgba(102, 102, 204, 0.15);
        padding: 0.5rem 1.2rem;
      }
      .icon {
        height: 1.5rem;
        width: 1.5rem;
        background-image: linear-gradient(135deg, rgb(171, 220, 255) 10%, rgb(3, 150, 255) 100%);
      }
      .name {
        flex: 1;
        font-size: 1.2rem;
      }
      .count {
        > span {
          display: inline-block;
          color: #bcbcbc !important;
          background: rgba(102, 102, 204, 0.1);
          border-radius: 6px;
          padding: 0.3rem 0.5rem;
        }
      }
    }
  }
}
</style>
