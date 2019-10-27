import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login/index.vue'
import home from '@/views/home'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
    path: '/login',
    component: Login
  }, {
    path: '/',
    component: home
  }]
})
export default router
