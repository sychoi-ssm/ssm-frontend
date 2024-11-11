<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { Colors } from '@/modules/common/utils'

const props = defineProps({
  items: Array
})

const handleClick = (name) => {
  router.push({ name })
}
const route = useRoute()
const router = useRouter()

const bgColorBase = ref(Colors.bg.base)
</script>

<template>
  <div>
    <RouterLink
      v-for="item in props.items"
      :key="item.parentName"
      class="cursor-pointer rounded-lg h-[40px] w-[135px] flex items-center justify-start"
      :class="route.meta.parent === item.parentName ? 'exam-sidebar-active' : ''"
      :to="{ name: item.parentName }"
    >
      <span class="text-sm px-2 py-1">{{ item.title }}</span>
    </RouterLink>
  </div>
</template>

<style>
.exam-sidebar-active {
  background-color: v-bind('bgColorBase');
  font-weight: 600;
}
</style>
