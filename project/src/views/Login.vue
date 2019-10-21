<template>
  <div>

    <!-- 顶部导航栏 -->
    <header class="e-header">

      <nav role="navigation" class="navbar navbar-static-top">

        <div class="container-fluid">

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse">

            <ul class="nav navbar-nav">
              <li><img :src="require(`./../assets/img/eams_logo_color.png`)" style="padding-top: 10px"/></li>
            </ul>

            <ul id="e-top-menu" class="nav navbar-nav e-navbar-nav-1">
            </ul>

            <ul class="nav navbar-nav navbar-right e-navbar-nav-3">

              <li><a :text="{ identity }"></a></li>

              <li>
                <a class="role-change" href="#">
                  <div class="role-change-div">
                    <i class="fa fa-exchange"></i>
                    <span :text="{defaultBizType}">
                </span>
                  </div>
                </a>
              </li>

              <li id="managerMessage" style="position: relative;">
                <a href="#"><span>消息</span><span class="point hide"></span></a>
              </li>

              <li class="dropdown" id="accountManagement">
              </li>

              <li class="dropdown" style="display: none">
                <a id="show-todo" data-toggle="collapse" style="font-size: 19px" class="dropdown-toggle" href="#"
                   role="button" aria-expanded="false">
                  <i class="fa fa-list-ul"></i>
                  <div id="todoCount" class="e-corner-mark-red"></div>
                </a>

                <div id="todo-list" style="display: none;">
                  <div class="container-fluid">
                    <div class="todos-title">
                      <i class="text-primary fa fa-angle-double-right close-todo-list"></i><span
                      style="color:#515151; padding-left: 5px">我的待办</span>
                    </div>

                    <hr/>

                    <table width="100%" class="table undone todos-table">
                      <tbody>
                      </tbody>
                    </table>

                    <div class="buttons">
                    </div>

                    <table width="100%" class="table done todos-table">
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>

              <li class="dropdown">
                <!--<a style="font-size: 19px" class="dropdown-toggle" th:href="@{/logout-emitter}">-->
                <a style="font-size: 19px" class="dropdown-toggle" href="#">
                  <i class="fa fa-sign-out"></i>
                </a>
              </li>

            </ul>

          </div>
          <!-- /.navbar-collapse -->

        </div>

      </nav>

    </header>

    <div id="e-content-area">
      <div id="bizTypeSelectPlace"></div>

      <!-- operation area -->
      <div id="e-op-area">

        <div class="container-fluid e-toolbarTab">
          <!-- page header -->
          <div class="toolbarView"></div>

          <!-- /.page header -->

          <div class="embed-responsive e-op-area-iframe-container">

            <h1 id="home-loading" class="text-muted hide">正在加载...</h1>
            <div id="home-page">
              <div id="welcomeTitle">
                <p><span>欢迎使用教务管理系统</span></p>
              </div>
              <div class="container-fluid" id="content">
                <div class="col-sm-6">
                  <div class="content-left">
                    <div class="container-fluid">
                      <div class="col-sm-7">
                        <div id="teachWeek" class="text-center">

                        </div>
                        <div id="calendarDiv">
                          <div id="calendar"></div>

                        </div>

                      </div>
                      <div class="col-sm-5">
                        <div id="lastLoginInfo" class="text-left">
                          <p id="lastLoginTitle">上次登录</p>
                          <div id="loginInfo">
                            <div>
                              <label for="lastLoginData">时间：</label>
                              <p id="lastLoginData"></p>
                            </div>
                            <div>
                              <label for="lastLoginIp">IP：</label>
                              <p id="lastLoginIp"></p>
                            </div>
                            <div>
                              <label for="lastLoginDevice">设备：</label>
                              <p id="lastLoginDevice"></p>
                            </div>
                          </div>
                        </div>
                        <div id="loginCount" class="text-right">
                          <div id="counts"></div>
                          <div><p>使用系统次数</p></div>

                        </div>

                      </div>

                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="container-fluid" id="shortcut"></div>
                </div>
              </div>
              <div id="modalPlace"></div>
            </div>

          </div>

        </div>
        <!-- /.page iframe -->

        <!--<footer class="e-home-footer">-->
        <!--<div>版权所有 <i class="fa fa-copyright"></i> 2015</div>-->
        <!--</footer>-->

      </div>
      <!-- /.operation area -->

    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      logoColor: './assets/img/eams_logo_color.png',
      identity: '管理端',
      defaultBizType: '本科'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
