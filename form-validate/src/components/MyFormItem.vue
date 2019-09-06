<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <div v-if="error" class="error">{{error}}</div>
  </div>
</template>

<script>
import Schema from 'async-validator'

// 1.显示标签 2.显示错误信息
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      error: ''
    }
  },
  mounted () {
    // 监听validate事件
    // 注意$on写法,若写成this.$on('validate', () => this.validate()),或是this.$on('validate', this.validate()),验证的时候会报错
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate () {
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]

      const descriptor = {[this.prop]: rules}

      let validator = new Schema(descriptor)
      return validator.validate({[this.prop]: value}, errors => {
        console.log(errors)
        if (errors) {
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      })
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
    font-size: 10px;
  }
</style>
