import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodList from '@/components/GoodList'
import List from '@/components/List'
import Title from '@/components/Title'
import Image from '@/components/Image'
import Cart from '@/components/Cart'
import CartId from '@/components/CartId'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goods/:goodId/user/:userId',
      name: 'GoodList',
      components: {
        default: GoodList,
        title: Title,
        img: Image
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      // 设置子路由
      children: [
        {
          path: 'title',
          component: Title
        },
        {
          path: 'img',
          component: Image
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/cartId/:cartId',
      name: 'CartId',
      component: CartId
    }
  ]
})
