// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  modules: ["@tdesign-vue-next/nuxt", "@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  pages: true,
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  routeRules: {
    "/": { prerender: true },
    "/blog/**": { isr: true },
    "/admin/**": { ssr: false },
    "/api/**": { cors: true },
  },
  runtimeConfig: {
    public: {
      // 前后端分离时打开
      // apiBase: "http://192.168.31.76:3000",
    },
  },
});
