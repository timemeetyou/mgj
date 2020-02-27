<template>
  <div class="cart-list-item">
      <div class="logo" @click="checkClick">
          <check-button :isChecked="product.checked" class="button"></check-button>
      </div>
     <div class="pic">
         <div class="cut">
             <img class="img" :src="product.image" alt="">
         </div>
     </div>
     <div class="right">
         <div class="title nowrap">{{product.title}}</div>
            <div class="desc nowrap">{{product.desc}}</div>
            <div class="price bottom">{{product.price}}</div>
            <div @click="addClick" class="add">+</div>
            <div class="count bottom">{{product.count}}</div>
            <div @click="jianClick" class="jian">-</div>
            <div @click="shanClick" class="shan">×</div>
     </div>
  </div>
</template>

<script>
import checkButton from '../../components/content/checkButton.vue'
export default {
  name: "cartListItem",
  components: {
   checkButton
  },
  props:{
      product:{
          type:Object
      },
      id:{
          type:Number
      }
  },
  computed:{
    
  },
  methods:{
      checkClick(){
          this.product.checked=!this.product.checked
      },
      addClick(){
          this.product.count+=1
      },
      jianClick(){
          if(this.product.count>1){
              this.product.count-=1
          }
      },
      shanClick(){
          this.$emit('shanClick',this.id)
      }
  }
};
</script>

<style scoped>
.cart-list-item{
    height: 120px;
    border-bottom: 1px solid #eee;
    display: flex;
}
.logo{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pic{
    flex: 4;
}
.cut {
    height: 106px;
    width: 72px;
    display:block;
    margin:7px auto;
    overflow: hidden;
    border-radius:5px
}
.img{
    height: 100%;
    width: 100%;
}
.right{
    flex:10;
    padding: 11px 10px
}
.nowrap{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.title{
    font-size: 16px;
    color: #333;
    margin-bottom: 18px;
}
.desc{
    font-size: 13px;
    color: #999;
    margin-bottom: 25px
}
.price{
    float: left;
    font-size: 20px;
    color: rgb(255, 130, 47);
}
.count{
    float: right;
    margin: 0 10px;
    font-size: 22px;
}
.jian{
    float: right;
    background-color: #66ccff;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    box-shadow: 0 0 5px #66ccff;
    border-radius: 50%;
    margin-top:4px;
    font-weight: 700;
    font-size: 16px;
}
.add{
    float: right;
    background-color: #66ccff;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    box-shadow: 0 0 5px #66ccff;
    border-radius: 50%;
    margin-top:4px;
    font-weight: 700;
    font-size: 16px;
}
.shan{
   float: right;
    background-color: red;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    box-shadow: 0 0 5px red;
    border-radius: 50%;
    margin-top:4px; 
    margin-right: 15px;
    font-weight: 700;
    font-size: 16px;
}
.bottom{
    padding-bottom: 10px;
}
</style>