import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["@nuxt/eslint"],
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  compatibilityDate: "2025-07-15",
  vite: {
    plugins: [tailwindcss() as any],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
});
