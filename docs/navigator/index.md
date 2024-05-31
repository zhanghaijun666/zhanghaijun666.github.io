---
hello: world
---

<script setup lang="ts">
import {NAV_DATA} from './data'
</script>

<template v-for="(item,index) in NAV_DATA" :key="index">

## {{item.title}}

> {{item.desc || ''}}

<v-link :items=item.items></v-link>
</template>
