<script setup>
import { Colors } from '@utils'

const emit = defineEmits(['click:close', 'click:confirm'])
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="text-lg font-bold" :style="{ color: Colors.text.strong }">정말 삭제하시겠어요?</div>
    <div :style="{ color: Colors.text.hint }">
      삭제하면 저장된 시험이 사라지고 다시 불러올 수 없어요.
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
        <span :style="{ color: Colors.text.base }">닫기</span>
      </v-btn>
      <v-btn
        flat
        rounded="lg"
        :ripple="false"
        class="flex-1"
        :color="Colors.bg.warning"
        @click="emit('click:confirm')"
      >
        삭제
      </v-btn>
    </div>
  </div>
</template>

<style scoped></style>
