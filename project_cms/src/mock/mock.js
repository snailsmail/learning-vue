//引入mockjs模块
const Mock = require('mockjs')
//获取mock.Random对象
const Random = Mock.Random;


//mock一组数据
const produceNewsData = function () {
  let articles = [];
  for (let i = 0; i < 20; i++) {
    let newArticleObject = {
      id: i + 1,
      title: Random.csentence(5, 10),
      descript: Random.csentence(20, 50),
      imgUrl: Random.dataImage('150x150', 'mock图片'),
      author_name: Random.cname(),
      date: Random.date() + 'T' + Random.time()
    }
    articles.push(newArticleObject);
  }
  return {
    articles: articles
  }
}

const produceNewsDetailData = function () {
  let article = {
    title: Random.csentence(12, 18),
    descript: Random.csentence(80, 350),
    imgUrl: Random.dataImage('150x150', 'mock图片'),
    author_name: Random.cname(),
    date: Random.date() + 'T' + Random.time()
  }
  return {
    article: article
  }
}

const produceGoodsData = function () {
  let goodsList = [];
  for (let i = 0; i < 20; i++) {
    let goods = {
      id: i + 1,
      title: Random.csentence(5, 10),
      zhaiyao: Random.csentence(20, 50),
      imgUrl: Random.dataImage('240x240', 'mock图片'),
      click: Random.natural(1, 29),
      add_time: Random.date() + 'T' + Random.time(),
      market_price: Random.natural(2000, 3000),
      sell_price: Random.natural(3000, 4000),
      stock_quantity: Random.natural(1, 100)
    }
    goodsList.push(goods);
  }
  return {
    goodsList: goodsList
  }
}

Mock.mock('/news/index', 'get', produceNewsData)
Mock.mock('/news/detail/index', 'get', produceNewsDetailData)
Mock.mock('/goods/index', 'get', produceGoodsData)
