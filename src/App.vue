<template>
  <div id="app">
    <!-- 自定義插件 -->
    <!-- <h1 v-upper="msg"></h1> -->
    <Header></Header>
    <!-- 路由組件出口的地方 -->
    <router-view></router-view>
    <!-- 在 Home、Search 顯示，在登入、註冊不顯示 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Header, Footer },
  mounted() {
    // 通知vuex發請求，獲取商品分類三級列表數據，儲存於倉庫中，只執行一次
    this.$store.dispatch("categoryList");
  },
  data() {
    return {
      msg: "abc",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
