const title = 'J.Haemin | 장해민'
const description = '안녕하세요. 개발자 장해민입니다.'

export default {
  globalName: 'jhaemin',
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'ko',
      class: 'light-mode'
    },
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:image',
        content: 'https://jhaemin.com/og/jhaemin_open_graph_logo.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v1' },
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
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  build: {
    publicPath: '/dist/'
  }
}
