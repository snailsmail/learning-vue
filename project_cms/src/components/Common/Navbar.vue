<template>
  <div id="navbar">
    <h3>
      <span class="back" @click="goBack"><</span>
      <span class="title">{{title}}</span>
    </h3>
  </div>
</template>

<script>
  export default {
    name: "navbar",
    props: ['title'],
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  #navbar h3 {
    padding: 5px;
    background: #ffaa00;
    margin: 0;
  }
  #navbar .back {
    float: left;
    left: 5px;
    padding-top: 5px;
    padding-left: 10px;
  }
  #navbar .title {
    padding-right: 10px;
  }
</style>
