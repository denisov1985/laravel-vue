module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'node 123',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/vendor_components/bootstrap/dist/css/bootstrap.css' },
      { rel: 'stylesheet', href: 'css/bootstrap-extend.css' },
      { rel: 'stylesheet', href: 'css/master_style.css' },
      { rel: 'stylesheet', href: 'css/horizontal_menu_style.css' },
      { rel: 'stylesheet', href: 'css/skins/_all-skins.css' },
    ],
    bodyAttrs: {
      class: 'skin-blue layout-top-nav',
    },
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
