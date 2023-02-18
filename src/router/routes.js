// 路由懶加載:
// 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
// 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，
// 这样就会更加高效。
export default [
    {
        path: "/center",
        component: () => import('@/pages/Center'), //路由懶加載
        meta: { show: true },
        children: [
            {
                path: 'myorder',
                component: () => import('@/pages/Center/myOrder'),
            },
            {
                path: 'groupOrder',
                component: () => import('@/pages/Center/groupOrder'),
            },
            {
                path: '/center',
                redirect: '/center/myorder',
            },
        ]
    },
    {
        path: "/paysuccess",
        component: () => import('@/pages/PaySuccess'),
        meta: { show: true },
    },
    {
        path: "/pay",
        component: () => import('@/pages/Pay'),
        meta: { show: true },
        // 進去支付頁，只允許從交易頁進入，其他路由停留當前頁
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            } else {
                next(false);
            }
        },
    },
    {
        path: "/trade",
        component: () => import('@/pages/Trade'),
        meta: { show: true },
        // 進去交易頁，只允許從購物車頁進入，其他路由停留當前頁
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                next()
            } else {
                next(false);
            }
        },
    },
    {
        path: "/shopcart",
        component: () => import('@/pages/ShopCart'),
        meta: { show: true }
    },
    {
        path: "/addcartsuccess",
        name: 'addcartsuccess',
        component: () => import('@/pages/AddCartSuccess'),
        meta: { show: true }
    },
    {
        path: "/detail/:skuid",
        component: () => import('@/pages/Detail'),
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
        component: () => import('@/pages/Search'),
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
        component: () => import('@/pages/Register'),
        meta: { show: false }
    },
    {
        path: "/login",
        component: () => import('@/pages/Login'),
        meta: { show: false }
    },
    // 重定向
    {
        path: "*",
        redirect: "/home"
    }
]