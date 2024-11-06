<script setup>
import { ref } from 'vue'

const input = ref('')
</script>
<template>
  <v-text-field
    v-model="input"
    hide-details
    variant="solo"
    placeholder="이름 또는 학교"
    bg-color="#E9ECF0"
    rounded
    density="compact"
    flat
    single-line
    prepend-inner-icon="mdi-magnify"
  />
</template>
