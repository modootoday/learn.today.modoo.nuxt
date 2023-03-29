// https://nuxt.com/docs/api/configuration/nuxt-config
import i18n from "./configs/i18n"
import devtools from "./configs/devtools"
import tailwindcss from "./configs/tailwindcss"
import googleFonts from "./configs/google-fonts"
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  app: { baseURL: '/learn.today.modoo.nuxt/' },
  experimental: { payloadExtraction: false },
  modules: [
    '@nuxt/image-edge',
    '@nuxt/content',
    ['@nuxtjs/i18n',i18n],
    ['@nuxt/devtools', devtools],
    ['@nuxtjs/tailwindcss', tailwindcss],
    ['@nuxtjs/google-fonts', googleFonts],
  ],
  plugins: [],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
