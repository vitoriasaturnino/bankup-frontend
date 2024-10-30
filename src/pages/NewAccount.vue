<template>
  <div class="flex justify-center px-4">
    <div class="w-full max-w-screen-md">
      <h1 class="text-2xl font-bold text-primary mb-8">Cadastrar Nova Conta</h1>
      <form @submit.prevent="addAccount" class="space-y-6">
        <div>
          <label class="block text-textSecondary mb-2">Descrição:</label>
          <input
            type="text"
            v-model="description"
            class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label class="block text-textSecondary mb-2">Valor:</label>
          <input
            type="number"
            v-model="amount"
            class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label class="block text-textSecondary mb-2"
            >Data de Vencimento:</label
          >
          <input
            type="date"
            v-model="dueDate"
            class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label class="block text-textSecondary mb-2">Destinatário:</label>
          <input
            type="text"
            v-model="payee"
            class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label class="block text-textSecondary mb-2">Chave PIX:</label>
          <input
            type="text"
            v-model="pixKey"
            class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label class="block text-textSecondary mb-2">Status:</label>
          <select
            v-model="status"
            class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="ativa">Ativa</option>
            <option value="inativa">Inativa</option>
          </select>
        </div>

        <!-- Dropdown de Seleção de Cliente -->
        <div>
          <label class="block text-textSecondary mb-2">Cliente:</label>
          <select
            v-model="clientId"
            class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option
              v-for="client in clients"
              :key="client.id"
              :value="client.id"
            >
              {{ client.full_name }}
            </option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full bg-primary hover:bg-accent text-white font-semibold py-3 rounded-lg shadow-md"
        >
          Cadastrar
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import recurringAccountService from "../services/recurringAccountService";
import clientService from "../services/clientService";

const description = ref("");
const amount = ref("");
const dueDate = ref("");
const payee = ref("");
const pixKey = ref("");
const status = ref("ativa");
const clientId = ref(null);
const clients = ref([]);

// Função para buscar clientes ao carregar a página
onMounted(async () => {
  try {
    clients.value = await clientService.listClients();
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
  }
});

const addAccount = async () => {
  try {
    await recurringAccountService.createRecurringAccount({
      description: description.value,
      amount: amount.value,
      due_date: dueDate.value,
      payee: payee.value,
      pix_key: pixKey.value,
      status: status.value,
      client_id: clientId.value,
    });
    alert("Nova conta cadastrada com sucesso!");
  } catch (error) {
    console.error("Erro ao cadastrar nova conta:", error);
  }
};
</script>
