//api進行統一管理

import request from './ajax';
import mockRequest from './mockAjax';

// 三級連動接口
// /api/product/getBaseCategoryList get 
// 發送請求:axios 返回結果 Pomise 對象
export const reqCategoryList = () => request({ url: '/product/getBaseCategoryList', method: 'get' })
// 獲取 banner 數據
export const reqBannerList = () => mockRequest.get('/banner');
// 獲取 Floor 數據
export const reqFloorList = () => mockRequest.get('/floor');
// 獲取搜尋模塊數據
// /api/list 請求方式：post (至少傳空對象)
export const reqGetSearchInfo = (params) => request({ url: '/list', method: 'post', data: params });
// 獲取商品詳情數據 /api/item/{ skuId } 請求方式：get 
export const reqGoodsInfo = (skuId) => request({ url: `/item/${skuId}`, method: 'get' });
// 添加產品至購物車
// /api/cart/addToCart/{ skuId }/{ skuNum } 請求方式：post
export const reqAddOrUpdateShopCart = (skuId, skuNum) => request({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' });
// 購物車列表 // /api/cart/cartList 請求方式：get
export const reqCartList = () => request({ url: `/cart/cartList`, method: 'get' });
// 刪除購物車 // /api/cart/deleteCart/{skuId} 請求方式：delete
export const reqDeleteCartById = (skuId) => request({ url: `/cart/deleteCart/${skuId} `, method: 'delete' });
// 修改產品選中狀態 /api/cart/checkCart/{skuID}/{isChecked} 請求方式：get
export const reqUpdateCheckById = (skuId, isChecked) => request({ url: `/cart/checkCart/${skuId}/${isChecked} `, method: 'get' });
// 獲取驗證碼 // /api/user/passport/sendCode/{phone}  請求方式：get
export const reqGetCode = (phone) => request({ url: `/user/passport/sendCode/${phone}`, method: 'get' })
// 用戶註冊 // /api/user/passport/register  請求方式：post
export const reqUserRegister = (data) => request({ url: `/user/passport/register`, method: 'post', data })
// 用戶登入 // /api/user/passport/login  請求方式：post
export const reqUserLogin = (data) => request({ url: `/user/passport/login`, method: 'post', data })
// 用戶信息 // /api/user/passport/auth/getUserInfo  請求方式：get
export const reqUserInfo = () => request({ url: `/user/passport/auth/getUserInfo`, method: 'get' })
// 退出登入 // /api/user/passport/logout 請求方式：get
export const reqLogout = () => request({ url: `/user/passport/logout`, method: 'get' })
// 獲取用戶地址信息 // /user/userAddress/auth/findUserAddressList  請求方式：get
export const reqAddressInfo = () => request({ url: `/user/userAddress/auth/findUserAddressList`, method: 'get' })
// 獲取商品清單 // /api/order/auth/trade 請求方式：get
export const reqOrderInfo = () => request({ url: `/order/auth/trade`, method: 'get' })
// 提交訂單  // /api/order/auth/submitOrder?tradeNo={tradeNo} 請求方式：post
export const reqSubmitOrder = (tradeNo, data) => request({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'post', data })
// /api/payment/weixin/createNative/{orderId} 請求方式：get
export const reqPayInfo = (orderId) => request({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })
// 獲取訂單支付狀態 // /api/payment/weixin/queryPayStatus/{orderId}  請求方式：get
export const reqPayStatus = (orderId) => request({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })
// 獲取個人中心數據  // /api/order/auth/{page}/{limit}  請求方式：get
export const reqmyOrderList = (page, limit) => request({ url: `/order/auth/${page}/${limit}`, method: 'get' })
