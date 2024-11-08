<script setup>
import { ref } from 'vue'

import StudentSearchInput from './StudentSearchInput.vue'
import StudentSearchListItem from './StudentSearchListItem.vue'

const emits = defineEmits(['click'])

const handleItemClick = (id) => {
  activeIndex.value = id
  emits('click', id)
}
const activeIndex = ref()
const data = [
  {
    name: '김승열',
    class: '가평고1',
    profileImageUrl: 'http://image.zerobase-ite.site/api/ssm/file/manggom_crying.png'
  },
  {
    name: '김승열',
    class: '가평고1',
    profileImageUrl: 'http://image.zerobase-ite.site/api/ssm/file/manggom_crying.png'
  },
  {
    name: '김승열',
    class: '가평고1',
    profileImageUrl: 'http://image.zerobase-ite.site/api/ssm/file/manggom_crying.png'
  }
]
</script>
<template>
  <div class="p-2">
    <div class="mb-3">
      <StudentSearchInput />
    </div>
    <StudentSearchListItem
      v-for="(d, index) in data"
      :key="index"
      :active="activeIndex === index"
      :student="d"
      @click="() => handleItemClick(index)"
    />
  </div>
</template>
