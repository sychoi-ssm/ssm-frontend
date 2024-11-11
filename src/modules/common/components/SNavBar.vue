<script setup>
import SNavBarProfile from './SNavBarProfile.vue'
import SearchModal from './SearchDialog.vue'

// import AuthManager from '@/services/auth.js'

const menus = [
  { name: 'Students', title: '학생관리' },
  { name: 'ExamList', title: '시험관리' },
  { name: 'Settings', title: '기본설정' }
]

const props = defineProps({
  color: String
})
</script>

<template>
  <v-app-bar class="px-4" height="72" flat :color="props.color">
    <div class="flex items-center justify-between w-full">
      <div class="flex align-center">
        <v-avatar class="mr-2" color="surface-variant" size="32" variant="flat"></v-avatar>
        새로운스터디
      </div>
      <div>
        <RouterLink v-for="menu in menus" :key="menu.path" :to="menu">
          <v-btn variant="text" :ripple="false">{{ menu.title }}</v-btn>
        </RouterLink>
        <SearchModal />
      </div>
      <div>
        <SNavBarProfile />
      </div>
    </div>
  </v-app-bar>
</template>

<style scoped></style>
