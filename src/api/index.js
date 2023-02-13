//api進行統一管理

import request from './request';

// 三級連動接口
// /api/product/getBaseCategoryList get 無參數
// 發送請求:axios 返回結果 Pomise 對象
export const reqCategoryList = () => request({ url: '/product/getBaseCategoryList', method: 'get' })
