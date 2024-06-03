<template>
  <p class="action">
    <a href="/">
      <el-button type="success" round size="large">戳我 {{ '6' }}</el-button>
    </a>
  </p>
  <el-image :src="src" :preview-src-list="[src]" hide-on-click-modal />
</template>
<script setup lang="ts">
withDefaults(defineProps<{ src: string }>(), { src: '/docs/logo.png' });
</script>
<style scoped>
.action {
  margin: 1.8rem auto;
  text-align: center;
}

.nav-link {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #3eaf7c;
  padding: 0.3rem 2rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}
</style>
