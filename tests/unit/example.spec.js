import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import cypress from '@/pages/cypress/index.vue'

describe('cypress/index.vue', () => {
  it('test cypress', () => {
    const msg = 'cypress'
    const wrapper = shallowMount(cypress, {})
    expect(wrapper.text()).to.include(msg)
  })
})
