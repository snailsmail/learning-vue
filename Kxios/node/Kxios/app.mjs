import kxios from './index.mjs'

kxios.interceptors.request.use(function (config) {
	console.log(1)
	return config
}, function () {
	console.log('err', 1)
})


kxios.get('http://localhost:4000/', {
	method: 'get'
})
.then( (res) => {
	console.log(`res: ${res}`)
})