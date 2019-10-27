import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login/index.vue'
import home from '@/views/home'
import welcome from '@/views/welcome'
import notFound from '@/views/404'
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
export default router
