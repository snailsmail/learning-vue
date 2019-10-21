function deepCopy(source) {
	let target = Array.isArray(source) ? [] : {}
	
	for (let key in source) { // for in 会循环除原型链上的属性
		if (source.hasOwnProperty(key)) { // 自由属性处理，避免拷贝原型链上不必要的属性
			if ( typeof source[key] === 'object' && source !== null) {
				target[key] = deepCopy(source[key])
			} else {
				target[key] = source[key]
			}
		}
	}
	
	return target
}

function mergeConfig(obj1, obj2) {
	let target = deepCopy(obj1)
	let source = deepCopy(obj2)
	
	Object.keys(source).reduce( (t, k) => {
		if ( ['url', 'baseURL', 'method'].includes(k) ) {
			t[k] = source[k]
		}
		if ( ['headers'].includes(k) ) {
			t[k] = Object.assign(target[k], source[k])
		}
		return t
	}, target)
	
	return target
}

export {
	deepCopy,
	mergeConfig
}