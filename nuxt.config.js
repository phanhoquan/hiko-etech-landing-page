/** @format */

import messages from "./i18n";

export default {
  // configuration
  server: {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 3000,
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Etech landing page",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700;1,900&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: "./assets/scss/index.scss",
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "./plugins/VueFlickity.js",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "nuxt-i18n",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
  },

  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "en",
    strategy: "prefix",
    seo: true,
    vueI18n: {
      fallbackLocale: "en",
      messages,
    },
  },
};
