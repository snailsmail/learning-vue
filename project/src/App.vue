<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .container {
    margin-top: 60px;
  }
  body.e-home{
    padding:0!important;
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-position:top center;
    -webkit-background-size:cover;
    background-size:cover;
  }
.login-form .login-banner {
  padding: 1px 0 14px 25px;
  color: #fff;
  background: rgba(48,65,96,.8);
  border-radius: 3px 3px 0 0;
}
.login-form .login-fields {
  z-index: 3;
  padding: 20px;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 13px!important;
  background-color: #fff;
  border-radius: 0 0 4px 4px;
}
.pull-left {
  float: left !important;
}
.pull-right {
  float: right !important;
}

h1,
.h1 {
  font-size: 31px;
}
h2,
.h2 {
  font-size: 25px;
}
h3,
.h3 {
  font-size: 21px;
}
h4,
.h4 {
  font-size: 15px;
}
h5,
.h5 {
  font-size: 12px;
}
h6,
.h6 {
  font-size: 11px;
}
p {
  margin: 0 0 9px;
}
.lead {
  margin-bottom: 18px;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.4;
}
h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 18px;
  margin-bottom: 9px;
}
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  margin-top: 9px;
  margin-bottom: 9px;
}
a {
  color: #428bca;
  text-decoration: none;
}

a {
  background-color: transparent;
}
.login-form .copyright {
  color: #fff;
  text-align: center;
}
.form-group {
   margin-bottom: 2px;
 }
</style>
