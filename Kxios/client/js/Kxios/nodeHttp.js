import http from 'http'

export default (configs) => {
	return new Promise( (resolve, reject) => {
		const postData = ''
		
		const options = {
			hostname: 'localhost',
			port: 4000,
			path: '/',
			method: configs.method,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Content-Length': Buffer.byteLength(postData)
			}
		}
		
		const req = http.request(options, (res) => {
			console.log(`状态码: ${res.statusCode}`)
			console.log(`响应头: ${JSON.stringify(res.headers)}`)
			
			res.setEncoding('utf8')
			
			let chunks = []
			let size = 0
			res.on('data', chunk => {
				chunks.push(chunk)
				size += chunk.length
				console.log(`响应主体： ${chunks}`)
			})
			
			res.on('end', () => {
				console.log(chunks)
				console.log(`响应中已无主体： ${chunks}`)
				resolve(chunks.join(''))
			})
			
		})
		
		req.on('error', (e) => {
			console.log(`错误了： ${e.message}`)
		})
		
		req.write(postData)
		req.end()
	} )
}