<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
const counterStore = useCounterStore();
</script>

<template>
  <div>
    <h1>Welcome to VBuilder!</h1>
    {{ counterStore.counter}}
    <p>This is the main application of the VBuilder monorepo.</p>
  </div>
</template>