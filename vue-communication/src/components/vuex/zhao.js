// 1.一版
// class Store {
// 	constructor () {
// 		this.name = '赵政委'
// 	}
// }
//
// function install(Vue) {
// 	Vue.prototype.$store = new Store()
// }

// 2.二版
class Store {
	constructor (options = {}) {
		// this.name = '赵政委'
		this.state = options.state
	}
}

function install(Vue) {
	Vue.mixin({
		beforeCreate () {
			if (this.$options.store) {
				Vue.prototype.$store = this.$options.store
			}
		}
	})
}

export default { Store, install }