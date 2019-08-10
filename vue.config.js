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
    },
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          use: 'eslint-loader'
        }
      ]
    }
  },
  devServer: {
    host: 'localhost',
    https: false,
    hotOnly: false,
    historyApiFallback: true,
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
    const types = config.module.rule('scss').oneOfs.store
    types.forEach(type => {
      type
        .use('sass-resource-loader')
        .loader('sass-resources-loader')
        .options({
          resources: path.join(__dirname, './src/assets/sass/index.scss'),
        })
        .end()
    })
  }
}
