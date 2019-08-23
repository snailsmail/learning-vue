<template>
  <div id="phone">
    <navbar title="图片列表"></navbar>
    <div>
      <ul>
        <li v-for="category in categoryList" :key="category.id" :class="{cagetorySelected: currentCategory == category.id}"
        @click="changeCategoryHandle(category.id)">
          {{category.name}}
        </li>
      </ul>
    </div>
    <div class="phoneListDiv">
        <div v-for="phone in phoneList" :key="phone.id">
          <div id="phoneImg">
            <router-link :to="{name: 'phone.detail', query:{id: phone.id}}">
              <img :src="phone.imgSrc" alt=""/>
              {{phone.content}}
            </router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import imgUrl from '../../assets/logo.png'
  var phoneList = [
    {id: 1, category: 'all', imgSrc: imgUrl, content: '风景图片1'},
    {id: 2, category: 'fengjing', imgSrc: imgUrl, content: '风景图片2'},
    {id: 3, category: 'jiaju', imgSrc: imgUrl, content: '家具图片1'},
    {id: 4, category: 'katong', imgSrc: imgUrl, content: '家具图片2'},
    {id: 5, category: 'shuaige', imgSrc: imgUrl, content: '帅哥图片1'},
    {id: 6, category: 'meinv', imgSrc: imgUrl, content: '帅哥图片2'},
    {id: 7, category: 'huahua', imgSrc: imgUrl, content: '卡通图片1'},
    {id: 8, category: 'caocao', imgSrc: imgUrl, content: '卡通图片2'},
    {id: 9, category: 'xiaoshu', imgSrc: imgUrl, content: '卡通图片3'},
    {id: 10, category: 'xiaogou', imgSrc: imgUrl, content: '卡通图片12'},
    {id: 11, category: 'xiaodongwu', imgSrc: imgUrl, content: '卡通图片13'},
    {id: 12, category: 'diannao', imgSrc: imgUrl, content: '卡通图片23'},
    {id: 13, category: 'shouji', imgSrc: imgUrl, content: '卡通图片33'},
    {id: 14, category: 'shenghuo', imgSrc: imgUrl, content: '卡通图片53'}
  ]

  var categoryList = [
    {id: 'all', name: '全部'},
    {id: 'fengjing', name: '风景图片'},
    {id: 'jiaju', name: '家具图片'},
    {id: 'katong', name: '卡通图片'},
    {id: 'shuaige', name: '帅哥图片'},
    {id: 'meinv', name: '美女图片'},
    {id: 'huahua', name: '花花图片'},
    {id: 'caocao', name: '草草图片'},
    {id: 'xiaoshu', name: '小树图片'},
    {id: 'xiaogou', name: '小狗图片'},
    {id: 'xiaodongwu', name: '小猫图片'},
    {id: 'diannao', name: '电脑图片'},
    {id: 'shouji', name: '手机图片'},
    {id: 'shenghuo', name: '生活图片'}
  ]

  var phoneListByCategory = {
    "all": [

    ],
    "shuaige": [
      {id: 5, category: 'shuaige', imgSrc: imgUrl, content: '帅哥图片1'},
      {id: 6, category: 'meinv', imgSrc: imgUrl, content: '帅哥图片2'},
    ],
    "fengjing": [
      {id: 1, category: 'all', imgSrc: imgUrl, content: '风景图片1'},
      {id: 2, category: 'fengjing', imgSrc: imgUrl, content: '风景图片2'},
    ],
    "jiaju": [
      {id: 3, category: 'jiaju', imgSrc: imgUrl, content: '家具图片1'},
      {id: 4, category: 'katong', imgSrc: imgUrl, content: '家具图片2'},
    ],
    "katong": [
      {id: 7, category: 'huahua', imgSrc: imgUrl, content: '卡通图片1'},
      {id: 8, category: 'caocao', imgSrc: imgUrl, content: '卡通图片2'},
      {id: 9, category: 'xiaoshu', imgSrc: imgUrl, content: '卡通图片3'},
      {id: 10, category: 'xiaogou', imgSrc: imgUrl, content: '卡通图片12'},
      {id: 11, category: 'xiaodongwu', imgSrc: imgUrl, content: '卡通图片13'},
      {id: 12, category: 'diannao', imgSrc: imgUrl, content: '卡通图片23'},
      {id: 13, category: 'shouji', imgSrc: imgUrl, content: '卡通图片33'},
      {id: 14, category: 'shenghuo', imgSrc: imgUrl, content: '卡通图片53'}
    ]
  }
  export default {
    name: "phone",
    data() {
      return {
        phoneList: phoneList,
        categoryList: categoryList,
        currentCategory: 'all'
      }
    },
    methods: {
      changeCategoryHandle (id) {
        if ('all' == id) {
          this.phoneList = phoneList;
        } else {
          this.phoneList = phoneListByCategory[id];
        }
        this.currentCategory = id;
      }
    },
    beforeRouteUpdate (to, form, next) {
      console.log(to)
      next();
    }
  }
</script>

<style scoped>
  #phone .cagetorySelected {
    color: crimson;
  }
  #phone #phoneImg {
    width: 350px;
    height: 300px;
    padding: 10px;
  }
  #phone #phoneImg img {
    width: 100%;
    height: 100%;
  }
  ul li{
    float: left;
    padding: 0 10px;
  }
  .phoneListDiv {
    margin-top: -50px;
  }
</style>
