#!/usr/bin/env bash
npm config get registry # 检查仓库镜像库
npm config set registry=http://registry.npmjs.org
echo '请进行登录相关操作：'
npm login # 登录
echo '========publishing========='
npm publish # 发布
# 可使用 npm config set registry=https://registry.npm.taobao.org 将本地仓库镜像指向淘宝镜像
echo '发布完成'
exit