// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由
import routes from './routes';
// 引入 store
import store from '@/store';

// 將 VueRouter 原型對象的 push、replace 保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 多次點擊跳轉出現錯誤處理
// 重寫 push replace
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve, reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve, reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

// 配置路由
let router = new VueRouter({
    routes,
    // 滾動置頂
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})
// 全局前置守衛
router.beforeEach(async (to, from, next) => {
    // 獲取用戶 token、name
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;

    if (token) {
        // 登入後，不能再進到 /login，跳回 /home
        if (to.path == '/login') {
            next('/home')
        } else {
            // 有用戶名放行
            if (name) {
                next()
            } else {
                try {
                    // 獲取用戶信息，再放行
                    await store.dispatch("getUserInfo");
                    next()
                } catch (error) {
                    // token 失效或過期，清除 token，並跳轉登入頁
                    await store.dispatch('userLogout');
                    next('/login')
                }
            }
        }
    } else {
        // 未登入，不能去支付相關、個人中心
        let toPath = to.path;
        if (toPath.indexOf('/trade') !== -1 || toPath.indexOf('/pay') !== -1 || toPath.indexOf('/center') !== -1) {
            next('/login?redirect=' + toPath)
        }
        next()
    }
})


export default router;