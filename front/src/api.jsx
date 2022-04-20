import axios from 'axios'
import {logout} from "./shared/Utils/auth"

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000
})

apiClient.interceptors.request.use(config => {
  const userDetails = localStorage.getItem('user')
  if(userDetails) {
    const token = JSON.parse(userDetails).token
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

export const login = async (data) => {
  try {
    return await apiClient.post('/auth/login', data)
  } catch (e) {
    return {
      error: true,
      e
    }
  }
}

export const register = async (data) => {
  try {
    return await apiClient.post('/auth/register', data)
  } catch (e) {
    return {
      error: true,
      e
    }
  }
}

const checkResponseCode = e => {
  const responseCode = e?.response?.status
  if(responseCode){
    (responseCode === 401 || responseCode === 403) && logout()
  }
}

export const sendFriendsInvitation = async data => {
  try {
    return await apiClient.post('/friend-invitation/invite', data)
  } catch(e){
    checkResponseCode(e)
    return {
      error: true,
      e
    }
  }
}