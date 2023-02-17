import { v4 as uuidv4 } from 'uuid';
// 遊客身份 token 生成及判斷
export const getUUID = () => {
    let uuid_token = localStorage.getItem('USERINFO');
    if (!uuid_token) {
        uuid_token = uuidv4();
        localStorage.setItem('USERINFO', uuid_token);
    }
    // 需 return 否則 undefined
    return uuid_token;
}