// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';//UI
import 'element-ui/lib/theme-chalk/index.css';//UI样式
import axios  from 'axios';
Vue.prototype.$axios = axios;

Vue.use(ElementUI);
Vue.config.productionTip = false


// 组件
import StHeader from '@/components/StHeader';
Vue.component('v-stHeader',StHeader)

// //路由
// const routes = {
//   '/': Home,
//   '/news': News
// }


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
