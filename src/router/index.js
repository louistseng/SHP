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
// 配置路由
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/Home'),
        },
        {
            path: "/search",
            component: Search
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/login",
            component: Login
        },
    ]
})