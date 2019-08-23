<template>
  <div class="container">

      <div class="login-form">
        <div class="row">
          <div class="col-md-4 col-md-offset-4 col-sm-12">

            <div class="login-banner">
              <h1>{{ system.title }}</h1>
            </div>

          </div>
        </div>

        <div class="row">
          <div class="col-md-4 col-md-offset-4 col-sm-12">

            <div class="login-fields">

              <form role="form" method="post" autocomplete="off">

                <!-- 避免自动填充密码 -->
                <input type="text" style="display:none" name="fakeusername"/>
                <input type="password" style="display: none;" name="fakepassword"/>

                <div class="form-group">
                  <label for="u">用户名</label>
                  <input type="text" id="u" name="u" class="form-control" tabindex="1" autocomplete="nope"/>
                </div>

                <div class="form-group">
                  <label for="p">密码</label>
                  <input type="password" id="p" name="p" class="form-control" tabindex="2" autocomplete="new-password"/>
                </div>

                <div class="form-group captcha-part" v-bind:style="{ display : (session.NEED_CAPTCHA?'block':'none') }">

                  <label for="c">验证码</label>
                  <div class="row">
                    <div class="col-md-7 col-sm-12">
                      <input type="text" id="c" name="c" class="form-control" tabindex="3" autocomplete="off"/>
                    </div>
                    <div class="col-md-5 col-sm-12">
                      <a href="#" id="captcha-image">
                        <!-- 这里是验证码图片 -->
                      </a>
                    </div>
                  </div>

                </div>

                <div class="form-group">
                  <div class="pull-left">
                    <a id="language-switcher-zh">中文</a>&nbsp;
                    <a id="language-switcher-en">English</a>
                  </div>
                  <button class="btn btn btn-primary pull-right" type="button" @click="login" tabindex="4">
                    登入
                  </button>
                </div>

              </form>

              <div class="row-block">
                <div class="row"></div>
              </div>
            </div>

          </div>

        </div>

        <div class="row">

        </div>

        <div class="row">
          <div class="col-sm-12">
            <h6 class="copyright">版权所有</h6>
            <h6 style="text-align: center;color: #fff;">
              Version: <span>{{ buildInfo.version }}</span>
              Build Time: <span>{{ buildInfo.time }}</span>
            </h6>
          </div>
        </div>

      </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      system: {
        title: '管理端'
      },
      session: {
        NEED_CAPTCHA: false
      },
      buildInfo: {
        version: '5.0.0-M32-SNAPSHOT',
        time: '2019-03-01 13:34:45'
      }
    }
  },
  methods: {
    login: function () {
      this.$router.push('/cart?goodId=123')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
