export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jdi',
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
    '@assets/sass/app.sass'
  ],

  // Sass global styles
  styleResources: {
    sass: [
      // Include app mixins and global vars
      '@assets/sass/mixins/_mixins.sass',
      '@assets/sass/animations/_animations.sass'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'nl',
        iso: 'nl-NL'
      }
    ],
    defaultLocale: 'en',
    strategy: 'prefix',
    seo: true,
    vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieKey: 'locale',
      cookieSecure: false,
      // Always redirect according to cookie
      alwaysRedirect: true,
      fallbackLocale: 'en',
      // Better for SEO
      onlyOnRoot: true
    },
    // To fix jumping pages on locale change
    skipSettingLocaleOnNavigate: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true // Can be also an object with default options
  },

  proxy: {
    '/api/': { target: 'https://46782a8d-5b4f-461f-a027-152e75f85d9b.mock.pstmn.io/', pathRewrite: { '^/api/': '' } }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
