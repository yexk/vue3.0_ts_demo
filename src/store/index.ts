import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './muattions'
import actions from './actions'
import { State } from './State'

Vue.use(Vuex)

const state: State = {
  leftMenu: false,
  login: false
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
