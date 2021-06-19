const withPlugins = require('next-compose-plugins')
const nextTranslate = require('next-translate')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  i18n: {
    locales: ['en', 'ta'],
    defaultLocale: 'en',
  }
}

module.exports = withPlugins([
  [withPWA, { dest: 'public', runtimeCaching }],
  [nextTranslate]
], nextConfig)