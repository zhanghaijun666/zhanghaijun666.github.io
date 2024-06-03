<script setup lang="ts">
import { withBase } from 'vitepress';
import type { LinkItem } from './typings';

withDefaults(defineProps<{ items: LinkItem[] }>(), {});

const getSvg = (item: LinkItem) => {
  if (item.icon && typeof item.icon === 'object') {
    return item.icon.svg;
  }
  return '';
};
</script>

<template>
  <div class="nav-link">
    <template v-for="item in items || []" :key="item.link">
      <a v-if="item.link" :href="item.link" style="text-decoration: none" target="_blank">
        <article class="link-box">
          <div class="link-head">
            <div class="icon">
              <div v-if="getSvg(item)" class="icon" v-html="getSvg(item)"></div>
              <img v-else :src="withBase(item.icon || '/logo.svg')" :alt="item.title" onerror="this.parentElement.style.display='none'" />
            </div>
            <div class="link-title">{{ item.title }}</div>
          </div>
          <div v-if="item.desc" class="link-body">{{ item.desc }}</div>
        </article>
      </a>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.nav-link {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(192px, 1fr));
}

.link-box {
  border: 1px solid #270a0a;
  border-radius: 8px;
  padding: 12px;
  transition: transform 0.3s;
  background-color: var(--vp-c-bg);
  &:hover {
    transform: scale(1.05);
  }

  .link-head {
    height: 40px;
    display: flex;
    align-items: center;
    gap: 6px;

    .icon {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      img {
        width: 40px;
        height: 40px;
      }
    }

    .link-title {
      flex: 1;
      text-align: center;
      color: var(--vp-c-text-1);
      font-size: 1.2rem;
      font-weight: 600;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
    }
  }

  .link-body {
    color: var(--vp-c-text-2);
    margin-top: 8px;
    color: #666;
    font-size: 0.9rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }
}
</style>
