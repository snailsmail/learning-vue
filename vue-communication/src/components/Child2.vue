<template>
  <div id="child2">
    <p>我是 child2</p>
    <div>
      <p>来自parent的测试数据： {{title}}</p>
    </div>

    <p>
      <button @click="eventBus">传给GrandGrandson1</button>
    </p>

  </div>
</template>

<script>
	export default {
		name: "child2",
    props: {
      title: {
      type: String,
        default: ''
      }
    },
		data () {
			return {
				data: ''
			}
		},
		mounted () {
			this.$on('dispatch', (data) => {
				this.dispatch(data)
			})
		},
    methods: {
			toParent () {
				this.$emit('getMsg', '我是 child')
      },
			eventBus () {
				this.$bus.$emit('event-bus', 'Child2给GrandGrandson1的测试数据')
      }
    }
	}
</script>

<style scoped>
  #child2 {
    border: 3px solid #ff0000;
    padding: 20px;
    float: right;
  }
  #child2 > p {
    font-weight: bold;
  }
</style>