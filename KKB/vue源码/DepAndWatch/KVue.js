class KVue {
	constructor (options) {
		this.$options = options;
		this.$data = options.data;
		
		this.observe(this.$data)
	}
	
	observe (data) {
		
		if (!data || typeof data !== 'object') {
			return;
		}
		
		Object.keys(data).forEach(key => {
			this.defineReactive(data, key, data[key])
		})
	}
	
	defineReactive (obj, key, value) {
		
		this.observe(value)
		
		Object.defineProperty(obj, key, {
			get () {
				return value
			},
			set (newVal) {
				value = newVal
				console.log(`${key}更新了`)
			}
		})
		
	}
}
