<!-- src/components/Header.vue -->
<template>
  <header class="bg-surface p-4 border-b border-gray-300 shadow-sm mb-6">
    <nav class="flex justify-between items-center">
      <router-link to="/" class="text-primary text-2xl font-bold"
        >Bankup</router-link
      >
      <ul class="flex space-x-6">
        <li>
          <router-link to="/" class="text-primary hover:text-accent"
            >Dashboard</router-link
          >
        </li>
        <li>
          <router-link to="/payments" class="text-primary hover:text-accent"
            >Pagamentos</router-link
          >
        </li>
        <li>
          <router-link to="/settings" class="text-primary hover:text-accent"
            >Configurações</router-link
          >
        </li>
        <li>
          <router-link to="/new-account" class="text-primary hover:text-accent"
            >Nova Conta</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>
