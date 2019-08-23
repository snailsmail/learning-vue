<template>
  <div id="newsDetail">
    <navbar title="新闻详情"></navbar>
    <div class="newsDetailDiv">
      <div class="imgDiv">
        <img :src="detail.imgUrl" alt="" />
      </div>
      <div class="contentDiv">
        <h4>{{detail.title}}</h4>
        <span v-html="detail.descript"></span>
        <p>{{detail.date | timeFormat('YYYY-MM-DD')}}</p>
      </div>
    </div>
  </div>
</template>

<script>

  import api from './../../api/api'

  export default {
    name: "news-detail",
    data() {
      return {
        detail: {}
      }
    },
    created() {
      this.getNewsListData()
    },
    methods: {
      getNewsListData () {
        api.getDataByGet('/news/detail/index')
          .then(res=>{
            this.detail = res.article;
          })
      },
      getDetailByNewsId(id) {
        this.detail = this.detail;
      }
    },
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      next(vm => {
        vm.getDetailByNewsId(to.params.newsId);
      });
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      this.getDetailByNewsId(to.params.newsId);
      next();
    }
  }
</script>

<style scoped>

</style>
