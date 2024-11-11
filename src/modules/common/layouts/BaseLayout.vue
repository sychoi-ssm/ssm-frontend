<script setup>
import { RouterView } from 'vue-router'

import { SNavBar } from '@components'
</script>

<template>
  <v-app class="overflow-x-auto">
    <SNavBar color="#F6F7F9" />
    <!--    <SNavDrawer />-->
    <!--    <v-footer color="grey" height="44" app></v-footer>-->
    <v-main class="m-4"><RouterView /></v-main>
  </v-app>
</template>
