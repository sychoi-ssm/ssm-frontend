<script setup>
import { Colors } from '@utils'
</script>

<template>
  <div class="w-[600px] h-[400px]">
    <div class="mb-2">
      <span class="text-xl font-semibold" :style="{ color: Colors.text.strong }"> 성적표 </span>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex justify-between">
        <div class="flex items-center" :style="{ color: Colors.text.base }">
          <v-avatar class="mr-3" color="grey" size="56" />
          <div>
            <div>
              <span class="text-lg mr-1">김승열</span>
              <span :style="{ color: Colors.text.hint }">(가평고1)</span>
            </div>
            <div>
              <span class="text-base mr-1">평균</span>
              <span class="text-2xl font-semibold">87.2</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="text-lg">2024년 고등학교 1학년 내신</span>
          <span class="text-sm text-right">1학기 기말고사</span>
        </div>
      </div>
      <div>바 그래프</div>
      <div>요약박스</div>
      <div>과목별 성적</div>
    </div>
  </div>
</template>

<style scoped></style>
