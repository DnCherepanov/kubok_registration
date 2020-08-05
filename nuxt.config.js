const pkg = require('./package')

module.exports = {
  mode: 'universal',

  head: {
    title: 'Кубок мэра 2020',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: pkg.description }],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  loading: { color: '#409EFF' },

  css: [
    './node_modules/element-ui/packages/theme-chalk/src/base.scss',
    './node_modules/element-ui/packages/theme-chalk/src/button.scss',
    './node_modules/element-ui/packages/theme-chalk/src/checkbox.scss',
    './node_modules/element-ui/packages/theme-chalk/src/checkbox-group.scss',
    './node_modules/element-ui/packages/theme-chalk/src/dialog.scss',
    './node_modules/element-ui/packages/theme-chalk/src/drawer.scss',
    './node_modules/element-ui/packages/theme-chalk/src/form-item.scss',
    './node_modules/element-ui/packages/theme-chalk/src/date-picker.scss',
    './node_modules/element-ui/packages/theme-chalk/src/form.scss',
    './node_modules/element-ui/packages/theme-chalk/src/input.scss',
    './node_modules/element-ui/packages/theme-chalk/src/icon.scss',
    './node_modules/element-ui/packages/theme-chalk/src/card.scss',
    './node_modules/element-ui/packages/theme-chalk/src/table.scss',
    './node_modules/element-ui/packages/theme-chalk/src/table-column.scss',
    './node_modules/element-ui/packages/theme-chalk/src/row.scss',
    './node_modules/element-ui/packages/theme-chalk/src/col.scss',
    './node_modules/element-ui/packages/theme-chalk/src/container.scss',
    './node_modules/element-ui/packages/theme-chalk/src/header.scss',
    './node_modules/element-ui/packages/theme-chalk/src/link.scss',
    './node_modules/element-ui/packages/theme-chalk/src/main.scss',
    './node_modules/element-ui/packages/theme-chalk/src/message.scss',
    '@/theme/index.scss',
  ],

  plugins: ['@/plugins/globals', '@/plugins/axios'],

  components: true,

  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/device',
    [
      'nuxt-font-loader-strategy',
      {
        ignoreLighthouse: true,
        ignoredEffectiveTypes: ['2g', 'slow-2g'],
        fonts: [
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

  axios: {
    proxy: true,
    https: true,
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },

  env: {
    appName: 'Кубок мэра 2020',
  },

  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {},
  },
}
