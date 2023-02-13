import Vue from 'vue';
import App from './App.vue';
// 引入路由
import router from '@/router';
// 三級連動組件
import TypeNav from '@/pages/Home/TypeNav';
// 參數一： 全局組件的名字，參數二：哪一個組件
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

import { reqCategoryList } from '@/api';
reqCategoryList()

new Vue({
  // 註冊路由，註冊之組件身上都會擁有 $router $route
  router,
  render: h => h(App),
}).$mount('#app')
