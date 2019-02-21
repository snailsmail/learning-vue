<template>
  <div>
    这是一个商品列表
    <span>{{$route.params.goodId}}</span>
    <br/>
    <span>{{$route.params.userId}}</span>
  </div>
</template>

<script>
// 动态路由配置
export default {
  name: 'good-list',
  data () {
    return {
      'msg': '这是一个Home模板页'
    }
  }
}
</script>

<style scoped>

</style>
