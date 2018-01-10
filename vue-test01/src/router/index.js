import Vue from 'vue'
import Router from 'vue-router'
import My from '@/views/my'
import Home from '@/views/home'
import Product from '@/views/products'
import Smile from '@/views/smile'
import Phone from '@/views/phone'
import ShoppingCart from '@/views/shoppingCart'
import Payment from '@/views/payment'
import Other from '@/views/others'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/inProducts',
      name: 'Product',
      component: Product
    },
    {
      path: '/inSmileEveryDay',
      name: 'Smile',
      component: Smile
    },
    {
      path: '/inPhone',
      name: 'Phone',
      component: Phone
    },
    {
      path: '/inShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/inPayment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/inOther',
      name: 'Other',
      component: Other
    }
  ]
})
