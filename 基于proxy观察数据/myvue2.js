class MyVue extends EventTarget{
	
	constructor (options) {
		super()
		this.$options = options
		this.compile()
		this.observer(this.$options.data)
	}
	
	observer (data) {
		
		let _self = this;
		this.$options.data = new Proxy(data, { // 必须要接受返回值，不然也触发不到
			get (target, key) {
				console.log('get...')
				return target[key]
			},
			set (target, key, newValue) {
				if (target[key] !== newValue) {
					console.log('set...')
					let event = new CustomEvent(key, {
						detail: newValue
					})
					_self.dispatchEvent(event)
					target[key] = newValue
				}
				
			}
		})
	}
	
	compile () {
		let ele = document.querySelector(this.$options.el)
		let childNodes = ele.childNodes
		console.log(childNodes)
		this.compileNode(childNodes)
	}
	
	compileNode (childNodes) {
		[...childNodes].forEach(node => {
			if (node.nodeType === 1) {
				console.log('元素节点')
				if (node.childNodes.length > 0) {
					this.compileNode(node.childNodes)
				}
			} else if (node.nodeType === 3) {
				let nodeText = node.textContent
				
				let reg = /\{\{\s*(\S+)\s*\}\}/g  // 正则分组，第一个分组可以用$1获取到
				if (reg.test(nodeText)) {
					let $1 = RegExp.$1
					// console.log('有大括号', nodeText, $1)
					// node.textContent = this.$options.data[$1]
					
					let arr = $1.split('.')
					let str = this.$options.data
					arr.forEach(v => {
						str = str[v]
					})
					node.textContent = str
					
					// 绑定更新视图事件
					this.addEventListener($1, e => {
						console.log('触发更新')
						node.textContent = e.detail
					})
				}
			}
		})
	}
}