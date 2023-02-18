import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from '@/api';
import { setToken, getToken, removeToken } from '@/utils/token';
// 登入與註冊
const state = {
    code: '',
    token: getToken(),
    userInfo: {},
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    CLEAR(state) {
        state.token = '';
        state.userInfo = '';
        removeToken();
    }
};
const actions = {
    // 獲取驗證碼
    async getCode({ commit }, phone) {
        // 正常情況會發至用戶手機上
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit('GETCODE', result.data)
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 用戶註冊
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user)
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 用戶登入 token
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data)
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token)
            // 持久化 token
            setToken(result.data.token)
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 獲取用戶信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 退出登入
    async userLogout({ commit }) {
        let result = await reqLogout()
        if (result.code == 200) {
            commit('CLEAR')
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
};
const getters = {};
export default {
    state, mutations, actions, getters
}