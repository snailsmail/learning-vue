<template>
  <div class="input">
    <input :type="type" :value="value" @input="input"/>
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 若有其他自定义属性,可显示在input标签上
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    input (e) {
      this.$emit('input', e.target.value)

      // 通知父级组件要调用事件了
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style scoped>
.input {
  padding: 10px;
}
</style>
