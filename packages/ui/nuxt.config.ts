// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@UI": fileURLToPath(new URL('./', import.meta.url))
  },
  modules: [
    'radix-vue',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    'nuxt-icon',
    "nuxt-swiper",
    'shadcn-nuxt'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: '../components/ui'
  }
})
