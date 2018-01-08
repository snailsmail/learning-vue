<template>
  <footer class="footer">
    <ul>
      <li v-for="item in items">{{item.li}}</li>
    </ul>
    <p>
      Copyright&nbsp;&copy;&nbsp;{{author}} - 2017 All rights reserved
    </p>
  </footer>
</template>

<script>
  export default {
    name: 'footerDiv',
    data () {
      return {
        items: [
          {li: '呵呵哒'},
          {li: '呵呵哒'},
          {li: '呵呵哒'},
          {li: '呵呵哒'},
          {li: '呵呵哒'}
        ]
      }
    },
    computed: {
      author () {
        return this.$store.state.author
      }
    }
  }
</script>

<style>
  .footer {
    margin: 0 auto;
    height: 80px;
    background-color: #6d8088;
    color: #fff;
    text-align: center;
  }
  .footer ul {
    padding: 4px 0;
    margin: 0;
    overflow: hidden;
  }
  .footer ul li {
    list-style: none;
    display: inline;
    padding: 10px 20px 0;
  }
</style>
