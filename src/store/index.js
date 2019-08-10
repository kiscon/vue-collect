import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './whole/actions'
import * as getters from './whole/getters'
import state from './whole/state'
import mutations from './whole/mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
