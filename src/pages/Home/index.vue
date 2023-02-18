<template>
  <div>
    <!-- 三級連動全局組件 -->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Like />
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor" />
    <Brand />
  </div>
</template>

<script>
import { mapState } from "vuex";

import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

export default {
  name: "Home",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  mounted() {
    // floor 組件數據需遍歷，需在此處發送請求
    this.$store.dispatch("getFloorList");
    // 獲取用戶信息
    // this.$store.dispatch("getUserInfo");
  },
  computed: {
    ...mapState({ floorList: (state) => state.home.floorList }),
  },
};
</script>

<style>
</style>