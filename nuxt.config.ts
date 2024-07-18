import { repositoryName, apiEndpoint } from "./slicemachine.config.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,

  app: {
    head: {
      title: "Prismic + Nuxt Minimal Starter",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/svg", href: "/logo.svg" }],
    },
  },

  modules: ["@nuxtjs/prismic", "@nuxtjs/tailwindcss", "@nuxtjs/i18n"],

  // Localization options
  i18n: {
    // Module Options
    locales: [
      {
        code: "en-us",
        name: "EN",
      },
      {
        code: "tr",
        name: "TR",
      },
    ],
    defaultLocale: "en-us",
    strategy: "prefix_except_default",
  },

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    preview: "/api/preview",
    clientConfig: {
      routes: [
        {
          type: "page",
          path: "/:uid",
        },
        {
          type: "page",
          uid: "contact-us",
          path: "/contact-us",
        },
        {
          type: "page",
          uid: "home",
          path: "/",
        },
      ],
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) =>
        ["swiper-container", "swiper-slide"].includes(tag),
    },
  },
});
