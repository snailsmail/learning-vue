<template>
  <div class="border2">
    <h2>G 节点</h2>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "children-g",
    mounted () {
      console.log('G mounted');
    },
    updated () {
      console.log('G updated');
    },
    destroyed () {
      console.log('G destroyed');
    }
  }
</script>

<style scoped>

</style>