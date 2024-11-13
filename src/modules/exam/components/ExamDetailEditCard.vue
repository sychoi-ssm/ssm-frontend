<script setup>
import { Colors } from '@utils'

const emit = defineEmits(['click:close', 'click:confirm'])

const scores = { 국어: 88, 영어: 87, 수학: 87, 사회: 87, 과학: 87 }
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="text-lg font-bold" :style="{ color: Colors.text.strong }">
      김승열 <span class="text-base font-semibold">학생의 성적</span>
    </div>
    <div class="flex gap-1">
      <div v-for="subject in Object.keys(scores)" :key="subject">
        <div :style="{ color: Colors.text.hint }">{{ subject }}</div>
        <v-text-field
          :color="Colors.text.hint"
          variant="outlined"
          :value="scores[subject]"
          density="compact"
          hide-details
        />
      </div>
    </div>
    <div class="flex gap-2">
      <v-btn
        flat
        rounded="lg"
        :ripple="false"
        class="flex-1"
        :color="Colors.bg.light"
        @click="emit('click:close')"
      >
        닫기
      </v-btn>
      <v-btn
        flat
        rounded="lg"
        :ripple="false"
        class="flex-1"
        :color="Colors.bg.primary"
        @click="emit('click:confirm')"
      >
        저장
      </v-btn>
    </div>
  </div>
</template>

<style scoped></style>
