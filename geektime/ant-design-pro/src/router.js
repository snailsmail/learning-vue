import Vue from "vue";
import Router from "vue-router";
import RenderRouterView from './components/RenderRouterView'
import NotFound from './views/404'
import Forbidden from './views/403'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import findLast from 'lodash.findlast'
import { check, isLogin } from './utils/auth'
import {notification} from 'ant-design-vue'

Vue.use(Router);

// 路由生成菜单
// 不是全部渲染进去的,应用标志位来判断是否渲染 有name的都渲染(一个约定)
// 第一级目录 hideInMenu(生成的时候设为false不渲染)
// 第二级目录 hideChildrenInMenu
// 添加元信息 需要图标 meta 只一级目录需要图标

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      hideInMenu: true,
      // component: RenderRouterView, // 指向固定组件
      // component: { render: h => h("router-view") }, // 用render函数挂载登录注册页面
      component: () =>
          import(/* webpackChunkName: "layout" */ "./layouts/UserLayout"), // 用异步加载组件
      children: [
        {
          path: "/user",
          redirect: '/user/login'
        },
        {
          path: "/user/login",
          name: "login",
          component: () =>
              import(/* webpackChunkName: "user" */ "./views/User/Login.vue")
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
              import(/* webpackChunkName: "user" */ "./views/User/Register.vue")
        },
      ]
    },
    {
      path: "/",
      meta: {authority: ["admin", "user"]},
      component: () =>
          import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
      children: [
          // dashboard
        {
          path: "/",
          redirect: "/dashboard/analysis"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          meta: {icon: "dashboard", title: "仪表盘"},
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              meta: {title: "分析页"},
              component: () =>
                  import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/Analysis")
            }
          ]
        },
          // form
        {
          path: "form",
          name: "form",
          meta: {icon: "form", title: "表单", authority: ["admin"]},
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/form/basic-form",
              name: "basicform",
              meta: {title: "基础表单"},
              component: () =>
                  import(/* webpackChunkName: "form" */ "./views/Forms/BasisForm")
            },
            {
              path: "/form/step-form",
              name: "stepform",
              meta: {title: "分步表单"},
              hideChildrenInMenu: true,
              component: () =>
                  import(/* webpackChunkName: "form" */ "./views/Forms/StepForm"),
              children: [
                {
                  path: "/form/step-form",
                  redirect: "/form/step-form/info"
                },
                {
                  path: "/form/step-form/info",
                  name: "info",
                  component: () =>
                      import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step1")
                },
                {
                  path: "/form/step-form/confirm",
                  name: "confirm",
                  component: () =>
                      import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step2")
                },
                {
                  path: "/form/step-form/result",
                  name: "result",
                  component: () =>
                      import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step3")
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: "/403",
      name: "403",
      hideInMenu: true,
      component: Forbidden
    },
    {
      path: "*",
      name: "404",
      hideInMenu: true,
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start()
  }
  const record = findLast(to.matched, recode => recode.meta.authority)
  if (record && !check(record.meta.authority)) {
    if (!isLogin() && to.path !== '/user/login') {
      next({
        path: '/user/login'
      })
    } else if (to.path !== '/403') {
      notification.error({
        message: '403',
        description: '您没有权限访问,请联系管理员咨询.'
      })
      next({
        path: '/403'
      })
    }
    NProgress.done()
  }
  next()
})

export default router;
