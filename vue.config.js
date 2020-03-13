// vue 项目配置文件
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './', // 所有的资源都会被链接为相对路径
  chainWebpack (config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/plugins/iconSvg'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/plugins/iconSvg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  devServer: {
    port: 9102,
    proxy: {
      'api': {
        // target: 'http://10.129.100.41:5400',
        target: 'http://47.101.162.225:9102',
        ws: false,
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/styles/entry.scss";
        `
      }
    }
  }
}
