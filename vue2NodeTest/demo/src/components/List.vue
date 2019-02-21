<template>
  <div>
    这是一个商品列表
    <router-link to="/list/title">标题</router-link>
    <router-link to="/list/img">图片</router-link>

    <div>
      <router-view></router-view>
    </div>

    <router-link to="/cart">跳转到购物车</router-link>
    <br>
    <button @click="jump">跳转到购物车</button>
    <br>
    <!-- 命名路由 -->
    <router-link v-bind:to="{name: 'CartId', params: {cartId: 123}}">跳转到购物车</router-link>
  </div>
</template>

<script>
// 嵌套路由
export default {
  name: 'list',
  data () {
    return {
      'msg': '这是一个Home模板页'
    }
  },
  methods: {
    jump () {
      this.$router.push('/cart?goodId=123')
    }
  }
}
</script>

<style scoped>

</style>
