<template>
  <div v-if="Object.keys(detailInfo).length !==0" class="goods-info">
      <div class="info-desc clear-fix">
          <div class="start"></div>
          <div class="desc">{{detailInfo.desc}}</div>
          <div class="end"> </div>
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
          <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad">
      </div>
  </div>
</template>

<script>


export default {
  name: 'detailGoodsInfo',
  props:{
      detailInfo:{
          type:Object,
      }
  },
  methods:{
      imgLoad(){
          
        // if(++this.counter === this.imagesLength){
            this.$emit('imageLoad')
        // }
      }
    
  },
  watch:{
      detailInfo(){
          this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
  },
  data(){
      return{
          counter:0,
          imagesLength:0
      }
  },
  components:{
    
}}

</script>

<style scoped>
.clear-fix{
    overflow: hidden;
}
.start{
    background: #fff;
    margin: 15px 0;
    margin-left: 15px;
    width: 90px;
    height: 5px;
    border-left: 5px solid #333;
    border-top: 1px solid #333
}
.end{
    background: #fff;
    margin: 15px 0;
    margin-right: 15px;
    width: 90px;
    height: 5px;
    border-right: 5px solid #333;
    border-bottom: 1px solid #333;
    float: right;
    /* margin-left: 100%; */
    /* position: absolute; */
    /* right: 115px; */
    /* text-align: right; */
}
.desc{
    font-size: 14px;
    color: #666;
    padding:0 15px;
}
.info-key{
    padding: 0 15px 10px;
}
img{
    width: 100%;
}
.goods-info{
    border-bottom: 5px solid #f2f5f8;
}
</style>
