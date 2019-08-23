import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Cart from '@/components/Cart/Cart'
import Vip from '@/components/Vip/Vip'
import Search from '@/components/Search/Search'

import News from '@/components/News/News'
import NewsDetail from '@/components/News/NewsDetail'
import Phone from '@/components/Phone/Phone'
import Phone1 from '@/components/Phone/Phone1'
import PhoneDetail from '@/components/Phone/PhoneDetail'
import Goods from '@/components/Goods/Goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/news/detail/:newsId',
      name: 'news-detail',
      component: NewsDetail
    },
    {
      path: '/phone',
      name: 'phone',
      component: Phone
    },
    {
      path: '/phone/detail',
      name: 'phone.detail',
      component: PhoneDetail
    },
    {
      path: '/phone/list/:categoryId',
      name: 'phone.list',
      component: Phone1
    },
    {
      path: '/goods/list/:page',
      name: 'goods.list',
      component: Goods
    }
  ]
})
