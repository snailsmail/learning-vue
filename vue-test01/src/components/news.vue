<template>
  <div class="news">
    <div class='news-detail'>

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
        newsList: []
      }
    },
    mounted () {
      debugger
      var _self = this
      this.$nextTick(function () {
        _self.$ajax.get('../datcd as/news.json').then(function (retObj) {
          debugger
          if (retObj.status === 200) {
            _self.newsList = retObj.data.result.list
          }
        }).catch(function (errObj) {
          console.log('get data error...')
        })
      })
    }
  }
</script>

<style>

</style>
