<template>
  <div id="goodslist">
    <navbar title="商品列表"></navbar>

    <div class="page-loadmore-wrapper">
      <ul class="page-loadmore-list">
        <li v-for="(goods, index) in goodsList" :key="goods.id">
          <a href="javascript:void(0);">
            <img :src="goods.imgUrl" alt="">
            <div class="desc">
              <div class="title">{{goods.title | controlShow(12)}}</div>
              <div class="sell">
                <span>${{goods.sell_price}}</span>
                <s>${{goods.market_price}}</s>
              </div>
              <div class="detail">
                <div class="hot">
                  热卖中
                </div>
                <div class="count">
                  剩{{goods.stock_quantity}}件
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // import imgUrl from '../../assets/logo.png'
  // var goodsList = [
  //   {id: 1, title: '华为荣耀v8 1 为荣耀v8 1 新版为荣耀v8 1 新版为荣耀v8 1 新版为荣耀v8 1 新版新版本', add_time: '2019-04-13T18:11:16.0002',
  //     click: 1, imgUrl: imgUrl, zhaiyao: '华为荣耀v8', market_price: 3999 ,sell_price: 2999, stock_quantity: 4},
  //   {id: 2, title: '华为荣耀v8 2 新版本', add_time: '2019-04-13T18:11:16.0002',
  //     click: 1, imgUrl: imgUrl, zhaiyao: '华为荣耀v8', market_price: 3999 ,sell_price: 2999, stock_quantity: 14},
  //   {id: 3, title: '华为荣耀v8 3 新版本', add_time: '2019-04-13T18:11:16.0002',
  //     click: 1, imgUrl: imgUrl, zhaiyao: '华为荣耀v8', market_price: 3999 ,sell_price: 2999, stock_quantity: 14},
  //   {id: 4, title: '华为荣耀v8 4 新版本', add_time: '2019-04-13T18:11:16.0002',
  //     click: 1, imgUrl: imgUrl, zhaiyao: '华为荣耀v8', market_price: 3999 ,sell_price: 2999, stock_quantity: 42},
  //   {id: 5, title: '华为荣耀v8 5 新版本', add_time: '2019-04-13T18:11:16.0002',
  //     click: 1, imgUrl: imgUrl, zhaiyao: '华为荣耀v8', market_price: 3999 ,sell_price: 2999, stock_quantity: 41},
  //   {id: 6, title: '华为荣耀v8 6 新版本', add_time: '2019-04-13T18:11:16.0002',
  //     click: 1, imgUrl: imgUrl, zhaiyao: '华为荣耀v8', market_price: 3999 ,sell_price: 2999, stock_quantity: 43},
  //   {id: 7, title: '华为荣耀v8 7 新版本', add_time: '2019-04-13T18:11:16.0002',
  //     click: 1, imgUrl: imgUrl, zhaiyao: '华为荣耀v8', market_price: 1999 ,sell_price: 999, stock_quantity: 3},
  // ];

  import api from './../../api/api'
  export default {
    name: "goods",
    data () {
      return {
        goodsList: []
      }
    },
    created() {
      this.getGoodsListData()
    },
    methods: {
      getGoodsListData () {
        api.getDataByGet('/goods/index')
          .then(res=>{
            console.log(res)
            this.goodsList = res.goodsList;
          })
      }
    }
  }
</script>

<style scoped>

  ul {
    height: auto;
    padding: 0;
    margin: 0;
  }
  ul li {
    height: 240px;
    padding: 3px;
    margin: 2px;
    float: left;
    position: relative;
    border: 1px solid #ccc;
  }
  ul li img {
    width: 175px;
    height: 100%;
  }
  .desc {
    position: absolute;
    bottom: 0px;
    left: 20%;
  }
</style>
