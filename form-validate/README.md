# form-validate

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


vue init webpack xxx生成的项目
目的: 写一个与element-ui中表单验证的实现
思路:
  首先三个组件包含关系
  
  父组件    Form        提供模型,提供规则
  子组件    FormItem    显示label,显示input框,显示错误信息
  子子组件  Input       显示数据,验证数据,通知子组件显示信息

依赖 async-validator
