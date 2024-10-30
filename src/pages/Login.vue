<!-- src/pages/Login.vue -->
<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-br from-gradientFrom to-gradientTo"
  >
    <div class="bg-surface p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h1 class="text-3xl font-bold text-center text-primary mb-2">Bankup</h1>
      <h2 class="text-lg font-semibold text-center text-textSecondary mb-6">
        Entrar na sua conta
      </h2>
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-textSecondary mb-2">Email:</label>
          <input
            type="email"
            v-model="email"
            class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label class="block text-textSecondary mb-2">Senha:</label>
          <input
            type="password"
            v-model="password"
            class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-primary hover:bg-accent text-white font-semibold py-2 rounded-lg shadow-md"
        >
          Entrar
        </button>
        <p class="text-center text-textSecondary mt-4">
          Não tem uma conta?
          <router-link to="/register" class="text-primary hover:text-accent"
            >Cadastrar-se</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import authService from "../services/authService"; // Corrigido
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
  try {
    await authService.login(email.value); // Atualização do serviço de autenticação
    router.push("/"); // Redireciona ao dashboard
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    alert("Erro ao fazer login.");
  }
};
</script>
