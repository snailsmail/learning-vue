import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    author: 'ye.chen'
  },
  mutations: {
    newAuthor: function (state, msg) {
      state.author = msg
    }
  }
})

export default store
