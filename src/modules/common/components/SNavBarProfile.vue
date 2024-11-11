<script setup>
import { ref } from 'vue'

import AuthManager from '@/services/auth.js'

const menu = ref(false)
</script>

<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      close-on-click
      location="bottom"
      transition="none"
    >
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar color="brown" />
        </v-btn>
      </template>

      <v-card min-width="300">
        <template v-slot:text>
          <div class="flex flex-col items-center justify-center">
            <v-avatar color="brown" size="large" class="my-4" />
            <span class="font-[800] spacing text-lg my-2">OOO님 안녕하세요</span>
            <v-btn density="compact" class="my-1" variant="tonal">
              <span class="text-xs tracking-normal">내 정보 수정</span></v-btn
            >
          </div>
        </template>

        <v-divider opacity="80" class="mx-6 my-2"></v-divider>

        <v-list nav class="mx-6 mb-2">
          <v-list-item value="settings" density="compact">
            <span class="ml-2">설정</span>
          </v-list-item>
          <v-list-item value="logout" density="compact" @click="AuthManager.logout()">
            <span class="ml-2">로그아웃</span>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<style scoped></style>
