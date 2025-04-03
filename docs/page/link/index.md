---
layout: doc
layoutClass: n-nav
outline: [ 2, 3, 4 ]
aside: true
lastUpdated: false
editLink: false
footer: false
---

<script setup>
import { NAV_DATA } from './data'
</script>

<n-link v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<style lang="scss">
.n-nav {
  /* 覆盖全局的 vp-layout-max-width（仅当前页面使用） */
  --vp-layout-max-width: 1660px;
  /* layout 样式 */
  .container {
    max-width: var(--vp-layout-max-width) !important;
  }
  .content-container,.content {
    max-width: 100% !important;
    padding-bottom: 0;
  }
  /* aside 样式 */
  .aside {
    padding-left: 0;
    max-width: 224px;
  }
  .vp-doc h2 {
    margin-top: 24px;
  }
}
</style>



