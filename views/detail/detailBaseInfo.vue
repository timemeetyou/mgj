<template>

<div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
        <span class="n-price">{{goods.newPrice}}</span>
        <span class="o-price">{{goods.oldPrice}}</span>
        <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
        <span class="info-other-item item-left">{{goods.columns[0]}}</span>
        <span class="info-other-item item-center">{{goods.columns[1]}}</span>
        <span class="info-other-item item-right">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
        <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
            <img :src="goods.services[index-1].icon" class="img">
            <span class="service-item-title">{{goods.services[index-1].name}}</span>
        </span>
    </div>
</div>
  
  
</template>

<script>


export default {
  name: 'detailBaseInfo',
  props:{
      goods:{
          type:Object,
      }
  },
  methods:{
    
  },
  components:{
    
}}

</script>

<style scoped>
 .base-info{
     margin-top: 15px;
     padding: 0 8px;
     color: #999;
     border-bottom: 5px solid #f2f5f8;
 }

 .info-title{
     color: #222;
 }

 .info-price{
     /* color: #66ccff; */
     margin-top: 10px;
     position: relative;
 }
 .info-price .n-price{
     color: #66ccff;
     font-size: 24px;
     /* font-weight: 800; */
 }
 .info-price .o-price{
     text-decoration: line-through;
     font-size: 13px;
     margin-left: 5px;
 }
 .discount{
     background-color: #66ccff;
     color: #fff;
     border:2px solid #66ccff ;
     border-radius: 7px;
     font-size: 11px;
     position: absolute;
     top: 0px

 }

 .info-other{
     display: flex;
    justify-content: space-between;
    margin-top: 20px;
     padding-bottom: 5px;
     border-bottom: 1px solid #eee
 }
 .info-other-item{
     
     font-size: 13px;
     /* line-height: 20px */
 }


.info-service{
    padding: 16px 0;
}
.service-item-title{
    vertical-align:10%
}
.img{
    display: inline-block;
    width: 11px;
    height: 11px;
}
.info-service{
    font-size: 12px;
    display: flex;
    justify-content: space-between;
}

</style>
