<template>
  <div class="shoppingCart">
    <div class="shopping-cart-title">
      <span>购物车</span>
      <button v-on:click="goBack()">返回</button>
    </div>
    <div class='shopping-cart-detail'>
      <div class="detail" v-for="product in shoppingList">
        <img v-bind:src="product.productImage" v-bind:alert="product.productName" v-bind:title="product.productName"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{product.productName}}&nbsp;&nbsp;&nbsp;价格：{{product.productPrice}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shoppingCart',
    components: {

    },
    data () {
      return {
        shoppingList: []
      }
    },
    mounted () {
      var _self = this
      this.$nextTick(function () {
        _self.$ajax.get('http://localhost:8081/api/products').then(function (retObj) {
          if (retObj.status === 200) {
            _self.shoppingList = retObj.data.data.list
          }
        }).catch(function (errObj) {
          console.log('get data error...')
        })
      })
    },
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

  .shoppingCart {
    padding: 30px;
    margin-bottom: 50px;
  }
  .shoppingCart button{
    float: right;
    border-radius: 6px;
    background-color: #cd9;
    padding: 5px 10px;
    margin-top: -5px;
  }
  .shopping-cart-detail *{
    vertical-align: middle;
  }
  .shopping-cart-detail .detail {
    padding: 20px;
    /*width: 80px;*/
    /*height: 100px;*/
  }
  .shopping-cart-detail .detail img{
    width: 140px;
    height: 100px;
  }
  .shopping-cart-title {
    margin-bottom: 50px;
  }

</style>
