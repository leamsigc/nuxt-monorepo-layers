// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    extends: ["@local-monorepo/ui","@local-monorepo/content","@local-monorepo/auth","@local-monorepo/mailing"],
})
