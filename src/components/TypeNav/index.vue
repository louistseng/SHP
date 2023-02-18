<template>
  <div class="type-nav">
    <div class="container">
      <!-- 事件委託 -->
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 三級連動 -->
        <transition name="sort">
          <div class="sort" v-show="show">
            <!-- 利用事件委派＋邊城市導航實現路由的跳轉與傳遞參數 -->
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                :class="{ cur: currentIndex == index }"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <!-- 未使用聲明式導航 router-link 因是組件，在此使用耗內存，性能上考慮改用 a 標籤進行跳轉 -->
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                  >
                    {{ c1.categoryName }}
                  </a>
                </h3>
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                        >
                          {{ c2.categoryName }}
                        </a>
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                          >
                            {{ c3.categoryName }}
                          </a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 引入方式：是把 lodash 全部功能函數引入
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      // 存儲用戶鼠標一上哪個一級分類
      currentIndex: -1,
      show: true,
    };
  },
  // 組件掛載完畢
  mounted() {
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    // 鼠標進入修改 currentIndex 屬性
    // throttle 回調函數別用箭頭函數，可能出現 this 指向問題
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    // 鼠標移除
    leaveIndex() {
      this.currentIndex = -1;
    },
    // 進行路由跳轉回調函數
    goSearch(e) {
      // 編程式導航＋事件委派+自定義屬性
      // 點擊 a 標籤跳轉 (區分 1,2,3 級) 透過自定義屬性 data-categoryName 傳參
      let node = e.target;
      // 獲取節點上的屬性數據 node.dataset
      let { categoryname, category1id, category2id, category3id } =
        node.dataset;
      if (categoryname) {
        // 整理參數
        let location = { name: "search" };
        let query = { categoryName: categoryname };

        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        // 整理完參數
        //  如 params 參數有值帶上
        if (this.$route.params) {
          location.params = this.$route.params;
          //  query 參數有值
          location.query = query;
          // 路由跳轉
          this.$router.push(location);
        }
      }
    },
    // 鼠標移入，讓商品列表進行展示
    enterShow() {
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
    // 鼠標移除，判斷不等於 home 組件時執行
    leaveShow() {
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
    // 過度動畫樣式
    .sort-enter {
      height: 8px;
      // transform: rotate(0deg);
    }
    .sort-enter-to {
      height: 461px;
      // transform: rotate(360deg);
    }
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
