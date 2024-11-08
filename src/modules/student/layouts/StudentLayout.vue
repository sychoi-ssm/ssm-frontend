<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const rail = ref()
</script>

<template>
  <v-main>
    <v-text-field
      class="mb-4"
      density="compact"
      prepend-inner-icon="mdi-magnify"
      variant="solo-filled"
      flat
      hide-details
    />
    <RouterView />
  </v-main>
</template>
