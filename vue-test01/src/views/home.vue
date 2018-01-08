<template>
  <div class="home">
    <banner></banner>
    <news></news>
  </div>
</template>

<script>
  import Banner from './../components/banner'
  import News from './../components/news'

  export default {
    name: 'home',
    data () {
      return {

      }
    },
    components: {
      Banner,
      News
    },
    created () {
      this.$store.dispatch('inHome')
    }
  }
</script>

<style>
  .home{
    margin: 0 auto;
    text-align: center;
  }
</style>
