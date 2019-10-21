class KVue{
	constructor (options) {
		this.$options = options;
		this.$data = options.data;
		
		// 观察者
		this.observe(this.$data);
		
		// 模拟watcher的创建过程
		new Watcher()
		this.$data.bar
		new Watcher()
		this.$data.foo.foo2
	}
	
	observe (obj) {
		if (!obj || typeof obj !== 'object') {
			return;
		}
		
		// 遍历对象
		Object.keys(obj).forEach(key => {
			this.defineReactive(obj, key, obj[key])
		})
	}
	
	// 数据响应化
	defineReactive (obj, key, value) {
		
		this.observe(value); // 递归解决数据嵌套
		
		// 初始化Dep
		const dep = new Dep();
		
		// 数据劫持
		Object.defineProperty(obj, key, {
			configurable: true,
			enumerable: true,
			get () {
				Dep.target && dep.addDep(Dep.target)
				return value
			},
			set (newVal) {
				if (newVal === value) {
					return
				}
				value = newVal
				console.log(`${key}属性更新了：${newVal}`)
				dep.notify()
			}
		})
	}
}

// dep: 用来管理watcher
class Dep {
	constructor () {
		// 存放的是若干依赖（watcher）
		this.deps = [];
	}
	
	addDep (dep) {
		this.deps.push(dep)
	}
	
	notify () {
		this.deps.forEach(dep => {
			dep.update()
		})
	}
}

// watcher
class Watcher {
	constructor () {
		// 将当前watcher实例指定到Dep静态属性target
		Dep.target = this;
	}
	
	update () {
		console.log('属性更新了')
	}
}