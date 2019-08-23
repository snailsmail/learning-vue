<template>
  <div class="border">
    <h1>A 节点</h1>
    <button @click="init = !init">删除CEF，创建CEF</button>
    <div v-if="init">
      <ChildrenB></ChildrenB>
      <ChildrenC>
        <ChildrenE></ChildrenE>
        <ChildrenF></ChildrenF>
      </ChildrenC>
      <ChildrenD></ChildrenD>
    </div>
    <div v-else>
      <ChildrenB>
        <ChildrenC>
          <ChildrenE></ChildrenE>
          <ChildrenF></ChildrenF>
        </ChildrenC>
      </ChildrenB>
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
  export default {
    name: "children-a2",
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
      ChildrenF
    }
  }
</script>

<style scoped>

</style>