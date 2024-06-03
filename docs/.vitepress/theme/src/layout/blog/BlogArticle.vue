<template>
  <div>
    <span>
      <el-icon><UserFilled /></el-icon> {{ author }}
    </span>
    <span>
      <el-icon><Clock /></el-icon> {{ '2024-05-01' }}
    </span>
    <span v-if="tags.length" class="tags" title="标签">
      <el-icon><CollectionTag /></el-icon>
      <a v-for="tag in tags" :key="tag" class="link" :href="`/?tag=${tag}`">{{ tag }} </a>
    </span>
    <span title="文章字数">
      <el-icon><EditPen /></el-icon>
      字数：{{ wordCount }} 个字
    </span>
    <span title="预计阅读时间">
      <el-icon><AlarmClock /></el-icon>
      预计：{{ readTime }} 分钟
    </span>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useData } from 'vitepress';
import { countWord } from '../../utils/word';

const { frontmatter } = useData();
// 字数统计
const wordCount = ref(0);
const imageCount = ref(0);
const wordTime = computed(() => ~~((wordCount.value / 275) * 60));
const imageTime = computed(() => {
  const n = imageCount.value;
  return n <= 10 ? n * 13 + (n * (n - 1)) / 2 : 175 + (n - 10) * 3;
});
const readTime = computed(() => Math.ceil((wordTime.value + imageTime.value) / 60));
// 标签
const tags = computed(() => {
  const { tag, tags, categories } = frontmatter.value;
  return [
    ...new Set(
      []
        .concat(tag, tags, categories)
        .flat()
        .filter((v) => !!v)
    ),
  ];
});
const author = computed(() => frontmatter.value.author || '');
const analyze = () => {
  // document.querySelectorAll('.meta-des').forEach((v) => v.remove());
  const docDomContainer = window.document.querySelector('#VPContent');
  const imgs = docDomContainer?.querySelectorAll<HTMLImageElement>('.content-container .main img');
  imageCount.value = imgs?.length || 0;
  wordCount.value = countWord(docDomContainer?.querySelector('.content-container .main')?.textContent || '');
};
onMounted(() => {
  analyze();
});
</script>
