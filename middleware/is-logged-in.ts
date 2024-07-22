import { useMyUserStore } from "../stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useMyUserStore();

  if (to.fullPath === "/login" && userStore.user) {
    return navigateTo("/");
  }

  if (to.fullPath === "/register" && userStore.user) {
    return navigateTo("/");
  }
});
