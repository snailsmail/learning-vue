export default class InterceptorManager {
	constructor() {
		this.handlers = []
	}
	
	use (resolveHandler, rejectHandler) {
		this.handlers.push({
			resolveHandler,
			rejectHandler
		})
	}
}