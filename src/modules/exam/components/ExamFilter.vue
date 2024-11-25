<script setup>
import { Colors } from '@/modules/common/utils'

import FilterChip from './FilterChip.vue'

const props = defineProps({
  searchConditions: Object,
  filters: Object,
  clearable: Boolean
})
const emit = defineEmits(['update'])

function emitUpdate() {
  emit('update', props.searchConditions)
}

function handleFilterChipUpdate(filterName, data) {
  props.searchConditions[filterName] = data
  emitUpdate()
}
function onClearSelections() {
  Object.keys(props.searchConditions).forEach((k) => {
    props.searchConditions[k] = []
  })
  emitUpdate()
}
</script>

<template>
  <div class="min-h-[72px] flex items-start">
    <div class="flex gap-2 flex-wrap items-center">
      <FilterChip
        :model-value="searchConditions[filter.name]"
        @update:model-value="(d) => handleFilterChipUpdate(filter.name, d)"
        v-for="filter in filters"
        :key="filter.title"
        :name="filter.title"
        :items="filter.data"
        multiple
      />
      <div v-if="clearable" @click="onClearSelections" class="cursor-pointer">
        <span
          class="text-sm hover:opacity-100 opacity-[0.7] flex items-center text-nowrap"
          :style="{ color: Colors.text.base }"
        >
          초기화
          <v-icon icon="mdi-refresh" size="16" />
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
