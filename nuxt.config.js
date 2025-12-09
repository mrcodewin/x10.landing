// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'X10',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'X10' },
        { name: "theme-color", content: "#061715" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/app/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/app/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/app/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/app/site.webmanifest" },
      ],
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
