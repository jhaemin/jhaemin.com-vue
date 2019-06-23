export default {
  globalName: 'jhaemin',
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'ko',
      class: 'light-mode'
    },
    title: 'J.Haemin | 장해민',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v2' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#333333' }
    ]
  },
  srcDir: 'src',
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
  },
  loading: false,
  css: [
    '~/assets/css/fonts.css',
    { src: '~/assets/scss/globalstyle.scss', lang: 'scss' }
  ],
  build: {
    publicPath: '/dist/'
  }
}
