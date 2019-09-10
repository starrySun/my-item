import Vue from 'vue'
import VueRouter from 'vue-router'
// 引用登陆模块
import Login from '@/views/login'
// 引用home组件
import Home from '@/views/home'
// 引用 welcome 页面
import Welcome from '@/views/home/welcome'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login },
    { path: '/home',
      name: 'home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', name: 'welcome', component: Welcome }
      ] }
  ]
})
export default router
