<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id
</script>
<template>
  <h3>학생상세</h3>
  <div>학생데이터 {{ userId }}</div>
</template>
