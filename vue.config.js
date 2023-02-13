const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 關閉 eslint 效驗
  lintOnSave: false
})
