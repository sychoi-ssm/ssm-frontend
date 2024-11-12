<script setup>
import { Colors } from '@utils'

const props = defineProps({
  examData: Object
})
const emit = defineEmits(['click'])

function handleEmit(exam) {
  const data = {
    examId: 1,
    examSeq: exam.examDtlSeq
  }
  emit('click', data)
}

function calculateAverage(scores) {
  const values = Object.values(scores)
  const sum = values.reduce((acc, num) => acc + num, 0)
  const average = sum / values.length
  return Math.round(average * 10) / 10
}

function handleExamDetailEdit(e) {
  console.log(e)
  e.stopImmediatePropagation()
}
</script>

<template>
  <div>
    <div class="pr-[14px]">
      <div
        class="exam-list-grid-header grid grid-cols-12 p-2 sticky top-0 text-center border-b-[1px] border-b-neutral-200 bg-[#ffffff]"
        :style="{ color: Colors.text.hint }"
      >
        <div class="col-span-4 text-left px-4">
          <span>시험 본 학생</span>
          <span v-if="examData?.results.length > 0"> ・ {{ examData?.results.length }}명</span>
        </div>
        <div class="col-span-2 text-no-wrap">평균</div>
        <div class="col-span-1 text-no-wrap">국어</div>
        <div class="col-span-1 text-no-wrap">영어</div>
        <div class="col-span-1 text-no-wrap">수학</div>
        <div class="col-span-1 text-no-wrap">사회</div>
        <div class="col-span-1 text-no-wrap">과학</div>
        <div class="col-span-1 text-no-wrap"></div>
      </div>
    </div>
    <div class="overflow-y-auto scrollbar-gutter-stable grow pt-2">
      <div
        v-for="(exam, i) in examData.results"
        :key="i"
        class="grid grid-cols-12 text-center p-2 cursor-pointer hover:bg-neutral-100 rounded-lg transition-colors"
        :style="{ color: Colors.text.base }"
        @click="handleEmit(exam)"
      >
        <div class="col-span-4 px-4">
          <div class="flex items-center gap-2">
            <v-avatar color="grey" size="20" />
            <div class="text-nowrap">
              <span class="font-semibold mr-1">{{ exam.name }}</span>
              <span class="text-xs">({{ exam.class }})</span>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <span>{{ calculateAverage(exam.scores) }}</span>
        </div>
        <div class="col-span-1">
          <span>{{ exam.scores.국어 }}</span>
        </div>
        <div class="col-span-1">
          <span>{{ exam.scores.영어 }}</span>
        </div>
        <div class="col-span-1">
          <span>{{ exam.scores.수학 }}</span>
        </div>
        <div class="col-span-1">
          <span>{{ exam.scores.사회 }}</span>
        </div>
        <div class="col-span-1">
          <span>{{ exam.scores.과학 }}</span>
        </div>
        <div class="col-span-1">
          <v-btn
            @click="handleExamDetailEdit"
            size="small"
            density="compact"
            variant="text"
            icon="mdi-pencil"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
