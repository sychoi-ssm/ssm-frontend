<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { ApiClient } from '@/services/api'

const url = 'https://reqres.in/api/users?page=1'
const users = ref()
const router = useRouter()

async function load() {
  let res = await ApiClient.get(url)
  console.log(res)
  users.value = res.data
}
function toStudent(id) {
  console.log({ name: 'StudentDetail', params: { id: id } })
  router.push({ name: 'StudentDetail', params: { id: id } })
}
</script>
<template>
  <h3>학생리스트</h3>
  <v-btn @click="load">버튼</v-btn>
  <div @click="() => toStudent(user.id)" v-for="user in users" :key="user.id">
    {{ user.first_name }} {{ user.last_name }}
  </div>
</template>
