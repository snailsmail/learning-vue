<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      require: true,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {

    }
  },
  methods: {
    // validate的参数问题,不能传cb或者callback,编译提示不正常文本出现,所以改为func
    validate (func) {
      const tasks = this.$children.filter(item => item.prop).map(item => item.validate())
      Promise.all(tasks).then(() =>
        func(true)).catch(() => func(false))
    }
  }
}
</script>

<style scoped>

</style>
