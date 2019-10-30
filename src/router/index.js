import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login/index.vue'
import home from '@/views/home'
import welcome from '@/views/welcome'
import notFound from '@/views/404'
import local from '@/utils/local.js'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
    path: '/login',
    component: Login
  }, {
    path: '/',
    component: home,
    children: [{
      path: '',
      component: welcome
    }]
  }, {
    path: '*',
    component: notFound
  }]
})
// 除了登录页面,其他页面访问的时候都需要判断是否登录了,在跳转路由前判断本地是否存储过用户信息,
// 如果登录了则放行,如果没有登录又不是在登录页面,则要拦截到登录界面
// vue-router提供的导航守卫功能
router.beforeEach((to, from, next) => {
  const user = local.getUser()
  if (user && user.token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
