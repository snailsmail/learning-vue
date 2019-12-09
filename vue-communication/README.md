### vue-communication

## 主要实现组件之间的通讯问题

#### >--父传子组件
     实现:通过props传递
#### >--子传父组件
     Vue更推荐单向数据流，所以子组件想修改传递
     的数据，需要通知父组件来修改，使用$emit
     触发父元素传递的事件
     实现:$emit
#### >--兄弟组件
     兄弟组件之间不能直接通信，自诩要父组件搭个
     桥即可，将兄组件获取的值通过父组件传递给
     第组件
#### >--祖先后代 provide & inject
     props一层层传递，若是三层还好，若是嵌套个
     五六层太麻烦，而provide/inject是专门用来
     跨层级提供数据的
     provide和inject不是响应式的，如果子孙元素想
     通知祖先，需要hack下，Vue1中有dispatch和boardcast
     两个方法，但在vue2中被去掉了，我们可以模式实现。
     原理是通过this.$parent和this.$children来获取
     父组件和子组件，递归实现
#### >--dispatch
     子孙组件中添加事件并触发父元素对应事件
     
     在子组件中添加：
   ```html
   <button @click="dispatch('dispatch','哈喽 我是GrandGrandChild1')">dispatch</button>
   ```
   
   ```js
    dispatch(eventName, data) {
      let parent = this.$parent
      // 查找父元素
      while (parent ) {
        if (parent) {
          // 父元素用$emit触发
          parent.$emit(eventName,data)
          // 递归查找父元素
          parent = parent.$parent
        }else{
          break
        }
      }
    }
   ```
   
   父组件中要监听子组件中的事件，在父组件中添加：
   ```js
      mounted () {
        this.$on('dispatch', (data) => {
          this.dispatch(data)
        })
      },
      methods: {
        dispatch (data) {
          this.data = data
        }
      }
   ```
   在父组件的声明周期mounted中监听dispatch事件接
   收子组件传过来的数据
   
  
#### >--boardcast
      和dispatch类似，递归获取$children来向所有子元素广播
     
#### >--全局挂载dispatch和boardcast
    直接挂载到原型链上
    
#### >--没啥关系的组件 event bus
    应用发布订阅模式
    Child2和GrandGrandson1
#### >--vuex
    