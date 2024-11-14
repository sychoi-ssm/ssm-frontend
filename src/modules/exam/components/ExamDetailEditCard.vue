<script setup>
import { reactive } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'

import { Colors } from '@/alias/utils'

const props = defineProps({
  scores: {
    type: Array,
    default: []
  },
  loading: Boolean
})
const emit = defineEmits(['click:close', 'click:confirm'])

const innerScores = computed(() =>
  props.scores.map((s) => {
    return {
      subjectCd: s.subjectCd,
      subjectName: s.subjectName,
      value: s.value
    }
  })
)
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="text-lg font-bold" :style="{ color: Colors.text.strong }">
      김승열 <span class="text-base font-semibold">학생의 성적</span>
    </div>
    <div class="flex gap-1">
      <div v-for="score in innerScores" :key="score.subjectCd">
        <div :style="{ color: Colors.text.hint }">{{ score.subjectName }}</div>
        <v-text-field
          v-model.number="score.value"
          :color="Colors.text.hint"
          variant="outlined"
          density="compact"
          hide-details
          :disabled="props.loading"
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
        :class="{ 'disable-events': props.loading }"
        @click="emit('click:close')"
        :disabled="props.loading"
      >
        <span :style="{ color: Colors.text.base }">닫기</span>
      </v-btn>
      <v-btn
        flat
        rounded="lg"
        :ripple="false"
        class="flex-1"
        :color="Colors.bg.primary"
        @click="emit('click:confirm', innerScores)"
        :loading="props.loading"
      >
        저장
      </v-btn>
    </div>
  </div>
</template>

<style>
.disable-events.v-btn--disabled.v-btn--variant-elevated {
  background-color: #e5e8eb !important;
  color: #e5e8eb !important;
}
</style>
