## axios应用

Parcel 是 Web 应用打包工具
https://parceljs.org/
```js
npm i parcel-bundler
```
在package.json中的script中添加
    "start": "parcel ./kxios.html"
直接执行:
```js
npm start
```
监听项目，自动更新


后端基于koa
```js
npm i koa koa-router
```


适配器node执行需要支持,在node文件夹下
```js
node --experimental-modules app.mjs
```
支持es6写法
文件后缀名为.mjs