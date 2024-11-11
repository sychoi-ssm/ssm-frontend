<script setup>
const props = defineProps({
  width: { type: String, default: '300px' },
  height: { type: String, default: '100%' }
})
</script>

<template>
  <div class="bg-grey rounded-lg" :style="{ height: props.height, width: props.width }">
    <slot name="default"></slot>
  </div>
</template>

<style scoped></style>
