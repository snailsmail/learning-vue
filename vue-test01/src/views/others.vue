<template>
  <div class="others">
    <div class="others-title">
      <span>其他</span>
      <button v-on:click="goBack()">返回</button>
    </div>
    <p>待开发</p>
  </div>
</template>

<script>
  export default {
    name: 'others',
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

  .others {
    padding: 30px;
    margin-bottom: 50px;
  }
  .others button{
    float: right;
    border-radius: 6px;
    background-color: #cd9;
    padding: 5px 10px;
    margin-top: -5px;
  }
  .others-title{
    margin-bottom: 50px;
  }

</style>
