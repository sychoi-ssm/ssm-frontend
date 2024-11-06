<script setup>
import { useRoute } from 'vue-router'

import StudentDetailFormGroup from '../components/StudentDetailFormGroup.vue'
import StudentDetailTextField from '../components/StudentDetailTextField.vue'

const route = useRoute()
const userId = route.params.id

const parentsType = ['부', '모', '조부모', '친척', '형제자매', '기타']
const schoolType = ['미취학', '초등학교', '중학교', '고등학교', '대입', '예비', '기타']
const grade = ['1학년', '2학년', '3학년', '4학년', '5학년', '6학년']
</script>
<template>
  <v-container fluid fill-height class="bg-[#f8f8f8] md:w-[960px]">
    <div class="border w-48 h-48 mx-auto flex flex-col items-center p-2 justify-center">
      <v-avatar class="mb-3" color="blue-darken-2" size="120" rounded="">
        <v-icon size="90" icon="mdi-emoticon"></v-icon>
      </v-avatar>
    </div>
    <section class="max-w-[640px] flex flex-col mx-auto">
      <v-card>
        <template v-slot:text>
          <div class="text-sm mb-1">이름</div>
          <v-text-field placeholder="이름" />
          <div class="text-sm mb-1">영어이름</div>
          <v-text-field placeholder="영어이름" />
          <div class="text-sm mb-1">생년월일</div>
          <v-text-field placeholder="생년월일" />
          <div class="text-sm mb-1">학교</div>
          <v-text-field placeholder="학교" />
          <div class="text-sm mb-1">학년</div>

          <div class="flex gap-3">
            <v-select class="flex-grow" label="초/중/고" :items="schoolType" />
            <v-select class="flex-grow" label="학년" :items="grade" />
          </div>
        </template>
      </v-card>
      <v-divider :opacity="0" class="my-2" />
      <v-card title="부가 정보">
        <template v-slot:text>
          <div class="text-sm mb-1">수강상태</div>
          <v-text-field placeholder="수강상태" />
          <div class="text-sm mb-1">입원일자</div>
          <v-text-field placeholder="입원일자" />
        </template>
      </v-card>
      <v-divider :opacity="0" class="my-2" />
      <v-card title="학생 연락처">
        <template v-slot:text>
          <div class="text-sm mb-1">이메일</div>
          <v-text-field placeholder="이메일" />
          <div class="text-sm mb-1">전화번호</div>
          <v-text-field placeholder="전화번호" />
        </template>
      </v-card>
      <v-divider :opacity="0" class="my-2" />

      <v-card title="보호자 연락처">
        <template v-slot:text>
          <v-divider opacity="100">연락처 1</v-divider>
          <div class="text-sm mb-1">보호자 관계</div>
          <v-select label="보호자 관계" :items="parentsType" />
          <div class="text-sm mb-1">성함</div>
          <v-text-field placeholder="성함" />
          <div class="text-sm mb-1">전화번호</div>
          <v-text-field placeholder="전화번호" />
          <v-divider opacity="100">연락처 2</v-divider>
          <div class="text-sm mb-1">보호자 관계</div>
          <v-select label="보호자 관계" :items="parentsType" />
          <div class="text-sm mb-1">성함</div>
          <v-text-field placeholder="성함" />
          <div class="text-sm mb-1">전화번호</div>
          <v-text-field placeholder="전화번호" />
        </template>
      </v-card>
      <v-divider :opacity="0" class="my-2" />

      <v-card title="진학 목표">
        <template v-slot:text>
          <div class="text-sm mb-1">희망학교</div>
          <v-text-field placeholder="희망학교" />
          <div class="text-sm mb-1">상담내용</div>
          <v-textarea placeholder="상담내용"></v-textarea>
        </template>
      </v-card>
    </section>
  </v-container>
</template>
