import { ref } from 'vue'

import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', () => {
  const accessToken = ref(null)
  const invalidateAccessToken = () => {
    setAccessToken(null)
  }
  const setAccessToken = (_accessToken) => {
    accessToken.value = _accessToken
  }

  return { accessToken, setAccessToken, invalidateAccessToken }
})
