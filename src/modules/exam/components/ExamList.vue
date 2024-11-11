<script setup>
import { Colors } from '@utils'

const props = defineProps({ exams: Array })
</script>

<template>
  <div>
    <div :style="{ color: Colors.text.hint }" class="flex">
      <div class="text-left w-[400px]">
        검색된 시험<span v-if="exams?.length > 0"> ・ {{ exams.length }}개</span>
      </div>
      <div class="text-right text-nowrap">학생 수</div>
      <div class="text-right text-nowrap">평균 성적</div>
    </div>
    <div class="flex flex-col w-full">
      <RouterLink
        :to="{ name: 'ExamDetail', params: { id: exam.examId } }"
        v-for="(exam, i) in exams"
        :key="exam.name"
        class="cursor-pointer hover:font-semibold flex w-full"
      >
        <div class="border-0">
          <span class="ml-2 mr-6" :style="{ color: Colors.text.primary }">{{ i + 1 }}</span>
          <span>{{ exam.name }}</span>
        </div>
        <div class="border-0 text-right">
          <span>{{ exam.studentCount }}</span>
        </div>
        <div class="border-0 text-right">
          <span class="mr-2">{{ exam.averageScore }}</span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
