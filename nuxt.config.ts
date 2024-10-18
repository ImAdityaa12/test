export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/content"],

  content: {
    // Content module configuration
    markdown:{
      anchorLinks:false,
    }
  },

  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // nitro: {
  //   // prerender: {
  //   //   routes: ["/", "/home", "/about"],
  //   // },
  // },

  router: {
    options: {
      strict: false,
    },
  },



  compatibilityDate: "2024-10-03",
});
