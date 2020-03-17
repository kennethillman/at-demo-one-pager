const pkg = require('./package')
const PrismicConfig = require('./prismic.config')
require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      class: 'no-touch'
    },
    title: 'AT | Demo |  One pager',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'apple-touch-icon', size: '180x180', type: 'image/png', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700&display=swap' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/global/global-imports.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  { src: "~/plugins/vue-waypoint.client.js", mode: 'client'},
    '~/plugins/svg4everybody'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@/modules/static',
    '@/modules/crawler',
    '@nuxtjs/prismic',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    'nuxt-purgecss',
    'modules/twitter-feed',
    // 'modules/linkedin-feed',
    // 'modules/tweets-prismic',
    ['@nuxtjs/dotenv', { systemvars: true }],
    ['vue-scrollto/nuxt', { duration: 675 }],
    ['nuxt-gmaps', { key: process.env.GMAPS_KEY }]
  ],

  prismic: {
    endpoint: process.env.PRISMIC_API,
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
    preview: '/preview/'
  },


  styleResources: {
    scss: [
      '~/assets/scss/component-imports/*.scss'
    ]
  },

  svgSprite: {
    input: '~/assets/icons/'
  },

  // router: {
  //   base: '/wip/'
  // },

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
  }
}
