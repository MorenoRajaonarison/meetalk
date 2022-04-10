import axios from 'axios'

const apiClient = axios.create({
  baseUrl: 'http://localhost:5000/api',
  timeout: 1000,
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