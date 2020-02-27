<template>
  <div class="detail">
    <detail-nav-bar ref="nav" @titleClick="titleClick" class="bar"></detail-nav-bar>
    <b-scroll :probeType="3" class="content" @scroll="contentScroll" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-canshu ref="canshu" :detailCanshu="detailCanshu"></detail-canshu>
      <detail-comment ref="comment" :commentInfo="commentInfo"></detail-comment>
      <goods-list ref="recommend" :goods="recommends" class="recommend"></goods-list>
    </b-scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottem-bar @addTo="addTo" @buyClick="buyClick" class="bottem-bar"></detail-bottem-bar>
  </div>
</template>

<script>
import detailNavBar from "./detailNavBar.vue";
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  Canshu
} from "../../network/detail.js";
import detailSwiper from "./detailSwiper.vue";
import detailBaseInfo from "./detailBaseInfo.vue";
import detailShopInfo from "./detailShopInfo.vue";
import BScroll from "../../components/common/bscroll/bscroll.vue";
import detailGoodsInfo from "./detailGoodsInfo.vue";
import detailCanshu from "./detailCanshu.vue";
import detailComment from "./detailComment.vue";
import GoodsList from "../../components/common/goods/goodslist.vue";
import { itemListenerMinin } from "../../common/itemMixIn.js";
import detailBottemBar from "./detailBottemBar.vue";
import backTop from "../../components/content/backTop.vue";

export default {
  name: "Detail",
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    BScroll,
    detailGoodsInfo,
    detailCanshu,
    detailComment,
    GoodsList,
    detailBottemBar,
    backTop
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      detailCanshu: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      currentIndex: 0,
      isShowBackTop: false,
      message: "",
      show: false
    };
  },
  mixins: [itemListenerMinin],
  created() {
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then(res => {
      // console.log(res);

      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.detailCanshu = new Canshu(data.itemParams);
      this.commentInfo = data.rate.list[0] ? data.rate.list[0] : {};
      // console.log(this.commentInfo);
    });

    getRecommend().then(res => {
      // console.log(res);
      this.recommends = res.data.list;
    });
  },
  mounted() {},
  updated() {},
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.canshu.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.themeTopYs);
    },
    titleClick(index) {
      // console.log(index);

      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    backClick() {
      // console.log(123);
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // console.log(position);

      const positionY = -position.y;
      this.isShowBackTop = position.y > -1000 ? false : true;

      // 0 <= positionY < themeTopYs[1]
      // 0 <= positionY < themeTopYs[2]
      // 0 <= positionY < themeTopYs[3]
      // themeTopYs[3] <= positionY
      for (let i in this.themeTopYs) {
        // console.log(i-(-1));
        if (
          (this.currentIndex != i &&
            i < this.themeTopYs.length - 1 &&
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i - -1]) ||
          (this.currentIndex != i &&
            i == this.themeTopYs.length - 1 &&
            positionY >= this.themeTopYs[i])
        ) {
          this.currentIndex = i;
          // console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    addTo() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice
        ? "￥" + this.goods.realPrice
        : this.goods.newPrice;
      product.iid = this.iid;
      // console.log(product);
      this.$store.dispatch("addCart", product).then(res => {
        // this.show=true;
        // this.message=res;
        // setTimeout(()=>{
        //   this.show=false;
        //   this.message=''
        // },1500)
        this.$toast.show(res, 1500);
        // console.log(res);
      });
    },
    buyClick() {
      // console.log(this.$store.state.cartList);

      // console.log(this.$store.state.cartList.forEach(item=>{item.iid==this.iid}));
     
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice
          ? "￥" + this.goods.realPrice
          : this.goods.newPrice;
        product.iid = this.iid;
        // console.log(product);
        this.$store.dispatch("addCart", product).then(res => {
          // this.show=true;
          // this.message=res;
          // setTimeout(()=>{
          //   this.show=false;
          //   this.message=''
          // },1500)
          this.$toast.show(res, 1500);
          // console.log(res);
        });
        this.$router.push("/shopcar");
      
    }
  }
}
</script>

<style scoped>
.bar {
  position: relative;
  z-index: 99999;
  background-color: #fff;
}

.detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 9999;
  /* height: 100px; */
}
.recommend {
  padding-top: 4px;
}
.bottem-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999999;
  box-shadow: 0 0px 15px #66ccff;
}
</style>