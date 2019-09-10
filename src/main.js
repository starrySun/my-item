import Vue from 'vue'
import App from './App.vue'
// 引入框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入VueRouter
import router from '@/router'
// 引入全局的样式
import '@/styles/index.less'
// 引用axios 请求数据
import axios from 'axios'
// 全局设置  把axios 挂载的到vue的原型上 因为所有的组件都是vue的实例
// 也就是实例会继承原型上的属性 那么久可以在任何组件下使用axios
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
