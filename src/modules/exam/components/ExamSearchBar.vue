<script setup>
import { ref } from 'vue'

import { Colors } from '@/alias/utils'
import { useDebounceFn } from '@vueuse/core'

const emits = defineEmits(['update', 'click:add', 'update:before'])

const props = defineProps({
  loading: Boolean,
  debounce: {
    type: Number,
    default: 500
  }
})

const searchText = ref('')

const emitUpdate = () => {
  emits('update', searchText.value)
}
const debouncedSearch = useDebounceFn(emitUpdate, props.debounce, { maxWait: 5000 })

const onClickAdd = () => {
  emits('click:add')
}

const onSearchTextUpdate = () => {
  emits('update:before')
  debouncedSearch()
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
    <v-btn
      @click="onClickAdd"
      variant="flat"
      :color="Colors.bg.primary"
      class="h-full"
      height="100%"
      :ripple="false"
    >
      <span>New</span>
    </v-btn>
  </div>
</template>

<style scoped></style>
