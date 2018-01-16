<template>
  <div class="my">
    <img src='./../assets/logo.png'/>
    <div class='my-detail'>
      <div v-show="isLogin">
        用户：<span>{{loginName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a @click="goLogout()">登出</a><br><br>
        github：<a href='https://github.com'>https://github.com</a><br><br>
        email：1009022062@qq.com<br><br>
        qq：1009022062<br><br>
      </div>

      <div v-show="!isLogin">
        目前为未登录状态，请 <router-link to="/login">登录</router-link>
      </div>
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
    },
    computed: {
      isLogin () {
        if (this.$store.state.isLogin === 'true') {
          return true
        } else {
          return false
        }
      },
      loginName () {
        return this.$store.state.loginName
      }
    },
    methods: {
      goLogout () {
        this.$store.dispatch('inLogout')
      }
    }
  }
</script>

<style>
  .my{
    margin: 0 auto;
    text-align: center;
  }
  .my a {
    cursor: pointer;
  }
</style>
