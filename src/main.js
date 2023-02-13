import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
console.log(router);
Vue.config.productionTip = false

new Vue({
  // 註冊路由，註冊之組件身上都會擁有 $router $route
  router,
  render: h => h(App),
}).$mount('#app')
