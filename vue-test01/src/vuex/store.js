import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  home: true,
  my: false,
  data: ''
}
const mutations = {
  IN_HOME (state) {
    state.home = true
    state.my = false
  },
  IN_MY (state) {
    state.home = false
    state.my = true
  },
  IN_OTHER () {
    state.home = false
    state.my = false
  }
}
const actions = {
  inHome ({commit}) {
    commit('IN_HOME')
  },
  inMy ({commit}) {
    commit('IN_MY')
  },
  inOther ({commit}) {
    commit('IN_OTHER')
  }
}

export default new Vuex.Store({
  state, mutations, actions
})
