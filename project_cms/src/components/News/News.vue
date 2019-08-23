<template>
  <div id="news">
    <navbar title="新闻信息"></navbar>
    <div class="newsDiv" v-for="item in list" :key="item.id" @click="newsDetailHandle(item.id)">
      <div class="imgDiv">
        <img :src="item.imgUrl" alt="" />
      </div>
      <div class="contentDiv">
        <h4>{{item.title}}</h4>
        <span v-html="item.descript"></span>
        <p>{{item.date | timeFormat('YYYY-MM-DD')}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  // import src1 from '../../assets/logo.png'
  // let list = [
  //   {id: 1, title: '零壹空间发射失利初步定因...',      descript: '&nbsp;&nbsp;零壹空间发射失利初步,定因零壹空间发射失利初零壹空...', imgUrl: src1, date: '2019-04-02T10:22:33'},
  //   {id: 2, title: '娃哈哈进军AI是认真的...',        descript: '&nbsp;&nbsp;娃哈哈进军AI，是认真的娃哈哈进军AI，的娃哈哈进军...', imgUrl: src1, date: '2019-04-02T10:22:33'},
  //   {id: 3, title: '苹果CEO库克的...',     descript: '&nbsp;&nbsp;苹果CEO库克的传记即将发售苹果CEO库克即将发售苹果...', imgUrl: src1, date: '2019-04-02T10:22:33'},
  //   {id: 4, title: '华为三星“近身肉搏”！...',         descript: '&nbsp;&nbsp;华为三星“近身肉搏”！华为三星“近身肉搏为三星“近身肉...', imgUrl: src1, date: '2019-04-02T10:22:33'},
  //   {id: 5, title: '多数美国人不相信...',   descript: '&nbsp;&nbsp;多数美国人不相信自动驾驶汽,车多数美国人不相信驶汽...', imgUrl: src1, date: '2019-04-02T10:22:33'},
  //   {id: 6, title: '共享充电宝进入终...',        descript: '&nbsp;&nbsp;共享充电宝进入,终局之战共享充电宝进入终局共享充电...', imgUrl: src1, date: '2019-04-02T10:22:33'},
  //   {id: 7, title: '索尼北京工厂关闭...',             descript: '&nbsp;&nbsp;索尼北京工厂关闭索尼北京工厂关闭索尼北,关闭索尼北...', imgUrl: src1, date: '2019-04-02T10:22:33'},
  //   {id: 8, title: '苹果的造车梦能实...',        descript: '&nbsp;&nbsp;苹果的造车梦能实现吗苹果的造车梦能,实现吗造车梦能...', imgUrl: src1, date: '2019-04-02T10:22:33'},
  //   {id: 9, title: '余承东：华为单品...',  descript: '&nbsp;&nbsp;余承东：华为单品牌要做全球第一余承东：华为单品全球...', imgUrl: src1, date: '2019-04-02T10:22:33'},
  //   {id: 10, title: '中国IT产业发...', descript: '&nbsp;&nbsp;中国IT产业发展指数位居全球第四中国IT产业数位居...', imgUrl: src1, date: '2019-04-02T10:22:33'},
  //   {id: 11, title: '小米重金投资的下架...',      descript: '&nbsp;&nbsp;小米重金投资的“最右”下架小米重金投资的”下架架...', imgUrl: src1, date: ''},
  //   {id: 12, title: '李彦宏：智能网联...', descript: '&nbsp;&nbsp;李彦宏：智能网联汽车的三种境界李彦宏：智能网联...', imgUrl: src1, date: '2019-04-02T10:22:33'}
  // ];

  import api from './../../api/api'

  export default {
    name: "news",
    data() {
      return {
        list: []
      }
    },
    created() {
      this.getNewsListData()
    },
    methods: {
      getNewsListData () {
        api.getDataByGet('/news/index')
          .then(res=>{
            this.list = res.articles;
          })
      },
      newsDetailHandle (newId) {
        // this.$router.push('/news/detail/' + newId, {id: newId});
        this.$router.push({ name: 'news-detail', params: { newsId: newId, newsList: this.list }});
      }
    }
  }
</script>

<style scoped>
  #news .newsDiv {
    border: 1px solid #ddd;
    margin: 3px;
    text-align: left;
    height: 150px;
  }
  #news .imgDiv {
    width: 150px;
    height: 150px;
    float: left;
  }
  #news .imgDiv img {
    width: 100%;
    height: 100%;
  }
  #news .contentDiv {
    margin-top: -16px;
  }
  #news .contentDiv h4 {
    margin-bottom: 5px;
  }
  #news .contentDiv span {
    font-size: 14px;
    color: #666;
  }
</style>
