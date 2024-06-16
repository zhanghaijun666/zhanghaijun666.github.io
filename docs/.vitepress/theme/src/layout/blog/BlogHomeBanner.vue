<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
const { site, frontmatter } = useData();

const name = computed(() => (frontmatter.value.blog?.name ?? site.value.title) || '');
const motto = computed(() => frontmatter.value.blog?.motto || '');
const inspiringList: string[] = [
  '人生就像一场修行，你不可能一开始就修成正果',
  '无论多么沉重的负担，也不要忘记微笑；无论多么漫长的路程，也不要忘记坚持',
  '千万不要因为走得太久，而忘记了我们为什么出发',
  '生活的真谛不在繁华，而在于淡泊',
];
const inspiring = inspiringList[0];
</script>
<template>
  <div>
    <div class="box">
      <div class="name">
        <div>{{ name }}</div>
      </div>
      <div v-show="motto" class="motto">{{ motto }}</div>
    </div>
    <div class="inspiring-wrapper">
      <h2 v-show="!!inspiring">
        {{ inspiring }}
      </h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  text-align: center;
  .name {
    transition: all 0.25s ease-in-out 0.04s;
    transform: translateY(0px);
    opacity: 1;
    font-weight: bold;
    height: 5rem;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .motto {
    position: relative;
    bottom: 0px;
    font-size: 14px;
    margin-left: 10px;

    &::before {
      content: '- ';
    }
  }
}

@media screen and (max-width: 500px) {
  .motto {
    display: none;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.inspiring-wrapper {
  margin: 16px 0;
  height: 32px;
  width: auto;

  h2 {
    animation: fade-in 0.5s ease-in-out;
    cursor: pointer;
    text-align: center;
    font-size: 20px;
    line-height: 1.6;
  }
}
</style>
