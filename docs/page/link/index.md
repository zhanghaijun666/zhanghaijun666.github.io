---
layoutClass: n-nav
outline: [ 2, 3, 4 ]
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 前端导航
<n-link v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>



