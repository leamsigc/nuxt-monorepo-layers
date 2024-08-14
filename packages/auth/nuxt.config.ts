// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'url';
import { resolve } from "path"
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@AUTH": fileURLToPath(new URL("./", import.meta.url)),
  },
  extends: ["@local-monorepo/ui"],
})
