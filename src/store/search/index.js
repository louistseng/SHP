// search模塊小倉庫
import { reqGetSearchInfo } from '@/api';

const state = {
    searchList: {},
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};
const actions = {
    // 獲取 search 模塊數據
    async getSearchList({ commit }, params = {}) {
        // 用戶在派發 actions 時，第二參數傳遞過來，至少是個空對象
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
};
// 簡化倉庫中的數據
// 當前 state，非大倉庫 state 
// 網路過慢導致沒有數據時，state.searchList.goodsList 回傳 undefined 
// 計算屬性至少給一個數組，否則會報錯

const getters = {
    goodsList(state) {
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList;
    },
    attrsList(state) {
        return state.searchList.attrsList;
    },
};
export default {
    state,
    mutations,
    actions,
    getters
}