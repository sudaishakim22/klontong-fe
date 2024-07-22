import { defineStore } from "pinia";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  access_token: string | null;
  isLoggedIn: boolean;
}

export const useMyUserStore = defineStore("user", {
  state: (): AuthState => ({
    user: null,
    access_token: null,
    isLoggedIn: false,
  }),
  actions: {
    async login(email: string, password: string) {
      const { $axios } = useNuxtApp();

      try {
        const response = await $axios.post("/auth/login", { email, password });
        localStorage.setItem("accessToken", response.data.access_token);
        this.$state.access_token = response?.data?.access_token;
        this.$state.user = response?.data?.user;
        this.$state.isLoggedIn = true;
        console.log(response);
      } catch (error) {
        console.error("An error occurred:", error);
        throw error;
      }
    },
  },
});
