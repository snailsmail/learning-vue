<template>
  <div id="child1">
    <p>我是 child1</p>
    <div>
      <p>来自parent的测试数据： {{title}}</p>
      <button @click="toParent">传给父组件</button>
    </div>

    <p style="color: red;">接收到dispatch的消息： {{data}}</p>

    <p style="color: blue;">接收到boardcast的消息： {{data1}}</p>

    <Grandson1></Grandson1>
    <Grandson2></Grandson2>
  </div>
</template>

<script>
  import Grandson1 from './Grandson1'
  import Grandson2 from './Grandson2'
	export default {
		name: "child1",
    components: {
			Grandson1,
			Grandson2
    },
    props: {
      title: {
      type: String,
        default: ''
      }
    },
		data () {
			return {
				data: '',
				data1: ''
			}
		},
		mounted () {
			this.$on('dispatch', (data) => {
				this.dispatch(data)
			})
			this.$on('boardcast', (data) => {
				this.boardcast(data)
			})
		},
    methods: {
			toParent () {
				this.$emit('getMsg', '我是 child')
      },
			dispatch (data) {
				this.data = data
      },
			boardcast (data) {
				this.data1 = data
      }
    }
	}
</script>

<style scoped>
  #child1 {
    border: 3px solid #ff0000;
    width: 800px;
    padding: 20px;
    display: inline-block;
  }
  #child1 > p {
    font-weight: bold;
  }
</style>