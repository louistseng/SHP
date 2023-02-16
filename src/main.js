import Vue from 'vue';
import App from './App.vue';
// 引入路由
import router from '@/router';
// 引入倉庫
import store from '@/store';
// 三級連動組件
import TypeNav from '@/components/TypeNav';
// 引入輪播圖
import Carsousel from '@/components/Carousel';
// 引入分頁器
import Pagination from '@/components/Pagination';
// 參數一： 全局組件的名字，參數二：哪一個組件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carsousel.name, Carsousel)
Vue.component(Pagination.name, Pagination)


// 引入 mockServe.js ---mock數據
import '@/mock/mockServe';
// 引入 swiper 樣式
import "swiper/css/swiper.css";


// import { reqCategoryList } from '@/api';
// reqCategoryList()
// 三級列表請求

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 全局事件總線配置
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  // 註冊路由，組件身上都擁有 $router $route 屬性
  router,
  // 註冊路由，組件身上會擁有 $store 屬性
  store,
}).$mount('#app')
