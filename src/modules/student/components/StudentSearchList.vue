<script setup>
import { ref } from 'vue'
import { watch } from 'vue'

import StudentSearchInput from './StudentSearchInput.vue'
import StudentSearchListItem from './StudentSearchListItem.vue'

const emits = defineEmits(['change'])

const activeStudentId = ref()
const searchInput = ref('')

watch(activeStudentId, () => {
  emits('change', activeStudentId.value)
})

function handleItemClick(id) {
  activeStudentId.value = id
}

const students = [
  {
    studentId: 1,
    name: '김승열',
    class: '가평고1',
    profileImageUrl: 'http://image.zerobase-ite.site/api/ssm/file/manggom_crying.png'
  },
  {
    studentId: 2,
    name: '김승열',
    class: '가평고1',
    profileImageUrl: 'http://image.zerobase-ite.site/api/ssm/file/manggom_crying.png'
  },
  {
    studentId: 3,
    name: '김승열',
    class: '가평고1',
    profileImageUrl: 'http://image.zerobase-ite.site/api/ssm/file/manggom_crying.png'
  }
]
</script>
<template>
  <div class="p-2">
    <div class="mb-3">
      <StudentSearchInput v-model="searchInput" />
    </div>
    <div>
      <StudentSearchListItem
        v-for="(student, index) in students"
        :key="index"
        :active="activeStudentId === student.studentId"
        :student="student"
        @click="() => handleItemClick(student.studentId)"
      />
    </div>
  </div>
</template>
