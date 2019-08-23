<template>
  <div id="home">

    <template>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in items" :key="item.id">
          <img :src="item.srcUrl" alt=""/>
        </el-carousel-item>
      </el-carousel>
    </template>

    <el-row>
      <el-col :span="6"  v-for="item in items" :key="item.id" @click.native="linkSrc(item)" :title="item.name">
        <img class="gridImg" :src="item.srcUrl" alt="" />
        <div class="grid-content bg-purple"></div>
        {{item.name}}
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import src1 from '../../assets/logo.png'

  var items = [
    {id: 1, name: '新闻信息', srcUrl: src1, url: '/news'},
    {id: 2, name: '图片列表', srcUrl: src1, url: '/phone'},
    {id: 3, name: '图片列表1', srcUrl: src1, url: {name: 'phone.list', params: {categoryId: 'all'}}},
    {id: 4, name: '商品展示', srcUrl: src1, url: {name: 'goods.list', params: {page: 1}}},
    {id: 5, name: '优惠55', srcUrl: src1, url: '/news'}
  ];

  export default {
    name: "home",
    data () {
      return {
        items: items
      }
    },
    created () {
      // this.$axios.get('');
    },
    methods: {
      linkSrc: function (item) {
        this.$router.push(item.url);
      }
    }
  }
</script>

<style scoped>
  #home {
    overflow: auto;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 80px;
    width: 100%;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .gridImg {
    width: 50px;
    height: 50px;
  }
</style>
