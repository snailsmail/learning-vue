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

##########################################

###vue init webpack xxx生成的项目
####目的: 写一个与element-ui中表单验证的实现
####思路:
  首先三个组件包含关系
  
  父组件    MyForm         提供模型,提供规则
  子组件    MyFormItem     显示label,显示input框,验证并显示错误信息
  子子组件  MyInput        显示数据,通知子组件显示校验

依赖 async-validator

####思考:
  1.MyInput组件是自定义组件,它如何实现双向绑定
  2.MyFormItem是怎么知道执行校验的,它是如何知道input状态的,它是怎么获取对应的数据模型的
  3.MyForm是怎么进行全局校验的,它是用什么办法把数据模型和校验规则传递给子组件的

####实现:

#####1. MyInput组件如何实现双向绑定
  
  > v-model是语法糖.实现自定义组件双绑需要指定:value和@input

#####2. MyFormItem是怎么知道执行校验的

  > 在子子组件中也就是MyInput组件中,输入内容也就是input方法中通知子组件MyFormItem该执行校验了

  具体实现
  
  在MyInput中,通知校验
  
``` js
    onInput (e) {
      // ...
      // $parent指向MyFormItem
      this.$parent.$emit('validate)
    }
```
    
  在MyFormItem中监听校验通知
  
``` js
    mounted () {
      // 监听校验事件
      this.$on('validate', () => {
        this.validate()
      })
    },
    methods: {
      validate() {
        // 具体的校验方法
        // TODO
      }
    }
``` 

#####3. MyFormItem它是怎么获取对应的数据模型的,以及MyForm它是用什么办法把数据模型和校验规则传递给子组件的
  应用vue的provide/inject进行实现
  
  在MyForm中
``` js
    provide () {
    // provide写法与data相似
    return () {
      form: this // 将组件实力作为提供者,子代组件方便获取
    }
  }
```
  
  在MyFormItem中
  > inject: ['form'], //注入,写法与prop获取属性相似

  MyFormItem组件通过注入可以获取到父组件提供的数据模型以及规则

#####4. MyFormItem是怎么知道执行校验的
  安装async-validator: ``` bash npm i async-validator -S ```
  
``` js
  import Schema from 'async-validator'
  validate () {
    // 获取对应的MyFormItem校验规则
    const rules = this.form.rules[this.prop]
    // 获取校验值
    const value = this.form.model[this.prop]
    //校验描述对象
    const descriptor = { [this.prop]: rules }
    //创建校验器
    const validator = new Schema(descriptor)
    validator.validate( { [this.prop]: value }, errors => {
      if (errors) {
        //将错误信息显示
        this.error = errors[0].message
      } else {
        // 校验通过
        this.error = ''
      }
    })
  }
```
  
 #####5. MyForm是怎么进行全局校验的
    MyFormItem中的validator.validate()是返回的promise对象,所以要将validator.validate()返回出来
    
  MyForm中提供validate方法
  
``` js
  validate (func) {
    // 调用所有包含prop属性的子组件的validate方法,并得到promise数组
    const tasks = this.$children.filter(item => item.prop).map(item => item.validate())
   // 所有任务必须全部成功才算校验通过,任意一个不通过则检验失败
   Promise.all(tasks).then(() => func(true)).catch(() => func(false))
  }
```
