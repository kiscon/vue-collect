<template>
  <div>
    <pageHead />
    对vuex知识页面进行e2e测试
    <pre>
      1.安装@vue/cli-plugin-e2e-cypress
      2.在package.json配置执行指令
        "scripts": {
          "test:e2e": "vue-cli-service test:e2e"
        }
      3.在cypress/integration目录下新建一个test.js文件并编写测试脚本
        describe('vue-collect', () => {
          it ('Visits the Website', () => {
            cy.visit('http://localhost:38704/#/source-code/vuex-info')
            cy.contains('vuex知识')
            cy.contains('改变数据').click()
          })
        })
      4.测试结果如下：
    </pre>
    <img src="./result.png" alt="测试结果">
    <a
      target="_blank"
      href="https://docs.cypress.io/zh-cn/guides/getting-started/installing-cypress.html#npm-install">
      cypress配置地址
    </a>
  </div>
</template>

