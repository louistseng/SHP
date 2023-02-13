// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由組件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
// 將 VueRouter 原型對象的 push、replace 保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重寫 push replace

// VueRouter.prototype.push = function (location, resolve, reject) {
//     if (resolve, reject) {
//         originPush.call(this, location, resolve, reject)
//     } else {
//         originPush.call(this, () => { }, () => { })
//     }
// }

// VueRouter.prototype.replace = function (location, resolve, reject) {
//     if (resolve, reject) {
//         originReplace.call(this, location, resolve, reject)
//     } else {
//         originReplace.call(this, () => { }, () => { })
//     }
// }

// 配置路由
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/Home'),
            meta: { show: true }
        },
        {
            //parmas 參數可傳可不傳，佔位後加個? /:keyword?
            path: "/search/:keyword",
            component: Search,
            meta: { show: true },
            name: 'search',
            // props 傳參
            // 布林值
            // props: true,
            // 物件寫法
            // props: { a: 1, b: 2 }
            // 函數寫法
            props: ($route) => ({ keyword: $route.params.keyword, k: $route.query.k })
        },
        {
            path: "/register",
            component: Register,
            meta: { show: false }
        },
        {
            path: "/login",
            component: Login,
            meta: { show: false }
        },
        // 重定向
        {
            path: "*",
            redirect: "/home"
        }
    ]
})