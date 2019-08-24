const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script:[
      //{src:"https://use.fontawesome.com/releases/v5.3.1/js/all.js"}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#87cefa' },

  /*
  ** Global CSS
  */
  css: [
    {
      src: '~/node_modules/bulma/bulma.sass',
      lang: 'scss'
    },
    '~/assets/styles/global.css',
    {
      src: '~/assets/styles/sass/variable.scss',
      lang: 'scss'
    }
  ],
  router: {
    middleware: 'error'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src:"~/plugins/editor.js",
      ssr:false
    },
    {
      src: "~/plugins/layer.js",
      ssr: false
    },
    {
      src: "~/plugins/axios.js",
    }
  ],
  vendor: ['axios'],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
