// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './styles/tailwind.css' // Estilo global com Tailwind CSS
// import { setupMockAPI } from './mocks/apiMock.js' // Mock da API

// // Configura os mocks da API
// setupMockAPI()

// Criação da aplicação Vue com o router
const app = createApp(App)
app.use(router)
app.mount('#app')
