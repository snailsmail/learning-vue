<template>
  <div class="border">
    <h1>A 节点</h1>
    <button @click="init = !init">更新创建（无key）</button>
    <div v-if="init">
      <ChildrenB :number="1"></ChildrenB>
      <ChildrenB :number="2"></ChildrenB>
      <ChildrenB :number="3"></ChildrenB>
    </div>
    <div v-else>
      <ChildrenB :number="1"></ChildrenB>
      <ChildrenB :number="4"></ChildrenB>
      <ChildrenB :number="2"></ChildrenB>
      <ChildrenB :number="3"></ChildrenB>
    </div>
  </div>
</template>

<script>
  import ChildrenB from './ChildrenB'
  export default {
    name: "children-a6",
    data () {
      return {
        init: true
      }
    },
    components: {
      ChildrenB
    }
  }
</script>

<style scoped>

</style>