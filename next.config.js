const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withSass({
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'))

    return config
  },
})
