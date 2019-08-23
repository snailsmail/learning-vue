<template>
  <div id="app">
    <el-container>
      <el-header>
        {{headerMsg}}
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <el-row v-model="selected" v-on:click.native="footerClick">
          <el-col v-for="(footer, index) in footerList" :class="{ selected : selected == footer.name}" :key="footer.name" :id="footer.name" :span="6">
            <div class="grid-content bg-purple"></div>
            <div class="hide" :class="{ball : selected == footer.name && index == 2}"></div>
            {{footer.title}}
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

  //TODO
  //1.如果访问上次记录了不是首页的footer的tab，但组件和header信息显示都没有同步修改，需要currentIndex去记录selected是哪一个
  let hearderStr = {'home': '首页', 'vip': 'vip', 'cart': '购物车', 'search': '搜索'};
  let footerList = [
    {name: 'home', title: '首页'},
    {name: 'vip', title: 'Vip'},
    {name: 'cart', title: '购物车'},
    {name: 'search', title: '搜索'},
  ];
  export default {
    name: 'App',
    data() {
      return {
        headerMsg: hearderStr['home'],
        selected: 'home',
        footerList: footerList,
        currentIndex: 0,
        sumNumber: 0
      }
    },
    methods: {
      footerClick(event) {
        this.selected = event.target.getAttribute('id');
      }
    },
    watch: {
      selected() {
        this.headerMsg = hearderStr[this.selected];
        this.$router.push(this.selected);
      }
    }
  }
</script>

<style>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding: 0;
    margin: 0;
    height: 547px;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
    margin: 0;
  }
  .selected {
    background-color: #ffaa00;
    position: relative;
  }
  .ball {
    width: 26px;
    height: 26px;
    background-color: crimson;
    position: absolute;
    top: 0px;
    right: 0px;
    border-radius: 13px;
    color: #ffffff;
  }
</style>
