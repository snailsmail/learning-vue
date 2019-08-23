import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/1.1',
      name: 'Vue三大核心概念(属性、事件、插槽)',
      component: () => import('./views/1.1')
    },
    {
      path: '/1.2',
      name: '双向绑定和单向数据流补冲突',
      component: () => import('./views/1.2')
    },
    {
      path: '/1.3',
      name: '虚拟DOM',
      component: () => import('./views/1.3')
    },
    {
      path: '/1.4',
      name: '如何触发组件的更新',
      component: () => import('./views/1.4')
    },
  ]
})