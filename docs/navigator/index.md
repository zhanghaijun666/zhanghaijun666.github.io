---
hello: world
---

<script setup lang="ts">
import {NAV_DATA} from './data'
</script>

<template v-for="(item,index) in NAV_DATA" :key="index">

<h2 :id="item.title">{{item.title}}</h2>

> {{item.desc || ''}}

<v-link :items=item.items></v-link>
</template>
