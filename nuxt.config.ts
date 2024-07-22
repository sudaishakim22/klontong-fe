// https://nuxt.com/docs/api/configuration/nuxt-config
import { createPinia } from "pinia";

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@morev/vue-transitions/nuxt",
    "shadcn-nuxt",
    // "@pinia-plugin-persistedstate/nuxt",
    "@pinia/nuxt",
  ],

  tailwindcss: { exposeConfig: true },
  headlessui: { prefix: "H" },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || "http://localhost:4000",
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  app: {
    head: {
      title: "Test BRIK - Fullstack",
      link: [
        // Favicon
        { rel: "icon", type: "image/x-icon", href: "/icon.svg" },
        //Inter font
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
      ],
    },
  },

  compatibilityDate: "2024-07-09",

  plugins: [{ src: "~/plugins/axios", mode: "client" }],
  buildModules: [createPinia],
});
