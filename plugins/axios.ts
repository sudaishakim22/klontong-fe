import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  console.log(config?.public?.apiBaseUrl);

  //   axios.defaults.baseURL = config.public.apiBaseUrl as string;

  //   axios.defaults.withCredentials = false;
  if (process.client) {
    const token = window.localStorage.getItem("accessToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
  }

  nuxtApp.provide(
    "axios",
    axios.create({
      baseURL: config.public.apiBaseUrl,
      withCredentials: false,
    })
  );
  //   return {
  //     provide: {
  //       axios: axios,
  //     },
  //   };
});
