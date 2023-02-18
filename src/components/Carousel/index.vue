<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      // 在 dom 更新，循環結束之後，執行延遲回調，在修改數據後，立即執行這個方法，獲得更新後的 dom
      // this.$nextTick 可保證頁面中的結構一定是有的，經常和很多插件一起使用(都需要 dom 存在)
      // 立即監聽
      immediate: true,
      handler(nv, ov) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.cur, {
            // 开启循环模式
            loop: true,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              // 點擊小球的時候，也切換圖片
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>