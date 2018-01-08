<template>
  <div id="app">
    <h1>修改作者名字</h1>
    <HeaderDiv/>
    <img src="./assets/logo.png">
    <FooterDiv/>
  </div>
</template>

<script>
import HeaderDiv from './components/header'
import FooterDiv from './components/footer'

export default {
  name: 'app',
  components: {
    HeaderDiv,
    FooterDiv
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  #app h1 {
    text-align: center;
  }
</style>
