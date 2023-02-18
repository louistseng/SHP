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
// element-ui 按需引入
import { Button, MessageBox } from 'element-ui';
Vue.component(Button.name, Button);
// 掛載原型上寫法
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 引入所有 api
import * as API from '@/api';
// 引入 mockServe.js ---mock數據
import '@/mock/mockServe';
// 引入 swiper 樣式
import "swiper/css/swiper.css";

// 懶加載默認圖片
import VueLazyload from 'vue-lazyload';
import loadimage from '@/assets/lazy-img.gif';

Vue.use(VueLazyload, {
  loading: loadimage,
})
// 引入自定義插件
import myPlugins from '@/plugins/myPlugins';
Vue.use(myPlugins, {
  name: 'upper',
})
// 引入表單校驗插件
import '@/plugins/validate';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 全局事件總線配置
  beforeCreate() {
    Vue.prototype.$bus = this;
    // 全局配置 api
    Vue.prototype.$API = API;
  },
  // 註冊路由，組件身上都擁有 $router $route 屬性
  router,
  // 註冊路由，組件身上會擁有 $store 屬性
  store,
}).$mount('#app')
