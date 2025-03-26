import { fileURLToPath } from 'url';
// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"

export default defineNuxtConfig({
  alias: {
    "@CONTENT": fileURLToPath(new URL("./", import.meta.url)),
  },

  extends: ["@local-monorepo/ui"],

  modules: [
    '@nuxt/content',
    'nuxt-content-assets',
    '@nuxt/image',
    "@nuxtjs/seo",
    '@unlighthouse/nuxt',
  ],

  content: {
    // ... options
    documentDriven: true,
    sources:{
      blog: {
        driver: "fs",
        prefix: "/",
        base: resolve(__dirname, "articles")
      },
    }
  },

  typescript: {
    shim: true,
    includeWorkspace:true
  },

  site: {
    url: 'https://rosamexicanrestauranthuntsville.com',
    name: 'Rosa Mexican Cocina',
    description: 'The best mexican around the Huntsville Area!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },

  compatibilityDate: '2025-03-26'
})