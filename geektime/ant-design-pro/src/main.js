import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 全部加载
// import Antd from "ant-design-vue"
// import 'ant-design-vue/dist/antd.less'
// Vue.use(Antd)

// 按需加载
// import button from "ant-design-vue/lib/button"
// import 'ant-design-vue/lib/button/style'
// Vue.use(button)

// babel-plugin-import 自动实现按需加载
import { Button, Layout, Icon, Drawer, Radio, Menu } from "ant-design-vue"
Vue.use(Button)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Drawer)
Vue.use(Radio)
Vue.use(Menu)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
