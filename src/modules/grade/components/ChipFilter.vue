<script setup>
import { computed } from 'vue'
import { ref } from 'vue'

const props = defineProps({
  name: String,
  items: Array,
  multiple: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['click'])

function handleEmit() {
  emit('click', settingsSelection.value)
}

const settingsSelection = ref([])

const selectionText = computed(() => {
  if (settingsSelection.value.length === 0) {
    return props.name
  }
  if (settingsSelection.value.length === 1) {
    return settingsSelection.value[0].title
  }
  return `${settingsSelection.value[0].title} 외 ${settingsSelection.value.length - 1}개`
})

function someSelected() {
  return settingsSelection.value.length > 0
}
</script>

<template>
  <v-menu :close-on-content-click="!multiple">
    <template v-slot:activator="{ props: settingsMenu }">
      <v-chip
        class="cursor-pointer"
        :color="someSelected() ? '#E8F3FF' : '#F2F4F6'"
        variant="flat"
        @click="settingsMenu.onClick"
      >
        <span :style="{ color: someSelected() ? '#2272EB' : '#4E5968' }">{{ selectionText }}</span>
      </v-chip>
    </template>
    <v-list
      v-model:selected="settingsSelection"
      :select-strategy="multiple ? 'leaf' : 'single-leaf'"
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
