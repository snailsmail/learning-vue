<template>
  <div class="news">
    <div class='news-detail'>
      <div class="detail" v-for="news in newsList">
        <router-link v-bind:to="news.newsUrl">
          <img v-bind:src="news.newsImage" v-bind:alert="news.newsName" v-bind:title="news.newsName"/>
          {{news.newsName}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'news',
    components: {

    },
    data () {
      return {
        newsList: []
      }
    },
    mounted () {
      var _self = this
      this.$nextTick(function () {
        _self.$ajax.get('http://localhost:8081/api/news').then(function (retObj) {
          if (retObj.status === 200) {
            _self.newsList = retObj.data.data.list
          }
        }).catch(function (errObj) {
          console.log('get data error...')
        })
      })
    }
  }
</script>

<style>

  .news-detail {
    display: flex;
    flex-flow: row wrap;
    color: #46b8da;
  }
  .news-detail .detail {
    padding: 20px;
    width: 80px;
    height: 100px;
  }
  .news-detail .detail img{
    width: 80px;
    height: 80px;
  }
  .news-detail .detail a {
    text-decoration: none;
  }

</style>
