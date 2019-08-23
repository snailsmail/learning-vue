<template>
  <div class="border2">
    <h3>E 节点</h3>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "children-e",
    mounted () {
      console.log('E mounted');
    },
    updated () {
      console.log('E updated');
    },
    destroyed () {
      console.log('E destroyed');
    }
  }
</script>

<style scoped>

</style>