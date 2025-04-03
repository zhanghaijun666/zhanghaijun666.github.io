<template>
  <!-- 分页组件 -->
  <div class="flex justify-center">
    <div class="flex items-center space-x-2">
      <!-- 上一页按钮 -->
      <button
        :disabled="page === 1"
        @click="()=>changePage(page-1)"
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
        <button v-for="item in pages" :key="item" @click="()=>changePage(item)" :class="{
              '!rounded-button whitespace-nowrap w-10 h-10 flex items-center justify-center': true,
              'bg-blue-500 text-white': page === item,
              'border hover:bg-gray-100': page !== item
            }">{{ item }}
        </button>
      </template>
      <!-- 下一页按钮 -->
      <button
        :disabled="page === totalPages"
        @click="()=>changePage(page+1)"
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
import { computed, ComputedRef, ref, unref, watch } from 'vue'

const props = defineProps({
  page: { type: Number, default: 1 },
  size: { type: Number, default: 10 },
  total: { type: Number, default: 0 }
})
const emit = defineEmits<{ change: [page: number, size: number] }>()

const page = ref<number>(props.page)
const size = ref<number>(props.size)
const total = ref<number>(props.total)

// 计算总页数
const totalPages = computed(() => Math.max(1, Math.ceil(total.value / size.value)))

function changePage(pageNumber: number = 1) {
  page.value = pageNumber
  emit('change', pageNumber, size.value)
}

watch(() => props.total, (val) => {
  total.value = val
})

const visiblePages: ComputedRef<{ before: number[], middle: number[], after: number[] }> = computed(() => {
  const pageTotalMax = 6
  const currentPage = unref(page)
  const pageCount = unref(totalPages)

  if (pageCount <= pageTotalMax) {
    return { before: Array.from({ length: pageCount }, (_, i) => i + 1), middle: [], after: [] }
  }
  const half = Math.ceil(pageTotalMax / 2)
  if (currentPage < half || currentPage > pageCount - half + 1) {
    return {
      before: Array.from({ length: half }, (_, i) => i + 1),
      middle: [],
      after: Array.from({ length: pageTotalMax - half }, (_, i) => pageCount - i).reverse()
    }
  } else if (currentPage < half + 2) {
    return {
      before: Array.from({ length: currentPage + 1 }, (_, i) => i + 1),
      middle: [],
      after: Array.from({ length: Math.max(1, pageTotalMax - currentPage - 1) }, (_, i) => pageCount - i).reverse()
    }
  } else if (currentPage == pageCount - half + 1) {
    return {
      before: Array.from({ length: half - 1 }, (_, i) => i + 1),
      middle: [],
      after: Array.from({ length: half + 1 }, (_, i) => pageCount - i).reverse()
    }
  } else {
    return {
      before: Array.from({ length: half - 1 }, (_, i) => i + 1),
      middle: [currentPage - 1, currentPage, currentPage + 1],
      after: Array.from({ length: Math.max(1, pageTotalMax - half - 2) }, (_, i) => pageCount - i).reverse()
    }
  }
})
</script>
<style scoped>
/* 自定义按钮过渡效果 */
button:not(:disabled) {
  transition: all 0.1s ease;
}

/* 当前页按钮样式 */
button[disabled] {
  cursor: not-allowed;
}
</style>
