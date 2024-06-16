<script setup lang="ts">
import { computeSeriesColors, randomColor } from '../utils/color';

function changeColor(type: string) {
  const newColor = randomColor();
  const newSeriesColor = computeSeriesColors(newColor);
  const rootEl = document.documentElement;
  const rootStyle = rootEl.style;

  if (type === 'page') {
    // 设置网站主题
    rootStyle.setProperty('--vp-c-brand', newColor);
    rootStyle.setProperty('--vp-c-brand-light', newSeriesColor.light[2]);
    rootStyle.setProperty('--vp-c-brand-lighter', newSeriesColor.light[4]);
    rootStyle.setProperty('--vp-c-brand-lightest', newSeriesColor.light[6]);
    rootStyle.setProperty('--vp-c-brand-dark', newSeriesColor.dark[0]);
    rootStyle.setProperty('--vp-c-brand-darker', newSeriesColor.dark[1]);
  } else if (type === 'comp') {
    // 设置组件主题
    rootStyle.setProperty('--el-color-primary', newColor);
    rootStyle.setProperty('--el-color-primary-light-3', newSeriesColor.light[2]);
    rootStyle.setProperty('--el-color-primary-light-5', newSeriesColor.light[4]);
    rootStyle.setProperty('--el-color-primary-light-7', newSeriesColor.light[6]);
    rootStyle.setProperty('--el-color-primary-light-9', newSeriesColor.light[8]);
    rootStyle.setProperty('--el-color-primary-dark-2', newSeriesColor.dark[1]);
  }
}
</script>

<template>
  <div flex="~ col wrap" items-center mt8>
    <div flex style="align-items: center" @click="changeColor('page')">
      <span font-bold pa-2 b-rd cursor-pointer hover:bg-theme mr-4>换个网站主题色</span>
      <div style="width: 2rem; height: 2rem" b-rd bg-theme />
    </div>
    <div flex style="align-items: center" @click="changeColor('comp')">
      <span font-bold pa-2 b-rd cursor-pointer hover:comp-bg-theme mr-4>换个组件主题色</span>
      <div style="width: 2rem; height: 2rem" b-rd comp-bg-theme />
    </div>

    <h2 text="center lg" font-bold my-5 mt-10>💕 Thanks to all the contributors!</h2>
  </div>
</template>
