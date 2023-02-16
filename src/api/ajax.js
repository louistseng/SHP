// 對於axios二次封裝
import axios from "axios";
// 引入進度條
import nprogress from 'nprogress';
// 引入進度條樣式
import 'nprogress/nprogress.css';


const requests = axios.create({
    // 基礎路徑，發請求的時候，路徑當中會出現 api
    baseURL: "/api",
    // 代表請求超時的時間
    timeout: 5000,
})

// 請求攔截器：在請求之前，請求攔截器可以檢測到，可以在請求之前做一些事情
requests.interceptors.request.use((config) => {
    // config 配置對象：對象裡面有一個屬性很重要，headers 請求頭
    // 進度條開始
    nprogress.start()
    return config;
})
// 相應攔截器
requests.interceptors.response.use((res) => {
    // 響應成功的回調函數
    // 進度條結束
    nprogress.done()
    return res.data;
}, (error) => {
    // 響應失敗的回調函數
    return Promise.reject(error);
})

export default requests;