<!-- src/pages/Dashboard.vue -->
<template>
  <div class="flex justify-center px-4">
    <div class="w-full max-w-screen-lg">
      <h1 class="text-3xl font-bold mb-8 text-primary">Dashboard</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Contas Cadastradas" :value="dashboardData.totalAccounts" />
        <Card
          title="Pagamentos Pendentes"
          :value="dashboardData.pendingPayments"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import clientService from "../services/clientService";
import paymentService from "../services/paymentService";
import Card from "../components/Card.vue";

const dashboardData = ref({
  totalAccounts: 0,
  pendingPayments: 0,
});

onMounted(async () => {
  try {
    const clientResponse = await clientService.listClients();
    dashboardData.value.totalAccounts = clientResponse.length;

    const paymentResponse = await paymentService.listPayments();
    dashboardData.value.pendingPayments = paymentResponse.data.data.length;
  } catch (error) {
    console.error("Erro ao carregar dados do dashboard:", error);
  }
});
</script>
