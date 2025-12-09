// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'X10 – Landing',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'X10' }
      ]
    }
  },

  css: ['@/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *; @use "@/assets/scss/_mixins.scss" as *;'
        }
      }
    }
  },

  modules: [
    'nuxt-svgo',
  ],

  svgo: {
    svgoConfig: {
      plugins: [
        {
          name: 'convertColors',
          params: {
            currentColor: true,
          },
        },
        {
          name: 'removeAttrs',
          params: {
            attrs: '(fill)',
          },
        },
      ],
    },
  },

});
