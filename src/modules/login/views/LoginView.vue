<script setup>
import { reactive } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import LoginManager from '@/services/login'

const router = useRouter()
const user = reactive({
  email: '',
  password: ''
})
const errorLogin = ref()
const login = async () => {
  const res = await LoginManager.login(user)
  if (!res.success) {
    //로그인 실패
    errorLogin.value = true
    return
  }
  const tokens = await LoginManager.authenticate()
  console.log(tokens)
  //기존 페이지로 리다이렉트
  router.push('/')
}
</script>
<template>
  <v-container width="960" fluid fill-height>
    <v-card>
      <v-toolbar color="primary" :dark="true">
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="person"
            type="text"
            v-model="user.email"
            label="E-mail"
          ></v-text-field>
          <v-text-field
            prepend-icon="lock"
            type="password"
            v-model="user.password"
            label="Senha"
          ></v-text-field>
        </v-form>
        <v-alert type="error" v-if="errorLogin"> 로그인 실패 </v-alert>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="primary" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
