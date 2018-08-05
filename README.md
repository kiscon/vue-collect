# vue-test

> A Vue.js project

## 说明
- 使用vue-cli创建项目
- 使用express-generator创建node服务
- 启动vue项目，配置config/index文件，中转到node层，由node层请求数据，返回到页面

## superagent使用
- superagent它是一个强大并且可读性很好的轻量级ajaxAPI，是一个关于HTTP方面的一个库。
- 它可以实现跨域功能

- 在node层使用
```javascript
var superagent = require('superagent')
superagent
  .get(url)
  .query(params)
  .end(function(err, response) {
    if (!err) {
      // 成功
    } else{
      // 失败
    }
  });
```

### 参考资料
- [好用的 HTTP模块SuperAgent](https://www.jianshu.com/p/98b854322260)
- [SuperAgent中文使用文档](https://cnodejs.org/topic/5378720ed6e2d16149fa16bd)


## 配置node_modles/@vue/cli-service/lib/options.js

- config/index.js 是vue-cli3之前的配置

- 打包路径配置
```
 // project deployment base
  baseUrl: '/',

  // where to output built files
  // outputDir: 'dist',
  outputDir: 'server/public/',

  // where to put static assets (js/css/img/font/...)
  assetsDir: 'static',

  // filename for index.html (relative to outputDir)
  // indexPath: 'index.html',
  indexPath: '../views/index.html',
```
- 代理到node服务
```
  devServer: {
      /*
       open: process.platform === 'darwin',
       host: '0.0.0.0',
       port: 8080,
       https: false,
       hotOnly: false,
       proxy: null, // string | Object
       before: app => {}
       */
      host: 'localhost',
      https: false,
      hotOnly: false,
      proxy: {
        '/productSve/*':{
          target:'http://localhost:3000'
        },
        '/movieSve/*':{
          target:'http://localhost:3000'
        }
      },
    }
```
- 禁用eslint检测
```
  // whether to use eslint-loader
  lintOnSave: false,
```

## 访问打包后的文件
```
  开启node服务，在浏览器输入
  http://localhost:3000/#/
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```