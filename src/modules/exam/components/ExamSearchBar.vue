<script setup>
import { ref } from 'vue'

import { Colors } from '@/alias/utils'

const emits = defineEmits(['update'])

const props = defineProps({
  modelValue: String,
  loading: Boolean,
  debounce: {
    type: Number,
    default: 500
  }
})

const searchText = ref('')

const onSearchTextUpdate = (event) => {
  emits('update', event.target.value)
}
</script>

<template>
  <div
    class="h-8 rounded py-1 px-2 w-full relative overflow-hidden"
    :style="{ backgroundColor: Colors.bg.light }"
  >
    <input
      :value="modelValue"
      type="text"
      class="outline-none h-full w-full"
      @input="onSearchTextUpdate"
    />

    <v-progress-linear
      v-if="props.loading"
      location="bottom"
      absolute
      indeterminate
      rounded
      rounded-bar=""
      height="2"
      opacity="0.5"
    />
  </div>
</template>

<style>
.v-text-field {
  height: 33px;

  .v-input__control {
    height: inherit;

    .v-input__slot {
      height: inherit;
      min-height: initial;
    }
  }
}
</style>
