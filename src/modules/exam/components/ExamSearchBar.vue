<script setup>
import { ref } from 'vue'

import { Colors } from '@/alias/utils'

const emits = defineEmits(['update'])

const props = defineProps({
  loading: Boolean,
  debounce: {
    type: Number,
    default: 500
  }
})

const searchText = ref('')

const onSearchTextUpdate = () => {
  emits('update', searchText.value)
}
</script>

<template>
  <!-- TODO: v-text-field input size 조절하기, loadingbar 색 바꾸기 -->
  <div class="flex h-[40px] gap-1">
    <v-text-field
      v-model="searchText"
      variant="solo"
      :bg-color="Colors.bg.light"
      hide-details
      flat
      density="compact"
      @update:model-value="onSearchTextUpdate"
      :loading="loading"
    />
    <!-- <v-btn
      @click="onClickAdd"
      variant="flat"
      :color="Colors.bg.primary"
      class="h-full"
      height="100%"
      :ripple="false"
    >
      <span>추가하기</span>
    </v-btn> -->
  </div>
</template>

<style scoped></style>
