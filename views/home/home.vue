<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="fixed"
      @tabClick="tabClick"
      :titles="titles"
      ref="fixed"
      v-show="isTabActive"
    ></tab-control>
    <b-scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad.once="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <futrue-view></futrue-view>
      <tab-control class="tab-control" @tabClick="tabClick" :titles="titles" ref="tabControl"></tab-control>
      <goods-list :goods="goods[cuurentType].list"></goods-list>
    </b-scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import HomeSwiper from "./homeswiper.vue";
import HomeRecommendView from "./HomeRecommendView.vue";
import FutrueView from "./FutrueView.vue";
import TabControl from "../../components/content/TabControl.vue";
import GoodsList from "../../components/common/goods/goodslist.vue";
import BScroll from "../../components/common/bscroll/bscroll.vue";
import BackTop from "../../components/content/backTop.vue";
import { getHomeMultidata, getHomeGoods } from "../../network/home.js";
import { debounce } from "../../common/utils.js";
// import {Swiper,SwiperItem} from "../../components/common/swiper/index.js"
import { itemListenerMinin } from "../../common/itemMixIn.js";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FutrueView,
    TabControl,
    GoodsList,
    BScroll,
    BackTop
  },
  mixins: [itemListenerMinin],
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      cuurentType: "pop",
      isShowBackTop: false,
      isTabActive: false,
      tabOffsetTop: 0,
      saveY: 0
    };
  },
  created() {
    //请求多个数据
    this.getHomeMultidata(),
      this.getHomeGoods("pop"),
      this.getHomeGoods("new"),
      this.getHomeGoods("sell");
  },
  activated() {
    // console.log(this.saveY);
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
    // console.log('a');
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log('d');
    this.$bus.$off("itemImageLoad", this.homeItemListener);
  },
  mounted() {
    // console.log('mmmm');
  },
  methods: {
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      // console.log(this.tabOffsetTop);
    },
    //事件监听
    tabClick(index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.cuurentType = "pop";
          break;
        case 1:
          this.cuurentType = "new";
          break;
        case 2:
          this.cuurentType = "sell";
          break;
      }
      this.$refs.fixed.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    backClick() {
      // console.log(123);
      this.$refs.scroll.scrollTo(0, 0);
    },

    contentScroll(position) {
      // console.log(position);
      this.isShowBackTop = position.y > -1000 ? false : true;
      this.isTabActive = -position.y > this.tabOffsetTop ? true : false;
    },
    loadMore() {
      // console.log(1234);
      this.getHomeGoods(this.cuurentType);
    },
    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
#home {
  /* margin-top:44px; */
  z-index: 999;
  height: 100vh;
  background-color: #fff;
  position: relative;
}
.home-nav {
  background-color: #66ccff;
  color: #fff;
  font-weight: 600;
  font-size: 16x;
  /* position: fixed; */
  /* left: 0;
  right: 0;
  top: 0; */
  z-index: 9999;
  box-shadow: 0 0px 15px #66ccff

}
.fixed {
  position: relative;
  z-index: 99999;
  box-shadow: 0 0px 15px #66ccff

}
/* .tab-control{
  position: sticky;
  top: 43px;
  z-index: 9;
} */

.content {
  /* height: calc(100%-98px); */
  /* height: 300px; */
  /* height: 100%; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  /* background-color: #fff; */
  /* margin-top: 44px; */
}

</style>
