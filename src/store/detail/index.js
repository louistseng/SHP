import { reqGoodsInfo } from '@/api';
const state = {
    goodInfo: {},
};
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
};
const actions = {
    // 獲取產品信息
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
};
const getters = {
    // 路徑導航簡化
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    // 產品信息簡化
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    // 產品屬性簡化
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}