<template>
  <div class="bg-gray-50 dark:bg-gray-900">
    <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
      <div
        class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
      >
        <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"
          >
            Login
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="login()">
            <div>
              <label
                for="email"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required=""
              />
            </div>
            <div class="border-1 flex w-full justify-center rounded-md bg-blue-400 p-2">
              <button type="submit" class="text-center text-white">Login</button>
            </div>
            <p class="text-center text-sm font-light text-gray-500 dark:text-gray-400">
              Dont have an account?
              <a
                href="/register"
                class="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                >Register here</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import axios from "axios";
  import { useMyUserStore } from "../stores/user";

  definePageMeta({
    layout: "login",
    middleware: "is-logged-in",
  });

  const userStore = useMyUserStore();

  let email = ref(null);
  let password = ref(null);
  let errors = ref(null);
  const router = useRouter();

  const login = async () => {
    try {
      await userStore.login(email.value, password.value);
      const token = window.localStorage.getItem("accessToken");

      if (token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + userStore.api_token;
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
</script>

<style></style>
