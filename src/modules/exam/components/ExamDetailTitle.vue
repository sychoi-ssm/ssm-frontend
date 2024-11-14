<script setup>
import { Colors } from '@/alias/utils'

const props = defineProps({
  title: String,
  subtitle: String
})
</script>

<template>
  <div>
    <div class="flex justify-between items-center">
      <span class="text-2xl font-semibold" :style="{ color: Colors.text.strong }">
        {{ props.title }}
      </span>
      <span>
        <v-btn
          density="compact"
          icon="mdi-arrow-left"
          variant="text"
          :ripple="false"
          :color="Colors.text.hint"
          @click="$router.go(-1)"
        />
      </span>
    </div>
    <div class="text-base" :style="{ color: Colors.text.base }">{{ props.subtitle }}</div>
  </div>
</template>

<style scoped></style>
