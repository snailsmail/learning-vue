// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
// export default new Vuex.Store({
// 	state: {
// 		count: 0
// 	},
// 	mutations : {
// 		increment (state, n = 1) {
// 			state.count += n
// 		}
// 	},
// 	actions: {
// 		incrementAsync ({commit}) {
// 			setTimeout(() => {
// 				commit('increment', 2)
// 			}, 1000)
// 		}
// 	}
// })

// 2.二版
// import Vue from 'vue'
// import Vuex from './components/vuex/zhao'
//
// Vue.use(Vuex)
//
// export default new Vuex.Store({
// 	state: {
// 		name: '赵政委啊'
// 	}
// })

// 3.三版
import Vue from 'vue'
import Vuex from './components/vuex/zhao1'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment (state, n = 1) {
			state.count += n
		}
	},
	actions: {
		incrementAsync ({commit}) {
			commit('increment', 2)
		}
		
	}
})
