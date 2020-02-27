<template>
  <div class="cart-list">
      <b-scroll ref="scroll" class="content">
         <cart-list-item @shanClick="shanClick" v-for="(item,index) in cartList" :product="item" :id="index" :key="index"></cart-list-item>
      </b-scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import BScroll from '../../components/common/bscroll/bscroll.vue'
import cartListItem from './cartListItem.vue'
export default {
  name: "cartList",
  components: {
    BScroll,
    cartListItem
  },
  computed:{
    ...mapGetters(['cartList'])
    
  },
  activated(){
      this.$refs.scroll.refresh()
    //   console.log(this.cartList);
      
  },
  methods:{
    shanClick(id){
      this.cartList.splice(id,1)
    }
  }
};
</script>

<style scoped>
.cart-list{
    height: calc(100%-44px);
}
.content{
    position: absolute;
    top: 44px;
    bottom: 90px;
    left: 0;
    right: 0;
    /* height: 100%; */
    /* height: 200px; */
    overflow: hidden;
    
}
</style>