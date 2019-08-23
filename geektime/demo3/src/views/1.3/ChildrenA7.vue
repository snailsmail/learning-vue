<template>
  <div class="border">
    <h1>A 节点</h1>
    <button @click="init = !init">创建（有key）</button>
    <div v-if="init">
      <ChildrenB  key="1" :number="1"></ChildrenB>
      <ChildrenB  key="2" :number="2"></ChildrenB>
      <ChildrenB  key="3" :number="3"></ChildrenB>
    </div>
    <div v-else>
      <ChildrenB key="1" :number="1"></ChildrenB>
      <ChildrenB key="4" :number="4"></ChildrenB>
      <ChildrenB key="2" :number="2"></ChildrenB>
      <ChildrenB key="3" :number="3"></ChildrenB>
    </div>
  </div>
</template>

<script>
  import ChildrenB from './ChildrenB'
  export default {
    name: "children-a7",
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