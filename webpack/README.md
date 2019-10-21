devDependencies是开发过程中会用到的依赖，比如压缩，热加载等
而dependencies是正式上线的产品环境

https://www.jianshu.com/p/42e11515c10f

webpack:

webpack是一种模块化的解决方案，可以分析项目的结构，找到js模块以及其它一些浏览器不能直接执行的拓展语言（scss，typeScript等），并将其转换和打包为合适的格式供浏览器使用
    工作方式：
        把项目当做一个整体，通过给定主文件，webpack将从这个文件开始找到项目中的所有依赖文件，使用loaders处理，最后打包成一个或多个浏览器可识别的js文件
grunt/gulp是一种优化前段开发流程的工具，可用webpack代替
    工作方式：
        在一个文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，执行步骤命令可以自动替你完成这些任务

二者比较：webpack处理速度更快更直接，能打包更多不同类型的文件

1.通过配置文件来使用webpack
创建webpack.config.js文件配置相关的属性(CommonJS module)

2.在package.js中的script关键字中添加start属性（npm可以引导任务执行，npm start可以代替命令行： node_modules/.bin/webpack app/main.js public/bundle.js），
start属性的值会按照一定的顺序寻找命令对应的位置，本地的node_modules/.bin路径就在这个寻找清单中。

3.webpack的强大功能
    1)生成Source Maps(使调试更容易)
        devtool关键字
        选项
            source-map
            cheap-module-source-map
            eval-source-map：一般只在开发阶段中使用（应用于中小型项目）
            cheap-module-eval-source-map： 构建速度更快，不利于调试，一般大型项目为了节省时间成本而使用
    2）构建本地服务器（基于nodejs构建） 依赖webpack-dev-server,使用命令 npm install --save-dev webpack-dev-server 安装webpack-dev-server
        devserver关键字
        选项
            contentBase： 默认webpack-dev-server会为根文件夹提供本地服务器，设置文件目录下的文件提供本地服务器
            port: 默认监听端口，若省略，为8080
            inline： 设为true，当源文件改变则自动刷新页面
            historyApiFallback： 在开发单页面应用时非常有用，依赖HTML5 history API ,若设为true，则所有跳转将指向index.html
                H5的history api新增了三个方法：
                    pushState('参数'， 'title', '/url'),
                    replaceState(data, title [, url]),
                    popState需要浏览器操作前进或后退时或者调用history.go，history.back，history.forward方法也会触发监听（window.onpopstate = function (e)
                    { var state = e.state}）
    3)Loaders(webpack有能力调用外部的脚本或工具，实现对不同格式的文件的处理，比如说分析转换scss为css，或者把下一代的js文件（es6，es7）转换为现代浏览器兼容的js文件)
        modules关键字
        选项
            test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
            loader：loader的名称（必须）
            include/exclude:手动添加必须处理的文件或文件夹或者屏蔽不需要处理的文件或文件夹（可选）
            query:为loaders提供额外的设置选项（可选）
    4)Babel(是一个编译js的平台，可以使用最新的js代码而不用管新标准是否被当前使用的浏览器完全支持，能使用基于js进行的拓展语言，如react的jsx)
        babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中
        （解析es6的babel-env-preset包，解析jsx的babel-preset-react包）
        添加依赖命令
          ``` bash npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react ```

        //测试
        安装react, react-dom 命令``` bash npm install --save react react-dom ```

    5)一切皆模块
        webpack有个不可不说的优点，可以把所有的文件都可以当做模块处理，js，css，fonts以及图片等等都可以通过合适的loader被处理
        i) CSS
            webpack提供两个工具处理样式表，css-loader和style-loader,二者处理的任务不同，css-loader使你能够使用类似@imprt和url(...)的方式实现require()的功能，
            style-loader将所有的计算后的样式加入页面中，二者组合在一起能够把样式表嵌入webpack打包后的js文件中
            //安装
            npm install --save-dev style-loader css-loader
            在webpack.config.js中配置css，要将style-loader放在css-loader上面
        ii)CSS modules
            css的大量样式会存在全局变量，对维护和修改非常困难
            webpack对CSS modules提供非常好的致辞，避免全局污染
                在loader中配置添加
        iii)css预处理器
            less loader
            sass loader
            stylus loader
            postcss loader

            举例来说如何使用PostCSS，我们使用PostCSS来为CSS代码自动添加适应不同浏览器的CSS前缀。
            先要安装postcss-loader和autoprefixer（自动添加前缀的插件） npm install --save-dev postcss-loader autoprefixer
            再在webpack.config.js中的css的loader中添加
            然后在根目录下新建postcss.config.js
    6)插件（Plugins）
        插件（Plugins）是用来拓展Webpack功能的，它们会在整个构建过程中生效，执行相关的任务。
        使用插件的方法
            要使用某个插件，我们需要通过npm安装它，然后要做的就是在webpack配置中的plugins关键字部分添加该插件的一个实例（plugins是一个数组）
            i）添加版权声明插件 BannerPlugin
            ii)html模板
                html-webpack-plugin,打包后生成新的index.html

                安装命令：npm install --save-dev html-webpack-plugin
                可以先创建一个文件模板，在编译过程中插件可以依据此模板生成最终的html页面，会自动添加所依赖的css，js登文件。
            iii)热加载插件
                Hot Module Replacement(HMR)允许修改一组代码后，自定刷新实时预览修改后的效果

                需要做两步配置
                1.在webpack配置文件中添加HMR插件
                2.在webpack dev server中添加‘hot’参数
                需要babel结合实现
                    babel中有个叫做react-transform-hmr插件
                    需要安装babel-plugin-react-transform react-transform-hmr(这是对react实现热加载)
            iv)优化插件
            OccurenceOrderPlugin:为组件分配ID，通过这个插件可以分析和优先考虑使用最多的模块，并为它们分配最小的ID（内置插件，可以用webpack直接调用）
            UglifyJsPluginL压缩JS代码（内置插件，可以用webpack直接调用）
            ExtractTextPlugin:分离css和js文件，命安装令npm install --save-dev extract-text-webpack-plugin
            clean-webpack-plugin

4.开发阶段的构建
    新建webpack.production.config.js


















