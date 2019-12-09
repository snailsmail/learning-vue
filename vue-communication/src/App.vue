<template>
  <div id="app">
    <p>我是 parent</p>
    <span>来自child的测试数据：{{msg}}</span>

    <p style="color: red;">接收到dispatch的消息： {{data}}</p>

    <!--{{son}}-->

    <p>
      <button @click="boardcast('boardcast', '我是 super parent')">广播子元素</button>
    </p>

    <p>
      <span>冲啊，手榴弹扔了{{$store.state.count}}</span>
      <button @click="add">扔一个</button>
      <button @click="addAsync">蓄力扔两</button>
    </p>

    <child1 :title="title" @getMsg="getMsg"></child1>
    <child2 :title="title" @getMsg="getMsg"></child2>
  </div>
</template>

<script>
	import Child1 from './components/Child1.vue'
	import Child2 from './components/Child2.vue'

	// function boardcast(eventName, data){
	// 	this.$children.forEach(child => {
	// 		// 子元素触发$emit
	// 		child.$emit(eventName, data)
	// 		if(child.$children.length){
	// 			// 递归调用，通过call修改this指向 child
	// 			boardcast.call(child, eventName, data)
	// 		}
	// 	});
	// }

	export default {
		name: 'app',
		components: {
			Child1,
			Child2
		},
		provide: {
			son: '你是 son'
		},
    created () {
      this.son = this.$store.state.name
    },
		mounted () {
			this.$on('dispatch', (data) => {
				this.dispatch(data)
			})
		},
		data() {
			return {
				title: '我是你 parent',
				msg: '',
				data: '',
			}
		},
		methods: {
			getMsg(msg) {
				this.msg = msg
			},
			dispatch (data) {
				this.data = data
			},
			boardcast (eventName, data) {
				this.$boardcast(eventName, data)
				// boardcast.call(this, eventName, data)
      },
			add () {
        this.$store.commit('increment')
      },
      addAsync () {
        this.$store.dispatch('incrementAsync')
      }
		}
	}
</script>

<style>
  #app {
    border: 3px solid #ff0000;
    width: 1400px;
    margin: 0 auto;
    padding: 10px;
  }

  #app > p {
    font-weight: bold;
  }
</style>
