export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'spomenik-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/general.css',
    '~/assets/css/transitions.css',
    '~/assets/css/fields.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/image-lightbox', ssr: false },
    { src: '~/plugins/simple-vue-validator', ssr: true },
    { src: '~/plugins/vuex-persistedstate', ssr: true },
    { src: '~/plugins/axios', ssr: true },
    // services
    { src: '~/services/gallery', ssr: true },
    { src: '~/services/letters', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components/shared',
      '~/components/auth',
      '~/components/letters',
      '~/components/gallery',
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://www.npmjs.com/package/@nuxtjs/moment
    '@nuxtjs/moment',
    // https://www.npmjs.com/package/@nuxtjs/fontawesome
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    "vue2-editor/nuxt",
    '@nuxtjs/cloudinary',
    '@nuxtjs/toast',
    'cookie-universal-nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    baseURL: process.env.NODE_ENV !== 'production' ?  'http://localhost:8000' : 'https://spomenik-api.milenapetkanova.com',
  },

  moment: {
    defaultLocale: 'bg',
    locales: ['bg']
  },
  
  fontawesome: {
    icons:{
      solid: true,
    }
  },

  cloudinary: {
    cloudName: process.env.CLOUDNAME,
    apiKey: process.env.CLOUD_API_KEY,
    apiSecret: process.env.CLOUD_API_SECRET,
    useComponent: true
  },

  toast: {
    position: 'top-right',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ] 
  },

  router: {
    middleware: ['auth']
  },

  target: 'static',

  generate: {
    fallback: true
  }
  
}
