<template>
  <div class="counter">
    <button v-on:click="increment">+</button>
    <button @click="decrement">-</button>
    <p><span>{{ num }}</span></p>
  </div>
</template>

<script>
export default {
  name: 'counter',
  // 接收父组件传过来的值
  props: ['num'],
  data () {
    return {
    }
  },
  methods: {
    increment () {
      // 触发父组件事件，aa是在父组件上定义的事件
      this.$emit('aa')
    },
    decrement () {
      // 触发父组件事件
      this.$emit('bb')
    }
  }
}
</script>

<style scoped>

</style>
