<template>
  <div>
    name: {{name}}
    <br>
    type: {{type}}
    <br>
    list: {{list}}
    <br>
    isVisible: {{isVisible}}
    <br>
    <button @click="handleClick">change type</button>
  </div>
</template>

<script>
  export default {
    name: "props",
    inheritAttrs: false,//设置会使原生的属性去掉
    props: {
      name: String,
      type: {
        validator: function (value) {
          //这个值必需匹配下列字符数组中的一个
          return ['success', 'danger', 'warning'].includes(value);
        }
      },
      list: {
        type: Array,
        //对象或数组默认值必需从一个工厂函数中获取
        default: () => []
      },
      isVisible: {
        type: Boolean,
        default: false
      },
      onChange: {
        type: Function,
        default: () => {}
      }
    },
    methods: {
      handleClick() {
        this.onChange(this.type === 'success' ? 'warning' : 'success');
      }
    }
  }
</script>

<style scoped>

</style>