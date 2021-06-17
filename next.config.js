const nextTranslate = require('next-translate')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA(nextTranslate({
  i18n: {
    locales: ['en', 'ta'],
    defaultLocale: 'en',
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
}))

// module.exports = nextTranslate()