<template>
  <div class="border">
    <h1>A 节点</h1>
    <button @click="orderAsc = !orderAsc">移动</button>
    <div v-if="orderAsc">
      <ChildrenB></ChildrenB>
      <ChildrenC></ChildrenC>
      <ChildrenD></ChildrenD>
    </div>
    <div v-else>
      <ChildrenC></ChildrenC>
      <ChildrenD></ChildrenD>
      <ChildrenB></ChildrenB>
    </div>
  </div>
</template>

<script>
  import ChildrenB from './ChildrenB'
  import ChildrenC from './ChildrenC'
  import ChildrenD from './ChildrenD'
  export default {
    name: "children-a1",
    data () {
      return {
        orderAsc: true
      }
    },
    components: {
      ChildrenB,
      ChildrenC,
      ChildrenD
    }
  }
</script>

<style scoped>

</style>