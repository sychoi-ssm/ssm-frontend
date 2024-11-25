<script setup>
import { onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { Colors } from '@/alias/utils'
import { useDebounceFn } from '@vueuse/core'

import ExamFilter from '../components/ExamFilter.vue'
import ExamList from '../components/ExamList.vue'
import ExamSearchBar from '../components/ExamSearchBar.vue'

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
const loading = reactive({
  search: ref(false)
})
const searchConditions = reactive({
  year: ref(),
  grade: ref(),
  type: ref(),
  semester: ref(),
  term: ref(),
  searchText: ref()
})

function onFilterUpdate() {
  loading.search = true
  console.log('준비')
  deferredSearch()
}

function pushRouteQuery() {
  // filters를 query로 변환 후 주소 이동
  const query = {}
  Object.keys(searchConditions).forEach((k) => {
    if (typeof searchConditions[k] === 'string') {
      query[k] = searchConditions[k]
    } else if (searchConditions[k]?.length > 0) {
      // filter가 있다면, value를 추출 ex) { title: '2021년', value: '2021' }
      query[k] = searchConditions[k].map((v) => v.value)
    }
  })
  router.push({
    name: 'ExamList',
    query: query
  })
}

function parseRouteQuery(query) {
  // query에서 filter 추출. query값을 기반으로 selection 저장
  // selection은 subset of filters.data
  Object.keys(searchConditions).forEach((k) => {
    if (k === 'searchText') {
      searchConditions[k] = query[k]
    } else if (k in query) {
      searchConditions[k] = filters[k].data.filter((f) => query[k].includes(f.value))
    } else {
      searchConditions[k] = []
    }
  })
}

function onSearchTextUpdate(searchText) {
  loading.search = true
  console.log('준비')
  searchConditions.searchText = searchText
  deferredSearch()
}
function onClickAddNew() {
  console.log('추가하기!')
}

// 검색창 Typing은 debounce로 함수를 실행하는데, 이 때 Typing 한 순간 loading을 작동하게 만드는 함수
function onBeforeSearchUpdate() {
  loading.search = true
}

const deferredSearch = useDebounceFn(pushRouteQuery, 1000, { maxWait: 10000 })

function search() {
  console.log('검색시작!!')
  setTimeout(() => {
    console.log('검색끝!!')
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
      },
      {
        name: '2024년 고등학교 1학년 1학기 중간 내신',
        examId: 3,
        studentCount: 15,
        averageScore: 89.2
      },
      {
        name: '2024년 고등학교 1학년 1학기 기말 내신',
        examId: 4,
        studentCount: 15,
        averageScore: 87.2
      },
      {
        name: '2024년 고등학교 1학년 1학기 중간 내신',
        examId: 5,
        studentCount: 15,
        averageScore: 89.2
      },
      {
        name: '2024년 고등학교 1학년 1학기 기말 내신',
        examId: 6,
        studentCount: 15,
        averageScore: 87.2
      },
      {
        name: '2024년 고등학교 1학년 1학기 중간 내신',
        examId: 7,
        studentCount: 15,
        averageScore: 89.2
      },
      {
        name: '2024년 고등학교 1학년 1학기 기말 내신',
        examId: 8,
        studentCount: 15,
        averageScore: 87.2
      }
    ]
    loading.search = false
  }, 1000)
}

//TODO : 라우트 이동하기 전, 또는 쿼리 변경 시마다로 업데이트
onMounted(() => {
  parseRouteQuery(route?.query)
  search()
})

const watchRoute = watch(
  () => route?.query,
  (newQuery) => {
    parseRouteQuery(newQuery)
    search()
  }
)
onBeforeUnmount(() => {
  watchRoute()
})
</script>

<template>
  <div class="flex flex-col w-full pr-4 max-w-[720px]">
    <div class="h-[36px] text-2xl font-semibold mb-3">시험 목록</div>
    <ExamSearchBar
      v-model="searchConditions.searchText"
      @update="(searchText) => onSearchTextUpdate(searchText)"
      class="mb-2"
      :loading="loading.search"
    />
    <div class="flex justify-between">
      <ExamFilter
        :searchConditions="searchConditions"
        :filters="filters"
        clearable
        @update="(f) => onFilterUpdate(f)"
      />

      <v-btn
        @click="onClickAddNew"
        variant="flat"
        :color="Colors.bg.primary"
        height="32"
        :ripple="false"
      >
        <span>추가하기</span>
      </v-btn>
    </div>
    <ExamList class="exam-list-container w-full flex flex-col" :exams="exams" />
  </div>
</template>

<style scoped>
.exam-list-container {
  max-height: calc(100vh - 300px);
}
</style>
