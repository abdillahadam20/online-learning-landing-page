// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        display: 'swap',
        preconnect: true,
        preload: true,
        families: {
          Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
        }
      }
    ]
  ]
})
