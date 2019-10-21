import { deepCopy, mergeConfig } from './utils.js'
import InterceptorManager from './interceptorManager.js'

// 浅拷贝问题
// let obj1 = {
// 	baseURL: '',
// 	url: '',
// 	method: 'get',
// 	data: {
// 		x: 1,
// 		y: 2
// 	},
// 	arr: [1,2,3]
// }

// let obj2 = obj1
// obj2.url = 'abc'
// console.log(obj1)
//
// 深拷贝
// let obj2 = deepCopy(obj1)
// obj2.url = 'abc'
// obj2.data.x = 10
// console.log(obj1)

// let obj3 = {x: 1, arr: [1,2,3], y: undefined, fn: function () {console.log('aa')} }
// let obj4 = JSON.parse(JSON.stringify(obj3))
// console.log(obj3)
// console.log(obj4)
// // JSON的深拷贝有坑，如属性丢失，1.undefined值对应的属性丢失，2函数对应的属性丢失
//

class Kxios {
	
	constructor (config) {
		this.defaults = config
		
		this.interceptors = {
			request: new InterceptorManager,
			response: new InterceptorManager
		}
	}
	
	get (url, config) {
		
		// 对传入的配置与对象默认配置进行整合
		
		let configs =  mergeConfig(this.defaults, config)
		// console.log(configs)
		
		let promise = Promise.resolve(configs)
		
		this.interceptors.request.handlers.forEach(handler => {
			promise = promise.then(
					handler.resolveHandler,
					handler.rejectHandler
			)
		})
		
		promise = promise.then(this.dispatch, undefined)
		
		this.interceptors.response.handlers.forEach(handler => {
			promise = promise.then(
					handler.resolveHandler,
					handler.rejectHandler
			)
		})
		return promise
		
	}
	
	dispatch (configs) {
		return configs.adaptor(configs)
	}
}

export default Kxios