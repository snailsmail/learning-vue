import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  home: true,
  my: false,
  isLogin: localStorage.getItem('isLogin'),
  loginName: localStorage.getItem('loginName'),
  shoppingData: ''
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
  IN_OTHER (state) {
    state.home = false
    state.my = false
  },
  IN_LOGIN (state, newLoginName) {
    state.isLogin = 'true'
    state.loginName = newLoginName
    localStorage.setItem('loginName', newLoginName)
    localStorage.setItem('isLogin', state.isLogin)
  },
  IN_LOGOUT (state) {
    state.isLogin = 'false'
    state.loginName = ''
    localStorage.setItem('loginName', state.loginName)
    localStorage.setItem('isLogin', state.isLogin)
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
  },
  inLogin ({commit}, newLoginName) {
    commit('IN_LOGIN', newLoginName)
  },
  inLogout ({commit}) {
    commit('IN_LOGOUT')
  }
}

export default new Vuex.Store({
  state, mutations, actions
})
