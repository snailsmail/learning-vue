import axios from 'axios'
import Vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//请求拦截器
axios.interceptors.request.use(function (config) {
  return config
}, function (err) {
  return Promise.reject(err)
})

//响应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

//封装axios的post请求
export function fetchByPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })
}
//封装axios的get请求
export function fetchByGet(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  getDataByPost(url, params) {
    return fetchByPost(url, params)
  },
  getDataByGet(url) {
    return fetchByGet(url);
  }
}
