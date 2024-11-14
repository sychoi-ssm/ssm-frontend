<script setup>
import { computed, ref, watch } from 'vue'

import { Colors } from '@/modules/common/utils'

const props = defineProps({
  modelValue: Array,
  name: String,
  items: Array,
  multiple: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['click', 'update:modelValue'])

function onUpdateModelValue(value) {
  emit('update:modelValue', value)
}

const settingsSelection = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    settingsSelection.value = newValue
  }
)

const selectionText = computed(() => {
  if (!settingsSelection.value || settingsSelection.value?.length === 0) {
    return props.name
  }
  if (settingsSelection.value?.length === 1) {
    return settingsSelection?.value[0].title
  }
  return `${settingsSelection?.value[0].title} 외 ${settingsSelection.value?.length - 1}개`
})

const someSelected = computed(() => {
  return settingsSelection.value?.length > 0
})
</script>

<template>
  <v-menu :close-on-content-click="!multiple">
    <template v-slot:activator="{ props: settingsMenu }">
      <v-chip
        class="cursor-pointer"
        :color="someSelected ? Colors.bg.primaryLight : Colors.bg.base"
        variant="flat"
        @click="settingsMenu.onClick"
        :ripple="false"
      >
        <span
          class="flex items-center ml-1"
          :style="{ color: someSelected ? Colors.text.primary : Colors.text.base }"
        >
          {{ selectionText }}
          <v-icon size="14" class="opacity-80" icon="mdi-chevron-down" />
        </span>
      </v-chip>
    </template>
    <v-list
      v-model:selected="settingsSelection"
      @update:selected="(d) => onUpdateModelValue(d)"
      :select-strategy="multiple ? 'leaf' : 'single-leaf'"
      class="mt-1 v-list-custom-shadow rounded-lg"
    >
      <v-list-subheader> {{ props.name }}</v-list-subheader>
      <v-list-item density="compact" v-for="item in props.items" :key="item.value" :value="item">
        <template #default="{ isSelected }">
          <div class="flex items-center">
            <v-checkbox-btn v-if="props.multiple" :model-value="isSelected" density="compact" />
            <span class="ml-1 mr-2">{{ item.title }} </span>
          </div>
        </template>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped>
.v-list-custom-shadow {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.12) !important;
}
</style>
