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

function handleClick() {
  emit('click', settingsSelection.value)
}

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
        :color="someSelected ? Colors.bg.primary : Colors.bg.base"
        variant="flat"
        @click="settingsMenu.onClick"
      >
        <span :style="{ color: someSelected ? Colors.text.primary : Colors.text.base }">{{
          selectionText
        }}</span>
      </v-chip>
    </template>
    <v-list
      v-model:selected="settingsSelection"
      @update:selected="(d) => onUpdateModelValue(d)"
      :select-strategy="multiple ? 'leaf' : 'single-leaf'"
      class="mt-1"
    >
      <v-list-subheader>{{ props.name }}</v-list-subheader>
      <v-list-item
        v-for="item in props.items"
        :key="item.value"
        :subtitle="item.subtitle"
        :title="item.title"
        :value="item"
      >
        <template v-if="props.multiple" v-slot:prepend="{ isSelected }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isSelected"></v-checkbox-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
