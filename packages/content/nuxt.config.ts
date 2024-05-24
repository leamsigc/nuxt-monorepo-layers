// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"

export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@local-monorepo/ui"],
  modules: [
    '@nuxt/content',
    'nuxt-content-assets',
    '@nuxt/image'

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
  }
})
