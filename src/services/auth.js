import { useTokenStore } from '@/stores/token'

function getRefreshToken() {
  return localStorage.getItem('ssm_rt')
}
function setRefreshToken(token) {
  localStorage.setItem('ssm_rt', token)
}
function invalidateRefreshToken() {
  localStorage.removeItem('ssm_rt')
}
function removeTokenOnLocalStorage() {
  localStorage.removeItem('Authorization')
  localStorage.removeItem('userRoleName')
}

function refreshAccessToken() {
  const { setAccessToken } = useTokenStore()
  const newAccessToken = 'actoken' //api 사용해서 accessToken 가져오기
  setAccessToken(newAccessToken)
}
function rotateRefreshToken() {}
function isAccessTokenValid() {
  return true
}
function isRefreshTokenValid() {
  return true
}
function handleUnauthorized() {}
function getTokenFromStorage() {}
function storeTokenToStorage() {}

async function login(user) {
  //로그인 시도 후 결과
  const res = {}
  const header = {
    ssm_at: 'ABCA',
    ssm_rt: 'DCCD'
  }
  const { setAccessToken } = useTokenStore()
  console.log(setAccessToken)
  setAccessToken(header.ssm_at)
  setRefreshToken(header.ssm_rt)
  console.log('로그인 성공. 토큰 발급 완료')
  return { success: true }
}

function logout() {
  console.log('로그아웃 성공')
  localStorage.removeItem('ssm_rt')
}

async function authenticateToken() {
  const { accessToken } = useTokenStore()
  const refreshToken = getRefreshToken()
  if (!isRefreshTokenValid()) {
    // refresh token 만료
    return { result: 'invalid token' } // 인증 안됨. 로그인 화면으로 이동
  }
  if (!isAccessTokenValid()) {
    // refresh token 유효, access token 만료
    // access token 재발급 후 인증 성공처리
    refreshAccessToken()
  }

  return { result: 'authenticated' }
}

const AuthManager = {
  login: async (user) => await login(user),
  logout: () => logout(),
  authenticateToken: async () => await authenticateToken()
}

export default AuthManager
