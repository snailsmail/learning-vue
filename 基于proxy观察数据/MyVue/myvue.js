import Compile from './compile.js'

class MyVue{
	
	constructor (options) {
		this.$options = options
		this.compile = new Compile(options)
		this.observer(this.$options.data)
	}
	
	observer (data) {
		
		let keys = Object.keys(data);
		keys.forEach(key => {
			this.defineRect(data, key, data[key])
		})
	}
	
	defineRect (data, key, value) {
		let _self = this;
		Object.defineProperty(data, key, {
			configurable: true,
			enumerable: true,
			get () {
				console.log('get...')
				return value
			},
			set (newValue) {
				if (value !== newValue) {
					console.log('set...')
					let event = new CustomEvent(key, {
						detail: newValue
					})
					_self.compile.dispatchEvent(event)
					value = newValue
				}
			}
		})
	}
	
}

export default MyVue