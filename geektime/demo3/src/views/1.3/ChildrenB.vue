<template>
  <div class="border1">
    <h2>B 节点 {{number}}</h2>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "children-b",
    props: {
      number: Number
    },
    mounted () {
      console.log(`B${this.number || ''} mounted`);
    },
    updated () {
      console.log(`B${this.number || ''} updated`);
    },
    destroyed () {
      console.log(`B${this.number || ''} destroyed`);
    }
  }
</script>

<style scoped>

</style>