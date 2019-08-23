<template>
  <div id="phoneDetail">
    <navbar title="图片详情"></navbar>
    <div class="contentDiv">

      <p class="title">{{phoneDetail.title}}</p>
      <span class="time">发起时间:{{phoneDetail.add_time | timeFormat('yyy-MM-dd')}}</span>
      <span class="click">{{phoneDetail.click}}次点击</span>
      <div class="clearFloat"></div>

      <div>
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        <!--<ul>-->
          <!--<li v-for="(thumImg, index) in phoneDetail.thums" :key="index">-->
            <!--<a href="javascript:void(0);">-->
              <!--<img :src="thumImg.src" alt=""/>-->
            <!--</a>-->
          <!--</li>-->
        <!--</ul>-->
      </div>

      <div class="phoneDesc">
        <p v-html="phoneDetail.content"></p>
      </div>

      <!--评论组件-->
      <comment :cid="$route.query.id"/>
    </div>
  </div>
</template>

<script>

  import imgUrl from '../../assets/logo.png'

  var phoneDetailMap = {
    1: {
      id: 1,
      add_time: "2018-09-05T09:44:22.0002",
      click: 1,
      content: '不要加怒简朴补哟设或设撒，的萨达色的窗色调的' +
      '时发生的仿，盛大发萨达发朴补哟设或设撒，的萨达色的窗色调的' +
      '时发生的仿，盛朴补哟设或设撒，的萨达色的窗色调的时发生的仿，盛朴补哟' +
      '设或设撒，的萨达色的窗色调的时发生的仿，盛朴补哟设或设撒，的萨达色的窗色' +
      '调的时发生的仿，盛朴补哟设或设撒，的萨达色的窗色调的时发生的仿，盛朴补哟设' +
      '或设撒，的萨达色的窗色调的时发生的仿，盛',
      title: '现代简约 名利那个外币啊我是 吊灯滑盖色',
      thums: [
        {src: imgUrl},
        {src: imgUrl},
        {src: imgUrl}
      ]
    }
  }


  export default {
    name: "phone-detail",
    data() {
      return {
        phoneDetail: {},
        slide1: []
      }
    },
    methods: {
      handleClose () {
        console.log('close event')
      }
    },
    created() {
      let id = this.$route.query.id;

      var getImageInfo = () => {
        return this.$axios.get('/getImageInfo/' + id);
      }

      //缩略图
      var getThumImages = () => {
        return this.$axios.get('/getThumImages/' + id);
      }
      console.log(id);
      id = 1;
      this.phoneDetail = phoneDetailMap[1];

      this.phoneDetail.thums.forEach((item, index) => {
        item.msrc = item.src;
        item.h = 600;
        item.w = 600;
        this.slide1.push(item);
      })
      // this.$axios.all([getImageInfo(), getThumImages()])
      //   .then(this.$axios.spread((acct, perms) => {
      //
      // })).catch(err => {
      //   console.log('err', err);
      // });
    }
  }
</script>

<style scoped>
  #phoneDetail .contentDiv {
    padding: 5px;
  }

  #phoneDetail .title {
    font-size: 24px;
    font-weight: bold;
  }

  #phoneDetail .time {
    float: left;
  }

  #phoneDetail .click {
    float: right;
  }
  .clearFloat {
    clear: both;;
  }
  ul {
    height: auto;
    padding: 0;
  }
  ul li {
    height: 100%;
    padding: 5px;
  }
  ul li img {
    width: 108px;
    height: 100%;
    border: 1px solid #ccc;
  }
</style>
