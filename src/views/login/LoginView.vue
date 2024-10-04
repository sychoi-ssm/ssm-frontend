<script setup>
import { reactive } from 'vue'
import { ref } from 'vue'

import AuthManager from '@/services/auth'

const user = reactive({
  email: '',
  password: ''
})
const login = async () => {
  const res = await AuthManager.login(user)
  if (!res.success) {
    //로그인 실패
    alert('로그인 실패!')
    return
  }
  const tokens = await AuthManager.authenticateToken()
  console.log(tokens)
  //기존 페이지로 리다이렉트
}
</script>
<template>
  <v-container fluid fill-height>
    <v-flex xs12 sm8 md3>
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
          <v-alert type="error" v-if="errorLogin"> Usuário ou senha inválidos </v-alert>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="primary" @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>
