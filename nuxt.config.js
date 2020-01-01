import config from './contentful.json'
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/moment',
    '~/plugins/vue-tilt.client',
    '~/plugins/vue-overdrive.client'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],

  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/css/variables.scss'],
    optionsPath: './vuetify.options.js',
    font: {
      family: 'Open Sans'
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID,
    baseUrl:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000/'
        : 'https://isaiahhunter.com/'
  },
  generate: {
    async routes() {
      // try {
      //   const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req })
      //   const response = await api.query(
      //     Prismic.Predicates.at('document.type', 'project')
      //   )
      //   // console.log(response)
      //   return response.results.map(project => `/blog/${project.id}`)
      // } catch (e) {
      //   error({ statusCode: 404, message: 'Page not found' })
      // }
    }
  }
}
