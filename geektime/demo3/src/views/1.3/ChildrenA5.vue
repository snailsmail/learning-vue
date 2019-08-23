<template>
  <div class="border">
    <h1>A 节点</h1>
    <button @click="init = !init">移动（有key）</button>
    <div v-if="init">
      <ChildrenB key="1" :number="1"></ChildrenB>
      <ChildrenB key="2" :number="2">
        <ChildrenE></ChildrenE>
        <ChildrenF></ChildrenF>
      </ChildrenB>
      <ChildrenB key="3" :number="3"></ChildrenB>
    </div>
    <div v-else>
      <ChildrenB key="2" :number="2">
        <ChildrenE></ChildrenE>
        <ChildrenF></ChildrenF>
      </ChildrenB>
      <ChildrenB key="1" :number="1"></ChildrenB>
      <ChildrenB key="3" :number="3"></ChildrenB>
    </div>
  </div>
</template>

<script>
  import ChildrenB from './ChildrenB'
  import ChildrenE from './ChildrenE'
  import ChildrenF from './ChildrenF'
  export default {
    name: "children-a5",
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