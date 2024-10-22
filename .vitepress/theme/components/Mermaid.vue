<template>
  <div v-html="svgRef" style="display: flex;justify-content: center;align-items: center;"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import mermaid from 'mermaid'

const props = defineProps({ id: String, code: String })

const render = async (id: string, code: string) => {
  // mermaid 初始化
  mermaid.initialize({ startOnLoad: false })
  const { svg } = await mermaid.render(id, code)
  return svg
}
// 在组件挂载后进行mermaid渲染
onMounted(async () => {
  svgRef.value = await render(props.id, decodeURIComponent(props.code))
})

const svgRef = ref('')
</script>
