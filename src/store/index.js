import vue from 'vue';
import Vuex from 'vuex';
// 使用插件
vue.use(Vuex);
// 引入小倉庫
import home from './home';
import search from './search';
import detail from './detail';
import shopCart from './shopCart';
import user from './user'

// // 倉庫儲存數據
// const state = {}
// // 修改 state 的唯一手段
// const mutations = {}
// // 書寫業務邏輯，處理異步 (不能修改state)
// const actions = {}
// 類似計算屬性，簡化倉庫數據，讓組件獲取倉庫數據更方便
// const getters = {}

// 對外暴露 store 類的一個實例
export default new Vuex.Store({
    // 模塊開發
    modules: { home, search, detail, shopCart, user }

    // state,
    // mutations,
    // actions,
    // getters,
})