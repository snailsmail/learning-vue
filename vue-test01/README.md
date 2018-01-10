# vue-test01
#用脚手架搭建目录,练习https://github.com/193Eric/webpack-vue-demo

#用json模拟后台数据

#新版vue-webpack-template已经删除dev-server.js，改用webpack.dev.conf.js代替

在const portfinder = require('portfinder')后添加
// nodejs开发框架express，用来简化操作
const express = require('express')
// 创建node.js的express开发框架的实例
const app = express()
// 引用的json地址
var appData = require('../src/datas/news.json')

var newsList = appData.result

var apiRoutes = express.Router()
app.use('/api', apiRoutes)

在devServer里添加
before(app) {
      app.get('/api/news', (req, res) => {
        res.json({
          errno: 0,
          data: newsList
        })
      })
    }

在组件中应用
this.$ajax.get('http://localhost:8081/api/news').then(function (retObj) {
          if (retObj.status === 200) {
            _self.newsList = retObj.data.data.list
          }
        }).catch(function (errObj) {
          console.log('get data error...')
        })

然后要重新npm run dev 启动


#在json中会有图片地址，将图片存放在static文件夹下，在config/index.js中有相关配置（assetsPublicPath）
#项目在开发模式下css中用url（）引用图片是正常的，但是打包后图片路径却并没有被处理或者说特别怪异,导致本地图片资源无法加载(http://www.cnblogs.com/crazycode2/p/7738869.html)

#180110添加商品列表,购物车,登录
