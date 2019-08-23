<template>
  <div class="border">
    <h1>A 节点</h1>
    <button @click="init = !init">更新删除新建</button>
    <div v-if="init">
      <ChildrenB :number="1"></ChildrenB>
      <ChildrenB :number="2">
        <ChildrenE></ChildrenE>
        <ChildrenF></ChildrenF>
      </ChildrenB>
      <ChildrenB :number="3"></ChildrenB>
    </div>
    <div v-else>
      <ChildrenB :number="2">
        <ChildrenE></ChildrenE>
        <ChildrenF></ChildrenF>
      </ChildrenB>
      <ChildrenB :number="1"></ChildrenB>
      <ChildrenB :number="3"></ChildrenB>
    </div>
  </div>
</template>

<script>
  import ChildrenB from './ChildrenB'
  import ChildrenE from './ChildrenE'
  import ChildrenF from './ChildrenF'
  export default {
    name: "children-a4",
    data () {
      return {
        init: true
      }
    },
    components: {
      ChildrenB,
      ChildrenE,
      ChildrenF
    }
  }
</script>

<style scoped>

</style>