<template>
  <div>
    <slot>默认</slot>
    <slot name="title" v-bind="{value: 'vue1'}">有对应名称</slot>
    <slot name="title" v-bind="{value: 'vue2'}">有对应名称</slot>
    <slot name="item" v-bind="{value: 'vue', info: 'study'}">有对应名称加有数据</slot>
  </div>
</template>

<script>
  export default {
    name: "SlotDemo"
  }
</script>

<style scoped>

</style>