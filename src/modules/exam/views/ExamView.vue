<script setup>
import { reactive, ref } from 'vue'

import ExamFilter from '../components/ExamFilter.vue'
import ExamList from '../components/ExamList.vue'

const exams = ref([
  {
    name: '2024년 고등학교 1학년 1학기 중간 내신',
    examId: 1,
    studentCount: 15,
    averageScore: 89.2
  },
  {
    name: '2024년 고등학교 1학년 1학기 기말 내신',
    examId: 2,
    studentCount: 15,
    averageScore: 87.2
  }
])
const filters = {
  examYears: {
    name: 'examYears',
    title: '년도',
    data: [
      { title: '2024년', value: 2024 },
      { title: '2023년', value: 2023 },
      { title: '2022년', value: 2022 },
      { title: '2021년', value: 2021 }
    ]
  },
  schoolYears: {
    name: 'schoolYears',
    title: '학년',
    data: [
      {
        value: 'm1',
        title: '중1'
      },
      {
        value: 'm2',
        title: '중2'
      },
      {
        value: 'm3',
        title: '중3'
      }
    ]
  }
}

const selections = reactive({
  examYears: ref(),
  schoolYears: ref()
})

function onFilterUpdate(filters) {
  //search
  console.log(filters)
}
</script>

<template>
  <div class="flex">
    <section>
      <div>
        <div class>
          <span>시험 관리</span>
        </div>
        <div>
          <span>시험 일괄등록</span>
        </div>
      </div>
    </section>
    <section>
      <div class="text-2xl">시험 관리</div>
      <ExamFilter
        :selections="selections"
        :filters="filters"
        clearable
        @update:deferred="onFilterUpdate"
      />
      <ExamList :exams="exams" />
    </section>
  </div>
</template>
