<template>
  <div id="comment">
    <p>提交评论</p>
    <textarea name="" id="" cols="44" rows="10" v-model="commentContent"></textarea>
    <el-button type="primary" size="medium" @click.native="commentHandle">发表评论按钮</el-button>

    <div>
      <span>评论列表</span>
      <span>44条评论</span>
    </div>
    <ul class="commentDiv">
      <li v-for="(comment, index) in comments" :key="index">
        {{comment.username}}: {{comment.content}} {{comment.add_time | relativeTime()}}
      </li>
    </ul>
    <el-button type="primary" @click="loadMore(page)">加载更多</el-button>
  </div>
</template>

<script>

  var comments = [
    {id: 1, username: '匿名用户1', content: '大家好！', add_time: '2018-09-05T09:44:22.0002'},
    {id: 2, username: '匿名用户2', content: '大家好！', add_time: '2018-09-05T10:44:22.0002'},
    {id: 3, username: '匿名用户3', content: '大家好！', add_time: '2018-09-05T11:44:22.0002'},
    {id: 4, username: '匿名用户4', content: '大家好大！', add_time: '2018-09-05T12:44:22.0002'},
    {id: 5, username: '匿名用户5', content: '大家好家！', add_time: '2018-09-05T19:44:22.0002'},
    {id: 6, username: '匿名用户6', content: '大家好好！', add_time: '2018-09-06T09:44:22.0002'},
    {id: 7, username: '匿名用户7', content: '大家好大！', add_time: '2018-09-07T09:44:22.0002'},
    {id: 8, username: '匿名用户8', content: '大家好家！', add_time: '2018-09-08T09:44:22.0002'},
    {id: 9, username: '匿名用户9', content: '大家好好！', add_time: '2018-09-09T09:44:22.0002'},
    {id: 10, username: '匿名用户10', content: '大家好！', add_time: '2018-09-10T09:44:22.0002'},
    {id: 11, username: '匿名用户11', content: '大家好家！', add_time: '2018-10-05T09:44:22.0002'},
    {id: 12, username: '匿名用户12', content: '大家好！', add_time: '2018-11-11T09:44:22.0002'},
    {id: 13, username: '匿名用户13', content: '大家好好！', add_time: '2018-12-05T09:44:22.0002'},
  ];

  export default {
    name: "comment",
    props: ['cid'],
    data() {
      return {
        comments: [],
        commentContent: '',
        perPage: 5,
        page: 1
      }
    },
    methods: {
      commentHandle(){
        //api/postcomment/:cid
        if (this.commentContent != '') {

          //默认提交成功
          var currentTime = new Date();
          var month = '0' + (currentTime.getMonth() + 1);
          var date = '0' + currentTime.getDate();
          var hours = '0' + currentTime.getHours();
          var minutes = '0' + currentTime.getMinutes();
          var seconds = '0' + currentTime.getSeconds();
          comments.unshift({id: comments.length + 1, username: '当前用户', content: this.commentContent,
            add_time: currentTime.getFullYear() + '-' + month.substring(month.length-2, month.length)
            + '-' + date.substring(date.length-2, date.length)
          + 'T' + hours.substring(hours.length-2, hours.length)
            + ':' + minutes.substring(minutes.length-2, minutes.length)
            + ':' + seconds.substring(seconds.length-2, seconds.length) + '.0002'});

          this.page = 1;
          this.commentContent = '';
          this.comments = [];
          this.loadMore();
        }

      },
      loadMore(page) {

        if (/^[1-9]+[0-9]*]*$/.test(page)) {
          page = Number(page);
        } else {
          page = 1;
        }

        if (page) {
          var newComments = comments.slice((page - 1) * this.perPage, page * this.perPage);
          if (newComments.length === 0) {
            //TODO
            //要用到与 mint ui中toast中相似的组件实现
            console.log('没有数据了')
          }
          this.comments = this.comments.concat(newComments);
        }
        this.page ++;
      }
    },
    created() {
      let page = this.$route.query.page || '1';
      this.loadMore(page);
    }
  }
</script>

<style scoped>
  #comment {
    text-align: left;
  }
  ul {
    height: auto;
    padding: 0;
  }
  ul li {
    border: 1px solid #ccc;
  }
</style>
