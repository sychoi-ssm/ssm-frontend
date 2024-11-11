<script setup>
import { Colors } from '@/modules/common/utils'
import { useDebounceFn } from '@vueuse/core'

import FilterChip from './FilterChip.vue'

const props = defineProps({
  selections: Object,
  filters: Object,
  clearable: Boolean
})
const onDeferredUpdateSelection = useDebounceFn(emitUpdateDeferred, 500, { maxWait: 3000 })
const emit = defineEmits(['update:deferred'])

function emitUpdateDeferred() {
  emit('update:deferred', props.selections)
}

function handleFilterChipUpdate(filterName, data) {
  props.selections[filterName] = data
  onDeferredUpdateSelection()
}
function onClearSelections() {
  Object.keys(props.selections).forEach((k) => {
    props.selections[k] = []
  })
  emitUpdateDeferred()
}
</script>

<template>
  <div class="flex items-center gap-2 flex-wrap">
    <FilterChip
      :model-value="selections[filter.name]"
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
</template>

<style scoped></style>
