// 存儲 token
export const setToken = (token) => {
    localStorage.setItem('TOKEN', token)
}
// 獲取 token
export const getToken = () => {
    return localStorage.getItem('TOKEN');
}
// 清除本地存儲 token
export const removeToken = () => {
    return localStorage.removeItem('TOKEN');
}