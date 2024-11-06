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

function refreshAccessToken(refreshToken) {
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
  if (!user.email) {
    return { success: false }
  }
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

async function authenticate() {
  const { accessToken } = useTokenStore()
  const refreshToken = getRefreshToken()
  // 1. access token 검증
  // 2. 만료되었다면 refresh_token 사용해서 재발급 후 저장 (refresh_token도 반환되었다면 refresh_token도 저장)
  // 3. refresh_token이 만료되었다면 인증 실패. 로그인페이지로 이동

  // grant_type=access_token
  // grant_type=refresh_token
  if (!isRefreshTokenValid()) {
    // refresh token 만료
    return { success: false, result: 'invalid token' } // 인증 안됨. 로그인 화면으로 이동
  }
  if (!isAccessTokenValid()) {
    // refresh token 유효, access token 만료
    // access token 재발급 후 인증 성공처리
    refreshAccessToken(refreshToken)
  }

  return { success: true, message: 'authenticated' }
}

const LoginManager = {
  login: async (user) => await login(user),
  authenticate: async () => await authenticate()
}

export default LoginManager
