<script setup>
import { useDisplay } from 'vuetify'

const props = defineProps({
  menus: Array
})
const display = useDisplay()
const menus = [
  { icon: 'mdi-view-dashboard', title: '선생님 관리', path: 'teachers' },
  { icon: 'mdi-forum', title: '클래스 관리', path: 'classes' },
  { icon: 'mdi-forum', title: '학생 목록', path: 'students' },
  { icon: 'mdi-forum', title: '학생 일괄등록', path: 'mass-register' }
]
</script>

<template>
  <v-navigation-drawer floating elevation="3" :permanent="display.mdAndUp.value" width="200">
    <v-list density="compact" nav>
      <v-list-item
        v-for="menu in menus"
        :key="menu.title"
        :prepend-icon="menu.icon"
        :title="menu.title"
        :value="menu.path"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>
