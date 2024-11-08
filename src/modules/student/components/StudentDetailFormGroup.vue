<script setup>
const props = defineProps({
  title: String
})
</script>
<template>
  <v-card :title="props.title">
    <template v-slot:text>
      <slot></slot>
    </template>
  </v-card>
</template>
