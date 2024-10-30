<!-- src/components/Table.vue -->
<template>
  <table
    class="w-full bg-surface text-textPrimary rounded-lg shadow-md border border-gray-300"
  >
    <thead>
      <tr class="bg-gray-100 text-textSecondary">
        <th class="p-4 text-left">Descrição</th>
        <th class="p-4 text-left">Valor</th>
        <th class="p-4 text-left">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in rows"
        :key="row.id"
        class="hover:bg-gray-50 transition duration-150"
      >
        <td class="p-4">{{ row.description }}</td>
        <td class="p-4">{{ row.amount_paid }}</td>
        <td class="p-4">{{ row.payment_status }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  rows: Array,
});
</script>
