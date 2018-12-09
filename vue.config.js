const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
