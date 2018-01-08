<template>
  <div class="footer-bar">
    <p class="nav-list">
      <router-link class="nav-item" to="/"><i :class= "[home?'index1':'index']"></i></router-link>
      <router-link class="nav-item" to="/my"><i :class= "[my?'my1':'my']"></i></router-link>
    </p>
  </div>
</template>

<script>
  export default{
    name: 'FooterBar',
    data () {
      return {

      }
    },
    computed: {
      home () {
        return this.$store.state.home
      },
      my () {
        return this.$store.state.my
      }
    }
  }
</script>

<style>
  .footer-bar{
    position: fixed;
    bottom: 0;
    width: 600px;
    background: #fff;
    border-top: 1px solid #f1f1f1;
  }
  .footer-bar .nav-list{
    width:100%;
    display: flex;
    z-index:10;
  }
  .footer-bar .nav-list .nav-item{
    flex: 1;
    color: #fff;
    height: 40px;
    text-align: center;
    display: block;
    font-family: cursive;
    text-decoration: none;
  }
  .footer-bar .nav-list .nav-item i{
    width: 90px;
    height: 100%;
    display: block;
    background-repeat: no-repeat;
    background-size: 120%;
    margin: 0 auto;
    background-position-y: center;
    background-position-x: center;
    position: relative;
    top: -5px;
  }
  .footer-bar .index{
    background-image:url("./../assets/shop.png");
  }
  .footer-bar .index1{
    background-image:url("./../assets/shop-1.png");
  }
  .footer-bar .my{
    background-image:url("./../assets/center.png");
  }
  .footer-bar .my1{
    background-image:url("./../assets/center-1.png");
  }
</style>
