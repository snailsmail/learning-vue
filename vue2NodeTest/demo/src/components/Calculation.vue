<template>
  <div class="calculation">
    <counter v-bind:num="num" v-on:aa="increment" v-on:bb="decrement"></counter>
    <p>parent : {{ num }}</p>
  </div>
</template>

<script>
import Counter from './Counter'

export default {
  name: 'calculation',
  data () {
    return {
      'num': 10
    }
  },
  methods: {
    increment () {
      this.num++
    },
    decrement () {
      this.num--
    }
  },
  components: {
    Counter
  }
}
</script>

<style scoped>

</style>
