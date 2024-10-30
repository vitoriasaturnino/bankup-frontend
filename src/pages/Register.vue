<!-- src/pages/Register.vue -->
<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-br from-gradientFrom to-gradientTo p-4"
  >
    <div class="bg-surface p-6 rounded-lg shadow-lg w-full max-w-2xl">
      <h1 class="text-3xl font-bold text-center text-primary mb-2">Bankup</h1>
      <h2 class="text-lg font-semibold text-center text-textSecondary mb-6">
        Crie sua conta
      </h2>

      <form
        @submit.prevent="handleRegister"
        class="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-0"
      >
        <div class="col-span-1 md:col-span-2">
          <label class="block text-textSecondary mb-1">Nome Completo:</label>
          <input
            type="text"
            v-model="fullName"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label class="block text-textSecondary mb-1">CPF/CNPJ:</label>
          <input
            type="text"
            v-model="cpfCnpj"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label class="block text-textSecondary mb-1">Email:</label>
          <input
            type="email"
            v-model="email"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label class="block text-textSecondary mb-1">Telefone:</label>
          <input
            type="tel"
            v-model="phone"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label class="block text-textSecondary mb-1">WhatsApp:</label>
          <input
            type="tel"
            v-model="whatsapp"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label class="block text-textSecondary mb-1">País:</label>
          <input
            type="text"
            v-model="country"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label class="block text-textSecondary mb-1">Estado:</label>
          <input
            type="text"
            v-model="state"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label class="block text-textSecondary mb-1">Cidade:</label>
          <input
            type="text"
            v-model="city"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label class="block text-textSecondary mb-1">CEP:</label>
          <input
            type="text"
            v-model="postalCode"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div class="col-span-1 md:col-span-2">
          <label class="block text-textSecondary mb-1">Endereço:</label>
          <input
            type="text"
            v-model="streetAddress"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div class="col-span-1 md:col-span-2">
          <label class="block text-textSecondary mb-1"
            >Data de Nascimento:</label
          >
          <input
            type="date"
            v-model="birthDate"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div class="col-span-1 md:col-span-2 mt-4 flex justify-center">
          <button
            type="submit"
            class="w-full md:w-auto bg-primary hover:bg-accent text-white font-semibold py-2 px-6 rounded-lg shadow-md"
          >
            Registrar
          </button>
        </div>
      </form>

      <!-- Link para a tela de login -->
      <p class="text-center text-textSecondary mt-6">
        Já tem uma conta?
        <router-link to="/login" class="text-primary hover:text-accent"
          >Entrar</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import authService from "../services/authService";
import { useRouter } from "vue-router";

const fullName = ref("teste");
const cpfCnpj = ref("00000000124");
const email = ref("teste@teste.com.br");
const phone = ref("00000000000");
const whatsapp = ref("00000000000");
const country = ref("brasil");
const state = ref("são paulo");
const city = ref("caçapava");
const postalCode = ref("12282230");
const streetAddress = ref("rua dos bobos");
const birthDate = ref("1997-12-30");
const router = useRouter();

const handleRegister = async () => {
  try {
    await authService.register({
      full_name: fullName.value,
      cpf_cnpj: cpfCnpj.value,
      email: email.value,
      phone: phone.value,
      whatsapp: whatsapp.value,
      country: country.value,
      state: state.value,
      city: city.value,
      postal_code: postalCode.value,
      street_address: streetAddress.value,
      birth_date: birthDate.value,
    });
    router.push("/"); // Redireciona para o dashboard
  } catch (error) {
    console.error("Erro ao registrar:", error);
    alert("Erro ao registrar conta.");
  }
};
</script>
