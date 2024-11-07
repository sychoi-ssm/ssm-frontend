<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { SCard } from '@/components/index.js'
import { StudentLayout } from '@/layouts/index.js'
import { ApiClient } from '@/services/api.js'

import StudentSearchList from '../components/StudentSearchList.vue'

const url = 'https://reqres.in/api/users?page=1'
const users = ref()
const router = useRouter()

async function load() {
  let res = await ApiClient.get(url)
  console.log(res)
  users.value = res.data
}
function toStudent(id) {
  console.log({ name: 'StudentDetail', params: { id: id } })
  router.push({ name: 'StudentDetail', params: { id: id } })
}
const headers = [
  { title: '과목', value: 'subject' },
  {
    title: '1학기',
    align: 'left',
    children: [
      { title: '중간', value: 'q1' },
      { title: '기말', value: 'q2' }
    ]
  },
  {
    title: '2학기',
    align: 'left',
    children: [
      { title: '중간', value: 'q3' },
      { title: '기말', value: 'q4' }
    ]
  }
]
const items = [
  {
    subject: '평균',
    q1: 64,
    q2: 75,
    q3: 86,
    q4: 79
  },
  {
    subject: '국어',
    q1: 64,
    q2: 75,
    q3: 86,
    q4: 79
  },
  {
    subject: '영어',
    q1: 64,
    q2: 75,
    q3: 86,
    q4: 79
  },
  {
    subject: '수학',
    q1: 64,
    q2: 75,
    q3: 86,
    q4: 79
  },
  {
    subject: '사회',
    q1: 64,
    q2: 75,
    q3: 86,
    q4: 79
  },
  {
    subject: '과학',
    q1: 64,
    q2: 75,
    q3: 86,
    q4: 79
  }
]
</script>
<template>
  <div class="student-layout-container">
    <section class="bg-white shadow-neutral-300 shadow-md rounded-lg h-full w-[200px]">
      <StudentSearchList @click="(i) => console.log(i)" />
    </section>
    <!--    <div class="grow">-->
    <div class="grow flex flex-col gap-2">
      <div class="min-h-[52px] flex items-center">
        <section>
          <div class="flex gap-2 items-center">
            <VAvatar color="grey" size="48">N</VAvatar>
            <div class="flex flex-col items-between text-xs text-neutral-500">
              <div>
                <span class="text-2xl text-neutral-800 mr-1 font-semibold">김승열</span>
                <span class="text-lg">(가평고1)</span>
              </div>
              <div>010-1234-5678</div>
            </div>
          </div>
        </section>
      </div>

      <div class="grow flex gap-2">
        <div class="grow">
          <div class="bg-grey rounded-lg h-full">
            <!--            <v-img-->
            <!--              width="600"-->
            <!--              class="bg-grey-lighten-2 h-full"-->
            <!--              src="https://picsum.photos/350/165?random"-->
            <!--            ></v-img>-->
          </div>
        </div>
        <div class="w-[260px]">
          <div
            class="bg-white shadow-neutral-300 shadow-md rounded-lg text-sm grow h-full px-4 py-2"
          >
            <div class="font-semibold mb-2 text-base">요약</div>
            <div class="mb-3">학생 성적이 성장중이에요</div>
            <ul class="flex flex-col gap-1">
              <li class="flex justify-between">
                <span>최근 6개월 상승률</span>
                <span>15%</span>
              </li>
              <li class="flex justify-between">
                <span>모의고사 대비 내신</span>
                <span>20%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="h-[260px] flex gap-2">
        <div class="flex-1">
          <div
            class="bg-white shadow-neutral-300 overflow-auto shadow-md rounded-lg text-sm h-full px-4 py-2"
          >
            <div class="font-semibold mb-2 text-base">23년 내신</div>
            <div class="w-[90%]">
              <v-data-table
                class="ssm-v-data-table"
                :headers="headers"
                :items="items"
                item-key="name"
                density="compact"
                hide-default-footer
              >
                <template #body="{ items }">
                  <tr
                    v-for="(item, index) in items"
                    :key="index"
                    class="text-xs"
                    :class="index % 2 === 0 ? 'bg-[#E9ECF0]' : ''"
                  >
                    <td class="border-0" :class="index === 0 ? 'font-bold' : ''">
                      {{ item.subject }}
                    </td>
                    <td class="border-0" :class="index === 0 ? 'font-bold' : ''">{{ item.q1 }}</td>
                    <td class="border-0" :class="index === 0 ? 'font-bold' : ''">{{ item.q2 }}</td>
                    <td class="border-0" :class="index === 0 ? 'font-bold' : ''">{{ item.q3 }}</td>
                    <td class="border-0" :class="index === 0 ? 'font-bold' : ''">{{ item.q4 }}</td>
                  </tr>
                </template>
              </v-data-table>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="bg-white shadow-neutral-300 shadow-md rounded-lg text-sm h-full px-4 py-2">
            <div class="font-semibold mb-2 text-base">23년 모의고사</div>
            <div class="w-[90%]">
              <v-data-table
                class="ssm-v-data-table"
                :headers="headers"
                :items="items"
                item-key="name"
                density="compact"
                hide-default-footer
              >
                <template #body="{ items }">
                  <tr
                    v-for="(item, index) in items"
                    :key="index"
                    class="text-xs"
                    :class="index % 2 === 0 ? 'bg-[#E9ECF0]' : ''"
                  >
                    <td class="border-0" :class="index === 0 ? 'font-bold' : ''">
                      {{ item.subject }}
                    </td>
                    <td class="border-0" :class="index === 0 ? 'font-bold' : ''">{{ item.q1 }}</td>
                    <td class="border-0" :class="index === 0 ? 'font-bold' : ''">{{ item.q2 }}</td>
                    <td class="border-0" :class="index === 0 ? 'font-bold' : ''">{{ item.q3 }}</td>
                    <td class="border-0" :class="index === 0 ? 'font-bold' : ''">{{ item.q4 }}</td>
                  </tr>
                </template>
              </v-data-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.student-layout-container {
  display: flex;
  gap: 0.5rem;
  height: calc(100vh - 110px);
  min-height: 500px;
  min-width: 900px;
  padding: 0 2rem;
}
.grid-container {
  display: grid;
  grid-template-rows: 52px 1fr 200px; /* 첫 번째 행 44px, 세 번째 행 200px, 가운데 행은 남은 공간 채움 */
  height: calc(100vh - 110px); /* 전체 컨테이너의 높이 설정 */
  min-height: 400px;
  gap: 0.5rem;
}
</style>

<style>
.ssm-v-data-table.v-table--density-compact {
  --v-table-header-height: 32px;
  --v-table-row-height: 24px;
}
</style>
