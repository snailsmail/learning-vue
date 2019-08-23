<template>
  <div class="input">
    <input :type="type" :value="value" @input="input"/>
  </div>
</template>

<script>
export default {
  name: 'my-input',
  inheritableAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    input (e) {
      console.log(e.target.value)
      this.value = e.target.value
      // this.$emit('input', e.value)
    }
  }
}
</script>

<style scoped>
.input {
  padding: 10px;
}
</style>
