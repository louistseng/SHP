// 引入路由組件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
export default [
    {
        path: "/shopcart",
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: "/addcartsuccess",
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: { show: true }
    },
    {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: { show: true }
    },
    {
        //parmas 參數可傳可不傳，佔位後加個? /:keyword?
        path: "/search/:keyword?",
        component: Search,
        meta: { show: true }, // footer顯示與否
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