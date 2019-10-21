import kxios from './index.js'

kxios.get('http://localhost:4000')
.then( (res) => {
	console.log(`res: ${res}`)
})