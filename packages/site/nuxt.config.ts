// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    // extends: ["@local-monorepo/content","@local-monorepo/auth","@local-monorepo/mailing",'@unlighthouse/nuxt',],

  site: {
    url: 'https://rosamexicanrestauranthuntsville.com',
    name: 'Rosa Mexican Cocina',
    description: 'The best mexican around the Huntsville Area!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  }
})
