export default {
  globalName: 'jhaemin',
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'ko',
      class: 'light-mode'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  srcDir: 'src',
  loading: false,
  css: [
    '~/assets/css/fonts.css',
    {
      src: '~/assets/scss/globalstyle.scss',
      lang: 'scss'
    }
  ],
  build: {
    publicPath: '/dist/'
  },
  proxy: {
    '/': {
      target: 'https://github.com'
    }
  }
}
