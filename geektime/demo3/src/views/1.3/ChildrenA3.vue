<template>
  <div class="border">
    <h1>A 节点</h1>
    <button @click="init = !init">删除CEF，新建GEF</button>
    <div v-if="init">
      <ChildrenB></ChildrenB>
      <ChildrenC>
        <ChildrenE></ChildrenE>
        <ChildrenF></ChildrenF>
      </ChildrenC>
      <ChildrenD></ChildrenD>
    </div>
    <div v-else>
      <ChildrenB></ChildrenB>
      <ChildrenG>
        <ChildrenE></ChildrenE>
        <ChildrenF></ChildrenF>
      </ChildrenG>
      <ChildrenD></ChildrenD>
    </div>
  </div>
</template>

<script>
  import ChildrenB from './ChildrenB'
  import ChildrenC from './ChildrenC'
  import ChildrenD from './ChildrenD'
  import ChildrenE from './ChildrenE'
  import ChildrenF from './ChildrenF'
  import ChildrenG from './ChildrenG'
  export default {
    name: "children-a3",
    data () {
      return {
        init: true
      }
    },
    components: {
      ChildrenB,
      ChildrenC,
      ChildrenD,
      ChildrenE,
      ChildrenF,
      ChildrenG
    }
  }
</script>

<style scoped>

</style>