<script setup>
import { useRoute } from 'vue-router'

import ExamSidebar from '../components/ExamSidebar.vue'

const sidebarItems = [
  { title: '시험 목록', parentName: 'ExamList' },
  { title: '시험 일괄등록', parentName: 'ExamMassRegistration' }
]
</script>

<template>
  <div class="flex gap-[40px] mt-[60px]">
    <section>
      <ExamSidebar :items="sidebarItems" />
    </section>
    <section>
      <RouterView />
    </section>
  </div>
</template>

<style scoped></style>
