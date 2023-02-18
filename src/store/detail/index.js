import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api';
import { getUUID } from '@/utils/uuid_token';
const state = {
    goodInfo: {},
    // 遊客臨時身份
    uuid_token: getUUID(),
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
    // 產品添加至購物車(無返回數據，只返回成功或失敗)
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
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