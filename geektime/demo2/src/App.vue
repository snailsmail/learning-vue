<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">

  <div id="app">
    {{msg}}

    <div>
      <input type="text" v-model="info"/>
      <button @click="handleClick">添加</button>
    </div>
    <ul>
      <!--<li v-for="item in list">-->
      <!--{{item}}-->
      <!--</li>-->
      <todo-item v-for="item in list" v-bind:key="item">
        <template v-slot:item="itemProps">
          <!--<span style="font-size: 20px;">{{item}}</span>-->
          <span :style="{fontSize: '20px', color: itemProps.checked ? 'red' : 'blue'}">{{item}}</span>
        </template>
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'

export default {
  name: 'app',
  data () {
    return {
      msg: 'hello geektime',
      info: '',
      list: []
    }
  },
  methods: {
    handleClick () {
      this.list.push(this.info);
      this.info = '';
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style>
</style>
