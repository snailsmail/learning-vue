<template>
  <div id="grandson">
    <h3>Grandson1</h3>
    <p>
      祖先元素提供的数据：{{son}}
    </p>

    <p style="color: red;">接收到dispatch的消息： {{data}}</p>

    <p style="color: blue;">接收到boardcast的消息： {{data1}}</p>

    <GrandGrandson1></GrandGrandson1>
  </div>
</template>

<script>
  import GrandGrandson1 from './GrandGrandson1'
	export default {
		name: "grandson1",
    inject: ['son'],
    components: {
			GrandGrandson1
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
#grandson {
  border: 3px solid #ff0000;
  width: 300px;
  padding: 20px;
  margin: 10px;
  display: inline-block;
}
</style>