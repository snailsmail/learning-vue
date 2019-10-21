import ajax from './ajax.mjs'
import nodeHttp from './nodeHttp.mjs'

export default {
	baseURL: '',
	url: '',
	method: 'get',
	headers: {
		'content-type': 'application/json'
	},
	// 针对不同的环境适配器，可复写
	adaptor (configs) {
		if (typeof  window === 'object') {
			return ajax(configs)
		} else {
			return nodeHttp(configs)
		}
	},
	// 处理返回的数据，可复写
	transformResponse (data) {
		return data
	}
}