vue数据劫持

data在组件中的写法,必须要用
```js
data: function() {
	return {
		
	}
}
```
这种写法
```js
Object.defineProperty({}, 'name', {
  get () {
  },
  set () {
  }
})
```