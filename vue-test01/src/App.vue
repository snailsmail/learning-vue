<template>
  <div id="app">
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from './components/FooterBar'
import store from './vuex/store'

export default {
  name: 'app',
  store,
  data () {
    return {

    }
  },
  components: {
    FooterBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 900px;
  width: 600px;
  overflow: auto;
  border: solid #5c9bb7 3px;
  margin: 0 auto;
}
</style>
