//api進行統一管理

import request from './ajax';
import mockRequest from './mockAjax';

// 三級連動接口
// /api/product/getBaseCategoryList get 無參數
// 發送請求:axios 返回結果 Pomise 對象
export const reqCategoryList = () => request({ url: '/product/getBaseCategoryList', method: 'get' })

// 獲取 banner 數據
export const reqBannerList = () => mockRequest.get('/banner');
// 獲取 Floor 數據
export const reqFloorList = () => mockRequest.get('/floor');
// 獲取搜尋模塊數據
// /api/list 請求方式：post 帶參數 (至少傳空對象)
export const reqGetSearchInfo = (params) => request({ url: '/list', method: 'post', data: params });
// 獲取商品詳情數據 /api/item/{ skuId } get 無參數
export const reqGoodsInfo = (skuId) => request({ url: `/item/${skuId}`, method: 'get' });

