const path = require('path')
const { name} = require('./package.json')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    headers: {
      'Access-Control-Allow-Origin': '*', // 本地服务的跨域内容
    },
  },
  configureWebpack: {
    output: {
      // 将当前子应用打包成 umd 库格式，commonjs 浏览器，nodejs环境都可以使用
      libraryTarget: 'umd',
      filename: 'vue2_[name]_[hash:6].js',
      library: 'vue2',
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
  publicPath: 'http://localhost:4000',
})
