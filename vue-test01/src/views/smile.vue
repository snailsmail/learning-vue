<template>
  <div class="smile">
    <div class="smile-title">
      <span>每日一笑</span>
      <button v-on:click="goBack()">返回</button>
    </div>
    <p>今天笑了咩</p>
  </div>
</template>

<script>
  export default {
    name: 'smile',
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

  .smile {
    padding: 30px;
    margin-bottom: 50px;
  }
  .smile button{
    float: right;
    border-radius: 6px;
    background-color: #cd9;
    padding: 5px 10px;
    margin-top: -5px;
  }
  .smile-title {
    margin-bottom: 50px;
  }

</style>
