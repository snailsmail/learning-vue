export default (configs) => {
	
	return new Promise( (resolve, reject) => {
		
		let xhr = new XMLHttpRequest()
		
		xhr.onload = function () {
			resolve({
				statusCode: xhr.statusCode,
				code: xhr.statusText,
				data: configs.transformResponse(xhr.responseText)
			})
		}
		
		xhr.open('get', configs.baseURL + configs.url, true)
		
		xhr.send()
		
	})
}