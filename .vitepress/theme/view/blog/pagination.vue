<template>
  <!-- 分页组件 -->
  <div class="flex justify-center">
    <div class="flex items-center space-x-2">
      <!-- 上一页按钮 -->
      <button
        :disabled="page === 1"
        @click="()=>page--"
        :class="{
              '!rounded-button whitespace-nowrap px-4 py-2 border': true,
              'bg-gray-100 text-gray-400 cursor-not-allowed': page === 1,
              'hover:bg-gray-100 text-gray-700': page > 1
            }"
      >
        <i class="fas fa-chevron-left mr-1"></i>上一页
      </button>
      <!-- 页数开始 -->
      <template v-for="(pages,index) in [visiblePages.before,visiblePages.middle,visiblePages.after]" :key="index">
        <!-- 省略号 -->
        <div v-if="index > 0 && pages.length>0" class="px-2 text-gray-500">...</div>
        <button v-for="item in pages" :key="item" @click="page = item" :class="{
              '!rounded-button whitespace-nowrap w-10 h-10 flex items-center justify-center': true,
              'bg-blue-500 text-white': page === item,
              'border hover:bg-gray-100': page !== item
            }">{{ item }}
        </button>
      </template>
      <!-- 下一页按钮 -->
      <button
        :disabled="page === totalPages"
        @click="page++"
        :class="{
              '!rounded-button whitespace-nowrap px-4 py-2 border': true,
              'bg-gray-100 text-gray-400 cursor-not-allowed': page === totalPages,
              'hover:bg-gray-100 text-gray-700': page < totalPages
            }"
      >
        下一页<i class="fas fa-chevron-right ml-1"></i>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ComputedRef, ref, unref } from 'vue'

// const props = defineProps({
//   page: { type: Number, default: 1 },
//   size: { type: Number, default: 10 },
//   total: { type: Number, default: 0 }
// })

const page = ref(5)
const size = ref(10)
const total = ref(88)

// 计算总页数
const totalPages = computed(() => Math.ceil(total.value / size.value))

const visiblePages: ComputedRef<{ before: number[], middle: number[], after: number[] }> = computed(() => {
  const maxVisiblePages = 6
  const pageCount = totalPages.value
  if (pageCount <= maxVisiblePages) {
    return { before: Array.from({ length: pageCount }, (_, i) => i + 1), middle: [], after: [] }
  }
  const half = Math.floor(maxVisiblePages / 2)
  if (unref(page) < half || unref(page) > unref(totalPages) - half + 1) {
    return {
      before: Array.from({ length: half }, (_, i) => i + 1),
      middle: [],
      after: Array.from({ length: half }, (_, i) => pageCount - 2 + i)
    }
  } else if (unref(page) == half) {
    return {
      before: Array.from({ length: half + 1 }, (_, i) => i + 1),
      middle: [],
      after: Array.from({ length: half - 1 }, (_, i) => pageCount - 1 + i)
    }
  } else if (unref(page) == unref(totalPages) - half + 1) {
    return {
      before: Array.from({ length: half - 1 }, (_, i) => i + 1),
      middle: [],
      after: Array.from({ length: half + 1 }, (_, i) => pageCount - 3 + i)
    }
  } else {
    return {
      before: Array.from({ length: half - 1 }, (_, i) => i + 1),
      middle: [unref(page), unref(page) + 1],
      after: Array.from({ length: half - 1 }, (_, i) => pageCount - 1 + i)
    }
  }
})

console.log(visiblePages)

</script>
<style scoped>
/* 自定义按钮过渡效果 */
button:not(:disabled) {
  transition: all 0.2s ease;
}

/* 当前页按钮样式 */
button[disabled] {
  cursor: not-allowed;
}
</style>
