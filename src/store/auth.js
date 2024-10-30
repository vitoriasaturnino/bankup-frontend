// src/store/auth.js
import { ref, computed } from 'vue'
import router from '../router'

const token = ref(localStorage.getItem('token') || '')
const isAuthenticated = computed(() => !!token.value)

export const useAuth = () => {
  const login = async (email, password) => {
    try {
      // Mock de login: Simula uma resposta bem-sucedida com um token fictício
      const fakeToken = 'mocked-jwt-token'
      token.value = fakeToken
      localStorage.setItem('token', fakeToken)
      isAuthenticated.value = true
      router.push('/') // Redireciona para o dashboard
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }

  const logout = () => {
    token.value = ''
    localStorage.removeItem('token')
    isAuthenticated.value = false
    router.push('/login') // Redireciona para a tela de login
  }

  return { token, isAuthenticated, login, logout }
}
