/// <reference types="Cypress" />

describe('vue-collect', () => {
  it ('Visits the Website', () => {
    cy.visit('http://localhost:8080/#/source-code/vuex-info')
    cy.contains('vuex知识')
    cy.contains('改变数据').click()
  })
})