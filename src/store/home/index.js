import { reqCategoryList, reqBannerList, reqFloorList } from '@/api';
// home模塊小倉庫

const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    },
};
const actions = {
    // 獲取三級列表數據
    async categoryList({ commit }) {
        // 通過api裡的街口函數調用，向服務器發請求，獲取服務器的數據
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    // 獲取首頁輪播圖數據
    async getBannerList({ commit }) {
        let result = await reqBannerList()
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)
        }
    },
    // 獲取家用電器數據
    async getFloorList({ commit }) {
        let result = await reqFloorList()
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
        }
    },
}
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}