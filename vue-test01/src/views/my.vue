<template>
  <div class="my">
    <img src='./../assets/logo.png'/>
    <div class='my-detail'>
      github：<a href='https://github.com'>https://github.com</a><br><br>
      email：1009022062@qq.com<br><br>
      qq：1009022062<br><br>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my',
    components: {

    },
    data () {
      return {

      }
    },
    created () {
      this.$store.dispatch('inMy')
    }
  }
</script>

<style>
  .my{
    margin: 0 auto;
    text-align: center;
  }
</style>
