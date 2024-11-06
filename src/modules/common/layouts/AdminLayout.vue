<script setup>
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const drawer = ref(true)

const router = useRouter()
function logout() {
  localStorage.removeItem('ssm_rt')
  router.go(0)
}
</script>

<template>
  <v-app id="inspire">
    <v-app-bar color="grey-lighten-4" height="72" flat>
      <v-avatar class="ms-2" color="surface-variant" size="32" variant="flat"></v-avatar>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="flex gap-2">
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink :to="{ name: 'StudentList' }">students</RouterLink>
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="logout">로그아웃</v-btn>
    </v-app-bar>

    <v-footer color="grey" height="44" app></v-footer>

    <v-navigation-drawer v-model="drawer" floating>
      <div class="d-flex px-2 my-2">
        <v-btn class="flex-grow-1" color="grey" height="40" variant="flat"></v-btn>
        <v-avatar class="ms-2" color="surface-variant" variant="flat" rounded></v-avatar>
      </div>
      <div class="d-flex px-2 my-2 align-center">
        <v-btn class="flex-grow-1 me-2" color="grey-lighten-4" height="40" variant="flat"></v-btn>
        <v-avatar color="surface-variant" size="18"></v-avatar>
        <v-avatar class="ms-1" color="surface-variant" size="18"></v-avatar>
      </div>
      <div class="px-2 my-2">
        <v-text-field
          class="mb-4"
          density="compact"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
        ></v-text-field>
        <v-sheet
          class="mb-2"
          color="surface-variant"
          height="24"
          rounded="pill"
          width="50%"
        ></v-sheet>
        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="40%"
        ></v-sheet>
        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="20%"
        ></v-sheet>
        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="90%"
        ></v-sheet>

        <v-sheet color="grey-lighten-1" height="12" rounded="pill" width="70%"></v-sheet>

        <v-divider class="my-6"></v-divider>

        <v-sheet
          class="mb-2"
          color="surface-variant"
          height="24"
          rounded="pill"
          width="30%"
        ></v-sheet>

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="65%"
        ></v-sheet>

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="70%"
        ></v-sheet>

        <v-sheet
          class="mb-1"
          color="grey-lighten-1"
          height="12"
          rounded="pill"
          width="40%"
        ></v-sheet>

        <v-sheet color="grey-lighten-1" height="12" rounded="pill" width="100%"></v-sheet>

        <v-divider class="my-6"></v-divider>
      </div>
    </v-navigation-drawer>
    <RouterView />
  </v-app>
</template>

<style scoped>
.container {
  width: 960px;
  margin: 0 auto; /* 위아래는 0, 좌우는 자동으로 여백을 맞춤 */
}
</style>
