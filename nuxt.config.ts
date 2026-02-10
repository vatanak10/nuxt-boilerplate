import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["@/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  vite: {
    plugins: [tailwindcss()],
  },
});
