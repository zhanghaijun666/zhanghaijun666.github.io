<script setup lang="ts">
import LinkItem from './link-item.vue'
import type { Link } from '../../typings'

defineProps<{
  title: string
  items: Link.LinkItem[]
}>()
</script>

<template>
  <h2 v-if="title" :id="title" tabindex="-1">
    {{ title }}
  </h2>
  <div class="m-nav-links">
    <link-item
      v-for="{ icon, title, desc, link } in items"
      :key="link"
      :icon="icon"
      :title="title"
      :desc="desc"
      :link="link"
    />
  </div>
</template>

<style lang="scss" scoped>
.m-nav-links {
  --m-nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--m-nav-gap);
  grid-column-gap: var(--m-nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--m-nav-gap);
}

@each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
  @media (min-width: $media) {
    .m-nav-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (min-width: 960px) {
  .m-nav-links {
    --m-nav-gap: 20px;
  }
}
</style>
