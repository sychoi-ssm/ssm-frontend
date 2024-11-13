<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { Colors } from '@utils'

import ExamDetailDeleteCard from '../components/ExamDetailDeleteCard.vue'
import ExamDetailEditCard from '../components/ExamDetailEditCard.vue'
import ExamDetailResultList from '../components/ExamDetailResultList.vue'
import ExamDialog from '../components/ExamDialog.vue'
import ExamReportCard from '../components/ExamReportCard.vue'
import ExamSearchBar from '../components/ExamSearchBar.vue'

const props = defineProps({})

const route = useRoute()
const router = useRouter()

const config = reactive({
  menu: {
    items: ['학생 성적', '반 평균', '반 편차'],
    current: ref('학생 성적')
  },
  modal: {
    open: ref(false),
    current: ref(null),
    opacity: ref(0.33)
  },
  data: {
    examReport: ref(null)
  },
  loading: {
    search: ref(false)
  }
})
const setSubMenu = (m) => {
  config.menu.current = m
}
const examData = {
  title: '2024년 고등학교 1학년 내신',
  subtitle: '1학기 중간고사',
  results: [
    {
      examDtlSeq: 1,
      name: '김승열',
      class: '가평고1',
      scores: { 국어: 88, 영어: 87, 수학: 87, 사회: 87, 과학: 87 }
    },
    {
      examDtlSeq: 2,
      name: '김승열',
      class: '가평고1',
      scores: { 국어: 88, 영어: 87, 수학: 87, 사회: 87, 과학: 87 }
    }
  ]
}

function historyBack() {
  router.go(-1)
}

function handleExamDetailItemClick(data) {
  config.data.examReport = data
  openModal('exam-report')
}
function handleEditExamDetail(data) {
  config.data.examEdit = data
  openModal('edit-exam-detail')
}
function handleDeleteExamDetail(data) {
  config.data.examDelete = data
  openModal('delete-exam-detail')
}
function openModal(currentModal) {
  config.modal.current = currentModal
  config.modal.opacity = currentModal === 'exam-report' ? '0.33' : '0'
  config.modal.open = true
}

function closeModal() {
  config.modal.current = null
  config.modal.open = false
}

function onClickAddNew() {
  console.log('추가하기!')
}

// 검색창 Typing은 debounce로 함수를 실행하는데, 이 때 Typing 한 순간 loading을 작동하게 만드는 함수
function onBeforeSearchUpdate() {
  config.loading.search = true
}

function onSearchTextUpdate() {
  setTimeout(() => {
    config.loading.search = false
  }, 1000)
}
</script>

<template>
  <div class="flex flex-col w-full pr-4 max-w-[720px] gap-3">
    <section class="min-h-[58px]">
      <div class="flex justify-between items-center">
        <span class="text-2xl font-semibold" :style="{ color: Colors.text.strong }">
          {{ examData.title }}
        </span>
        <span>
          <v-btn
            density="compact"
            icon="mdi-arrow-left"
            variant="text"
            :ripple="false"
            :color="Colors.text.hint"
            @click="historyBack()"
          />
        </span>
      </div>
      <div class="text-base" :style="{ color: Colors.text.base }">{{ examData.subtitle }}</div>
    </section>
    <section>
      <ExamSearchBar
        @update:before="onBeforeSearchUpdate"
        @update="(searchText) => onSearchTextUpdate(searchText)"
        @click:add="onClickAddNew"
        class="mb-2"
        :loading="config.loading.search"
      />
    </section>
    <section class="min-h-[32px]">
      <div class="flex gap-1">
        <v-chip
          v-for="subMenu in config.menu.items"
          :key="subMenu"
          class="cursor-pointer"
          :color="subMenu === config.menu.current ? Colors.bg.base : 'transparent'"
          variant="flat"
          @click="setSubMenu(subMenu)"
          :ripple="false"
        >
          <span
            class="flex items-center"
            :style="{
              color: subMenu === config.menu.current ? Colors.text.base : Colors.text.base
            }"
          >
            {{ subMenu }}
          </span>
        </v-chip>
      </div>
    </section>
    <section class="mt-3">
      <ExamDetailResultList
        v-if="config.menu.current === '학생 성적'"
        :exam-data="examData"
        @click:item="(i) => handleExamDetailItemClick(i)"
        @click:edit="(data) => handleEditExamDetail(data)"
        @click:delete="(data) => handleDeleteExamDetail(data)"
      />
      <div v-else class="flex justify-center text-neutral-600">
        <div>준비중입니다...</div>
      </div>
    </section>
  </div>
  <ExamDialog v-model="config.modal.open" :opacity="config.modal.opacity">
    <ExamReportCard v-if="config.modal.current === 'exam-report'" :data="config.data.examReport" />
    <ExamDetailDeleteCard
      v-if="config.modal.current === 'delete-exam-detail'"
      @click:close="closeModal"
      @click:confirm="console.log('삭제')"
    />
    <ExamDetailEditCard
      v-if="config.modal.current === 'edit-exam-detail'"
      @click:close="closeModal"
      @click:confirm="console.log('저장')"
    />
  </ExamDialog>
</template>

<style scoped></style>
