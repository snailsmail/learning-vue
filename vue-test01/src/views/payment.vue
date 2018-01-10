<template>
  <div class="pay">
    <div class="pay-title">
      <span>付款</span>
      <button v-on:click="goBack()">返回</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pay',
    created () {
      this.$store.dispatch('inOther')
    },
    methods: {
      goBack: function () {
        window.history.back()
      }
    }
  }
</script>

<style>

  .pay {
    padding: 30px;
    margin-bottom: 50px;
  }
  .pay button{
    float: right;
    border-radius: 6px;
    background-color: #cd9;
    padding: 5px 10px;
    margin-top: -5px;
  }
  .pay-title{
    margin-bottom: 50px;
  }

</style>
