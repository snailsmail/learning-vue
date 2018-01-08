<template>
  <header class="header">
    <ul>
      <li v-for="item in items">{{item.li}}</li>
    </ul>
    <input v-model="authorName" />
    <button v-on:click="changeAuthor">确定</button>
  </header>
</template>

<script>
  export default {
    name: 'headerDiv',
    data () {
      return {
        items: [
          {li: '哒哒呵'},
          {li: '哒哒呵'},
          {li: '哒哒呵'},
          {li: '哒哒呵'},
          {li: '哒哒呵'}
        ],
        authorName: ''
      }
    },
    methods: {
      changeAuthor: function () {
        this.$store.state.author = this.authorName
        // this.$store.commit("newAuthor", this.authorName)
      }
    }
  }
</script>

<style>
  .header {
    margin: 0 auto;
    height: 80px;
    background-color: #6d8088;
    color: #fff;
    text-align: center;
  }
  .header ul {
    padding: 4px 0;
    margin: 0;
    overflow: hidden;
  }
  .header ul li {
    list-style: none;
    display: inline;
    padding: 10px 20px 0;
  }
</style>
