<script setup>
import { useRoute } from 'vue-router'

import ExamSidebar from '../components/ExamSidebar.vue'

const sidebarItems = [
  { title: '시험 목록', parentName: 'ExamList' },
  { title: '시험 일괄등록', parentName: 'ExamMassRegistration' }
]
</script>

<template>
  <div class="flex gap-[32px] md:mt-[40px] min-w-[320px] w-full">
    <section class="hidden sm:block">
      <ExamSidebar :items="sidebarItems" />
    </section>
    <section class="flex-1">
      <RouterView />
    </section>
  </div>
</template>

<style scoped></style>
