const path = require('path')
module.exports = {
  publicPath: '/',
  outputDir: process.env.outputDir || 'dist',
  assetsDir: 'static', // 放置生成的静态资源
  runtimeCompiler: false,
  productionSourceMap: false,
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
      '@': path.resolve(__dirname, './src'),
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    https: false,
    hotOnly: false, // 热更新
    historyApiFallback: true,
    open: false, // 自动开启浏览器
    compress: false, // 开启压缩
    port: 8003, // 端口
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  chainWebpack: config => {
    // const types = config.module.rule('scss').oneOfs.store
    // types.forEach(type => {
    //   type
    //     .use('sass-resources-loader')
    //     .loader('sass-resources-loader')
    //     .options({
    //       resources: path.join(__dirname, './src/assets/sass/index.scss'),
    //     })
    //     .end()
    // })
  }
}
