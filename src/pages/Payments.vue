<!-- src/pages/Payments.vue -->
<template>
  <div class="flex justify-center px-4">
    <div class="w-full max-w-screen-lg">
      <h1 class="text-3xl font-bold mb-8 text-primary">
        Histórico de Pagamentos
      </h1>
      <Table :rows="payments" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import paymentService from "../services/paymentService";
import Table from "../components/Table.vue";

const payments = ref([]);

onMounted(async () => {
  try {
    const response = await paymentService.listPayments();
    console.log("Pagamentos:", response);
    payments.value = response;
  } catch (error) {
    console.error("Erro ao carregar dados de pagamentos:", error);
  }
});
</script>
