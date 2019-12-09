<template>
  <div id="GrandGrandson1">
    <h3>GrandGrandson1</h3>
    <p>
      祖先提供的数据： {{son}}
    </p>

    <p style="color: blue;">接收到boardcast的消息： {{data1}}</p>

    <p style="color: green;">接收到Child2的消息： {{data}}</p>

    <button @click="dispatch('dispatch', 'hello 我是GrandGrandson1')">dispatch</button>
  </div>
</template>

<script>
	export default {
		name: "grand-grandson1",
		inject: ['son'],
		data() {
			return {
				data: '',
				data1: ''
			}
		},
		mounted() {
			this.$on('boardcast', (data) => {
				this.boardcast(data)
			})
			this.$bus.$on('event-bus', (msg) => {
				this.data = msg
			})
		},
		methods: {
			dispatch(eventName, data) {
				// let parent = this.$parent
				// // 查找父元素
				// while (parent ) {
				// 	if (parent) {
				// 		// 父元素用$emit触发
				// 		parent.$emit(eventName,data)
				// 		// 递归查找父元素
				// 		parent = parent.$parent
				// 	}else{
				// 		break
				//
				// 	}
				// }

				this.$dispatch(eventName, data)

			},
			boardcast(data) {
				this.data1 = data
			}
		}
	}
</script>

<style scoped>
  #GrandGrandson1 {
    margin: 10px;
    border: 3px solid #ff0000;
    width: 200px;
  }
</style>