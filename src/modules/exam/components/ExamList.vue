<script setup>
import { Colors } from '@utils'

const props = defineProps({ exams: Array })
</script>

<template>
  <div>
    <div class="pr-3">
      <div
        class="exam-list-grid-header grid grid-cols-6 p-2 sticky top-0 text-center border-b-[1px] border-b-neutral-200 bg-[#ffffff]"
        :style="{ color: Colors.text.hint }"
      >
        <div class="col-span-4 text-left px-4">
          <span>검색된 시험</span>
          <span v-if="exams?.length > 0"> ・ {{ exams.length }}개</span>
        </div>
        <div class="col-span-1 text-no-wrap">학생 수</div>
        <div class="col-span-1 text-no-wrap">평균 성적</div>
      </div>
    </div>
    <div class="overflow-y-auto scrollbar-gutter-stable grow pt-2">
      <RouterLink
        :to="{ name: 'ExamDetail', params: { id: exam.examId } }"
        v-for="(exam, i) in exams"
        :key="exam.name"
        class="grid grid-cols-6 text-center p-2 cursor-pointer transition-colors hover:bg-neutral-100 rounded-lg"
        :style="{ color: Colors.text.base }"
      >
        <div class="col-span-4 px-4">
          <div class="flex items-center font-semibold">
            <span class="ml-2 mr-6" :style="{ color: Colors.text.primary }">{{ i + 1 }}</span>
            <span class="text-left">{{ exam.name }}</span>
          </div>
        </div>
        <div class="col-span-1">
          <span>{{ exam.studentCount }}</span>
        </div>
        <div class="col-span-1">
          <span>{{ exam.averageScore }}</span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.exam-list-grid-header {
  box-shadow: 0 4px 5px rgba(255, 255, 255, 0.8);
  min-height: 36px;
}
</style>
