import kxios from './Kxios'

console.log(kxios)

// kxios.get('http://localhost:4000/')
// .then(res => {
// 	console.log('res', res)
// })

// 不同配置处理的使用场景
// let api1 = new kxios({
// 	baseURL: 'http://localhost:8080'
// })
//
// api1.get('/data')
//
// let api2 = new kxios({
// 	baseURL: 'http://localhost:8088',
// 	method: 'get'
// })
//
// api2.get('/data')
// api2({
// 	url: '/login',
// 	method: 'post'
// })

// kxios.defaults.adaptor = function (configs) {
// 	return nodeHttp(configs)
// }

kxios.interceptors.request.use(function (config) {
	console.log(1)
	return config
}, function () {
	console.log('err', 1)
})

kxios.interceptors.request.use(function (config) {
	console.log(2)
	return config
}, function () {
	console.log('err', 2)
})


kxios.interceptors.response.use(function (response) {
	console.log('response')
	return response
}, function () {
	console.log('err', 3)
})

kxios.get('/', {
	baseURL: 'http://localhost:4000',
	method: 'get',
	headers: { 'token': 'jwt'}
})
.then(res => {
	console.log('res', res)
})


// ？实现
// kxios({
// 	baseURL: 'http://localhost:4000',
// 	url: '/'
// })

