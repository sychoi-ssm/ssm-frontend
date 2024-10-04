import { SsmException } from '@/commons/exceptions'
import axios from 'axios'

const baseInstance = axios.create({
  baseURL: 'localhost',
  headers: {
    'Content-instanceType': 'application/json'
  }
  //withCredentials: true
})

function appendAuthorization(config) {
  let authorization = localStorage.getItem('Authorization')
  if (config.headers === undefined) {
    config['headers'] = {}
  }
  config.headers['Authorization'] = authorization
}

function printError(error) {
  if (error.response) {
    console.error('Axios 오류:', error.response.status)
    console.error('Axios 응답 데이터:', error.response.data)
  } else {
    console.error('Axios 서버 응답 없음:', error.message)
  }
  console.log('요청 URL: ', error.config.baseURL + error.config.url)
}

function instanceResolver(instanceType) {
  return baseInstance
}

async function get(url, config, instance) {
  return await instance
    .get(url, config)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      printError(error)
      throw error
    })
}

async function post(url, data, config, instance) {
  return await instance
    .post(url, data, config)
    .then((response) => response.data)
    .catch((error) => {
      printError(error)
      throw error
    })
}

async function put(url, data, config, instance) {
  return await instance
    .put(url, data, config)
    .then((response) => response.data)
    .catch((error) => {
      throw error
    })
}

async function _delete(url, config, instance) {
  return instance
    .delete(url, config)
    .then((response) => response.data)
    .catch((error) => {
      throw error
    })
}

function setTokenOnLocalStorage(token, userRole) {
  localStorage.setItem('Authorization', token)
  localStorage.setItem('userRoleName', userRole)
}

function removeTokenOnLocalStorage() {
  localStorage.removeItem('Authorization')
  localStorage.removeItem('userRoleName')
}

async function request(proc, url, data, config = {}, instanceType) {
  appendAuthorization(config)
  const instance = instanceResolver(instanceType)
  if (proc === 'GET') {
    return await get(url, config, instance)
  } else if (proc === 'POST') {
    return await post(url, data, config, instance)
  } else if (proc === 'PUT') {
    return await put(url, data, config, instance)
  } else if (proc === 'DELETE') {
    return await _delete(url, config, instance)
  }
  throw new SsmException(`Unknown request type: ${proc}`)
}

const ApiClient = {
  get: async (url, config, instanceType) => await request('GET', url, config, instanceType),
  post: async (url, data, config, instanceType) =>
    await request('POST', url, data, config, instanceType),
  put: async (url, data, config, instanceType) =>
    await request('PUT', url, data, config, instanceType),
  delete: async (url, config, instanceType) => await request('DELETE', url, config, instanceType),
  setTokenOnLocalStorage: (token, userRole) => setTokenOnLocalStorage(token, userRole),
  removeTokenOnLocalStorage: () => removeTokenOnLocalStorage()
}

export { ApiClient }
