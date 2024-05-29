<template>
  <div>
    <button class="button">
      <slot>
        <span>测试</span>
      </slot>
    </button>
  </div>
</template>
<script lang="ts" setup name="MButton"></script>
<style scoped lang="scss">
.button {
  color: green;
  border: 1px solid #000;
  padding: 6px 8px;
  border-radius: 8px;
}
</style>
