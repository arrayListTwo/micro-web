const { name } = require('./package')

module.exports = {
  webpack: config => {
    config.output.library = 'react15'
    config.output.libraryTarget = 'umd'
    config.output.jsonpFunction = `webpackJsonp_${name}`
    config.output.globalObject = 'window'
    // config.output.publicPath = '//localhost:3888/';
    config.output.publicPath =
      process.env.NODE_ENV === 'production' ? '/rfmtools_react/' : '/'

    return config
  },
  devServer: _ => {
    const config = _
    config.headers = {
      'Access-Control-Allow-Origin': '*'
    }
    config.historyApiFallback = true
    config.hot = false
    config.watchContentBase = false
    config.liveReload = false

    return config
  }
}
