import { defineStore } from "pinia";
import { getProducts } from "../services/product.service";
import { computed } from "vue";

export const useProductStore = defineStore("product", () => {
  const products = computed(() => getProducts().result ?? null);
  return { products };
});
