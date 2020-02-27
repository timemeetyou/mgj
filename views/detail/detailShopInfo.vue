<template>
  <div v-if="Object.keys(shop).length !== 0" class="detail-shop-info">
    <a :href="shop.shopUrl">
      <div class="top">
      <img :src="shop.logo" alt="" class="logo">
      <span class="name">{{shop.name}}</span>
    </div>
    </a>
    <div class="bottem">
      <div class="left">
        <div class="l-left">
          <div class="sells">{{(shop.sells/10000).toFixed(1)}}万</div>
          <div class="xiaozi">总销量</div>
        </div>
        <div class="l-right">
          <a :href="shop.allGoodsUrl">
            <div class="goodsc line">{{shop.goodsCount}}</div>
          <div class="line xiaozi">全部宝贝</div>
          </a>
        </div>
      </div>
      <div class="right">
        <div class="right-content">
        <div v-for="(item,index) in shop.score" :key="index" 
        class="right-item">
        <span class="r-left">{{item.name}}</span> 
        <span class="r-right">
            <span class="number" :class="{red:item.isBetter}">
             {{item.score}}
            </span>
            <span v-if="!item.isBetter" class="down gaodi">低</span>
            <span v-else class="up gaodi">高</span>
          </span>

            </div>
        
        </div>
      </div>
    </div>
    <a :href="shop.shopUrl">
      <div class="enter-father">
      <div class="enter">进店逛逛</div>
    </div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'detailShopInfo',
  components:{
      
  },
  data(){
      return {
      
      
        }},
  computed:{
    
  },
  props:{
      shop:{
          type:Object,
      }
  },
  methods:{
      
}
}
</script>

<style scoped>
.logo{
  width: 50px;
  height: 50px;
  margin-top: 25px;
  margin-left: 10px;
}
.name{
  font-size: 16px;
  color: #333;
  vertical-align: 20px;
  margin-left: 15px;
}
.top{
  margin-bottom: 28px;

}
.bottem{
  display: flex;
}
.left{
  flex: 1;
  display: flex;
}
.l-left{
  flex: 1;
  text-align: center;
}
.sells{
  font-size: 18px;
  margin-bottom: 5px;
}
.l-right{
  flex: 1;
  
  text-align: center;
}
.line{
border-right: 1px solid #999;
}
.goodsc{
  font-size: 18px;
  padding-bottom: 5px;
}
.right{
  flex:1;
  position: relative;
  /* display: flex; */
  /* justify-content: space-around; */
  /* width: 100%; */

}

.right-content{
  position: absolute;
  top: -18px;
  width: 100%;
  /* justify-content: space-around; */
}
.right-item{
  margin: 9px 0;
  display: flex;
  /* width: 100%; */
  font-size: 12px
}
.r-left{
  flex:1;
  text-align: right;
  display: inline-block
}
.r-right{
  flex: 1;
  display: inline-block;
  text-align: left;
  margin-left: 6px;
}
.number{
  display: inline-block;
  width: 36px;
}
.number{
  color: green;
}
.number.red{
  color: red;
}
.up{
  background-color: red;
  color: #fff
}
.down{
  background-color: green;
  color: #fff;
}
.enter-father{
  width: 100%;
  position: relative;
}
.enter{
  background-color: #eee;
  width: 150px;
  height: 30px;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  margin-left: 50%;
  position: absolute;
  left: -75px;
  top:35px;
  color: #666;
}
.detail-shop-info{
  padding-bottom: 90px;
  border-bottom: 5px solid #f2f5f8;
}
.xiaozi{
  font-size: 12px
}
</style>