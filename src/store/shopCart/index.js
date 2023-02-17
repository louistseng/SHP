import { reqCartList, reqDeleteCartById, reqUpdateCheckById } from '@/api';

const state = {
    cartList: [],
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};
const actions = {
    // 獲取購物車列表數據
    async getCartList({ commit }) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit('GETCARTLIST', result.data)
        }
    },
    // 刪除購物車某個產品
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId)
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    // 修改產品選中狀態
    async updateChecked({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckById(skuId, isChecked)
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    // 刪除全部選中產品
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = [];
        // 獲取購物車所有產品
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : '';
            // 每次返回的 promise 添加進數組內
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll);
    },
    // 修改全選產品狀態
    updateAllCartChecked({ dispatch, state }, isChecked) {
        let PromiseAll = [];
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch('updateChecked', { skuId: item.skuId, isChecked });
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll);
    },
};
const getters = {
    cartList(state) {
        return state.cartList[0] || {};
    },
};
export default {
    state, mutations, actions, getters
}