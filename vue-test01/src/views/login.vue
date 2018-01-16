<template>
  <div class="login">
    <img src='./../assets/logo.png'/>
    <div class='login-detail'>

      <div class="login-item"><label>用户名&nbsp;&nbsp;</label><input type="text" v-model="loginName"/></div>
      <div class="login-item"><label>密&nbsp;&nbsp;&nbsp;码&nbsp;&nbsp;</label><input type="text" v-model="pwd"/></div>
      <div class="login-item">
        <button class="cancel-btn" v-on:click="goBack()">取消</button>
        <button class="submit-btn" v-on:click="goLogin()">确定</button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'login',
    components: {

    },
    data () {
      return {
        loginName: '',
        pwd: ''
      }
    },
    created () {
      this.$store.dispatch('inMy')
    },
    methods: {
      goBack: function () {
        window.history.back()
      },
      goLogin: function () {
        if (this.loginName === '') {
          alert('用户名不能为空！')
          return
        }
        this.$store.dispatch('inLogin', this.loginName)
        this.$router.push({path: '/my'})
      }
    }
  }
</script>

<style>
  .login {
    margin: 0 auto;
    text-align: center;
  }
  .login input {
    height: 25px;
    border-radius: 5px;
  }
  .login .login-item {
    margin: 5px 0;
  }
  .login-detail button{
    border-radius: 6px;
    padding: 5px 10px;
    margin-top: 10px;
  }
  .login-detail .cancel-btn {
    background-color: #fff;
  }
  .login-detail .submit-btn {
    background-color: #428bca;
  }
</style>
