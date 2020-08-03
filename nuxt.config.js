const pkg = require('./package')

module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: pkg.description }],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  loading: { color: '#409EFF' },

  css: ['element-ui/lib/theme-chalk/index.css', '@/theme/index.scss'],

  plugins: ['@/plugins/globals', '@/plugins/axios'],

  components: true,

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/device',
    [
      'nuxt-font-loader-strategy',
      {
        ignoreLighthouse: true,
        ignoredEffectiveTypes: ['2g', 'slow-2g'],
        fonts: [
          // Bebas
          {
            fileExtensions: ['woff'],
            fontFamily: 'Bebas',
            fontFaces: [
              {
                preload: true,
                localSrc: ['Bebas', 'Bebas-Bold'],
                src: '@/assets/fonts/BebasNeue-Bold',
                fontWeight: 600,
                fontStyle: 'normal',
              },
            ],
          },
        ],
      },
    ],
  ],

  axios: { baseURL: process.env.BASE_URL || 'http://localhost:3000' },

  env: {
    appName: 'Кубок мэра 2020',
  },

  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {},
  },
}
