<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { ApiClient } from '@/services/api.js'

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
</script>
<template>
  <div class="student-layout-container">
    <section class="bg-grey rounded-lg h-full w-[200px]">searchbar</section>
    <!--    <div class="grow">-->
    <div class="grid-container grow">
      <v-row no-gutters>
        <v-col>
          <section class="h-[44px]">
            <div class="flex gap-1 items-center">
              <VAvatar color="grey" size="40">N</VAvatar>
              <div class="flex flex-col items-between text-xs text-neutral-500">
                <div>
                  <span class="text-xl text-neutral-800 mr-1 font-semibold">김승열</span>
                  <span>(가평고1)</span>
                </div>
                <div>010-1234-5678</div>
              </div>
            </div>
          </section>
        </v-col>
      </v-row>

      <v-row class="gap-2" no-gutters>
        <v-col>
          <div class="bg-grey rounded-lg h-full">
            <!--            <v-img-->
            <!--              width="600"-->
            <!--              class="bg-grey-lighten-2 h-full"-->
            <!--              src="https://picsum.photos/350/165?random"-->
            <!--            ></v-img>-->
          </div>
        </v-col>
        <v-col cols="3">
          <div class="bg-grey rounded-lg grow h-full">요약</div>
        </v-col>
      </v-row>

      <v-row class="gap-2" no-gutters>
        <v-col>
          <div class="bg-grey rounded-lg grow h-full">23년 모의고사</div>
        </v-col>
        <v-col>
          <div class="bg-grey rounded-lg grow h-full">23년 모의고사</div>
        </v-col>
      </v-row>
    </div>
    <!--    </div>-->
    <!--    <section class="h-[44px]">-->
    <!--      <div class="flex gap-1 items-center">-->
    <!--        <VAvatar color="grey" size="40">N</VAvatar>-->
    <!--        <div class="flex flex-col items-between text-xs text-neutral-500">-->
    <!--          <div>-->
    <!--            <span class="text-xl text-neutral-800 mr-1 font-semibold">김승열</span>-->
    <!--            <span>(가평고1)</span>-->
    <!--          </div>-->
    <!--          <div>010-1234-5678</div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
    <!--    <section class="flex gap-2 flex-1-0">-->
    <!--      <div class="h-full w-[700px] bg-grey rounded-lg">-->
    <!--        <v-img class="bg-grey-lighten-2 h-full" src="https://picsum.photos/350/165?random"></v-img>-->
    <!--      </div>-->
    <!--      <div class="bg-grey rounded-lg grow">23년 내신</div>-->
    <!--    </section>-->
    <!--    <section class="flex gap-2 w-full min-h-[150px] h-[150px]">-->
    <!--      <div class="bg-grey rounded-lg grow">23년 내신</div>-->
    <!--      <div class="bg-grey rounded-lg grow">23년 모의고사</div>-->
    <!--    </section>-->
  </div>
</template>

<style scoped>
.student-layout-container {
  display: flex;
  gap: 0.5rem;
  height: calc(100vh - 110px);
  min-height: 400px;
  padding: 0 2rem;
}
.grid-container {
  display: grid;
  grid-template-rows: 44px 1fr 200px; /* 첫 번째 행 44px, 세 번째 행 200px, 가운데 행은 남은 공간 채움 */
  height: calc(100vh - 110px); /* 전체 컨테이너의 높이 설정 */
  gap: 0.5rem;
}
</style>
