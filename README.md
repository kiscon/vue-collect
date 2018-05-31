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


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
