<template>
  <div class="detail-bottem-bar">
    <div class="a">
      <img class="svg" src="../../assets/img/detail/kefu.svg" alt />
      <div class="title">客服</div>
    </div>
    <div class="a">
      <img class="svg" src="../../assets/img/detail/dianpu.svg" alt />
      <div class="title">店铺</div>
    </div>
    <div class="a">
      <img class="svg" src="../../assets/img/detail/shoucang.svg" alt />
      <div class="title">收藏</div>
    </div>
    <div class="d" @click="addTo">加入购物车</div>
    <div @click="buyClick" class="e">购买</div>
  </div>
</template>

<script>
export default {
  name: "detailBottemBar",

  methods: {
    addTo() {
      // console.log('add');
      this.$emit("addTo");
    },
    buyClick(){
      this.$emit("buyClick")
      }
    },
  components: {}
};
</script>

<style scoped>
.detail-bottem-bar {
  
  height: 49px;
  display: flex;
}
.title {
  color: #666;
  font-size: 14px;
  text-align: center;
  /* margin-bottom: 2px; */
}
.svg {
  height: 20px;
  width: 20px;
  /* vertical-align: middle; */
  display: block;
  margin: 6px auto 1px;
}
.a {
  flex: 1;
  background-color: #fff;
}
.d {
  flex: 2;
  background-color: #fff351;
  color: #666;
  font-size: 14px;
  text-align: center;
  line-height: 49px;
}
.e {
  flex: 2;
  background-color: #66ccff;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 49px;
}
</style>
