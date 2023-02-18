import Vue from "vue";

// vue 插件一定暴露一個對象
let myPlugins = {};

myPlugins.install = function (vue, option) {
    //添加全局组件
    //Vue.component();
    Vue.directive(option.name, (element, params) => {
        element.innerHTML = params.value.toUpperCase();
        // console.log(element, params);
    });
}

export default myPlugins;