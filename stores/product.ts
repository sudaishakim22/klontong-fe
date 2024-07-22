import { defineStore } from "pinia";

export const useMyProductStore = defineStore("product", {
  state: () => ({
    products: [],
    isLoading: false,
  }),
  actions: {
    async getProduct() {
      const { $axios } = useNuxtApp();
      this.$state.isLoading = true;
      let res = await $axios.get("/product");
      this.$state.isLoading = false;
      this.$state.products = res.data.data;
    },
  },
});
