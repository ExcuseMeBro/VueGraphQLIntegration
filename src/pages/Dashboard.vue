<script setup lang="ts">
import { useProductStore } from "../stores/product.store"
const { products } = useProductStore()
</script>

<template>
  <div class="flex flex-col">
    <h1>Dashboard</h1>
    <pre>{{ products }}</pre>
  </div>
</template>
