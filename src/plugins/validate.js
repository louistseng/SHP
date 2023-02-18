// vee-validate 表單驗證區域
import Vue from 'vue';
import VeeValidate from 'vee-validate';
// 中文提示信息(預設英文)
import zh_CN from 'vee-validate/dist/locale/zh_CN';
Vue.use(VeeValidate);

VeeValidate.Validator.localize('zh_CN', {
    messages: {
        ...zh_CN.messages,
        is: (field) => `${field}必須與密碼相同`, // 修改内置规则的 message，让确认密码和密码相同
    },
    attributes: {
        phone: "手機號",
        code: "驗證碼",
        password: "密碼",
        password1: "確認密碼",
        agree: '協議'
    }
})

//自定义校验规则-->同意复选框先关的
VeeValidate.Validator.extend('isCheck', {
    validate: value => {
        return value
    },
    getMessage: field => field + '必须同意'
})