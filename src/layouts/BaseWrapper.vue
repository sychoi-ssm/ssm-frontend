<script setup>
import { RouterView } from 'vue-router'

import { NavBar, NavDrawer } from '@/components/index.js'
</script>

<template>
  <v-app class="overflow-x-auto">
    <NavBar color="#F6F7F9" />
    <!--    <NavDrawer />-->
    <!--    <v-footer color="grey" height="44" app></v-footer>-->
    <v-main class="m-4"><RouterView /></v-main>
  </v-app>
</template>
