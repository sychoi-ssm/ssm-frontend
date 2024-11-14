<script setup>
import { Colors } from '@/alias/utils'

const props = defineProps({
  modelValue: String,
  items: Array
})

const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex gap-1">
    <v-chip
      v-for="subMenu in props.items"
      :key="subMenu"
      class="cursor-pointer"
      :color="subMenu === modelValue ? Colors.bg.base : 'transparent'"
      variant="flat"
      @click="emits('update:modelValue', subMenu)"
      :ripple="false"
    >
      <span
        class="flex items-center"
        :style="{
          color: subMenu === modelValue ? Colors.text.base : Colors.text.base
        }"
      >
        {{ subMenu }}
      </span>
    </v-chip>
  </div>
</template>

<style scoped></style>
