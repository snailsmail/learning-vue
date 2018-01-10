<template>
  <div class="phone">
    <div class="phone-title">
      <span>手机充值</span>
      <button class="back" v-on:click="goBack()">返回</button>
    </div>
    <div>
      <span>充多少</span> <input type="text" v-model="money"/>
      <button v-on:click="changeMoney()">确定</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'phone',
    data () {
      return {
        money: null
      }
    },
    created () {
      this.$store.dispatch('inOther')
    },
    methods: {
      goBack: function () {
        window.history.back()
      },
      changeMoney: function () {
        if (this.money != null && !isNaN(this.money)) {
          alert('充值成功！用户充值了' + this.money)
        } else {
          alert('充值失败，再试试')
        }
      }
    }
  }
</script>

<style>

  .phone {
    padding: 30px;
    margin-bottom: 50px;
  }
  .phone .back{
    float: right;
    border-radius: 6px;
    background-color: #cd9;
    padding: 5px 10px;
    margin-top: -5px;
  }
  .phone-title{
    margin-bottom: 50px;
  }
  .phone input {
    height: 20px;
    border: 2px solid #3BB;
    border-radius: 4px;
  }

</style>
