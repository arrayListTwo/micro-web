const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json')

module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: true,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*' // 本地服务的跨域内容
    }
  },
  configureWebpack: {
    output: {
      // 将当前子应用打包成 umd 库格式，commonjs 浏览器，nodejs环境都可以使用
      libraryTarget: 'umd',
      filename: 'vue3_[name]_[hash:6].js',
      library: 'vue3',
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  }
})
