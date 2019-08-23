// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Axios from 'axios'
Vue.prototype.$axios = Axios

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import '../static/css/myStyle.css'
Vue.config.productionTip = false

//全局过滤器
//时间格式过滤器(npm install moment -S)
import Moment from 'moment'
Vue.filter('timeFormat', function (value, format) {
  return Moment(value).format(format)
})

Vue.filter('relativeTime', function (value) {
  return Moment(value).fromNow();
})

//设置 中文显示
Moment.locale('zh-cn')

//控制字数显示的过滤器
Vue.filter('controlShow', function (str, num) {
  if (str.length <= num) {
    return str;
    } else if (str.length > num) {
      return str.substr(0, num);
    }
})

//全局组件
import Navbar from '@/components/Common/Navbar'
Vue.component(Navbar.name, Navbar)

//注册全局的评论组件
import Comment from '@/components/Common/Comment'
Vue.component(Comment.name, Comment)

//图片查看器
import VuePreview from 'vue-preview'
Vue.use(VuePreview);//内部会进行Vue.component('vue-preview', {});

//引入mock.js文件
require('@/mock/mock.js');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
