import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/abc',
      name: 'abc',
      component: () => import('./views/ABC.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/def',
      name: 'def',
      component: () => import('./views/DEF.vue')
    },
    {
      path: '/xyz',
      name: 'xyz',
      component: () => import('./views/XYZ.vue')
    },
  ]
})
