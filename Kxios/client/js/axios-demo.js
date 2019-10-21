import axios from 'axios'

axios.interceptors.request.use(function (config) {
	console.log(1)
	return config
}, function () {
	console.log('err', 1)
})

axios.interceptors.request.use(function (config) {
	console.log(2)
	return config
}, function () {
	console.log('err', 2)
})

axios.interceptors.response.use(function (res) {
	console.log(3)
	return res
}, function () {
	console.log('err', 3)
})

axios.get('http://localhost:4000/')
.then(res => {
	console.log('res', res)
})