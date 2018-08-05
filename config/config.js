/*
* 接口url地址
* */
let ENV = process.env.NODE_ENV || "development";
let commonApi = {
  development: {
    // base_api_url: "https://api.myjson.com/bins/70goa",
    request_url: {
      base_api_url: 'https://api.douban.com/v2',
    },
    port:3000
  },
  test: {
    base_api_url: "https://api.myjson.com/bins/17xc6i",
    port:3000
  },
  production: {
    // base_api_url: "https://api.myjson.com/bins/er3je",
    base_api_url: 'https://api.douban.com/v2',
    port:3000
  }
};
module.exports = commonApi[ENV];
