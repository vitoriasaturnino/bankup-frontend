<!-- src/components/Card.vue -->
<template>
  <div
    class="bg-surface p-6 rounded-lg shadow-card border border-gray-300 hover:bg-gray-50 transition duration-200"
  >
    <h2 class="text-lg font-medium text-textSecondary mb-2">{{ title }}</h2>
    <p class="text-4xl font-bold text-primary">{{ value }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: String,
  value: Number,
});
</script>
