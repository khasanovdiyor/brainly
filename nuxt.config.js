export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "bilim",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      // {
      //   rel: "stylesheet",
      //   type: "text/css",
      //   href: "https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css"
      // }
    ],
    src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/locale/ru.js"
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/css/main.css", "~/assets/css/tailwind.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/vue_trix", mode: "client" },
    { src: "~/plugins/vuelidate" },
    { src: "~/plugins/vue-debounce" },
    { src: "~/plugins/viewer" },
    { src: "~/plugins/vuejs-paginate", mode: "client" },
    { src: "~/plugins/vue-toast", mode: "client" },
    { src: "~/plugins/vue-loader", mode: "client" }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false
    }
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/moment"
  ],
  moment: {
    defaultLocale: "ru",
    locales: ["ru"]
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          type: "Token",
          maxAge: 24 * 3600
        },
        refreshToken: {
          maxAge: 24 * 3600
        },
        user: {
          property: "data.user"
        },
        endpoints: {
          login: { url: "login/", method: "post" },
          logout: { url: "logout/", method: "delete" },
          user: { url: "me/", method: "get" }
        }
      }
    }
  },
  router: {
    middleware: ["auth"]
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  server: {
    host: "0.0.0.0",
    port: "3333"
  }
};
