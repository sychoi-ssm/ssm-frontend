<script setup>
import { RouterView } from 'vue-router'

function logout() {
  localStorage.removeItem('ssm_rt')
}
</script>

<template>
  <v-app id="inspire">
    <v-app-bar color="grey-lighten-4" height="72" flat>
      <v-avatar class="ms-2" color="surface-variant" size="32" variant="flat"></v-avatar>
      <v-avatar class="mx-2" color="surface-variant" size="32" variant="flat"></v-avatar>

      <RouterLink to="/login">Login</RouterLink>
      <RouterLink :to="{ name: 'StudentList' }">students</RouterLink>
      <v-spacer></v-spacer>
      <v-btn @click="logout">로그아웃</v-btn>
    </v-app-bar>

    <v-footer color="grey" height="44" app></v-footer>

    <RouterView />
  </v-app>
</template>
