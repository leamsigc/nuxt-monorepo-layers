// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // extends: ["@local-monorepo/content","@local-monorepo/auth","@local-monorepo/mailing",'@unlighthouse/nuxt',],

  extends: ["@local-monorepo/content"],

  site: {
    url: 'https://rosamexicanrestauranthuntsville.com',
    name: 'Rosa Mexican Cocina',
    description: 'The best mexican around the Huntsville Area!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },

  compatibilityDate: '2025-03-05',
})