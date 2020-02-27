<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center" class="title-father">
        <div class="title">购物车({{cartLength}})</div>
      </div>
    </nav-bar>
    <cart-list class="cart-list"></cart-list>
    <cart-bottem-bar class="bottem"></cart-bottem-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import {mapGetters} from 'vuex'
import cartList from './cartList.vue'
import cartBottemBar from './cartBottemBar.vue'
export default {
  name: "Shopcar",
  components: {
    NavBar,
    cartList,
    cartBottemBar
  },
  computed:{
    ...mapGetters(['cartLength'])
    
  }
};
</script>

<style scoped>
.nav-bar{
  background-color: #66ccff;
  position: relative;
  /* top: 0;
  right: 0;
  left: 0; */
  z-index: 9;
}
.title-father {
  color: #fff;
  font-weight: 700;
  /* margin: 0 auto; */
  }
.bottem{
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>