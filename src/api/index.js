import axios from 'axios'
import local from '@/utils/local.js'
import router from 'vue-router'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 设置默认请求头
if (local.getUser()) {
  axios.defaults.headers.Authorization = `Bearer ${local.getUser().token}`
}
// 登录成功,存储token,跳转页面,再次发请求,此时请求头中没有token,这时需要在每一次请求前的时候，获取token，设置token
// axios提供的请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前设置token
  const user = local.getUser() || {}
  config.defaults.headers.Authorization = `Bearer ${user.token}`
  return config
}, function (error) {
  // 做一些有请求错误的事情
  return Promise.reject(error)
})

// token是有时效的,如果传一个失效的token给服务器,或者传个错误的token,会报401错误,这时需要重新回登录页面重新获取有效的token
// axios提供的响应拦截器
axios.interceptors.response.use(function (response) {
  // 使用响应数据返回响应；
  return response
}, function (err) {
  // 使用响应错误返回 获取状态码  判断是不是401  如果是 跳转登录页面
  if (err.response.status === 401) {
    // 使用vue-router进行跳转
    return router.push('/login')
  }
  Promise.reject(err)
})

export default axios
