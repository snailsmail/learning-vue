import Vue from 'vue'
import Router from 'vue-router'
import My from '@/views/my'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
