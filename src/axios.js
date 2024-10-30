// src/axios.js
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:4000/api', // URL base da API
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
