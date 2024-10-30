<!-- src/pages/Settings.vue -->
<template>
  <div class="flex justify-center px-4">
    <div class="w-full max-w-screen-lg">
      <!-- Configurações de Notificação -->
      <h1 class="text-3xl font-bold text-primary mb-8">
        Configurações de Notificação
      </h1>
      <form class="space-y-6">
        <!-- Configurações fictícias para simulação -->
        <div>
          <label class="block text-textSecondary mb-2"
            >Canal de Notificação:</label
          >
          <select
            class="w-full p-4 border border-gray-300 rounded bg-surface text-textPrimary"
          >
            <option value="email">E-mail</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="both">Ambos</option>
          </select>
        </div>
        <button
          class="bg-primary hover:bg-accent text-white font-semibold py-2 px-6 rounded-lg shadow-lg"
        >
          Salvar Configurações
        </button>
      </form>

      <!-- Seção de Perfil do Usuário -->
      <div class="mt-10 p-6 bg-surface rounded-lg shadow-md">
        <h2 class="text-xl font-bold text-primary mb-4">Perfil do Usuário</h2>
        <p class="text-textSecondary mb-2">Email: user@bankup.com</p>
        <button
          @click="logout"
          class="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg"
        >
          Sair
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from "../store/auth.js";

const { logout } = useAuth();
</script>
