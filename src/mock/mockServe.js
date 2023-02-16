// 引入 mockjs 模塊
import Mock from 'mockjs';
// 引入 json 數據 (沒對外暴露，但可引入)
// webpack 默認對外暴露：圖片、json 數據格式
import banner from './banner.json';
import floor from './floor.json';

// mock 數據：第一個參數：請求數據，第二參數：請求數據 
// 首頁輪播圖
Mock.mock('/mock/banner', { code: 200, data: banner });
// 家用電器
Mock.mock('/mock/floor', { code: 200, data: floor });