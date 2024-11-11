<script setup>
import { reactive, ref } from 'vue'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import ExamFilter from '../components/ExamFilter.vue'
import ExamList from '../components/ExamList.vue'

const router = useRouter()
const route = useRoute()

const exams = ref([])
const filters = {
  year: {
    name: 'year',
    title: '년도',
    data: [
      { title: '2024년', value: '2024' },
      { title: '2023년', value: '2023' },
      { title: '2022년', value: '2022' },
      { title: '2021년', value: '2021' }
    ]
  },
  grade: {
    name: 'grade',
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
  },
  type: {
    name: 'type',
    title: '시험유형',
    data: [
      {
        value: 'academicMock',
        title: '모의고사'
      },
      {
        value: 'privateMock',
        title: '모의고사(학원)'
      },
      {
        value: 'real',
        title: '내신'
      }
    ]
  },
  semester: {
    name: 'semester',
    title: '학기',
    data: [
      {
        value: 's1',
        title: '1학기'
      },
      {
        value: 's2',
        title: '2학기'
      }
    ]
  },
  term: {
    name: 'term',
    title: '중간/기말',
    data: [
      {
        value: 'mid',
        title: '중간고사'
      },
      {
        value: 'final',
        title: '기말고사'
      }
    ]
  }
}
const selections = reactive({
  year: ref(),
  grade: ref(),
  type: ref(),
  semester: ref(),
  term: ref()
})

function onFilterUpdate(filters) {
  pushRouteQuery()
  search()
}

function pushRouteQuery() {
  // filters를 query로 변환
  const query = {}
  Object.keys(filters).forEach((k) => {
    if (filters[k] && filters[k].length > 0) {
      // filter가 있다면, value를 추출 ex) { title: '2021년', value: '2021' }
      query[k] = filters[k].map((v) => v.value)
    }
  })
  router.push({
    name: 'ExamList',
    query: query
  })
}
function parseRouteQuery() {
  // query에서 filter 추출. query값을 기반으로 selection 저장
  // selection은 subset of filters.data
  Object.keys(route.query).forEach((k) => {
    if (k in selections) {
      selections[k] = filters[k].data.filter((f) => route.query[k].includes(f.value))
    }
  })
}
function search() {
  exams.value = [
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
  ]
}

//TODO : 라우트 이동하기 전, 또는 쿼리 변경 시마다로 업데이트
onMounted(() => {
  parseRouteQuery()
  search()
})
</script>

<template>
  <div class="flex">
    <section>
      <div class="text-2xl font-semibold mb-3">시험 목록</div>
      <ExamFilter
        class="mb-6"
        :selections="selections"
        :filters="filters"
        clearable
        @update:deferred="(f) => onFilterUpdate(f)"
      />
      <ExamList :exams="exams" />
    </section>
  </div>
</template>
