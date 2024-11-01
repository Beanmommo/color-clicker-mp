// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/google-fonts"],
  css: ["@/assets/main.scss"],
  googleFonts: {
    families: {
      Coiny: true,
    },
    download: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/global.scss";',
        },
      },
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
