import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './muattions'
import actions from './actions'

Vue.use(Vuex)

const state = {
  login: false
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
