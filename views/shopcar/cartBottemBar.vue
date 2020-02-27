<template>
  <div class="cart-bottem-bar">
    <check-button @click.native="checkClick" :is-checked="isSelectAll" class="button"></check-button>
    <div class="all">全选</div>
    <div class="heji">合计：{{totalPrice}}</div>
    <div class="calcu" @click="calcClick">去结算({{checkLength}})</div>
  </div>
</template>

<script>
import checkButton from "../../components/content/checkButton.vue";
export default {
  name: "cartBottemBar",
  components: {
    checkButton
  },
  methods:{
    checkClick(){
     if(this.isSelectAll){
       this.$store.state.cartList.forEach(item=>item.checked=false)
     }else{
       this.$store.state.cartList.forEach(item=>item.checked=true)

     }
    },
    calcClick(){
      if(!this.isSelectAll){
        this.$toast.show('未选择商品',1500)
      }
    }
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((addPrice, item) => {
            return addPrice+item.price.substr(1) * item.count;
          }, 0).toFixed(2)
      );
    },
    checkLength(){
      return this.$store.state.cartList.filter(item=>item.checked).length
    },
    isSelectAll(){
      if(this.$store.state.cartList.length==0){
        return false
      }
      return !(this.$store.state.cartList.filter(item=>!item.checked).length)
    }
  }
};
</script>

<style scoped>
.cart-bottem-bar {
  height: 39px;
  background-color: #eee;
  box-shadow: 0 0px 15px #66ccff;
  position: relative;
  font-size: 14px;
}
.button {
  float: left;
  padding: 11px;
}
.all {
  float: left;
  padding: 11px;
  transform: translate(-15px, 0);
}
.heji {
  float: left;
  padding: 11px;
  transform: translate(-20px, 0);
}
.calcu {
  float: right;
  padding: 11px;
  background-color: #66ccff;
  color: #fff;
  width: 80px;
  text-align: center;
}
</style>