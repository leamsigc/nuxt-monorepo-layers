// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    extends: ["@local-monorepo/ui","@local-monorepo/auth","@local-monorepo/content","@local-monorepo/mailing"],
})
